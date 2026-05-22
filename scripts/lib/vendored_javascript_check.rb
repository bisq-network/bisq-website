# frozen_string_literal: true

require "digest"
require "yaml"

module VendoredJavascriptCheck
  class Error < StandardError; end

  SHA256_PATTERN = /\A[0-9a-f]{64}\z/

  Result = Struct.new(:vendored_count, :first_party_count, keyword_init: true)

  module_function

  def check!(root:, manifest_path: nil)
    root = File.expand_path(root)
    manifest_path ||= File.join(root, "docs", "vendored-javascript.yml")
    manifest = YAML.safe_load(File.read(manifest_path), aliases: false)
    raise Error, "#{manifest_path} must contain a YAML mapping" unless manifest.is_a?(Hash)

    vendored = manifest.fetch("vendored") { raise Error, "manifest is missing vendored list" }
    first_party = manifest.fetch("first_party") { raise Error, "manifest is missing first_party list" }
    raise Error, "vendored must be a list" unless vendored.is_a?(Array)
    raise Error, "first_party must be a list" unless first_party.is_a?(Array)

    all_entries = vendored + first_party
    paths = all_entries.map { |entry| entry["path"] }
    duplicates = paths.group_by(&:itself).select { |_path, values| values.size > 1 }.keys
    raise Error, "duplicate inventory entries: #{duplicates.join(', ')}" unless duplicates.empty?

    check_vendored_entries!(vendored, root)
    check_first_party_entries!(first_party, root)
    check_all_js_assets_classified!(paths, root)

    Result.new(vendored_count: vendored.size, first_party_count: first_party.size)
  end

  def check_vendored_entries!(vendored, root)
    vendored.each do |entry|
      raise Error, "vendored entries must be mappings" unless entry.is_a?(Hash)

      path = require_field!(entry, "path", "vendored")
      %w[name package version source_url license sha256 status usage update_cadence].each do |field|
        require_field!(entry, field, "vendored")
      end

      sha256 = entry["sha256"]
      raise Error, "#{path} has invalid sha256 #{sha256.inspect}" unless sha256.match?(SHA256_PATTERN)

      absolute_path = File.join(root, path)
      raise Error, "#{path} does not exist" unless File.file?(absolute_path)

      actual_sha256 = Digest::SHA256.file(absolute_path).hexdigest
      next if actual_sha256 == sha256

      raise Error, "#{path} sha256 mismatch: expected #{sha256}, got #{actual_sha256}"
    end
  end

  def check_first_party_entries!(first_party, root)
    first_party.each do |entry|
      raise Error, "first_party entries must be mappings" unless entry.is_a?(Hash)

      path = require_field!(entry, "path", "first_party")
      require_field!(entry, "usage", "first_party")
      raise Error, "#{path} does not exist" unless File.file?(File.join(root, path))
    end
  end

  def check_all_js_assets_classified!(classified_paths, root)
    classified_paths = classified_paths.sort
    js_paths = Dir.chdir(root) do
      Dir["js/*.{js,map}"].select { |path| File.file?(path) }.sort
    end

    missing_from_inventory = js_paths - classified_paths
    stale_inventory_entries = classified_paths - js_paths

    unless missing_from_inventory.empty?
      raise Error, "unclassified js assets: #{missing_from_inventory.join(', ')}"
    end

    unless stale_inventory_entries.empty?
      raise Error, "inventory entries for missing js assets: #{stale_inventory_entries.join(', ')}"
    end
  end

  def require_field!(entry, field, section)
    value = entry[field]
    return value unless value.nil? || value.to_s.strip.empty?

    raise Error, "#{section} entry #{entry['path'].inspect} is missing #{field}"
  end
end

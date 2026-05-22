#!/usr/bin/env ruby
# frozen_string_literal: true

require_relative "lib/vendored_javascript_check"

root = File.expand_path("..", __dir__)
manifest_path = ARGV[0] && File.expand_path(ARGV[0], Dir.pwd)

begin
  result = VendoredJavascriptCheck.check!(root: root, manifest_path: manifest_path)
rescue VendoredJavascriptCheck::Error => e
  warn "ERROR: #{e.message}"
  exit 1
end

puts "vendored_javascript_ok=true"
puts "vendored_assets=#{result.vendored_count}"
puts "first_party_assets=#{result.first_party_count}"

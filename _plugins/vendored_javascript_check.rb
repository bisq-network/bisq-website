# frozen_string_literal: true

require_relative "../scripts/lib/vendored_javascript_check"

Jekyll::Hooks.register :site, :after_init do |site|
  result = VendoredJavascriptCheck.check!(root: site.source)
  Jekyll.logger.info(
    "Vendored JavaScript:",
    "inventory ok (#{result.vendored_count} vendored, #{result.first_party_count} first-party)"
  )
rescue VendoredJavascriptCheck::Error => e
  raise Jekyll::Errors::FatalException, "Vendored JavaScript inventory check failed: #{e.message}"
end

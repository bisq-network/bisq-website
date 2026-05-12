# Security Policy

  ## Supported Versions

  This repository contains the Bisq website at https://bisq.network, including
  download pages, release information, public signing keys, documentation, blog
  content, redirects, headers, localized pages, DAO dashboard data, and deployment
  configuration.

  Security fixes are applied to the active website branch and the currently
  deployed production website.

  | Version / Branch | Supported |
  | --- | --- |
  | `master` | :white_check_mark: |
  | Currently deployed production website | :white_check_mark: |
  | Active dependency-update or website maintenance branches while under review | :white_check_mark: |
  | Old deployments, unsupported forks, mirrors, or locally modified builds | :x: |

  Users should verify Bisq downloads and release signatures. Do not rely on
  unofficial mirrors or modified download links.

  ## Reporting a Vulnerability

  Please do **not** report security vulnerabilities through public GitHub issues,
  pull requests, Discussions, Matrix rooms, forums, or social media.

  Report suspected vulnerabilities privately through GitHub's **Report a
  vulnerability** flow on this repository's Security page. If that option is not
  available, open a minimal public issue asking maintainers to enable a private
  security reporting channel, but do not include exploit details.

  Include as much detail as possible:

  - affected branch, commit, page, locale, deployment, dependency, or generated
    asset;
  - affected component, such as downloads pages, release links, public signing
    keys, `_redirects`, `_headers`, `.well-known`, JavaScript, CSS, Jekyll
    templates, `_data`, DAO dashboard generation scripts, blog content, or
    Netlify/deployment configuration;
  - whether the issue affects download integrity, release verification, signing
    key authenticity, redirect behavior, headers, content injection, dependency
    supply chain, localization, static asset integrity, or generated DAO data;
  - whether the issue can cause users to download malicious binaries, trust a
    wrong signing key, bypass verification guidance, leak visitor metadata, execute
    untrusted JavaScript, follow malicious redirects, or receive misleading
    security/update information;
  - reproduction steps, affected URLs, HTTP responses/headers, screenshots,
    dependency findings, generated files, or proof of concept code where useful;
  - whether the issue depends on compromised deployment credentials, malicious
    pull request content, dependency compromise, bad redirect/header rules,
    stale release metadata, localization changes, or external service compromise.

  Bisq is an open-source project maintained by contributors. Response times may
  vary, but reports involving malicious download links, signing-key replacement,
  release-verification bypass, website compromise, unsafe redirects, credential
  exposure, or JavaScript/content injection on security-sensitive pages are treated
  as urgent security issues and will be triaged as quickly as possible.

  For lower-severity issues, maintainers will respond when contributor capacity is
  available.

  If the report is accepted, maintainers may coordinate a fix privately, prepare a
  patched deployment, rotate credentials or keys when needed, update affected
  content, and publish an advisory after users have had a reasonable opportunity
  to update or verify. If the report is declined, maintainers will explain the
  reason when possible.

  Please give maintainers reasonable time to investigate and release mitigations
  before public disclosure. For severe or actively exploited issues, coordinate
  timing with maintainers so public details do not increase risk to users.

  Bisq does not currently guarantee a bug bounty. Security work may be eligible
  for Bisq DAO compensation if it qualifies under the project's contributor and
  critical-bug processes.

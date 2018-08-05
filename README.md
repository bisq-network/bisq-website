# The Bisq website

To run the site locally:

1. Install bundler per instructions at http://bundler.io
2. Clone and cd into this repository
3. Run `bundle install`
4. Run `bundle exec jekyll serve`
5. Browse the site at http://127.0.0.1:4000/

Note that LiveReload functionality is enabled by default in `_config.yml`.
This means that if you have the LiveReload browser extension installed,
you'll see local changes reload into the browser automatically on save.

run jekyll serve --host=0.0.0.0 to change serving IP
dev: http://port-4000.bisq-website-pedromvpg.codeanyapp.com/
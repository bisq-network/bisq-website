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


Dev

1. Run `$ jekyll serve --host=0.0.0.0` 
2. Go to `http://port-4000.bisq-website-pedromvpg.codeanyapp.com/` for port 4000


Git push changes

1. Add all files `$ git add --a`
2. Commit changes `$ git commit -m "Message"`
3. Push to repo `git push`


Git Syncing with master

1. `$ git fetch upstream`
2. `$ git checkout master`
3. `$ git merge upstream/master`

# The Bisq website

### Localization

We use the *[jekyll-multiple-languages-plugin](https://github.com/kurtsson/jekyll-multiple-languages-plugin)* to manage the localization of the webiste. To add a new language you have to:

1. Edit `_data/languages.yml`. Copy the `English` block and all its variables and paste it at the bottom of the page, following the structure you see for the other languages. Now edit all strings and replace them with the correct data for your language.
2. Edit `_data/main_nav.yml`. As in the point above, copy the all `en` block, paste it at the bottom of the page and translate all content in `title:`. Remember to also edit the `url:` field, adding the language code as you see for the other languages.
3. Copy the English `.yml` file and folder in `_i18n` and rename them using the correct language code. Using Italian as example, you will have 1 file `it.yml` and one folder `it`. Translate all English strings you find in the new `LANG.yml` (in our example: `it.yml`).
4. Open the file `_data/dao_content.yml`. Copy the entire `en` block, paste it at the bottom of the page and change `en` into your language code. In our example would be `it:`. Then translate all strings.
5. All localized picture are in `i18n_img/LANG`. Make sure to create a folder for your language containing the correct images.

### Run the Jekyll site locally:

0. Check Ruby verion `$ ruby -v` (needs to be 2.2.5 or higher) https://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/
1. If needs update run `$ rvm install 2.5.1`)
2. Install bundler per instructions at http://bundler.io  `gem install bundler`
3. Clone and cd into this repository
4. Run `$ bundle install`
5. Run `$ bundle exec jekyll serve`
6. Browse the site at http://127.0.0.1:4000/

Note that LiveReload functionality is enabled by default in `_config.yml`.
This means that if you have the LiveReload browser extension installed,
you'll see local changes reload into the browser automatically on save.


Dev running in 0.0.0.0 (port 4000 closed don't know why)

1. Run `$ jekyll serve --port 9999 --host=0.0.0.0`
2. Go to `http://port-4000.bisq-website-pedromvpg.codeanyapp.com/` for port 4000


### Authenticate

1. Set SSH `https://help.github.com/articles/connecting-to-github-with-ssh/`


### Git push changes

1. Add all files `$ git add --a`
2. Commit changes `$ git commit -m "Message"`
3. Push to repo `$ git push master`

4. `git push origin gh-pages`
5. `git push --set-upstream origin gh-pages`
git checkout gh-pages

### Git Syncing with origin and master

0. Define origin `git remote set-url origin git@github.com:pedromvpg/bisq-website.git`
1. Check versions `$ git remote -v`
2. Define upstream `$ git remote add upstream https://github.com/bisq-network/bisq-website.git`
3. Fetch upstream `$ git fetch upstream`
4. Compare changes `$ git checkout master`
5. Merge `$ git merge upstream/master`

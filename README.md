# Bisq Network Website

This repository hosts the source code for the Jekyll website hosted at https://bisq.network.

## Contributing

Please submit proposed changes as pull requests, ideally with commit messages that follow [these conventions](https://github.com/bisq-network/style/issues/9).

A pull requests should generally have a singular, well-defined purpose. For example, a pull request to add a blog post should just add a blog post, not add a blog post _and_ change spacing/indentation on some other page.

You should fork this repository, create a new branch, and and make all your changes there. Please don't commit your changes to the `master` branch.

**Please thoroughly test pull requests before submitting.**

For smaller changes, it's usually enough to build and observe the site locally. Don't forget that the site is responsive, so testing on mobile and desktop screens is important, as is testing on multiple browsers.

It's also not a bad idea to do a `diff` on the source code before submitting (for example, to make sure stray characters weren't added somewhere by mistake). You can check for changes by running `git diff <latest upstream commit id> <your branch's latest commit id>` or by using a graphical tool like Meld.

For changes that may alter the site's functionality, it can be helpful to `diff` the built code base in `_site/` against the existing built code base. You can do this by running something like `git diff -ru <upstream _site folder> <local _site folder>` or by comparing the 2 directories with a graphical tool like Meld.

Consider breaking big initiatives into smaller chunks wherever possible, or make a [WIP] or draft PR when you start a big initiative so it's possible to review your changes in smaller chunks. You can always squash/rebase commits after approval. Remember that reviewing pull requests is voluntary and can take time, so try to make the process as easy as possible for reviewers.

**Review feedback will be evaluated using these approaches.** If reviewers find significant errors, errors that indicate a clear lack of testing, or if they find changes that don't relate to the declared purpose of the pull request, your pull request may be rejected. Don't take it personally—just integrate feedback and try again.

FYI: after you make a pull request, note that Netlify will automatically create a build of your proposed changes at `https://deploy-preview-XYZ--bisq-website.netlify.com` (where XYZ is the number of your pull request).

## Run Locally

You'll want to run the site locally to test your changes.

First make sure you have Ruby and Bundler:

1. Check that Ruby is installed (check with `ruby -v`). Must be 2.2.5 or higher.
2. If you don't already have Bundler (check with `which bundle`), you can install by following the instructions at https://bundler.io.

Then clone the source code, build, and serve:

3. Clone this repository and `cd` into it.
4. Run `bundle install`.
5. Run `bundle exec jekyll serve`.
6. Browse the site at http://127.0.0.1:4000/

app.phonegap.com
===

Website for [app.phonegap.com](htpp://app.phonegap.com)


Requirement
---

- [Bundler](http://bundler.io/)
- See `Gemfile` for details


Setup
---

Open Terminal

    $ cd your_path/snapsvg-site
    $ sudo bundle install


Running the site locally
---

    $ jekyll serve --watch

Go to [http://localhost:4000](http://localhost:4000)


Deploying the site
---
    
    $ git checkout gh-pages
    $ rake deploy

The site will go live at [http://app.phonegap.com](http://app.phonegap.com). This will push the site instanteneously, so be aware. If you understand how the deploy script works in both `master` and `gh-pages`, you can just do `rake deploy` without gheckout out `gh-pages`. If you get serious errors in deploy script, make sure you abort the script. The script will ask you before it pushes everything live.
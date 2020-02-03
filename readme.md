# sandwave.io landingpage

This repo holds the source code for the sandwave.io landing page.

Make sure that the latest version of the css is compiled to the public folder

# Deployment

This repository is set up with our [Netlify account](https://app.netlify.com/sites/elegant-varahamihira-c594a0/overview), any changes on master will get deployed automatically.

Any pull requests will be published under deployment previews. Visit the Netlify control panel for details.  

# Development

The project has been built with [Jekyll](https://jekyllrb.com/) and [TailwindCSS](https://tailwindcss.com/docs). In order
to use the different build scripts and pull different 3rd party packages for both the frameworks a `Makefile` is provided
with the necessary scripts to develop and build the website.

## `make build` (production)

This subroutine can be used to build the site locally, as well as on production. It utilizes make to automatically resolve
dependencies where necessary. The command first compiles a new tailwind file from the `_css/styles.css` source, which is
written using [PostCSS](https://github.com/postcss/postcss) syntax.
 
It then goes on to build the jekyll site, and finishes by running [PurgeCSS](https://github.com/FullHuman/purgecss). Note that
the configuration for PurgeCSS is placed in `purgecss.config.js` and the Jekyll config is placed in `_config.yml`. 

Furthermore, the configuration for [bundler](https://bundler.io/) is placed in `.bundle/config`, this is only used while 
installing ruby dependencies, which is automated by the `Makefile`.

After running the build command, the compiled assets are placed in the `_site` directory, which can be used as the documentroot
of the production webserver.

## `make serve`

In order to do local development, you can run `make serve`. This subroutine compiles the css, and then goes to boot up a
local webserver on which the compiled jekyll site is served. This process also watches your source files, and automatically
recompiles the jekyll site once you update something. Note that after you update the tailwind source, you need to manually
run `make build` or restart the `make serve` process.

## Manually installing dependencies

In order to force the dependencies to reinstall you could use the `-B` flag in make in order to consider all make targets
to be out of date.

* `make -B node_modules` Force reinstall of node_modules
* `make -B vendor` Force reinstall of ruby dependencies
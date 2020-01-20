# sandwave.io landingpage

This repo holds the source code for the sandwave.io landing page.

Make sure that the latest version of the css is compiled to the public folder

## Deployment

This repository is set up with our [Netlify account](), any changes on master will get deployed automatically.

Any pull requests will be published under deployment previews. Visit the Netlify control panel for details.  

## Development

Simply run a temp webserver in your terminal:

```bash
php -S 0.0.0.0:8080 -t public
``` 

This will expose your http://localhost:8080, and serve the public directory.

### Editing content

You can edit page content in the `public/*.html` files. Tailwind is used for styling.

### Customizing the CSS

Edit the CSS configuration in `css/styles.css`.

Edit the tailwind configuration in `tailwind.config.js`

#### Compiling the CSS

Usually it is not necessary to compile the CSS, but if you want to make changes to the tailwind config, you can recompile the css by running:

```bash
yarn build
yarn prod
``` 

The build command compiles the CSS, the prod command purges any unused classes. In case that you experience any wonky behaviour related to this, you can edit the `purgecss.config.js`.

# USWDS HTML Starter

This repository aims to get you up and running with a simple [US Web Design
System](https://designsystem.digital.gov/) site using plain HTML as quickly and
simply as possible, to facilitate new sites or easy prototyping.

Visit the page that this site generates at
[https://adhocteam.github.io/uswds_html_starter/](https://adhocteam.github.io/uswds_html_starter/)

## Deployment

This repository deploys to GitHub pages on every push to the main branch, via
[this workflow job](.github/workflows/github-pages.yml).

## Development

First, run `npm install`.

To see the site locally, run `npm watch`, and npm will start up a web server and
sass set to watch the `src/styles.scss` file for changes and recompile when it
finds them. Visit `http://127.0.0.1:8080` to see your site in action.

- To edit the CSS for the site, change `src/styles.scss`
- To edit the HTML for the page, change `src/index.html`

That's all there is!

## Accessibility

On every push, the [CI job](.github/workflows/ci.yml):

- runs [Lighthouse CI](https://github.com/treosh/lighthouse-ci-action) and fails if the accessibility score isn't 100%
  - config is located in the `.github/lighthouse` directory
- runs [axe](https://www.npmjs.com/package/@axe-core/cli) and fails if anything doesn't pass

Check out [accessibility.digital.gov](https://accessibility.digital.gov) for
good resources on why this is so important

## Tasks

The following tasks are defined in `package.json` and can be run with `npm run <task>`:

- `build`: compile `src/styles.scss` into `src/styles.css`. Runs sass and then
  postcss to minify the CSS.
- `watch`: start an HTTP server on port 8080 and also a process that will run
  `build` any time you change the sass file
- `serve`: start an HTTP server on port 8080 serving the `src` directory

## Tools

This project uses the following tools:

- [`concurrently`](https://github.com/open-cli-tools/concurrently) to run
  `turbowatch` and `http-server` at the same time and properly handle logging
  and shutdown
- [`http-server`](https://github.com/http-party/http-server) to serve the
  static files in the `src` directory
- [`postcss`](https://postcss.org) to minify the CSS via
  [`cssnano`](https://cssnano.co)
- [`purgecss`](https://purgecss.com) to remove unused CSS from the CSS file
- [`sass`](http://sass-lang.com) to compile the USWDS sass to CSS
- [`turbowatch`](https://github.com/gajus/turbowatch/) to trigger the CSS build
  on a file change

## Contributing

This repo accepts contributions! Just file a PR.

Feel free to create a discussion topic if you have an idea and you want
feedback on it before starting to work on it.

## Similar repositories

- [adhocteam/uswds_nextjs_starter](https://github.com/adhocteam/uswds_nextjs_starter) is a similar USWDS starter project, but using next.js and react
- [navapbc/template-application-nextjs](https://github.com/navapbc/template-application-nextjs) is a similar template app with Next.js + React and a somewhat different focus

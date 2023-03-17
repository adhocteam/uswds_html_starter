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

## Accessibility

On every push, the [CI job](.github/workflows/ci.yml):

- runs ESLint with the reasonably strict [core web vitals](https://nextjs.org/docs/basic-features/eslint#core-web-vitals) preset
- runs [Lighthouse CI](https://github.com/treosh/lighthouse-ci-action) and fails if the accessibility score isn't 100%
  - config is located in the `.github/lighthouse` directory
- runs [axe](https://www.npmjs.com/package/@axe-core/cli) and fails if anything doesn't pass

Check out [accessibility.digital.gov](https://accessibility.digital.gov) for
good resources on why this is so important

## Contributing

This repo accepts contributions! Just file a PR.

Feel free to create a discussion topic if you have an idea and you want
feedback on it before starting to work on it.

## Similar repositories

- [adhocteam/uswds_nextjs_starter](https://github.com/adhocteam/uswds_nextjs_starter) is a similar USWDS starter project, but using next.js and react
- [navapbc/template-application-nextjs](https://github.com/navapbc/template-application-nextjs) is a similar template app with Next.js + React and a somewhat different focus

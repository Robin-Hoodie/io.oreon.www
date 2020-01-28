This repo is the source for my personal website, found at https://www.oreon.io

I use Netlify for building, deploying and hosting my code

Gatsby is used as a SSG and works well in tandem with Netlify

## Type checking

Type checking happens at commit-time, by running a pre-commit hook which runs `tsc` to check the types.
Ideally, we'd include this check in a CI pipeline as well, as pre-commits can be avoided through git CLI options


## Babel

Gatsby uses babel to compile our code to standard JS.
Thanks to [gatsby-plugin-typescript](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/) our code does not get typechecked during development but only compiled.
For functions, we run our own webpack config which does the compiling for us via `babel-loader` and its `@babel/preset-typescript` (which ia also being used by `gatsby-plugin-typescript` under the hood)
Type checking is done w/ the use of the pre-commit hook mentioned above.

## Functions

To build our functions into a production bundle, run `npm run functions:build`, which will çreate a bundle for every function and output it into the `functions/dist` folder.
To serve them locally, run `npm run functions:serve`. This will have webpack watch your function code and allow you to run [`netlify dev`](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md) on top of it.
You can then test your functions by running `netlify functions:invoke`
 
 ## Testing
 
 We use Jest for running our tests. 
 We use `@babel/preset-typescript` in the babel config for Jest (`jest.babel.config.js`) in order to transpile the code.
 You can run the tests by running the command `npm test`
 
## Linting

We're using ESLint for linting our files

ESLint will use the recommend lint from (in this order):
  - Eslint
  - React
  - Typescript

Latter rules override former rules.
Gatsby will consistently use our eslint rules for checking this

## Type checking

As babel does not type check code, you can either run the one-off command `npm run type-check` or continuously monitor for type checking with the command `npm run type-check:watch`

### Pre-commit check

We're running a pre-commit check on our usage of types with the `type-check` npm command as well as linting our files with the `lint` npm command.
The `lint` command sets the `max-warnings` to 0, as otherwise ESLint will only exit with a `1` exit code in case of errors, not for warnings.

## Bundle Analysis

We're generating bundle analysis with [@robinhoodie/webpack-bundle-analyzer](https://www.npmjs.com/package/@robinhoodie/gatsby-plugin-webpack-bundle-analyzer).
On local development you can find the report under `127.0.0.1:8888`.
For production builds we're generating a static report, which you can retrieve under `/reports/bundle-analyzer.html`

I've forked the plugin from the original [webpack-bundle-analyzer](https://github.com/escaladesports/gatsby-plugin-webpack-bundle-analyzer), 
though I didn't really agree with the usage of one provided option, so I've removed the option and republished this package under my own username on NPM.
I've also opened a PR to remove the option on the original repo, if it's accepted we'll revert back to using the original plugin.
You can view the PR here: https://github.com/escaladesports/gatsby-plugin-webpack-bundle-analyzer/pull/12

The report of the live site can be found here: https://www.oreon.io/reports/bundle-analyzer.html

# Overview of build systems

- Typescript:

We don't use `tsc` (the Typescript compiler) for anything apart from type checking our code, though it won't actually produce any output (`noEmit` is set to `true`)
We do use the options set in `tsconfig.json` through `@babel/preset-typescript`, which is a preset for Babel (duh) to transpile our code.

We can run `npm run type-check` as a one-off command which is also set to run in the pre-commit hook.
We can also run `npm run type-check:watch`, which could be handy during development. 

- Babel

**Gatsby** uses webpack under the hood which in turn uses babel for transpiling our Typescript code
**Jest** uses babel through a custom preprocessor found in `config/jest/jest-preprocess.js`

The path to this preprocessor, along with the filepattern for the files it needs to process, is configured under the `jest` key in `package.json`

- Webpack

While Gatsby uses Webpack under the hood, you have probably also noticed the `webpack.config.js` file in the root directory.
This webpack file is used for bundling our Netlify Functions code, that lives in `functions/`. 
Again, most important is that this uses the `@babel/preset-typescript` preset for the transpilation process. 




#### TODO-List

This serves as a personal reference and replacement for an issue tracker

- Mobile toggle can be done as SVG
- Mobile sidemenu width is not okay on mobile phones
- Mobile items need feedback on clicking them
- Use different visual cue for hovering over links than buttons do
- Get logo to use as icon
- Use focus states for buttons and links
- Set up Dockerfile to run this code easier locally
- Generate proptypes from TS definitions
- Webpack bundle analysis
- PR comment bot?

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
To watch your functions for changes while developing locally, run `npm run functions:watch`.

### Testing Functions Locally

Once you've built the latest version of your functions or are watching them with `npm run functions:watch`,
you can run [Netlify dev](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md) on top of it by running `netlify dev`.
You can then test your functions by running `netlify functions:invoke`.
 
 ## Testing
 
 We use Jest for running our tests. 
 We use `@babel/preset-typescript` in [the babel config for Jest](https://github.com/Robin-Hoodie/io.oreon.www/blob/master/config/jest/jest-preprocess.js) in order to transpile the code.
 You can run the tests by running the one-off command `npm test`, or have them run in watch mode with `npm run test:watch` 
 
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
We're only generating this for production builds for which we're generating a static report, which you can retrieve under `/reports/bundle-analyzer.html`.
We're not very interested in the bundle size for development builds.

I've forked the plugin from the original [webpack-bundle-analyzer](https://github.com/escaladesports/gatsby-plugin-webpack-bundle-analyzer), 
though I didn't really agree with the usage of one provided option, so I've removed the option and republished this package under my own username on NPM.
I've also opened a PR to remove the option on the original repo, if it's accepted we'll revert back to using the original plugin.
You can view the PR here: https://github.com/escaladesports/gatsby-plugin-webpack-bundle-analyzer/pull/12

The report of the live site can be found here: https://www.oreon.io/reports/bundle-analyzer.html

The 2 main reasons these reports are interesting are:
- Analysis of the weight of our app and which code is being loaded
- Understanding more how webpack splits our code into different bundles

# Overview of build systems

- Typescript:

We don't use `tsc` (the Typescript compiler) for anything apart from type checking our code, though it won't actually produce any output (`noEmit` is set to `true`)
We do use the options set in `tsconfig.json` through `@babel/preset-typescript`, which is a preset for Babel (duh) to transpile our code.

We can run `npm run type-check` as a one-off command which is also set to run in the pre-commit hook.
We can also run `npm run type-check:watch`, which could be handy during development. 

- Babel

**Gatsby** uses webpack under the hood which in turn uses babel for transpiling our Typescript code
**Jest** uses babel through a custom preprocessor found in [config/jest/jest.preprocess.js](https://github.com/Robin-Hoodie/io.oreon.www/blob/master/config/jest/jest-preprocess.js)

The path to this preprocessor, along with the filepattern for the files it needs to process, is configured in 

- Webpack

While Gatsby uses Webpack under the hood, we're [configuring webpack ourselves](https://github.com/Robin-Hoodie/io.oreon.www/blob/master/config/functions/webpack.config.js) for our Netlify Functions
This webpack file is used for bundling our Netlify Functions code, that lives in [functions/](https://github.com/Robin-Hoodie/io.oreon.www/blob/master/config/functions/). 
Again, most important is that this uses the [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript) preset for the transpilation process. 

## Blog posts

### Adding blog posts

Blogposts can be added by adding a markdown file to [src/data/content](https://github.com/Robin-Hoodie/io.oreon.www/blob/master/src/data/content).

The path at which the blog will be published is `/blogs` + the filename (without extension). 
Make sure the post has the following fields specified in its frontmatter:
- `title` Used to display in the link to the blogpost and the title on the blogpost's page itself
- `date` Blogposts are sorted on their date on the blogposts page and displayed in the link to the blogpost and the blogpost itself
- `author` Displayed in the link to the blogpost and the blogpost itself
- `image` Displayed in the link the blogpost - this has to be a relative path to the image, which should ideally be stored in `/src/data/image`

Note that the image will be resized to a 100x100 size
Also note that the image will be converted to a [Webp](https://developers.google.com/speed/webp) image if the browser supports it

E.g.
```
//File src/data/content/cats.md
---
title: "Cats are awesome"
---
I love cats, they can sometimes be a bit naughty though
```
By creating this markdown file, the next time the code is pushed to `master` (and subsequently deployed), you'll find yourblogpost on `/blogs/cats`.
The code related to the automatic creation of this page, and the inferred path can be found in [gatsby-node.js](https://github.com/Robin-Hoodie/io.oreon.www/blob/master/gatsby-node.js)

### Updating blog posts

Updating a blogpost is as easy as editing the markdown content and pushing your commit to Github.

### Deleting blog posts

Similar to updating a blogpost, you just need to delete the markdown file and push your commit to Github.

#### TODO-List

This serves as a personal reference and "light-weight" replacement for an issue tracker

- Mobile toggle could be done as SVG
- Mobile items need feedback on clicking them
- Use different visual cue for hovering over links than buttons do
- Get logo to use as icon
- Use focus states for buttons and links
- Set up Dockerfile to run this code easier locally
- Generate proptypes from TS definitions
- PR comment bot?
- Reference files in README by Github links instead of `quotes` 
- Add E2E tests
- Add CI pipeline?
- Add tests for graphql queries
- Stronger typed SASS modules, we're making use of "any" default exports, could type sass files themselves
- Add tagline
- Cover image should be delivered w/ Gatsby Image
- Add note on images and use of Gatsby Image?
- Document usage of @src imports

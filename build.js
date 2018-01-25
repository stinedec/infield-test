const Metalsmith = require('metalsmith')
const assets = require('metalsmith-assets')
const chalk = require('chalk')
const collections = require('metalsmith-collections')
const inplace = require('metalsmith-in-place')
const layouts = require('metalsmith-layouts')
const markdown = require('metalsmith-markdown')
const metadata = require('metalsmith-metadata')
const nunjucks = require('nunjucks')
const permalinks = require('metalsmith-permalinks')
const sass = require('metalsmith-sass')

nunjucks.configure('src', {watch: false, noCache: true})

Metalsmith(__dirname)
  .source('./data')
  .use(assets({
    source: 'src/public',
    destination: '',
  }))
  .use(metadata({
    site:  'site.json'
  }))
  .use(collections({
      profiles: {
        pattern: 'profiles/**/*.md',
        sortBy: 'name'
      }
    }))
  .use(markdown())
  .use(permalinks({
    pattern: ':title'
  }))
  .use(inplace({
    engine: 'nunjucks',
    pattern: '**/*.html'
  }))
  .use(layouts({
    engine: 'nunjucks',
    pattern: '**/*.html',
    directory: 'src/views'
  }))
  .use(sass({
    outputDir: ''   // This changes the output dir to "build/" instead of "build/scss/"
  }))
  .build((err) => {
    if (err) {
      throw err
    } else {
      console.log(chalk.green('✓ Build successful.'))
    }
  })

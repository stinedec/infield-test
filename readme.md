# Front end development test for Infield Digital using Metalsmith + Nunjucks

This demo uses Metalsmith and Nunjucks to demonstrate my skills in building reusable, pixel-perfect front end components.

## Setup

Content is located in [`data/`](data/). The app source itself lives in [`src/`](src/).
In [`build.js`](build.js) we configure how we want the static site to be generated using `data/` and `source/`.

The content and app source structure:

```
build.js              <-- config for static site generator

data/                 <-- example content
  profiles/           <-- collection of sample profile content
  scss/               <-- build sass files
  index.html          <-- content of index page
  site.json           <-- site metadata

src/                  <-- app modules
  components/         <-- reusable components
    app-header        <-- simple sample reusable header
    profile-component <-- the HTML for the reusable test component
  public/             <-- static public assets
  views/              <-- layout files
```

## Scripts

Development requires [Node.js](http://nodejs.org/) and [npm](https://npmjs.org/) (comes with Node.js).

After installing dependencies using `npm install` run `node build` to generate static files. Resulting files will be found in the `build` folder. Open `build/index.html` to view site.

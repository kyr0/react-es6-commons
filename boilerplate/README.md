boilerplate
===========

...a simple application based on React, ES6+ (Babel.js), SASS/Compass and Bootstrap. It features the benefits of using
 react-es6-commons as a foundation library.
 
## Setup
 
Please goto: [react-es6-commons Setup](https://www.github.com/kyr0/react-es6-commons#Setup)

## Development lifecycle

To use ES6+ features we need to constantly transpile out ES6+ code to today's ES5 code. The Grunt is set up to do so
by using Babel.js and webpack combined with a watcher that automatically triggers transpiling whenever you change code
in the `app` directory.

Run (in a new terminal):

    > grunt 
    
...to transpile ES6+ JavaScript of `app` into `public/`  so. Source maps are enabled.

The same applies to SASS stylesheets that need to get transpiled to today's CSS. We use Compass for that approach and
also watch for any file change in the `sass` directory.

Run (in a new terminal):

    > grunt sass
    
...to do so. Source maps are enabled.

Now that we managed to setup our development tools, we need some HTTP server to serve our code to the browser.
Well, an express based simple web server script is also bundled with this boilerplate app.

Run (in a new terminal):

    > node serve.js

...serves the boilerplate application on http://localhost:3000. Point a browser to that location :)
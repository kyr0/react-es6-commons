react-es6-commons
=================

...is an ES6+ library containing classes you can extend from to build React front-end experiences with ease and simplicity.
This library heavily encourages and leads you to a best-practice driven application architecture that keeps things simple.

This library is currently considered beta. Please decide carefully, if you really want to use it in production yet.
However, I do so in my own projects and it works well for me. 

## Setup

Given that you already installed Node.js and npm in the most recent versions:
Just create a new, empty directory and call:

    > npm install react-es6-commons    

...to install all the required dependencies.

Because we really love to keep things simple, there is a boilerplate project you may want to use.
Just call:

    > cp -r node_modules/react-es6-commons/boilerplate/ .
    
...to create a simple boilerplate project covering a best-practice project setup.

Note: Take care to exactly use the command line above. A missing "-r" won't copy sub-directories.
Adding * to the end of the source path would result in a missing .babelrc file.

Then run:

    > npm install
    
...to resolve any dependency of the boilerplate app.

Now, we are ready to dig into the code. To read more about the boilerplate app's architecture, 
goto [boilerplate](https://www.github.com/kyr0/react-es6-commons/boilerplate).

## Please contribute. Pushes welcome!

Do you like this library? Did it support you well? I'm always thankful for your valuable input, suggestions and issue reports.
If you would like to contribute some new features, don't hesitate to open an issue for that suggesting your valuable improvement.
Also please don't hesitate to directly push patches (defects, security issues, performance improvements), tests and better documentation.
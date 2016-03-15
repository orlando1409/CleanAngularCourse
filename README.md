# Angular Clean code and unit testing
Angular course, basic concepts, clean code and testing.

### Prerequisites

You need git to clone the repository. 
You can get git from
[http://git-scm.com/](http://git-scm.com/).

You must have node.js and its package manager (npm) installed.  
You can get them from [http://nodejs.org/](http://nodejs.org/).

### Setting work environment for this course
We will need to install:

* install node.js
* install git
* install [Source tree](https://www.sourcetreeapp.com/) or GITHUB desktop.
* Download the source code from GITHUB
* Open command prompt, into to the folder path and execute this :
```
npm install
```
Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:
* Open command prompt, into to the folder path and execute this :
```
npm start
```
Now browse to the app at `http://localhost:8000/app/index.html`.

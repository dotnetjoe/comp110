var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();
var app = express();

var fs = require('fs');

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, '../public');

var glob = require("glob");

var open = require("open");

let buildPipeline = require("./buildPipeline");

let server = null;

app.use(express.static(publicPath));
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

// We only want to run the workflow when not in production
if (!isProduction) {

  // We require the bundler inside the if block because
  // it is only needed in a development environment. Later
  // you will see why this is a good idea
  var bundle = require('./bundle.js')();

  // Any requests to localhost:3000/build is proxied
  // to webpack-dev-server
  app.all('/dist/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:3001'
    });
  });

  // This is the main listing route. It should list all project folders.
  app.get("/", function(req, res) {
    bundle.run();
    glob("./src/*", function(err, files) {
      let props = req.params;
      props.files = files.map(pathToProject).reduce(uniq, []);
      props.pageTitle = "Introduction to Computer Science";
      res.render('index', props);
    });
  });

  app.get("/close", function(req, res) {
    res.render('closing');
    setTimeout(() => {
      console.log("Your workspace is shutting down.");
      process.exit(0);
    }, 100);
  });

  function uniq(memo, item) {
    if (memo.find((elem) => elem.title === item.title) === undefined) {
      memo.push(item);
    }
    return memo;
  }

  function pathToProject(path) {
    let match = /\.\/src\/(.*)$/.exec(path);
    return {title: english(match[1]), path: `/${match[1]}`};
  }

  function english(camelCase) {
    let text = camelCase.replace(/([a-z0-9])([A-Z])/g, "$1 $2")
                        .replace(/([a-z])([0-9])/g, "$1 $2")
                        .replace(/-([a-z0-9])/g, " $1")
                        ;
    let space = 0;
    do  {
      text = text.slice(0, space) + text.charAt(space).toUpperCase() + text.slice(space + 1);
      space = text.indexOf(" ", space + 1) + 1;
    } while (space != 0);
    return text;
  }

  function toObject(kvPairs) {
    return kvPairs.reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
  }

  app.get("/publish/:project/:app", (req, res, next) => {
    let {project, app} = req.params;
    let {token} = req.query;
    buildPipeline.publish(buildPipeline.bundle(project, app), token)
    .then((state) => res.redirect(`/published/${project}/${app}?uri=${state.publishUrl}`))
    .catch(err => res.redirect(`/published/${project}/${app}?error=${err}`))
    ;
  });

  app.get("/published/:project/:app", (req, res, next) => {
    if (req.query.error) {
      res.render('publishedError', {error: req.query.error});
    } else {
       res.render('published', {
         uri: req.query.uri,
         project: req.params.project, 
         app: req.params.app
      });
    }
  });

  app.get("/:project", function(req, res, next) {
    let props = req.params;
    fs.access(`./src/${props.project}`, fs.constants.F_OK, (err) => {
      if (err) {
        res.redirect(`/`);
      } else {
        bundle.run();
        glob("./src/" + req.params.project + "/*-app.ts", function(err, files) {
          props.script = "";
          props.files = files.map(pathToProgram);
          props.title = english(props.project);
          props.pageTitle = english(props.project);
          res.render('project', props);
        });
      }
    });
  });

  function pathToProgram(path) {
    let match = /\.\/src\/(.*)\/(.+)-app.ts$/.exec(path);
    return {title: english(match[2]), path: `/${match[1]}/${match[2]}`};
  }

  app.get("/:project/:app", function(req, res, next) {
    let props = req.params;
    fs.access(`./src/${props.project}/${props.app}-app.ts`, fs.constants.F_OK, (err) => {
      if (err) {
        res.redirect(`/${props.project}`);
      } else {
        bundle.run();
        glob("./src/*/*-app.ts", function(err, files) {
          props.script = "/dist/" + req.params.project + "-" + req.params.app + ".js";
          props.style = "/dist/" + req.params.project + "-" + req.params.app + ".css";
          props.files = files.map(pathToBundle);
          props.pageTitle = english(props.app) + " (" + english(props.project) + ")";
          props.title = english(props.app);
          props.projectTitle = english(props.project);
          props.projectPath = `/${props.project}`;
          props.appPath = `/${props.project}/${props.app}`;
          res.render('app', props);
        });
      }
    });
  });

}

function pathToBundle(path) {
  let match = /\.\/src\/(.*)-app.ts$/.exec(path);
  return "/" + match[1];
}

// It is important to catch any errors from the proxy or the
// server will crash. An example of this is connecting to the
// server when webpack is bundling
proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...');
});

server = app.listen(port, function () {
  console.log('Your workspace is accessible at http://localhost:' + port);
  open(`http://localhost:${port}`);
});
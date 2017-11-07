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

let buildPipelineTS = require("./buildPipelineTS");
let buildPipelineHTML = require("./buildPipelineHTML");

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
        target: 'http://localhost:30001'
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

    if (app.indexOf(".html") !== -1) {
      buildPipelineHTML.publish(buildPipelineHTML.bundle(project, app), token)
      .then((state) => res.redirect(`/published/${project}/${app}?uri=${state.publishUrl}`))
      .catch(err => res.redirect(`/published/${project}/${app}?error=${err}`))
      ;
    } else {
      buildPipelineTS.publish(buildPipelineTS.bundle(project, app), token)
      .then((state) => res.redirect(`/published/${project}/${app}?uri=${state.publishUrl}`))
      .catch(err => res.redirect(`/published/${project}/${app}?error=${err}`))
      ;
    }


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
        allProjectApps(props.project).then((files) => {
            props.script = "";
            props.files = files.map(pathToProgram);
            props.title = english(props.project);
            props.pageTitle = english(props.project);
            res.render('project', props);
          })
          .catch((e) => {
            res.send("error: " + e);
          });
      }
    });
  });

  function allProjectApps(project) {
    let htmlFiles = globPromise("./src/" + project + "/*.html");
    let tsFiles = globPromise("./src/" + project + "/*-app.ts");
    return new Promise((resolve, reject) => {
      Promise.all([tsFiles, htmlFiles])
             .then((allFiles) => {
               resolve(allFiles[0].concat(allFiles[1]).sort());
             })
             .catch(reject);
    });
    return ;
  }

  function allAppFiles(project, app) {
    let htmlFiles = globPromise("./src/" + project + "/" + app + ".html");
    let tsFiles = globPromise("./src/" + project + "/" + app + "-app.ts");
    return new Promise((resolve, reject) => {
      Promise.all([tsFiles, htmlFiles])
             .then((allFiles) => {
               resolve(allFiles[0].concat(allFiles[1]));
             })
             .catch(reject);
    });
    return ;
  }

  function globPromise(path) {
    return new Promise((resolve, reject) => {
      glob(path, (err, files) => {
        if (err) {
          reject(err);
        } else {
          resolve(files);
        }
      });
    });
  }

  function pathToProgram(path) {
    let match = /\.\/src\/(.*)\/(.+)-app.ts$/.exec(path);
    if (match) {
      return {title: english(match[2]), path: `/${match[1]}/${match[2]}`};
    } else {
      match = /\.\/src\/(.*)\/(.+).html$/.exec(path);
      return {title: english(match[2]), path: `/${match[1]}/${match[2]}.html`};
    }
  }

  function readFile(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path, 
        { encoding: "utf8" }, 
        (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      );
    });
  }

  function staticFile(project, file) {
    return globPromise(`./src/${project}/${file}`);
  }

  app.get("/html/:project/:app", function(req, res, next) {
    let props = req.params;

    if (props.app.indexOf(".html") !== -1) {
      props.app = props.app.replace(".html", "");
    }

    allAppFiles(props.project, props.app)
    .then((files) => {
      if (files.length === 0 || files[0].indexOf("html") === -1) {
        // Here we try for a static file
        let files = staticFile(props.project, props.app);
        files.then((files) => {
          if (files.length > 0) {
            res.sendFile(path.resolve(files[0]));
          } else {
            res.status(404);
            res.send("Not Found");
          }
        }).catch((e) => {
          console.log(e);
          res.status(404);
          res.send("Not Found");
        });
      } else {
        let htmlFile = path.resolve(__dirname, "../..", "src", props.project, props.app + ".html");
        readFile(htmlFile)
        .then((contents) => {
          let refs = /src[ ]*=[ ]*"\.\/([^"]*)-script.ts"/gi;
          let filtered = contents.replace(refs, (match) => {
            refs = /src[ ]*=[ ]*"\.\/([^"]*)-script.ts"/gi;
            let captures = refs.exec(match);
            return "src=\"/dist/" + props.project + "-" + captures[1] + ".js\"";
          });
          res.send(filtered);
        })
        .catch((e) => {
          console.log(e);
          res.send(e);
        });
      }
    });
  });

  app.get("/:project/:app", function(req, res, next) {
    let props = req.params;

    if (props.app.indexOf(".html") !== -1) {
      props.app = props.app.replace(".html", "");
    }

    // Check to see if file exists
    allAppFiles(props.project, props.app)
    .then((files) => {
      if (files.length === 0) {
        res.redirect(`/${props.project}`);
      } else {
        let file = files[0];
        if (file.indexOf(".html") !== -1) {
          props.html = "/html/" + props.project + "/" + props.app;
          props.pageTitle = english(props.app) + " (" + english(props.project) + ")";
          props.title = english(props.app);
          props.projectTitle = english(props.project);
          props.projectPath = `/${props.project}`;
          props.appPath = `/${props.project}/${props.app}`;
          res.render('app-html', props);
        } else {
          props.script = "/dist/" + req.params.project + "-" + req.params.app + ".js";
          props.style = "/dist/" + req.params.project + "-" + req.params.app + ".css";
          props.files = files.map(pathToBundle);
          props.pageTitle = english(props.app) + " (" + english(props.project) + ")";
          props.title = english(props.app);
          props.projectTitle = english(props.project);
          props.projectPath = `/${props.project}`;
          props.appPath = `/${props.project}/${props.app}`;
          res.render('app-ts', props);
        }
      }
    })
    .catch((e) => {
      res.send("error: " + e);
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

server.on("error", () => {
  open(`http://localhost:${port}`);
  console.log("It looks like your development server is already running!");
  console.log("We're opening it up for you now...");
  console.log("To close it, press the dark 'Close' button in the top right area of the page");
  setTimeout(() => { process.exit(); }, 100);
});
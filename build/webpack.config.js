const path = require("path");
const glob = require("glob");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extract = new ExtractTextPlugin("[name].css");

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

function allBundles() {
    let appBundles = globPromise("./src/*/*-app.ts");
    let scriptBundles = globPromise("./src/*/*-script.ts");
    return new Promise((resolve, reject) => {
        Promise.all([appBundles, scriptBundles])
                .then((allFiles) => {
                    resolve(allFiles[0].concat(allFiles[1]));
                })
                .catch(reject);
    });
}

module.exports = {
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, "../src"),
    entry: () => new Promise(function(resolve, reject) {
        allBundles().then((files) => {
            let keys = files.map((file) => file.replace(/\.\/src\//,'').replace(/-(app|script).ts$/,'').replace(/\//g,'-'));
            let values = files.map((file) => file.replace(/\/src/,''));
            let entries = {};
            for (let i = 0; i < keys.length; i++) {
                entries[keys[i]] = values[i];
            }
            resolve(entries);
        });
    }),
    watchOptions: {
        aggregateTimeout: 1000
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    logLevel: "error"
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public/dist")
    },
    stats: "errors-only",
    plugins: [
        extract
    ]
};
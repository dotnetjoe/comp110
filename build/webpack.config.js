const path = require("path");
const glob = require("glob");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extract = new ExtractTextPlugin("[name].css");

module.exports = {
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, "../src"),
    entry: () => new Promise(function(resolve, reject) {
        glob("./src/*/*-app.ts", function(err, files) {
            let keys = files.map((file) => file.replace(/\.\/src\//,'').replace(/-app.ts$/,'').replace(/\//g,'-'));
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
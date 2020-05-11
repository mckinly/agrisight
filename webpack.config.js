const webpack = require("webpack");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

module.exports = env => {
  const currentPath = path.join(__dirname);

  const basePath = currentPath + "/.env";

  const envPath = basePath + "." + env.ENVIRONMENT;

  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  const fileEnv = dotenv.config({ path: finalPath }).parsed;

  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [new webpack.DefinePlugin(envKeys)]
  };
};

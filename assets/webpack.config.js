const path = require("path");

const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: {
    base: "./src/base.scss",
    app: "./src/app.js",
    signup: "./src/signup.js",
    login: "./src/login.js",
    topics: "./src/topics.js",
    'card-form': "./src/card-form.js",
  },
  output: {path: path.resolve(__dirname, "dist")},
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
          },
        ]
      }
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      partials: path.resolve(__dirname, 'src/partials'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  externals: {
    vue: 'Vue',
  },
  plugins: [new VueLoaderPlugin(), new MiniCSSExtractPlugin()],
  mode: 'production',
  stats: 'minimal',
};

const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /**
   * Webpack shared config
   */
  entry: "./src/index.tsx",
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "../dist"),
    chunkFilename: "[name].bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: [/node_modules/]
      },
      {
        test: /\.json/,
        loader: "json-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: [/node_modules/]
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "client/assets/[name]-[hash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".scss", ".json"],
    alias: {
      src: path.join(__dirname, "../src"),
      components: path.join(__dirname, "../src/components"),
      atoms: path.join(__dirname, "../src/components/atoms"),
      molecules: path.join(__dirname, "../src/components/molecules"),
      modules: path.join(__dirname, "../src/data/modules"),
      data:path.join(__dirname, "../src/data"),
      organisms: path.join(__dirname, "../src/components/organisms"),
      pages: path.join(__dirname, "../src/pages"),
      templates: path.join(__dirname, "../src/components/templates"),
      utils: path.join(__dirname, "../src/utils"),
      resources: path.join(__dirname, "../src/resources"),
      data: path.join(__dirname, "../src/apollo/data"),
      fonts: path.join(__dirname, "../src/resources/fonts"),
    },
    modules: [
      path.resolve(__dirname, "../node_modules"),
      path.resolve(__dirname, "../src")
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: true,
      disable: false
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      title: "Typescript React Boilerplate",
      template: "!!handlebars-loader!src/index.hbs",
      inject: "body"
    })
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};

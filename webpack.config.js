
// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 9001,
    watchFiles: ["./src/template.html"],
    historyApiFallback: true, // Redirects all requests to template.html
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: 'template.html',
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/home.html',
        filename: 'pages/home.html',
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/checkout.html',
        filename: 'pages/checkout.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

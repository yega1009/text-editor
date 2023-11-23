// Import necessary Node.js modules and Webpack plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  return {
    mode: "development",
    // Entry points for the application; these two JavaScript files are the starting points
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    // Configuration for the output of the bundled files
    output: {
      filename: "[name].bundle.js", // filenames based on entry point names
      path: path.resolve(__dirname, "dist"), // Output directory
    },
    // Configuration for various Webpack plugins
    plugins: [
      // Generates an HTML file with the script tags injected
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "J.A.T.E",
      }),
      // Extracts CSS into separate files
      new MiniCssExtractPlugin(),
      // Generates a manifest file for the PWA
      new WebpackPwaManifest({
        name: "Just Another Text Editor",
        short_name: "JATE",
        description: "An app to edit texts",
        background_color: "#225ca3",
        crossorigin: "use-credentials",
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
          },
        ],
      }),
      // Injects a custom service worker
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "service-worker.js",
      }),
    ],

    module: {
      rules: [
        
      ],
    },
  };
};

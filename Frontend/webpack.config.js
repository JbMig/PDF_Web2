const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env, options) => {
  const isProduction = options.mode === "production";

  return {
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
    },
    stats: {
      errors: true,
      warnings: false,
      assets: false,
      modules: false,
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
        favicon: path.join(__dirname, "public", "favicon.ico"),
      }),
      isProduction && new MiniCssExtractPlugin(),
      // new BundleAnalyzerPlugin(),
    ],

    module: {
      rules: [
        {
          test: /\.?(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: ["thread-loader", "babel-loader"],
        },
        {
          test: /\.?(css|scss)$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: { importLoaders: 2, sourceMap: true },
            },
            "postcss-loader",
            { loader: "sass-loader", options: { sourceMap: true } },
          ],
        },
        {
          test: /\.?(png|jpg|svg)$/,
          type: "asset",
        },
      ],
    },

    devServer: {
      historyApiFallback: true,
      port: "auto",
      open: false,
      client: {
        overlay: {
          errors: true,
          warnings: false,
          runtimeErrors: true,
        },
      },
    },

    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin({
          parallel: true,
        }),
        isProduction &&
          new TerserPlugin({
            parallel: true,
            terserOptions: {
              compress: {
                drop_console: true,
              },
            },
          }),
      ],
    },

    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, "tsconfig.json"),
        }),
      ],
    },
  };
};

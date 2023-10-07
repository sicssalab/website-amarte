/* eslint-disable no-undef */
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

require('@babel/register')({
  configFile: path.resolve(__dirname, './babel.config.js')
})

module.exports = (enviroment) => {
  const appCss = new MiniCssExtractPlugin({
    filename: 'build/styles.[fullhash].css'
  });
  return (
    {
      mode: process.env.NODE_ENV || 'production',
      target: "web",
      entry: path.join(__dirname, "src", "index.prod.js"),
      output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "build/[name].[fullhash].js",
        clean: true,
      },
      plugins: [
        new webpack.LoaderOptionsPlugin({
          debug: true
        }),
        new HTMLWebpackPlugin({
          filename: "index.html",
          template: path.resolve(__dirname, "public/index.html"),
          minify: false
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, 'public/favicon.ico'),
              to: path.resolve(__dirname, 'dist/public'),
            },
            // {
            //   from: path.resolve(__dirname, 'public/logo.jpg'),
            //   to: path.resolve(__dirname, 'dist/public'),
            // },
            {
              from: path.resolve(__dirname, 'public/manifest.json'),
              to: path.resolve(__dirname, 'dist/public'),
            },
            {
              from: path.resolve(__dirname, 'public/robots.txt'),
              to: path.resolve(__dirname, 'dist/public'),
            },
            // {
            //   from: path.resolve(__dirname, 'public/public2/contacto'),
            //   to: path.resolve(__dirname, 'dist/public/contacto'),
            // },
            // {
            //   from: path.resolve(__dirname, 'public/public2/json'),
            //   to: path.resolve(__dirname, 'dist/public/json'),
            // },
            // {
            //   from: path.resolve(__dirname, 'public/public2/landings'),
            //   to: path.resolve(__dirname, 'dist/public/landings'),
            // },
            // {
            //   from: path.resolve(__dirname, 'public/public2/LOGO-MARCAS-PROVEEDORES'),
            //   to: path.resolve(__dirname, 'dist/public/LOGO-MARCAS-PROVEEDORES'),
            // },
            // {
            //   from: path.resolve(__dirname, 'public/public2/nosotros'),
            //   to: path.resolve(__dirname, 'dist/public/nosotros'),
            // },
            // {
            //   from: path.resolve(__dirname, 'public/public2/servicios'),
            //   to: path.resolve(__dirname, 'dist/public/servicios'),
            // },
            // {
            //   from: 'public/public2/*.jpeg',
            //   to({ context, absoluteFilename }) {
            //     return Promise.resolve("public/[name][ext]");
            //   },
            // },
            //TODO otro guardado
            {
              from: 'public/*.png',
              to({ context, absoluteFilename }) {
                return Promise.resolve("public/[name][ext]");
              },
            },
            // {
            //   from: 'public/*.webp',
            //   to({ context, absoluteFilename }) {
            //     return Promise.resolve("public/[name][ext]");
            //   },
            // },
            {
              from: path.resolve(__dirname, 'src/assets'),
              to: path.resolve(__dirname, 'dist/src/assets'),
            },
          ]
        }),
        new Dotenv(),
        appCss
      ],
      optimization: {
        minimizer: [new TerserPlugin()]
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: "babel-loader",
            },
            exclude: [path.join(__dirname, "/node_modules")],
          },
          {
            test: /\.(ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            type: "asset/resource",
            generator: {
              filename: "assets/fonts/[fullhash][ext]",
            },
          },
          {
            test: /\.(eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: {
              loader: "svg-url-loader",
            },
          },
          {
            test: /\.(pdf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]'
                }
              }
            ]
          },
          {
            test: /\.(jpe?g|png|PNG|gif|webp|avif)$/i,
            loader: "url-loader",
            options: {
              name: "./assets/[path][name].[ext]",
              outputPath: 'assets/'
            },
            type: 'javascript/auto'
          },
          {
            test: /(\.css)$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            exclude: [path.join(__dirname, "/node_modules")],
         },
          {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
          }
        ],
      },
      resolve: {
        extensions: [".js", ".jsx", ".json", ".scss"],
      },
    }
  )
}

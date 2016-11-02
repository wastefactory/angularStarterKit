var path = require('path');
var webpack = require('webpack');
var failPlugin = require('webpack-fail-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
        app: [
            __dirname + '/src/app/app.module.ts',
            __dirname + '/src/app/app.components.ts',
            'font-awesome-loader',
            'bootstrap-loader',
            'bootstrap-loader/extractStyles'
        ],
        vendor: [
            'angular', 
            'angular-animate', 
            'angular-ui-router', 
            'angular-ui-bootstrap',
            'jquery'
        ]
    },
	output: {
		path: '../resources/public/',
		filename: 'bundle.js'
	},
	resolve: {
		// Add `.ts` and `.tsx` as a resolvable extension. 
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
	},
	module: {
		loaders: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader` 
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			},
            {
                test: /\.css$/,
                loaders: [ 'style', 'css', 'postcss' ]
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'postcss', 'sass' ]
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?limit=10000"
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file'
            },
            {
                test: /\.html$/,
                loaders: ['html']
            }
		]
	},
    devServer: {
        proxy: {
          '/api*': {
            target: 'http://localhost:8080',
            secure: false,
            bypass: function(req, res, proxyOptions) {
                if (req.headers.accept.indexOf('html') !== -1) {
                    console.log('Skipping proxy for browser request.');
                    return '/index.html';
                }
            }            
          }
        }
    },   
	plugins: [
            new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
			new HtmlWebpackPlugin({
				hash: true,
				cache: true,
				filename: 'index.html',
				template: __dirname + '/src/index.html'
			}),
            new webpack.ProvidePlugin({
                'jQuery': 'jquery',
                '$': 'jquery',
            }),
            new ExtractTextPlugin("styles.css"),
			failPlugin
		]
};
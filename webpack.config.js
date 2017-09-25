const webpack = require('webpack')
const path = require('path')

const autoprefixer = require('autoprefixer')

const BUILD_DIR = path.resolve(__dirname, 'src/client/dist/static')
const APP_DIR = path.resolve(__dirname, 'src/client/app')

module.exports = {
	entry: [
		// HMR
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',

		// index
		APP_DIR + '/index.jsx',
	],
	output: {
		path: BUILD_DIR,
		publicPath: '/static/',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [
			path.resolve(APP_DIR),
			path.resolve('./node_modules')
		],
	},
	module: {
		loaders: [{
			test: /\.jsx$/,
			include: APP_DIR,
			exclude: /node_modules/,
			loader: 'babel-loader',
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.scss$/,
			exclude: /node_modules/,
			loaders: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						module: true,
						localIdentName: '[name]-[local]-[hash:base64:5]',
						sourceMap: true,
					}
				},
				{
					loader: 'sass-loader',
					options: {
						outputStyle: 'expanded',
						sourceMap: true,
					}
				},
				{
					loader: 'postcss-loader',
					options: {
						plugins: function () {
							return [autoprefixer]
						}
					}
				}
			]
		}, {
			test: /\.png$/,
			loader: 'file-loader'
		},
		{
			test: /\.jpg$/,
			loader: 'file-loader'
		},
		{
			test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url-loader',
			options: {
				limit: 100000,
				mimetype: 'application/font-woff',
			}
		},
		{
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url-loader',
			options: {
				limit: 100000,
				mimetype: 'application/octet-stream',
			}
		},
		{
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'file-loader'
		},
		{
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: 'url-loader',
			options: {
				limit: 100000,
				mimetype: 'image/svg+xml',
			}
		},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.LoaderOptionsPlugin({
			debug: true
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jquery: "jquery",
			"window.jQuery": "jquery",
			jQuery: "jquery"
		}),
	],
	devtool: 'eval-source-map',
	devServer: {
		hot: true,
		inline: false,
		contentBase: path.join(__dirname, 'src/client/dist'),
		historyApiFallback: true,
		port: 8080,
		proxy: {
			'/api/*': {
				target: 'http://127.0.0.1:5000'
			}
		}
	}
};

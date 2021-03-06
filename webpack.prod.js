const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].[contenthash].css',
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			favicon: './src/llama.png',
			minify: true,
		}),
		new ForkTsCheckerWebpackPlugin({ async: false }),
	],

	module: {
		rules: [
			{
				test: /\.(png|jpg|svg|gif|webp)$/,
				type: 'asset/resource',
				loader: ImageMinimizerPlugin.loader,
				options: {
					severityError: 'warning', // Ignore errors on corrupted images
					minimizerOptions: {
						plugins: ['gifsicle'],
					},
				},
				generator: {
					filename: './assets/images/[hash][ext][query]',
				},
			},
		],
	},
})

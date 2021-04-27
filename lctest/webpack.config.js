/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
	entry: "./test.js",
	mode: process.env.WEBPACK_MODE || "production",
	module: {
		rules: [{
			include: path.resolve(__dirname, "./src"),
			loader: "ts-loader",
			options: {
				transpileOnly: true,
			},
			test: /\.ts$/,
		}],
	},
	output: {
		filename: "test.js",
		path: path.resolve(__dirname, "./dist"),
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
	],
	resolve: {
		extensions: [
			".js",
			".ts",
		],
	},
};

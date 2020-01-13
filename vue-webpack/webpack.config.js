

const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {

	entry: "./src/entrada.js",
	output: {

		filename: "salida.js"

	},
	module: {

		rules: [

			{

				test: /\.vue$/,
				loader: "vue-loader"

			}

		]

	},
	plugins: [

		new HtmlWebpackPlugin({

			template: "./src/index.html"

		}),
		new VueLoaderPlugin()

	]

}


const path = require('path');

module.exports = {
	module: {
		loaders: [{
			test: /.scss$/,
			loaders: ["style", "css", "sass"],
			include: path.resolve(__dirname, '../')
		}, {
			test: /.module.(s?)css$/, // Import these files as CSS Modules.
			loaders: ["style", "css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]", "sass"],
			include: path.resolve(__dirname, '../')
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel'
		}]
	}
}

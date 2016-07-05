module.exports = {
	context: __dirname + '/src',
	entry: './react.js',
	output: {
		path: './bin',
		filename: './src/react.js'
	},
	devServer: {
		contentBase: __dirname + '/bin',
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};
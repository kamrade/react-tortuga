module.exports = {
	entry: './public/app.jsx',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Greeter: './components/Greeter.jsx',
			GreeterMessage: './GreeterMessage.jsx',
			GreeterForm: './GreeterForm.jsx'
		},
		extensions: ['.js', '', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|lib)/
			}
		]
	}
};

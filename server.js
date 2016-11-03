var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	res.render('index', {
		title: 'Greeter Component'
	});
});

app.listen(3000, function() {
	console.log('express server is up on port ' + port);
});

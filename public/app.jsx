var React = require('react');
var ReactDOM = require('react-dom');

var Greeter = require('./components/Greeter');

var secondName ='Yoman';
var message = 'Yo yo yo'
ReactDOM.render(
	<Greeter
		name={secondName}
		message={message}
	/>,
	document.getElementById('app')
);

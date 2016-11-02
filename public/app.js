console.log('main.js');

var Greeter = React.createClass({
	render: function() {
		return (
			<div>
				<h2>Hello, React!</h2>
				<p>This is from a component</p>
			</div>
		);
	}
});

ReactDOM.render(
	<Greeter />,
	document.getElementById('app')
);

var React = require('react');

var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
	getDefaultProps: function() {
		return {
			name: 'React',
			message: 'I gues You feel fine today'
		};
	},
	getInitialState: function() {
		return {
			name: this.props.name,
			message: this.props.message
		};
	},
	handleNewValues: function(updates) {
		this.setState(updates);
	},
	render: function() {
		var name = this.state.name;
		var message = this.state.message;
		return (
			<div>
				<GreeterMessage
					name={name}
					message={message}
				/>
				<GreeterForm
					onNewValues={this.handleNewValues}
				/>
			</div>
		);
	}
});

module.exports = Greeter;

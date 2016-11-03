console.log('main.js');

var GreeterMessage = React.createClass({
	render: function() {
		var name = this.props.name;
		var message = this.props.message;
		return (
			<div>
				<h2>Hello {name}!</h2>
				<p>{message}</p>
			</div>
		);
	}
});

var GreeterForm = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();

		var updates = {};

		var name = this.refs.name.value;
		var message = this.refs.message.value;

		if(name.length > 0) {
			this.refs.name.value = '';
			updates.name = name;
		}
		if(message.length > 0) {
			this.refs.message.value = '';
			updates.message = message;
		}

		this.props.onNewValues(updates);
	},
	render: function() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name" placeholder="Enter your name"/>
				<div>
					<textarea
						ref="message" cols="30" rows="10"
						placeholder="Enter your message">
					</textarea>
				</div>
				<button>Set Name</button>
			</form>
		);
	}
});

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
					onNewName={this.handleNewName}
					onNewMessage={this.handleNewMessage}
				/>
			</div>
		);
	}
});

var secondName ='Michailov';
var message = 'How are You feeling today'
ReactDOM.render(
	<Greeter
		// name={secondName}
		// message={message}
	/>,
	document.getElementById('app')
);

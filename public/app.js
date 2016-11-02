console.log('main.js');

var Greeter = React.createClass({
	getDefaultProps: function() {
		return {
			name: 'React',
			message: 'Did You kill anybody today?'
		};
	},
	getInitialState: function() {
		return {
			name: this.props.name
		};
	},
	onButtonClick: function(e) {
		e.preventDefault();
		var nameRef = this.refs.name;
		var name = nameRef.value;
		nameRef.value = '';

		if (typeof name === 'string' && name.length > 0) {
			this.setState({
				name: name
			});
		}
	},
	render: function() {
		var name = this.state.name;
		var message = this.props.message;
		return (
			<div>
				<h2>Hello, {name}!</h2>
				<p>{message + '?'}</p>
				<form onSubmit={this.onButtonClick}>
					<input type="text" ref="name"/>
					<button>Set Name</button>
				</form>
			</div>
		);
	}
});

var secondName ='Michailov';

ReactDOM.render(
	<Greeter
		name={secondName}
		message="How are You today"
	/>,
	document.getElementById('app')
);

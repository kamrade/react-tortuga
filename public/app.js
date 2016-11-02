console.log('main.js');

var Greeter = React.createClass({
	getDefaultProps: function() {
		return {
			name: 'React',
			message: 'Did You kill anybody today?'
		};
	},
	onButtonClick: function(e) {
		e.preventDefault();
		var name = this.refs.name.value;
		console.log(name);
	},
	render: function() {
		var name = this.props.name;
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

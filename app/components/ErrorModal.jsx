var React = require('react');

var ErrorModal = React.createClass({
	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired,
	},
	getDefaultProps: function(){
		return {
			title: 'Ohh No! :('
		}
	},
	componentDidMount: function(){
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function(){
		var {title, message} = this.props;
		return (
			<div className="tiny reveal text-center" data-close-on-click="false" id="error-modal" data-reveal="">
  				<h4>{title}</h4>
  				<p>{message}</p>
  				<button className="button" data-close="">Okay</button>
			</div>
		);
	}
});

module.exports = ErrorModal;
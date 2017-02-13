var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

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
		var {title, message} = this.props;
		var modalMarker =  (
			<div className="tiny reveal text-center" data-close-on-click="false" id="error-modal" data-reveal="">
  				<h4>{title}</h4>
  				<p>{message}</p>
  				<button className="button" data-close="">Okay</button>
			</div>
		);
		var $modal = $(ReactDOMServer.renderToString(modalMarker));
		$(ReactDOM.findDOMNode(this)).html($modal);
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	},
	render: function(){
		return(
			<div></div>
		);
	}
});

module.exports = ErrorModal;
var React = require('react');

var WeatherMessage = ({temp, location}) => {
		return(
			<h4 className = "text-center">Its <b>{temp} &#8451;</b> in <b>{location}</b>.</h4>
		);	
}

module.exports = WeatherMessage;
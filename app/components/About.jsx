var React = require('react');

var About = (props) => {
	return (
		<div>
			<h3>About Component</h3>
			<p>This is the Weather Application built on <b>ReactJS</b>. I have made this with the help of <b>The Complete React App Developer Course</b></p>
			<p>Here are some of the tools I've wroked on:</p>
			<ul>
				<li>
					<a href = "https://facebook.github.io/react/">React</a> - This is the JavaScript latest Component Based UI Library.
				</li>

				<li>
					<a href = "http://openweathermap.org/">Open Weather Map</a> - Called the API from this website to fetch current Weather.
				</li>

				<li>
					<a href = "https://github.com/AsadMarfani/ReactWeather.git">GitHub Repo</a> - All the source code related to this app can find it here.
				</li>

				<li>
					<a href = "http://morning-cliffs-30316.herokuapp.com/#/">Live App</a> - Can see the magic of React by seeing the live working app.
				</li>
			</ul>
		</div>
		);
}
module.exports = About;
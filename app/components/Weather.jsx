var React = require('react'); 
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var Weather = React.createClass({
	getInitialState: function(){
		return {
			isLoading: false
	};
},
	_handleSearch: function(location){
		var that = this;
		this.setState({
			isLoading: true
		});
		openWeatherMap.getTemp(location).then(function(data){
			that.setState({	
			location: data.name,
			temp: data.main.temp,
			isLoading: false
		});
		}, function(errorMessage){
			that.setState({
				isLoading: false,
				temp: undefined,
				location: undefined
			})
			alert(errorMessage);
		}
	);
},
	render: function() {
		var {isLoading, temp, location} = this.state;
		function renderMessage(){
			if(isLoading){
				return <h4>Fetching Weather...</h4>
			}
			else if(temp && location) {
				return <WeatherMessage location = {location} temp = {temp}/>
			}

		}
		return (
			<div>
			<h3 className = "text-center">Weather Component</h3>
			<WeatherForm onSearch = {this._handleSearch}/>
			{renderMessage()}	
			</div>
		);
	}

});

module.exports = Weather;
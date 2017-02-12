var React = require('react'); 
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');
var Weather = React.createClass({
	getInitialState: function(){
		return {
			isLoading: false,
			errorMessage: undefined
	};
},
	_handleSearch: function(location){
		var that = this;
		this.setState({
			isLoading: true,
			errorMessage: undefined
		});
		openWeatherMap.getTemp(location).then(function(data){
			that.setState({	
			location: data.name,
			temp: data.main.temp,
			isLoading: false
		});
		}, function(errorMsg){
			that.setState({
				isLoading: false,
				temp: undefined,
				location: undefined,
				errorMessage: errorMsg
			})
			
		}
	);
},
	render: function() {
		var {isLoading, temp, location,errorMessage} = this.state;
		function renderMessage(){
			if(isLoading){
				return <h4>Fetching Weather...</h4>
			}
			else if(temp && location) {
				return <WeatherMessage location = {location} temp = {temp}/>
			}

		}
		function renderErrorMessage(){
			if(typeof errorMessage === "string" ){
				return (
					<ErrorModal message = {errorMessage}/>
				);
			}
		}
		return (
			<div>
			<h3 className = "text-center page-title">Weather Component</h3>
			<WeatherForm onSearch = {this._handleSearch}/>
			{renderMessage()}
			{renderErrorMessage()}
			</div>
		);
	},

});

module.exports = Weather;
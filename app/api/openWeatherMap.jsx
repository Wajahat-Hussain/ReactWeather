var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=2865453322f89941d90a1e7df88adb8e&units=metric';

module.exports = {

	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(res => {
		if (res.data.cod === 200){
                return res.data;//.data.main.temp;
            }
            throw res.data.cod;
        }, res => {
            throw (res && ((res.response && res.response.data && (res.response.data.message || res.response.data)) || (res.code))) || res;
        });
   }
};
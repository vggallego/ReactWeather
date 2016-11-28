var axios = require('axios');

const YQL_BASE_API = 'https://query.yahooapis.com/v1/public/yql';

//https : //query.yahooapis.com/v1/public/yql?q=select item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text=%27Vigo%27)&format=json

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location),
        requestUrl,
        yql_weather_query = '?q=select item from weather.forecast where woeid in',
        yql_location_query = '',
        yql_format_param = '&format=json';

        yql_location_query = `(select woeid from geo.places(1) where text="${encodedLocation}") and u='c'`;
        requestUrl = `${YQL_BASE_API}${yql_weather_query}${yql_location_query}${yql_format_param}`;

        return axios.get(requestUrl).then(function(res) {
            console.log(res);
            var error = {};
            if (res.data.query.results) {
                return res.data.query.results.channel.item.condition;
            } else {
                error.msg = 'No results for location: ' + location;
                error.location = location;
                error.response = res;
                throw error;
            }
        }, function(res) {
            error.msg = 'Error retrieving data';
            error.location = location;
            error.response = res;
            throw error;
        });
    }
}

var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var yahooWeather = require('yahooWeather');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;

        this.setState ({ isLoading: true});

        yahooWeather.getTemp(location).then(function(condition){
            that.setState({
                location: location,
                temp: condition.temp,
                condition: condition.text,
                isLoading: false,
            });
        }, function (errorMessage) {
            that.setState ({ isLoading: false});
            alert(errorMessage);
        });
    },
    render: function () {
        var {isLoading, temp, condition, location} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center"> Fetching weather ... </h3>;
            } else if (temp, condition, location) {
                return <WeatherMessage condition={condition} location={location} temp={temp}/>;
            }
        }

        return (
            <div>
                <h1 className="text-center">Get wheater</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage ()}
            </div>
        );
    }
});

module.exports = Weather;

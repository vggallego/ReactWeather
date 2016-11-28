var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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

        this.setState ({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined,
            condition: undefined
        });

        yahooWeather.getTemp(location).then(function(condition){
            that.setState({
                location: location,
                temp: condition.temp,
                condition: condition.text,
                isLoading: false,
            });
        }).catch(function (error) {
            console.log('YAPI Error ', error);
            that.setState ({
                 isLoading: false,
                 errorMessage: error.msg
             });
        });;
    },
    componentDidMount: function () {
        var location = this.props.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch (location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps : function (newProps) {
        var location = newProps.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch (location);
            window.location.hash = '#/';
        }
    },
    render: function () {
        var {isLoading, temp, condition, location, errorMessage} = this.state;

        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center"> Fetching weather ... </h3>;
            } else if (temp, condition, location) {
                return <WeatherMessage condition={condition} location={location} temp={temp}/>;
            }
        }

        function renderError () {
            console.log('renderError', errorMessage);
            console.log('typeof renderError', typeof errorMessage);
            if (typeof errorMessage === 'string') {
                console.log('Returning error modal');
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage ()}
                {renderError ()}
            </div>
        );
    }
});

module.exports = Weather;

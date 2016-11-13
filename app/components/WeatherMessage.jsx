var React = require('react');

// var WeatherMessage = React.createClass ({
//     render: function() {
//         var {temp, location} = this.props;
//         return (
//             <h3>It's {temp} in {location}</h3>
//         );
//     }
// });

var WeatherMessage = ({temp, condition, location}) => {
    return (
        <h3 className="text-center">{condition} and {temp} degrees in {location}</h3>
    );
}

module.exports = WeatherMessage;

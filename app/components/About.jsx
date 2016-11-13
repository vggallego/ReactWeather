var React = require('react');

// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About Component!</h3>
//         );
//     }
// });
//Only if we use render
var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About Component!</h1>
            <p>This is the weather application build on React. </p>
            <p> Here are some of the tool I used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react"> React framework</a>
                </li>
            </ul>
        </div>
    );
};

module.exports = About;

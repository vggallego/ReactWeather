// var names = ['Marian', 'Raquel', 'Jen'];
//
// names.forEach(function(name) {
//     console.log(name);
// });
//
// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Victor'))

// var person = {
//     name: 'Victor',
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         });
//     }
// }
//
// person.greet();

function add (a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
}

var addExpression = (a, b) => a + b;

console.log(addExpression(1, 3));
// console.log(add(9, 0));
// console.log(add(9, 0));

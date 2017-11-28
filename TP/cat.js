// var Cat = {
//     legs:4,
//     head:1,
//     ears:2,
//     sayHello: function() {
//         console.log("Meow, Can I Haz Cheezburger ?");
//     }
// }

var Cat = function() {}

Cat.prototype = {
    legs: 4,
    head: 2,
    ears: 2,
    sayHello: function() {
      console.log('Meow, Can I Haz Cheezburger ?');
    }
  };
module.exports = Cat;
// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };
var images = ['images/pig.png', 'images/grasshopper.png', 'images/cowboy.png'];
var Dancer = function(top, left, timeBetweenSteps) {
  var index = Math.floor(Math.random() * images.length);
  this.$node = $('<span class="dancer"><img src=' + images[index] + ' height="100" width="100"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(dancersInLine) {
  var left = $('body').width() / dancers.length * dancersInLine;
  this.setPosition(Math.floor($('body').height() / 2), left);
};

var pixelToNumber = function(string) {
  // string will look like "5px"
  var slicer = string.slice(0, string.length - 2);
  return parseInt(slicer);
};



















var ColorChangingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};

ColorChangingDancer.prototype = Object.create(Dancer.prototype);
ColorChangingDancer.prototype.constructor = ColorChangingDancer;

ColorChangingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  var styleSettings = {
    'borderColor': '#' + randomColor
  };
  this.$node.css(styleSettings);
};
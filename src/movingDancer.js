var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.setPosition(pixelToNumber(this.$node.css('top')) + 1, pixelToNumber(this.$node.css('left')) + 1);
};
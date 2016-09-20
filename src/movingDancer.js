var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.xDirection = 10;
  this.yDirection = 10;
};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  var top = pixelToNumber(this.$node.css('top'));
  var left = pixelToNumber(this.$node.css('left'));
  var borderWidth = pixelToNumber(this.$node.css('border-width')) || 10;
  var width = this.$node.width() || 100;
  dancers.forEach((dancer) => {
    var dancerY = pixelToNumber(dancer.$node.css('top'));
    var dancerX = pixelToNumber(dancer.$node.css('left'));

    if (top === dancerY && left === dancerX) {
      return;
    }

    if (Math.abs(top - dancerY) < width + 2 * borderWidth + 10 &&
      Math.abs(left - dancerX) < width + 2 * borderWidth + 10) {
      if (Math.abs(top - dancerY) < Math.abs(left - dancerX)) {
        this.xDirection *= -1;
      } else {
        this.yDirection *= -1;
      }
    }
  });
  this.setPosition(top + this.yDirection, left + this.xDirection);
};

MovingDancer.prototype.lineUp = function(dancersInLine) {
  this.xDirection = 0;
  this.yDirection = 0;
  Dancer.prototype.lineUp.call(this, dancersInLine);
};
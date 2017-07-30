// Circle
// =============================================================
var Circle = {
  text: {
    buffer: null,
    color: '#000',
    size: 14,
    font: 'Arial'
  },
  angle: 0,
  color: '#000',
  positionX: width/2,
  positionY: height/2,
  radius: 10,
  create: function(color) {
    var object = Object.create(this);

    object.color = color ? color : object.color;

    return object;
  },
  update: function() {
    var startAngle = 0;
    var endAngle = 360;

    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.positionX, this.positionY, this.radius, startAngle, endAngle, false);
    context.fill();
    context.stroke();

    if (this.text.buffer) {
      context.font = `${this.text.size}px ${this.text.font}`;
      var textWidth = context.measureText(this.text.buffer).width;
      context.fillStyle = this.text.color;
      context.fillText(this.text.buffer, this.positionX - textWidth / 2, this.positionY + this.text.size/2);
    }
  },
  setPosition: function(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
  },
  moveTo(x, y) {
    this.positionX = x;
    this.positionY = y;
  },
  setRadius: function(radius) {
    this.radius = radius;
  },
  setText: function(text, color) {
    this.text.buffer = text;
    this.text.color = color;
  }
};


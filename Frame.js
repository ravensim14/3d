// Frame
// =============================================================
var Frame = {
  textPositionX: 3,
  textPositionY: 40,
  currentFrame: 0,
  font: '15px Comic Sans MS',
  textColor: '#000',
  create: function() {
    var object = Object.create(this);

    return object;
  },
  update: function() {
    this.text = `Current Frame: ${this.currentFrame}`;

    context.textAlign = 'left';
    context.font = this.font;
    context.fillStyle = this.textColor;
    context.fillText(this.text, this.textPositionX, this.textPositionY);

    this.currentFrame += 1;
  }
};

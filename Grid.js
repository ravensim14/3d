// Grid
// =============================================================
var Grid = {
  step: 100,
  color: 'rgba(0, 0, 0, 0.8)',
  create: function() {
    var object = Object.create(this);

    return object;
  },
  update: function() {
    var fontSize = 18;

    context.lineWidth = 1;
    context.font = `${fontSize}px Arial`;
    context.textAlign = 'left';
    context.strokeStyle = this.color;

    // vertical lines
    for (var i=0; i<width; i += this.step) {
      // draw numbers
      var text = `${i}`;
      context.fillText(text, i + 2, fontSize);

      // draw line vertical
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(i, height);
      context.stroke();
    }

    // horizontal lines
    for (var i=0; i<height; i += this.step) {
      // draw numbers
      var text = `${i}`;
      context.fillText(text, 2, i - 3);

      // draw line horizontal
      context.beginPath();
      context.moveTo(0, i);
      context.lineTo(width, i);
      context.stroke();
    }
  }
};


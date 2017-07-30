(function(ctx) {
  // Distance Array
  // =============================================================
  function DistanceArr(pos1, pos2) {
    var x1 = pos1[0];
    var y1 = pos1[1];

    var x2 = pos2[0];
    var y2 = pos2[1];

    var distance = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));

    return distance;
  }

  // Circle
  // =============================================================
  function Circle(options) {
    this.mouseover = false;
    this.strokeStyle = '#000';
    this.fillStyle = '#111';
    this.radius = 20;
    this.position = {
      x: 100,
      y: 200
    };

    this.text = {
      size: 12,
      font: `Arial`,
      buffer: ''
    };
    
    // options

    if (!options) { options = {}; }

    this.radius = options.radius ? options.radius : this.radius;
    this.fillStyle = options.fillStyle ? options.fillStyle : this.fillStyle;
    this.strokeStyle = options.strokeStyle ? options.strokeStyle : this.strokeStyle;

    window.addEventListener('click', () => {
      if (this.mouseover) {
        this.onclick();
      }
    });
  }

  Circle.prototype.setRadius = function(radius) {
    this.radius = radius;
  };

  Circle.prototype.draw = function() {

    var startAngle = 0;
    var endAngle = 360 * Math.PI / 180;

    ctx.lineWidth = 2;
    ctx.fillStyle = this.fillStyle;
    ctx.strokeStyle = this.strokeStyle;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, startAngle, endAngle, false);
    if (ctx.isPointInPath(mouse.x, mouse.y)) {
      this.mouseover = true;
    } else {
      this.mouseover = false;
    }

    if (this.mouseover) {
      ctx.fillStyle = '#F00';
    } else {
      ctx.fillStyle = this.fillStyle;
    }

    ctx.fill();
    ctx.stroke();
  };

  Circle.prototype.drawText = function() {
    var textWidth = context.measureText(this.text.buffer).width;
    ctx.textAlign = 'center';
    ctx.font = `${this.text.size}px ${this.text.font}`;
    ctx.fillStyle = '#000';
    // ctx.fillText(this.text.buffer, this.position.x - textWidth/2, this.position.y + this.text.size/2);
    ctx.fillText(this.text.buffer, this.position.x, this.position.y + this.text.size / 2 - 1);
  };

  Circle.prototype.update = function() {
    this.draw();
    this.drawText();
  };

  Circle.prototype.moveTo = function(x, y) {
    this.position.x = x;
    this.position.y = y;
  };

  Circle.prototype.setFill = function(style) {
    this.fillStyle = style;
  };

  Circle.prototype.setText = function(text) {
    this.text.buffer = text;
  };

  Circle.prototype.getX = function() {
    return this.position.x;
  };

  Circle.prototype.getY = function() {
    return this.position.y;
  };

  var centerX = width / 2;
  var centerY = height / 2;

  // Manual
  // =============================================================
  function Manual() {
    this.circle1 = new Circle();
    this.circle2 = new Circle();
    this.circle3 = new Circle();
    this.circle4 = new Circle();

    this.circle1.moveTo(200, 350);
    this.circle2.moveTo(500, 50);
    this.circle3.moveTo(500, 350);
    this.circle4.moveTo(centerX, centerY);

    this.circle4.setRadius(50);

    this.circle1.setFill('#3FF');
    this.circle2.setFill('#FF3');
    this.circle3.setFill('#F33');

    this.circle1.setText('C1');
    this.circle2.setText('C2');
    this.circle3.setText('C3');

    this.circle1.onclick = function() {
      this.position.y += 10;
    };

    this.circle2.onclick = function() {
      this.position.x += 10;
    };

    this.circle3.onclick = function() {
      this.position.x += 10;
    };
  }

  Manual.prototype.update = function() {

    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000';

    // line from C1 to C2
    // ============================================================================
    ctx.beginPath();
    ctx.moveTo(this.circle1.getX(), this.circle1.getY());
    ctx.lineTo(this.circle2.getX(), this.circle2.getY());
    // line from C2 to C3
    ctx.lineTo(this.circle3.getX(), this.circle3.getY());
    // line from C3 to C1
    ctx.lineTo(this.circle1.getX(), this.circle1.getY());
    ctx.stroke();

    // The Midpoint Formula
    // Mx = (x1 + x2) / 2;
    // My = (y1 + y2) / 2;

    // The Distance Formula
    // D = sqrt((x2 - x1)^2 + (y2 - y1)^2);

    // text (length / distance) between C1 and C3
    // ============================================================================
    var fontSize = 12;

    var x1 = this.circle1.getX();
    var y1 = this.circle1.getY();

    var x2 = this.circle3.getX();
    var y2 = this.circle3.getY();

    var x = (x1 + x2) / 2;
    var y = (y1 + y2) / 2;

    var distance = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));

    var text = `${distance.toFixed(2)} pixels`;

    ctx.font = `${fontSize}px Arial`;
    ctx.fillText(text, x, y - fontSize / 2);

    // text (length / distance) between C1 and C2
    // ============================================================================

    x1 = this.circle1.getX();
    y1 = this.circle1.getY();

    x2 = this.circle2.getX();
    y2 = this.circle2.getY();

    x = (x1 + x2) / 2;
    y = (y1 + y2) / 2;

    distance = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));

    text = `${distance.toFixed(2)} pixels`;
    ctx.fillText(text, x, y - fontSize / 2);

    // text (length / distance) between C2 and C3
    // ============================================================================

    x1 = this.circle2.getX();
    y1 = this.circle2.getY();

    x2 = this.circle3.getX();
    y2 = this.circle3.getY();

    x = (x1 + x2) / 2;
    y = (y1 + y2) / 2;

    distance = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));

    text = `${distance.toFixed(2)} pixels`;
    ctx.fillText(text, x, y - fontSize / 2);

    this.circle1.update();
    this.circle2.update();
    this.circle3.update();

    // text angle C1
    // ============================================================================
    x = this.circle1.getX() + 40;
    y = this.circle1.getY() - 5;

    var opposite = DistanceArr([this.circle3.getX(), this.circle3.getY()], [this.circle2.getX(), this.circle2.getY()]);
    var hypotenuse = DistanceArr([this.circle1.getX(), this.circle1.getY()], [this.circle2.getX(), this.circle2.getY()]);

    // console.log(opposite, hypotenuse);

    var angle = Math.asin(opposite / hypotenuse);
     angle = angle * 180 / Math.PI;
    text = `${angle.toFixed(2)}`;

    ctx.fillText(text, x, y - fontSize / 2);
  };


  window.Manual = Manual;
})(context);

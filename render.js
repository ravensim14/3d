var circle = Circle.create();
circle.setPosition(500, 350);

var frame = Frame.create();

var manual = new Manual();
var grid = Grid.create();
var circle2 = Circle.create();

circle2.setPosition(50, 50);
circle2.outerPositionX = 500;
circle2.outerPositionY = 350;
circle2.outerRadius = 300;
circle2.speed = 0.01;

// render
// =============================================================
var render = function() {
  context.clearRect(0, 0, width, height);

  // render random lines
  context.lineWidth = 1;
  for (var i=0; i<100; i++) { 
    context.strokeStyle = 'rgba(0, 0, 0, 0.4)';
    context.beginPath(); 
    context.moveTo(Math.random() * width, Math.random() * height); 
    context.lineTo(Math.random() * width, Math.random() * height); 
    context.stroke(); 
  } 

  // update object each frame
  grid.update();
  circle.update();

  // update / render circle 2

  context.beginPath();
  context.arc(circle2.outerPositionX, circle2.outerPositionY, circle2.outerRadius, 0, 360);
  context.stroke();

  circle2.positionX = circle2.outerPositionX + Math.cos(circle2.angle) * circle2.outerRadius;
  circle2.positionY = circle2.outerPositionY + Math.sin(circle2.angle) * circle2.outerRadius;

  var text = `Current Angle: ${circle2.angle.toFixed(2)} radians (${(circle2.angle * 180 / Math.PI).toFixed(2)} degrees)`;
  var centerX = width / 2;
  var centerY = height / 2;

  var fontSize = 14;
  context.font = `${fontSize}px Arial Narrow`;
  context.textAlign = 'center';

  context.fillText(text, circle2.outerPositionX, circle2.outerPositionY - 40 + fontSize);

  var angleInDegrees = circle2.angle * 180 / Math.PI;

  text = `Current Angle: ${(angleInDegrees % 360).toFixed(2)} degrees ( deg % 360 )`;

  context.fillText(text, circle2.outerPositionX, circle2.outerPositionY + 40);

  circle2.angle += circle2.speed;

  circle2.update();

  // draw line from circle to circle2
  context.beginPath();
  context.moveTo(circle.positionX, circle.positionY);
  context.lineTo(circle2.positionX, circle2.positionY);
  context.stroke();

  // update manual object

  manual.update();

  // update frame
  frame.update();
  requestAnimationFrame(render);
};
render();


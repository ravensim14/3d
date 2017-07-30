function Mouse() {
  this.x = 0;
  this.y = 0;
};

(function() {
  var mouse = new Mouse();

  window.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.mouse = mouse;
})();


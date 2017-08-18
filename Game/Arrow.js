var Arrow = {
	color: "#FF3",
	x: null,
	y: null,
	game: null,
	mouse: null,
	angle: 0,
	context: null,
	mouse: {
		x: 0,
		y: 0,
		initialize: function() {
			document.body.addEventListener('mousemove', (event) => {
				this.x = event.clientX;
				this.y = event.clientY;
			});
		}
	},
	create: function(game) {
		var obj = Object.create(this);
		obj.game = game;
		obj.context = game.context;

		obj.x = game.centerX;
		obj.y = game.centerY;

		obj.mouse.initialize();

		return obj;
	},
	update: function() {
		this.context.save();

		this.context.strokeStyle = this.color;

		this.context.translate(this.x, this.y);

		this.angle = Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x);

		this.context.rotate(this.angle);

		this.context.beginPath();
		this.context.moveTo(20, 0);
		this.context.lineTo(-20, 0);
		this.context.moveTo(20, 0);
		this.context.lineTo(10, -10);
		this.context.moveTo(20, 0);
		this.context.lineTo(10, 10);
		this.context.stroke();

		this.context.restore();
	},
	moveTo: function(x, y) {
		this.x = x;
		this.y = y;
	}
};

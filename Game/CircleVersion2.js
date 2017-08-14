var CircleVersion2 = {
	color: "#000",
	angle: 0,
	speed: 0.05,
	radius: 10,
	outerRadius: 100,
	x: 300,
	y: 300,
	game: null,
	context: null,
	create: function(game) {
		var object = Object.create(this);
		object.game = game;
		object.context = game.context;

		return object;
	},
	update: function() {
		this.x = this.game.centerX + Math.cos(this.angle) * this.outerRadius;
		this.y = this.game.centerY + Math.sin(this.angle) * this.outerRadius;

		this.context.fillStyle = this.color;
		this.context.strokeStyle = this.color;

		this.context.save();
		// this.context.translate(-250, 0);

		// DRAW CIRCLE
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
		this.context.fill();

		// DRAW OUTER CIRCLE
		this.context.beginPath();
		this.context.arc(this.game.centerX, this.game.centerY, this.outerRadius, 0, Math.PI*2);
		this.context.stroke();

		this.context.restore();

		this.angle += this.speed;
	}
};

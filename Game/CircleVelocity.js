var CircleVelocity = {
	game: null,
	fill: "#FFF",
	position: Vector.create(100, 100),
	velocity: Vector.create(0, 0),
	create: function(game) {
		var object = Object.create(this);
		object.game = game;

		object.initialize();
		return object;
	},
	initialize: function() {
		this.velocity.setLength(3);
		this.velocity.setAngle(Math.PI/6);
	},
	update: function() {
		var ctx = this.game.context;
		ctx.fillStyle = this.fill;

		this.position.addTo(this.velocity);
		ctx.beginPath();
		ctx.arc(this.position.getX(), this.position.getY(), 3, 0, Math.PI*2);
		ctx.fill();

		if (this.position.getX() > this.game.width) {
			this.velocity.setLength(-this.velocity.getLength());
		}

		if (this.position.getX() < 0) {
			this.velocity.setLength(-this.velocity.getLength());
		}
	}
};

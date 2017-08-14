var Acceleration = {
	particle: Particle.create(0, 0, 8, -Math.PI/2),
	acceleration: Vector.create(0.1, 0.1),
	create: function(game) {
		var object = Object.create(this);
		object.game = game;
		object.initialize();
		return object;
	},
	initialize: function() {
		// this.particle.position.setX(this.game.centerX);
		this.particle.position.setY(this.game.height);
	},
	update: function() {
		var ctx = this.game.context;

		this.particle.accelerate(this.acceleration);
		this.particle.update();

		ctx.fillStyle = "#FFF";

		ctx.beginPath();
		ctx.arc(this.particle.position.getX(), this.particle.position.getY(), 20, 0, Math.PI*2);
		ctx.fill();
	}
};

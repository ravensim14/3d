var Gravity = {
	game: null,
	fill: "#FF0",
	particles: [],
	gravity: Vector.create(0, 0.1),
	create: function(game) {
		var object = Object.create(this);
		object.game = game;

		for (var i=0; i<20; i++) {
			object.addParticle(game.centerX, game.centerY, Math.random()*5+2, Math.random()*Math.PI*2);
		}

		return object;
	},
	addParticle: function(x, y, speed, angle) {
		var particle = Particle.create(x, y, speed, angle);
		this.particles.push(particle);
	},
	update: function() {
		var ctx = this.game.context;

		ctx.fillStyle = this.fill;

		this.particles.forEach((particle) => {
			particle.update();
			particle.accelerate(this.gravity);

			ctx.beginPath();
			ctx.arc(particle.position.getX(), particle.position.getY(), 4, 0, Math.PI*2);
			ctx.fill();
		});
	}
};

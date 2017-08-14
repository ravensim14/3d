var ParticleCircle = {
	game: null,
	fill: "#FFF",
	particle: Particle.create(0/*x*/, 0/*y*/, 3/*speed*/, Math.PI/3/*angle*/),
	particles: [],
	create: function(game) {
		var obj = Object.create(this);
		obj.game = game;

		obj.initialize();
		return obj;
	},
	initialize: function() {
		for (var i=0; i<20; i+=1) {
			this.createParticle(this.game.centerX, this.game.centerY, Math.random()*4+1, Math.random()*Math.PI*2);
		}
	},
	createParticle: function(x, y, speed, angle) {
		var particle = Particle.create(x, y, speed, angle);
		this.particles.push(particle);
	},
	update: function() {
		var ctx = this.game.context;

		ctx.fillStyle = this.fill;

		this.particles.forEach(function(particle) {
			particle.update();
			ctx.beginPath();
			ctx.arc(particle.position.getX(), particle.position.getY(), 1, 0, Math.PI*2);
			ctx.fill();
		});

		this.particle.update();

		ctx.beginPath();
		ctx.arc(this.particle.position.getX(), this.particle.position.getY(), 10, 0, Math.PI*2);
		ctx.fill();
	}
};

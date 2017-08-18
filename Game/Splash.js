var Splash = {
	game: null,
	particles: [],
	fill: "#FFF",

	// START CREATE SPLASH
	// =============================================
	create: function(game) {
		var obj = Object.create(this);

		obj.game = game;

		obj.initialize();
		return obj;
	},

	// START INITIALIZE SPLASH
	// =============================================
	initialize: function() {
		this.mouse.parent = this;
		this.mouse.initialize();
	},
	doSplash: function(x, y) {
		for (var i=0; i<20; i++) {
			this.createParticle(x, y, Math.random()*4+1, Math.random()*Math.PI*2);
		}
	},
	createParticle: function(x, y, speed, angle) {
		var particle = Particle.create(x, y, speed, angle);
		this.particles.push(particle);
	},
	// MOUSE
	// =============================================
	mouse: {
		parent: null,
		initialize: function() {
			document.body.addEventListener('click', (event) => {
				this.parent.doSplash(event.clientX, event.clientY);
			});
		}
	},
	// MAIN UPDATE SPLASH
	// =============================================
	update: function() {
		var ctx = this.game.context;
		ctx.fillStyle = this.fill;

		this.particles.forEach(function(particle) {
			particle.update();
			ctx.beginPath();
			ctx.arc(particle.position.getX(), particle.position.getY(), 1, 0, Math.PI*2);
			ctx.fill();
		});
	}
};

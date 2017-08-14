var Ship = {
	game: null,
	particle: null,
	thrust: Vector.create(0, 0),
	create: function(game) {
		var object = Object.create(this);

		object.game = game;

		object.initialize();
		return object;
	},
	initialize: function() {
		this.particle = Particle.create(this.game.centerX, this.game.height - 30, 0, 0);

		document.body.addEventListener('keydown', (event) => {
			var up = 38;
			var down = 40;
			var left = 37;
			var right = 39;
			switch (event.keyCode) 
			{
				case up: this.thrust.setY(-0.1); break;
				case down: this.thrust.setY(0.1); break;
				case left: this.thrust.setX(-0.1); break;
				case right: this.thrust.setX(0.1); break;
				default: break;
			}
		});

		document.body.addEventListener('keyup', (event) => {
			var up = 38;
			var down = 40;
			var left = 37;
			var right = 39;
			switch (event.keyCode) 
			{
				case up: this.thrust.setY(0); break;
				case down: this.thrust.setY(0); break;
				case left: this.thrust.setX(0); break;
				case right: this.thrust.setX(0); break;
				default: break;
			}
		});
	},
	update: function() {
		var ctx = this.game.context;

		this.particle.accelerate(this.thrust);
		this.particle.update();

		ctx.beginPath();
		ctx.arc(this.particle.position.getX(), this.particle.position.getY(), 10, 0, Math.PI*2);
		ctx.fill();
	}
};

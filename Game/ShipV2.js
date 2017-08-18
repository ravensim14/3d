var ShipV2 = {
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
		this.particle = Particle.create(this.game.width - 30, this.game.height - 30, 0, 0);

		document.body.addEventListener('keydown', (event) => {
			switch (event.key) 
			{
				case 'i': this.thrust.setY(-0.1); break;
				case 'k': this.thrust.setY(0.1); break;
				case 'j': this.thrust.setX(-0.1); break;
				case 'l': this.thrust.setX(0.1); break;
				default: break;
			}
		});

		document.body.addEventListener('keyup', (event) => {
			switch (event.key) 
			{
				case 'i': this.thrust.setY(0); break;
				case 'k': this.thrust.setY(0); break;
				case 'j': this.thrust.setX(0); break;
				case 'l': this.thrust.setX(0); break;
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

		if (this.particle.position.getX() > this.game.width) {
			this.particle.position.setX(0);
		}

		if (this.particle.position.getX() < 0) {
			this.particle.position.setX(this.game.width);
		}

		if (this.particle.position.getY() > this.game.height) {
			this.particle.position.setY(0);
		}

		if (this.particle.position.getY() < 0) {
			this.particle.position.setY(this.game.height);
		}
	}
};

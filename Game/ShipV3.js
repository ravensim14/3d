var ShipV3 = {
	game: null,
	particle: null,
	stroke: "#F00",
	thrust: Vector.create(0, 0),
	angle: 0,
	turningLeft: false,
	turningRight: false,
	thrusting: false,
	create: function(game) {
		var object = Object.create(this);

		object.game = game;

		object.initialize();
		return object;
	},
	initialize: function() {
		this.particle = Particle.create(30, this.game.height - 30, 0, 0);

		document.body.addEventListener('keydown', (event) => {
			switch (event.key) 
			{
				case 'w'/*up*/: this.thrusting = true; break;
				case 's'/*down*/: break;
				case 'a'/*left*/: this.turningLeft = true; break;
				case 'd'/*right*/: this.turningRight = true; break;
				default: break;
			}
		});

		document.body.addEventListener('keyup', (event) => {
			switch (event.key) 
			{
				case 'w'/*up*/: this.thrusting = false; break;
				case 's'/*down*/: break;
				case 'a'/*left*/: this.turningLeft = false; break;
				case 'd'/*right*/: this.turningRight = false; break;
				default: break;
			}
		});
	},
	update: function() {
		var ctx = this.game.context;

		if (this.turningLeft) {
			this.angle -= 0.05;
		}

		if (this.turningRight) {
			this.angle += 0.05;
		}

		this.thrust.setAngle(this.angle);

		if (this.thrusting) {
			this.thrust.setLength(0.1);
		} else {
			this.thrust.setLength(0);
		}

		this.particle.accelerate(this.thrust);
		this.particle.update();

		ctx.strokeStyle = this.stroke;

		ctx.save();
		ctx.translate(this.particle.position.getX(), this.particle.position.getY());
		ctx.rotate(this.angle);

		ctx.beginPath();
		// ctx.arc(this.particle.position.getX(), this.particle.position.getY(), 10, 0, Math.PI*2);
		ctx.moveTo(10, 0);
		ctx.lineTo(-10, -7);
		ctx.lineTo(-10, 7);
		ctx.lineTo(10, 0);
		if (this.thrusting) {
			ctx.moveTo(-10, 0);
			ctx.lineTo(-18, 0);
		}
		ctx.stroke();

		ctx.restore();

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

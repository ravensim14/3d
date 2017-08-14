var Solar = {
	game: null,
	sun: null,
	planet: null,
	create: function(game) {
		var object = Object.create(this);
		object.game = game;

		object.initialize();
		return object;
	},
	initialize: function() {
		this.sun = Particle.create(this.game.centerX, this.game.centerY, 0.1, 0);
		this.planet = Particle.create(this.game.centerX + 200, this.game.centerY, 10, -Math.PI/2);

		this.sun.mass = 20000;
	},
	update: function() {
		var context = this.game.context;

		this.planet.gravitateTo(this.sun);
		this.planet.update();
		this.sun.update();

		context.save();

		context.beginPath();
		context.fillStyle = "#FFFF00";
		context.arc(this.sun.position.getX(), this.sun.position.getY(), 20, 0, Math.PI*2);
		context.fill();

		context.beginPath();
		context.fillStyle = "#00FF00";
		context.arc(this.planet.position.getX(), this.planet.position.getY(), 5, 0, Math.PI*2);
		context.fill();

		context.strokeStyle = "#000";
		context.beginPath();
		context.arc(this.sun.position.getX(), this.sun.position.getY(), 200, 0, Math.PI*2);
		context.stroke();

		context.restore();
	}
};

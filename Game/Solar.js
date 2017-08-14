var Solar = {
	game: null,
	sun: null,
	planet: null,
	vertices: [],
	create: function(game) {
		var object = Object.create(this);
		object.game = game;

		object.initialize();
		return object;
	},
	initialize: function() {
		var input = document.createElement('input');
		input.placeholder = `Change sun's mass`;
		input.style.position = 'fixed';
		input.style.bottom = '10px';
		input.style.right = '10px';
		input.style.padding = '10px';
		input.addEventListener('change', () => {
			if (isNaN(input.value)) {
				return console.log('ONLY NUMBERS ALLOWED');
			}
			this.sun.mass = input.value;
		});
		document.body.appendChild(input);
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
		this.vertices.push([this.planet.position.getX(), this.planet.position.getY()]);
		context.fill();

		this.vertices.forEach(function(vertice) {
			context.beginPath();
			context.fillStyle = "rgba(0, 0, 0, 0.3)";
			context.arc(vertice[0], vertice[1], 1, 0, Math.PI*2);
			context.fill();

		});

		context.strokeStyle = "#000";
		context.beginPath();
		context.arc(this.sun.position.getX(), this.sun.position.getY(), 200, 0, Math.PI*2);
		context.stroke();

		context.restore();
	}
};

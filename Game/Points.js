var Points = {
	game: null,
	context: null,
	circles: [],
	Circle: {
		color: "#000",
		x: null,
		y: null,
		outerRadiusX: 60,
		outerRadiusY: 70,
		speedX: null,
		speedY: null,
		angleX: 0,
		angleY: 0,
		radius: null,
		game: null,
		context: null,
		create: function(game, radius, color) {
			var object = Object.create(this);
			object.game = game;
			object.context = game.context;
			object.radius = radius;
			object.color = color;
			object.speedX = Math.random() / 5;
			object.speedY = Math.random() / 5;
			return object;
		},
		update: function() {
			this.x = this.game.centerX + Math.cos(this.angleX) * this.outerRadiusX;
			this.y = this.game.centerY + Math.cos(this.angleY) * this.outerRadiusY;

			this.context.fillStyle = this.color;
			this.context.beginPath();
			this.context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
			this.context.fill();

			this.angleX += this.speedX;
			this.angleY += this.speedY;
		}
	},
	createCircle: function() {
		var circle = this.Circle.create(this.game, 5/*radius*/, "#F44");
		this.circles.push(circle);
	},
	create: function(game) {
		var object = Object.create(this);
		object.game = game;
		object.context = game.context;

		for (var i=0; i<10; i++) {
			object.createCircle();
		}

		return object;
	},
	update: function() {
		this.circles.forEach(function(circle) {
			circle.update();
		});
	}
};

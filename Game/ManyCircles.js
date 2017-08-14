var ManyCircles = {
	circles: [],
	maxCircles: 15,
	circle: {
		game: null,
		context: null,
		x: 0,
		y: 0,
		radius: 0,
		create: function(game, x, y, radius) {
			var object = Object.create(this);
			object.game = game;
			object.context = game.context;
			object.x = x;
			object.y = y;
			object.radius = radius;
			return object;
		},
		update: function() {
			this.context.beginPath();
			this.context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
			this.context.fill();
		}
	},
	count: 10,
	game: null,
	radius: 100,
	context: null,
	create: function(game) {
		var object = Object.create(this);

		object.game = game;
		object.context = game.context;

		object.initialize();
		return object;
	},
	addAndUpdateCircles: function() {
		this.count += 1;
		this.circles = [];
		for (var i=0; i<this.count; i++) {
			var angle = i * (Math.PI * 2 / this.count);
			var x = this.game.centerX + Math.cos(angle) * this.radius;
			var y = this.game.centerY + Math.sin(angle) * this.radius;
			var circle = this.circle.create(game, x, y, 5);
			this.circles.push(circle);
		}
	},
	initialize: function() {
		this.addAndUpdateCircles();
		var intervalId = setInterval(() => {
			this.addAndUpdateCircles();
			if (this.circles.length > this.maxCircles) {
				clearInterval(intervalId);
			}
		}, 1000);
	},
	update: function() {
		this.circles.forEach(function(circle) {
			circle.update();
		});
	}
};

var CircleVersion4 = {
	vertices: [],
	color: "#000",
	angleX: 0,
	angleY: 0,
	radius: 10,
	speedX: 0.1,
	speedY: 0.2,
	outerXRadius: 100,
	outerYRadius: 200,
	x: 300,
	y: 300,
	game: null,
	context: null,
	create: function(game) {
		var object = Object.create(this);
		object.game = game;
		object.context = game.context;

		return object;
	},
	update: function() {
		this.x = this.game.centerX + Math.cos(this.angleX) * this.outerXRadius;
		this.y = this.game.centerY + Math.sin(this.angleY) * this.outerYRadius;

		this.vertices.push([this.x, this.y]);

		this.context.fillStyle = this.color;
		this.context.strokeStyle = this.color;

		this.context.save();
		this.context.translate(220, 0);

		// DRAW VERTICES
		for (var i=0; i<this.vertices.length; i+=1) {
			this.context.beginPath();
			this.context.arc(this.vertices[i][0], this.vertices[i][1], 1, 0, Math.PI*2);
			this.context.fill();
		}

		// DRAW CIRCLE
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
		this.context.fill();

		if (false) {
			// DRAW OUTER CIRCLE
			this.context.beginPath();
			this.context.arc(this.game.centerX, this.game.centerY, this.outerRadius, 0, Math.PI*2);
			this.context.stroke();
		}

		if (false) {
			// DRAW OUTER ELLIPSE
			this.context.beginPath();
			this.context.ellipse(this.game.centerX, this.game.centerY, this.outerXRadius, this.outerYRadius, 0, Math.PI*2, false);
			this.context.stroke();
		}

		this.context.restore();

		this.angleX += this.speedX;
		this.angleY += this.speedY;
	}
};

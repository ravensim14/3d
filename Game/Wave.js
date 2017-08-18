var Wave = {
	game: null,
	context: null,
	vertices: [],
	initialize: function() {
		for (var angle=0; angle<Math.PI*2; angle += 0.01) {
			var x = angle * 200;
			var y = Math.sin(angle) * 200;
			this.vertices.push([x, y]);
		}
	},
	create: function(game) {
		var object = Object.create(this);
		object.game = game;
		object.context = game.context;
		object.initialize();
		return object;
	},
	update: function() {
		this.context.save();
		this.context.translate(0, this.game.height / 2);
		this.context.fillStyle = "#200";
		for (var i=0; i<this.vertices.length; i++) {
			this.context.fillRect(this.vertices[i][0], this.vertices[i][1], 5, 5);
		}
		this.context.restore();
	}
};

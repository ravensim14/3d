var Game = {
	width: 0,
	height: 0,
	centerX: 0,
	centerY: 0,
	create: function(query) {
		var object = Object.create(this);
		object.canvas = document.querySelector(query);
		object.width = object.canvas.width = window.innerWidth - 8;
		object.height = object.canvas.height = window.innerHeight - 8;
		object.context = object.canvas.getContext("2d");
		object.centerX = object.width / 2;
		object.centerY = object.height / 2;

		window.addEventListener('resize', () => {
			object.width = object.canvas.width = window.innerWidth - 8;
			object.height = object.canvas.height = window.innerHeight - 8;
		});

		var render = function() {
			if (object.onrender) {
				object.onrender();
			}
			requestAnimationFrame(render);
		};
		render();
		return object;
	},
};

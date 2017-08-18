var Player = {
	cookie: null,
	clicks: 0,
	game: null,
	context: null,
	clicked: function() {
		this.cookie.set('clicks', parseInt(this.cookie.get('clicks')) + 1, 1);
		this.clicks = this.cookie.get('clicks');
	},
	Button: {
		create: function() {
			var obj = Object.create(this);

			return obj;
		}
	},
	mouse: {
		down: false,
		x: 0,
		y: 0,
		initialize: function() {
			window.addEventListener('mousemove', (event) => {
				this.x = event.clientX;
				this.y = event.clientY;
			});
			window.addEventListener('mousedown', (event) => {
				this.down = true;
			});
			window.addEventListener('mouseup', (event) => {
				this.down = false;
			});
		}
	},
	card: {
		onclick: null,
		mouseover: false,
		mousedown: false,
		border: "#000",
		background: "#444",
		mousedownBackground: "#000",
		hover: {
			background: "#222"
		},
		ctx: null,
		parent: null,
		x: 10, y: 10, w: 120, h: 100,
		initialize: function() {
			this.ctx = this.parent.context;
			this.onclick = function() {
				this.parent.clicked();
			};
			window.addEventListener('click', () => {
				if (this.mouseover && this.onclick) {
					this.onclick();
				}
			});
		},
		update: function() {
			var ctx = this.parent.context;

			ctx.strokeStyle = this.border;

			if (this.mousedown) {
				ctx.fillStyle = this.mousedownBackground;
			} else if (this.mouseover) {
				ctx.fillStyle = this.hover.background;
			} else {
				ctx.fillStyle = this.background;
			}

			ctx.beginPath();
			ctx.rect(this.x, this.y, this.w, this.h);
			if (ctx.isPointInPath(this.parent.mouse.x, this.parent.mouse.y)) {
				this.mouseover = true;
				if (this.parent.mouse.down) {
					this.mousedown = true;
				}
			} else {
				this.mouseover = false;
			}

			if (!this.parent.mouse.down) {
				this.mousedown = false;
			}

			ctx.stroke();
			ctx.fill();

			var name = this.parent.name;
			var paddingLeft = 3;
			var fontSize = 12;
			var font = `${fontSize} Arial`;

			ctx.font = font;

			ctx.fillStyle = "#FFF";

			var line1 = `Name: ${name}`;
			var line2 = `Num clicks: ${this.parent.clicks}`;
			var line3 = `Mouse: [${this.parent.mouse.x}, ${this.parent.mouse.y}]`;
			var line4 = `Mouseover: [${this.mouseover}]`;
			var line5 = `Mousedown: [${this.mousedown}]`;

			ctx.fillText(line1, this.x + paddingLeft, this.y + fontSize);
			ctx.fillText(line2, this.x + paddingLeft, this.y + fontSize * 2 + 2);
			ctx.fillText(line3, this.x + paddingLeft, this.y + fontSize * 3 + 2);
			ctx.fillText(line4, this.x + paddingLeft, this.y + fontSize * 4 + 2);
			ctx.fillText(line5, this.x + paddingLeft, this.y + fontSize * 5 + 2);
		}
	},
	create: function(game, name, cookie) {
		var object = Object.create(this);
		object.cookie = cookie;
		object.game = game;
		object.context = game.context;
		object.name = name;

		var clicks = object.cookie.get('clicks');
		if (isNaN(clicks)) {
			object.cookie.set('clicks', 0, 1);
		} else if (clicks != '') 
		{
			object.clicks = clicks;
		} else {
			object.cookie.set('clicks', 0, 1);
			object.clicks = 0;
		}

		object.card.parent = object;

		object.card.initialize();

		object.mouse.initialize();

		return object;
	},
	update: function() {

		this.card.update();
	}
};

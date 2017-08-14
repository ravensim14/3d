var CircleVersion1 = {
	type: "VERTICAL",
	x: 0,
	y: 0,
	offset: 200,
	radius: 0,
	alpha: 0,
	speed: 0.1,
	angle: 0,
	game: null,
	context: null,
	create: function(game, x, y, radius, speed, offset, color, type) {
		var object = Object.create(this);
		object.game = game;
		object.context = game.context;
		object.x = x ? x : object.x;
		object.y = y ? y : object.y;
		object.radius = radius ? radius : object.radius;
		object.speed = speed ? speed : object.speed;
		object.offset = offset ? offset : object.offset;
		object.type = type ? type : object.type;
		object.color = color ? color : object.color;

		return object;
	},
	update: function() {
		if (this.type == "VERTICAL") {
			this.y = game.centerY + Math.sin(this.angle) * this.offset;
		} else if (this.type == "HORIZONTAL") {
			this.x = game.centerX + Math.sin(this.angle) * this.offset;
		} else if (this.type == "OPACITY") {
			this.alpha = 0.5 + Math.sin(this.angle) * 0.5;
		}

		if (this.type == "OPACITY") {
			this.context.fillStyle = this.setAlpha(this.color, this.alpha);
		} else {
			this.context.fillStyle = this.color;
		}
		this.context.beginPath();
		this.context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
		this.context.fill();

		this.angle += this.speed;
	},
	hextToRgbA: function(hex) {
		var c;
		if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
			c= hex.substring(1).split('');
			if(c.length== 3){
				c= [c[0], c[0], c[1], c[1], c[2], c[2]];
			}
			c= '0x'+c.join('');
			return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
		}
		throw new Error('Bad Hex');
	},
	setAlpha: function(hex, value) {
		var c;
		if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
			c= hex.substring(1).split('');
			if(c.length== 3){
				c= [c[0], c[0], c[1], c[1], c[2], c[2]];
			}
			c= '0x'+c.join('');
			return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+`,${value})`;
		}
		throw new Error('Bad Hex');
	}
};

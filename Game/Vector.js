var Vector = {
	_x: 1,
	_y: 1,
	create: function(x, y) {
		var obj = Object.create(this);

		obj.setX(x);
		obj.setY(y);

		return obj;
	},

	// SET, GET X VALUE
	// =============================
	setX: function(value) {
		this._x = value;
	},
	getX: function(value) {
		return this._x;
	},

	// SET, GET Y VALUE
	// =============================
	setY: function(value) {
		this._y = value;
	},
	getY: function(value) {
		return this._y;
	},

	// SET, GET ANGLE
	// =============================
	setAngle: function(angle) {
		var length = this.getLength();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	},
	getAngle: function() {
		return Math.atan2(this._y, this._x);
	},

	// SET, GET LENGTH
	// =============================
	setLength: function(length) {
		var angle = this.getAngle();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	},
	getLength: function() {
		return Math.sqrt(this._x * this._x + this._y * this._y);
	},

	// ADD, SUBTRACT, MULTIPLY, DIVIDE AND RETURN VECTOR 
	// ===================================================
	add: function(v2) {
		return Vector.create(this._x + v2.getX(), this._y + v2.getY());
	},

	subtract: function(v2) {
		return Vector.create(this._x - v2.getX(), this._y - v2.getY());
	},

	multiply: function(value) {
		return Vector.create(this._x * value, this._y * value);
	},

	divide: function(value) {
		return Vector.create(this._x / value, this._y / value);
	},

	// ADD, SUBTRACT, MULTIPLY, DIVIDE TO EXISTING VECTOR 
	// ===================================================
	addTo: function(v2) {
		this._x += v2.getX();
		this._y += v2.getY();
	},

	subtractFrom: function(v2) {
		this._x -= v2.getX();
		this._y -= v2.getY();
	},

	multiplyBy: function(value) {
		this._x *= value;
		this._y *= value;
	},

	divideBy: function(value) {
		this._x /= value;
		this._y /= value;
	},
};

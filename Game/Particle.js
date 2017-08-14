var Particle = {
	position: null,
	gravity: null,
	velocity: null,
	mass: 1,
	create: function(x, y, speed, direction, gravity) {
		var obj = Object.create(this);

		obj.position = Vector.create(x, y);
		obj.velocity = Vector.create(0, 0);
		obj.velocity.setLength(speed);
		obj.velocity.setAngle(direction);
		obj.gravity = Vector.create(0, gravity || 0);

		return obj;
	},
	accelerate: function(acceleration) {
		this.velocity.addTo(acceleration);
	},
	update: function() {
		this.velocity.addTo(this.gravity);
		this.position.addTo(this.velocity);
	},
	angleTo: function(particle) {
		return Math.atan2(particle.position.getY()-this.position.getY(), particle.position.getX()-this.position.getX());
	},
	distanceTo: function(particle) {
		var dx = particle.position.getX() - this.position.getX();
		var dy = particle.position.getY() - this.position.getY();
		return Math.sqrt(dx*dx + dy*dy);
	},
	gravitateTo: function(particle) {
		var gravity = Vector.create(0, 0);
		var distance = this.distanceTo(particle);

		gravity.setLength(particle.mass / (distance*distance));
		gravity.setAngle(this.angleTo(particle));

		this.velocity.addTo(gravity);
	}
};

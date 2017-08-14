var game = Game.create("canvas");
var cookie = new Cookie();
var wave = Wave.create(game);
var circle1 = CircleVersion1.create(game, game.width-100/*x*/, 300/*y*/, 50/*radius*/, 0.1/*speed*/, 200/*offset*/, "#FF0", "VERTICAL"/*type*/);
var circle2 = CircleVersion1.create(game, 100/*x*/, game.height-50/*y*/, 50/*radius*/, 0.1/*speed*/, 200/*offset*/, "#F0F", "HORIZONTAL"/*type*/);
var circle3 = CircleVersion1.create(game, 100/*x*/, game.height-50/*y*/, 50/*radius*/, 0.1/*speed*/, 200/*offset*/, "#0FF", "OPACITY"/*type*/);
var circle4 = CircleVersion2.create(game);
var circle5 = CircleVersion3.create(game);
var circle6 = CircleVersion4.create(game);
var circles = ManyCircles.create(game);
var points = Points.create(game);
var arrow = Arrow.create(game);
var arrowTwo = Arrow.create(game);
var arrowThree = Arrow.create(game);
var player = Player.create(game, "Harry Potter", cookie);
var circleVelocity = CircleVelocity.create(game);
var particleCircle = ParticleCircle.create(game);
var splash = Splash.create(game);
var acceleration = Acceleration.create(game);
var gravity = Gravity.create(game);
var ship = Ship.create(game);
var shipVersionTwo = ShipV2.create(game);
var shipVersionThree = ShipV3.create(game);
var solar = Solar.create(game);

game.onrender = function() {
	this.context.clearRect(0, 0, this.width, this.height);

	// SOLAR / SUN / EARTH
	// ============================================
	solar.update();

	/* EXAMPLE RECTANGLE 1 */
	this.context.fillStyle = "#111";
	this.context.fillRect(100, 100, 100, 100);

	/* EXAMPLE LINE 1 */
	this.context.strokeStyle = "#000";
	this.context.beginPath();
	this.context.moveTo(0, 0);
	this.context.lineTo(this.width, this.height);
	this.context.stroke();

	/* EXAMPLE LINE 2 */
	this.context.strokeStyle = "#000";
	this.context.beginPath();
	this.context.moveTo(Math.random() * this.width, Math.random() * this.height);
	this.context.lineTo(Math.random() * this.width, Math.random() * this.height);
	this.context.stroke();

	wave.update();
	circle1.update();
	circle2.update();
	circle3.update();
	circle4.update();
	circle5.update();
	circle6.update();
	circles.update();
	points.update();
	arrow.update();

	// Arrow Two
	// ============================================
	arrowTwo.moveTo(300, 300);
	arrowTwo.update();

	(() => {
		// Arrow Three
		// ============================================
		if (!arrowThree.angleX) arrowThree.angleX = 0;
		if (!arrowThree.angleY) arrowThree.angleY = 0;
		if (!arrowThree.speedX) arrowThree.speedX = Math.random() * 5 / 100;
		if (!arrowThree.speedY) arrowThree.speedY = Math.random() * 5 / 100;
		if (!arrowThree.radiusX) arrowThree.radiusX = Math.random() * 400 + 200;
		if (!arrowThree.radiusY) arrowThree.radiusY = Math.random() * 400 + 100;

		var positionX = this.centerX + Math.cos(arrowThree.angleX) * arrowThree.radiusX;
		var positionY = this.centerY + Math.cos(arrowThree.angleY) * arrowThree.radiusY;

		arrowThree.moveTo(positionX, positionY);
		arrowThree.update();

		arrowThree.angleX += arrowThree.speedX;
		arrowThree.angleY += arrowThree.speedY;
	})();

	// Player
	// ============================================
	player.update();
	
	// CIRCLE VELOCITY
	// ============================================
	circleVelocity.update();

	// PARTICLE CIRCLE
	// ============================================
	particleCircle.update();

	// SPLASH
	// ============================================
	splash.update();

	// ACCELERATION
	// ============================================
	acceleration.update();

	// GRAVITY
	// ============================================
	gravity.update();

	// SHIP
	// ============================================
	ship.update();
	shipVersionTwo.update();
	shipVersionThree.update();
};

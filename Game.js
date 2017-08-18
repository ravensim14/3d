function Mouse() {
	this.x = 0;
	this.y = 0;
};

var points = 0;

canvas=document.querySelector("canvas")
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

ctx=canvas.getContext("2d");
ctx.font = "30px Arial";

var mouse = new Mouse();

window.addEventListener('mousemove', function(e) {
	mouse.x = e.clientX;
	mouse.y = e.clientY;
});
var ring= new point(80,70,60);
var ringid=[];
var loendur=0;
for(var i=0;i<9;i++)
{
	ringid.push(new point(Math.round(Math.random()*width),Math.round(Math.random()*height),Math.round(Math.random()*100)));
	// console.log(ringid[ringid.length-1]);

}
render();
function render()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for(var i=0;i<9;i++)
	{
		if (!ringid[i]) {
			ringid[i] = new point(Math.round(Math.random()*width),Math.round(Math.random()*height),Math.round(Math.random()*100));
		};
		if(ringid[i].radius > 0.2)
		{
			ringid[i].radius -= 0.2;
		}
		else if(ringid[i].radius > 0){
			ringid[i]=new point(Math.round(Math.random()*width),Math.round(Math.random()*height),Math.round(Math.random()*100));
		}

		if (ringid[i].radius > 0) {
			circle(ringid[i]);
		}


		if(collision(ringid[i],mouse))
		{
			ringid[i].color = "green";
			ringid.splice(i, 1);
			
			loendur += 1;

			//if(ringid[i].color=="red"){
			//ringid[i].color="green";
			//}
			//else
			//ringid[i].color="red";
		} else {
			ringid[i].color = "blue";
		}
	}
	ctx.fillText(loendur,90,90);
	requestAnimationFrame(render);
}

function point(x,y,radius){
	this.x=x;
	this.y=y;
	this.color="blue";
	this.radius=radius ? radius : 0;
}

function circle(point)
{
	ctx.fillStyle = point.color;
	ctx.beginPath();
	ctx.arc(point.x,point.y,point.radius,0,2*Math.PI);
	ctx.fill();
}

function collision(ring,hiir)
{
	distance=Math.sqrt(Math.pow((hiir.x-ring.x),2)+Math.pow((hiir.y-ring.y),2));
	// console.log(distance+"  "+ring.radius);
	if (ring.radius>=distance)
	{return true;
		// console.log("jah");
	}
	else 
	{return false;}
}


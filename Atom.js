canvas=document.querySelector("canvas");
if (canvas.width  < window.innerWidth)
{
	canvas.width  = window.innerWidth;
}

if (canvas.height < window.innerHeight)
{
	canvas.height = window.innerHeight;
}
ctx=canvas.getContext("2d");

const g=0.12;
var planeet=new particle(130,160,2,Math.random()*4-2,Math.random()*4-2);
console.log(planeet);
var taht=new particle(200,200,100,0,0);
function particle(x,y,m,speedx,speedy)
{
	this.x=x;
	this.y=y;
	this.m=m;
	this.speedx=speedx;
	this.speedy=speedy;
}

function force(fx,fy)
{
	this.x=fx;
	this.y=fy;
}

function sumforce(a,b)
{
	var c={"x":0,"y":0};
	c.x=a.x+b.x;
	c.y=a.y+b.y;
	return c;
}
function gforce(a,b)
{
	var c={"x":0,"y":0};
	c.x=g*a.m*b.m/(b.x-a.x);
	c.y=g*a.m*b.m/(b.y-a.y);
	return c;
}

function multiply(a,b)
{
	var c={"x":0,"y":0};
	c.x=a.x*b;
	c.y=x.y*b;
	return c;
	
}
var t=0.1;
setInterval(render,100);


function render()
{
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.arc(taht.x,taht.y,15,0,2*Math.PI);
	ctx.arc(planeet.x,planeet.y,5,0,2*Math.PI);
	ctx.fill();
	var gravity=gforce(planeet,taht);
	var planeetf=new force(planeet.speedx,planeet.speedy);
	
	var nextplace=sumforce(gravity,planeetf);
	var location=sumforce(planeet,nextplace);

	planeet.speedx=nextplace.x;
	planeet.speedy=nextplace.y;
	
	

	planeet.x=Math.floor(location.x);
	planeet.y=Math.floor(location.y);
	console.log(location);

}



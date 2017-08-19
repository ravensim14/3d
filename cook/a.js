//particle setinterval cookie



var a;

if (!localStorage.a || localStorage.a == "" || localStorage.a == null) {
	a={x:50,y:50,radius:12}
	localStorage.a=JSON.stringify(a);
} else {
	a = JSON.parse(localStorage.a);
}

localStorage.a=JSON.stringify(a);

var canvas=document.createElement("canvas");
canvas.style.border="1px solid black";
document.body.appendChild(canvas);
ctx=canvas.getContext("2d");

var frame = 0;
var kiirusX=1;
var kiirusY=1;
render();

function render()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// console.log(`FRAME: ${frame++},`, JSON.parse(localStorage.a));
	
	ctx.beginPath();
	ctx.arc(a.x,a.y,a.radius,0,Math.PI*2);
	ctx.fill();
		a.x+=kiirusX;	
		a.y+=kiirusY;	
	if(a.x>canvas.width)
	{
		kiirusX = -kiirusX;
	}
	if(a.y>canvas.height)
	{
		kiirusY*=-1;
		
	}
	if(a.x<0)
	{
		kiirusX = -kiirusX;
	}	
	if(a.y<0)
	{
		kiirusY*=-1;
		
	}	
	
	localStorage.a=JSON.stringify(a);
	
	
	
	window.requestAnimationFrame(render);
	
	
}


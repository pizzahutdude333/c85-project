// Create a reference for the canvas
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
	{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		console.log("other key")
	}
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	{
		Alpkey();
		document.getElementById("d1").innerHTML="You pressed Alphabet key";
		console.log("alphabet key")
	}
	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	{
		numkey();
		document.getElementById("d1").innerHTML="You pressed Number key";
		console.log("number key")
	}
	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	{
		spkey();
		document.getElementById("d1").innerHTML="You pressed Special key";
		console.log("special key")
	}
	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	{
		Arrkey();
		document.getElementById("d1").innerHTML="You pressed arrow key";
		console.log("arrow key")
	}
}

function Alpkey()
{
	//upload respective image with the message.
	img_image="alpkey.png";
    add();
}
function numkey()
{
	img_image="numkey.png";
    add();
}
function Arrkey()
{
	img_image="arrkey.png";
    add();
}
function spkey()
{
	img_image="spkey.png";
    add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	

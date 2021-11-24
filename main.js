// Draw Sunrise Asgn

// Setting up canvas and graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Store imgs in variables
let cloudImg = document.getElementById("cloudImg");

// Drawing stuff using ctx

// Drawing sky
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 400, 300); 

// Drawing sun
ctx.fillStyle = "red";
ctx.beginPath()
ctx.arc(200, 300, 20, 0, 2 * Math.PI);
ctx.fill()

// Drawing grass
ctx.fillStyle = "green";
ctx.fillRect(0, 300, 400, 100); 

// Drawing cloud 
ctx.drawImage(cloudImg, 130, 125)

// Drawing cloud 
ctx.drawImage(cloudImg, 170, 100)
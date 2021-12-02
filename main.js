// Draw Sunrise Asgn

// Setting up canvas and graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Global Variables
let cloudImg = document.getElementById("cloudImg");
let x1Cloud = 130;
let x2Cloud = 170;
let rSun = 20;
let xxSun = 200;
let ySun = 300;

requestAnimationFrame(sunrise);

function sunrise() {
    // Updating Elements
    // Animate until the clouds are off the canvas 
    if (x1Cloud > -100) {
        x1Cloud -= 5
    }

    if (x2Cloud < 400) {
        x2Cloud += 5
    }

    if (rSun < 50) {
        rSun += 1;
        ySun -= 3;
        
    }
    
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 400, 300); // sky 

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(200, ySun, rSun, 0, 2 * Math.PI);
    ctx.fill(); // sun

    ctx.fillStyle = "green";
    ctx.fillRect(0, 300, 400, 100); // grass 


    ctx.drawImage(cloudImg, x1Cloud, 125) // cloud

    ctx.drawImage(cloudImg, x2Cloud, 100) // cloud

    requestAnimationFrame(sunrise);
}
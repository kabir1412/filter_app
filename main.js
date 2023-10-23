function preload(){

}

function setup(){
canvas = createCanvas(640,480);
canvas.position(110,280);

video = createCapture(VIDEO);
video.hide(); 

colour_tint = "";
}

function draw(){
image(video,0,0,640,480);
tint(colour_tint);
}

function take_snapshot(){
save("tinted_img.png");
}

function tint_color(){
colour_tint = document.getElementById("tint_colour").value;
}


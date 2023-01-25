canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
roverx=10;
rovery=10;
rover_image="rover.png";
mars_image="mars.jpg";
function add(){
    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src=mars_image;
    rover_imgTag= new Image();
    rover_imgTag.onload= uploadrover;
    rover_imgTag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}
function uploadrover(){
    ctx.drawImage(rover_imgTag, roverx, rovery, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if(keyPressed=='38')
    {
    up();
    }
    if(keyPressed=='40')
    {
    down();
    }
    if(keyPressed=='37')
    {
left();
    }
    if(keyPressed=='39'){
right();

    }
    
}
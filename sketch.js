var maxDrops = 100;
var umbrella, umbrellaImage

function preload(){
    umbrellaImage = loadImage("../walking_6.png")
}

function setup(){
   umbrella.addImage(umbrellaImage)
    
}

function draw(){
    Drop.display();
    Umbrella.display();
}   


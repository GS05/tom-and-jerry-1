    var tom, tom1_Image, tom2_Image, tom3_Image, jerry, jerry1_Image, jerry2_Image, jerry3_Image;
    var bg


function preload() {
    bg=loadImage("images/garden.png")
    tom1_Image=loadImage("images/tomOne.png");
    tom2_Image=loadAnimation("images/tomTwo.png", "images/tomThree.png");
    tom3_Image=loadImage("images/tomFour.png")
    jerry1_Image=loadImage("images/jerryOne.png");
    jerry2_Image=loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
    jerry3_Image=loadImage("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    
    tom=createSprite(850,600,10,10);
    tom.addImage("tom sleeping",tom1_Image);
    tom.scale=0.2;

    jerry=createSprite(200,600,10,10);
    jerry.addImage("jerry standing",jerry1_Image);
    jerry.scale=0.2;

}

function draw() {
    background(bg);
    if(tom.x-jerry.x<tom.width/2-jerry.width/2){
        tom.velocityX=0;
        tom.x=300;
        tom.addAnimation("tomlastimg",tom3_Image);
        tom.changeAnimation("tomlastimg");
        
        jerry.velocityX=0;
        jerry.addAnimation("jerrylastimg",jerry3_Image);
        jerry.changeAnimation("jerrylastimg");
    }
    drawSprites();
}

function keyPressed(){
    if(keyDown("LEFT_ARROW")){
        tom.velocityX=-5;
        tom.addAnimation("tom running",tom2_Image);
        
        tom.changeAnimation("tom running");

        jerry.addAnimation("jerry teasing",jerry2_Image);
        jerry.changeAnimation("jerry teasing");
        jerry.frameDelay=25;
    }
}

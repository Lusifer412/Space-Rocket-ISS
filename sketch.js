var scene, astraunaut;
var batheAn, brushAn, drinkingAn, eatingAn, gymingAn1,gymingAn2, movingAn, sleepImg ,backgroundImg;



function preload(){
  
batheAn = loadAnimation("images/bath1.png","images/bath2.png");
brushAn = loadAnimation("images/brush.png");

drinkingAn = loadAnimation("images/drink1.png","images/drink2.png");

eatingAn = loadAnimation("images/eat2.png","images/eat1.png");

gymingAn1 = loadAnimation("images/gym1.png", "images/gym2.png");
gymingAn2 = loadAnimation("images/gym11.png", "images/gym12.png");

movingAn = loadAnimation("images/move.png", "images/move1.png");
sleepImg = loadImage("images/sleep.png");

backgroundImg = loadImage("images/iss.png");

}

function setup() {
  createCanvas(400, 400);

scene = createSprite(200,200,400,400) 
scene.addImage(backgroundImg);
scene.scale = 0.1;

astraunaut = createSprite(200,200,50,50)
astraunaut.addImage("sleep",sleepImg);
astraunaut.scale = 0.1




}

function draw() {
  background(220);

if(keyDown("b")){
  astraunaut.addAnimation("bathing",batheAn);
  astraunaut.changeAnimation("bathing",batheAn);
  astraunaut.velocityY=0;
  astraunaut.velocityX=0;
}

if (keyDown("d")){
  astraunaut.addAnimation("drinking",drinkingAn);
  astraunaut.changeAnimation("drinking",drinkingAn);
  astraunaut.velocityX = 0;
  astraunaut.velocityY = 0;
}
if(keyDown("e")){
  astraunaut.addAnimation("eating",eatingAn);
  astraunaut.changeAnimation("eating",eatingAn);
  astraunaut.velocityY=0;
  astraunaut.velocityX=0;
}
if(keyDown("g")){
  astraunaut.addAnimation("gyming",gymingAn1);
  astraunaut.changeAnimation("gyming",gymingAn1);
  astraunaut.velocityY=0;
  astraunaut.velocityX=0;
}

if(keyDown("y")){
  astraunaut.addAnimation("brush",brushAn);
  astraunaut.changeAnimation("brush",brushAn);
  astraunaut.velocityX=0;
  astraunaut.velocityY=0;

}
if(keyDown("m")){
astraunaut.addAnimation("moving", movingAn);
astraunaut.changeAnimation("moving", movingAn);
astraunaut.velocityX = 5;
astraunaut.velocityX = 5;

}




drawSprites();
}


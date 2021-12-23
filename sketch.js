var backgroundImg;
var spaconave;
var iss;
var hasDocked;
var craft1Img, craft2Img,craft3Img,craft4Img;
var issImg;

function preload(){
issImg = loadImage("iss.png");
craft1Img = loadImage("spacecraft1.png");
craft2Img = loadImage("spacecraft2.png");
craft3Img = loadImage("spacecraft3.png");
craft4Img = loadImage("spacecraft4.png");
backgroundImg = loadImage("space2.png");

}


function setup() {
  createCanvas(800,400);

  hasDocked = false;

  iss = createSprite(350,150);
  iss.addImage(issImg);
  iss.scale = 0.9;

  spaconave = createSprite(400,300);
  spaconave.addImage(craft1Img);
  spaconave.scale = 0.2;
}

function draw() {
  background(backgroundImg);  

  if(!hasDocked){
    spaconave.x += random(1,-1);
    if(keyDown("UP_ARROW")){
      spaconave.addImage(craft2Img);
      spaconave.y = spaconave.y -2;
    }
      
    if(keyDown("LEFT_ARROW")){
      spaconave.addImage(craft3Img);
      spaconave.x = spaconave.x - 1;
    }
      
    if(keyDown("RIGHT_ARROW")){
      spaconave.addImage(craft4Img);
      spaconave.x = spaconave.x + 1;
    }
      
    if(keyDown("DOWN_ARROW")){
      spaconave.addImage(craft2Img);
      spaconave.y = spaconave.x +1;
    }
  }  
  if(spaconave.y <= (iss.y+70) && spaconave.x <= (iss.x-10)){
    hasDocked = true;
    textSize(30);
    fill("white")
    text("Encaixado com Sucesso! PARABÉNS!!!", 110, 300);
  }
  drawSprites();
}


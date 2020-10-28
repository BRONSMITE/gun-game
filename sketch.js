var ak47;

function preload() {

AK47 = loadImage("AK47.png");

}


function setup() {
 createCanvas (displayWidth,displayHeight);

ak47 = createSprite(70,1,50,50)
ak47.addImage(AK47);
ak47.scale=0.2;

}

function draw() {
  background("black");  
  
  ak47.y = World.mouseY
  drawSprites();
}
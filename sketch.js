function setup() {
  createCanvas(800,400);
  fixedrectangle = createSprite(400, 200, 50, 50);
  fixedrectangle.shapeColor = ("green");
  movingrectangle = createSprite(700, 200, 30, 30);
  movingrectangle . shapeColor = ("green");

}

function draw() {
  background("black"); 
  
  movingrectangle.x = mouseX
  movingrectangle.y = mouseY

  if(movingrectangle.x-fixedrectangle.x < movingrectangle.width/2 + fixedrectangle.width/2 &&
    fixedrectangle.x - movingrectangle.x < movingrectangle.width/2 + fixedrectangle.width/2 &&
    movingrectangle.y - fixedrectangle.y < movingrectangle.height/2 + fixedrectangle.height/2 &&
    fixedrectangle.y - movingrectangle.y < movingrectangle.height/2 + fixedrectangle.height/2){
    fixedrectangle.shapeColor = ("red");
    movingrectangle.shapeColor = ("red");
  }else{
    fixedrectangle.shapeColor = ("green");
    movingrectangle . shapeColor = ("green");
  }
  drawSprites();
}
var box 

function setup() {
  box = createSprite(200,200,25,25)
  createCanvas(400,400);
}

function draw() 

{
  background("black");
drawSprites()
if (keyDown(RIGHT_ARROW)) {
box.position.x = box.position.x+10
}
if (keyDown(LEFT_ARROW)){
  box.position.x = box.position.x-10
}
if (keyDown(UP_ARROW)){
  box.position.y = box.position.y-10
}
if (keyDown(DOWN_ARROW)) {
  box.position.y = box.position.y+10
  }
}




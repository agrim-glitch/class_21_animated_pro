var bullet, wall;
var speed, weight;
var thickness

function preload(){
back = loadImage("back.jpg");
bulletImg = loadImage("bulletImg.png")
b

}
function setup() {
  createCanvas(1900,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(15,84);

  wall = createSprite(1700, 200, thickness, 500);
  wall.shapeColor=color(80,80,80)
  bullet = createSprite(0,200,100,10);
 bullet.addImage(bulletImg);
 bullet.scale = 0.2
//  bullet.debug =true;

}

function draw() {
  background(back);  
console.log(bullet.x)
  bullet.velocityX = speed;

  if(bullet.isTouching(wall) )
   {

    bullet.velocityX = 0;
    var  damage = 0.5 * weight *speed* speed/(thickness*thickness*thickness);

    if(damage<10){
      wall.shapeColor= color(0,255,0)
    }
    if(damage>10){

      wall.shapeColor = color(255,0,0);
    }
   
       
  
  


}

  drawSprites();
}


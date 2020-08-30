var night;
var morning;
var rm=0;
var ground,g,g1,g2;
var runner,run;
var hauntedhouse, haunt;
var bat1,bat;
var batsGroup;
var gun,gun1;


function preload(){
  night = loadImage("night1.png");
  morning = loadImage("morning.png");
 //ground = loadImage("ground.png");
 g = loadImage("g2.png");
 run = loadImage("runner1.png");
 hauntedhouse = loadImage("hauntedh.png");
 bat1 = loadImage("killer bat.png");
 gun1 = loadImage("gun.png")

}

function setup() {
  createCanvas(800,400);
  g1 =createSprite(200, 370, 50, 50);
   g2 = createSprite(700,370,50,50);
   runner = createSprite(300,270,50,50);
   haunt = createSprite(50,270,20,50);
   gun = createSprite(310,250,50,50);
   batsGroup = createGroup();
   
   g1.addImage("ground",g);
   g2.addImage("g2",g);
   runner.addImage("runner1",run);
   haunt.addImage("hauntedh",hauntedhouse);
   gun.addImage("gun",gun1)
   g1.scale = 1;
   g2.scale = 1;
   runner.scale = 0.2;
   haunt.scale = 0.4;
   gun.scale = 0.2;
   g1.velocityX = -3;
   g2.velocityX = -3;
   //runner.velocityX = 1;
   gun.x = runner.x
   
   
}

function draw() {
  if(frameCount%1000 === 0){
    rm = rm+1
    background(255)
  }
  if(rm%2===0){
    background(night);
   

  }if(rm%2!==0){
    background(morning);

  }
  if(g1.x<0){
   g1.x = 200;
   g2.x = 700;
  }
 spawnBats();
 if(keyDown("UP_ARROW")){
  runner.y = runner.y -5;
}

if(keyDown("DOWN_ARROW")){
  runner.y = runner.y +5;
}
if(keyDown("RIGHT_ARROW")){
  runner.x = runner.x +5;
}
if(keyDown("LEFT_ARROW")){
  runner.x = runner.x -5;
}
  edges = createEdgeSprites()
    runner.collide(g1);
    runner.collide(g2);
    runner.collide(edges[2])
  
  drawSprites();
}
function spawnBats(){
 
  if(frameCount%50 === 0){
   bat = createSprite(800,random(50,100),20,30);
    bat.addImage("killer bat",bat1);
    bat.velocityX = -4;
    bat.scale = 0.1;
    batsGroup.add(bat);
  }
}
function keyPressed(){
  
}

var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var colliders = [];

var frameCheck;
var gameState;

var divisionHeight= 300;
var score = 0;
var particle;
var turns = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  frameCheck = 0;
  gameState = "play";


   for (var k = 0; k <=width; k += 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    colliders.push(new Collision(k+40, height-divisionHeight/2, 70, 0.05))
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
}
 


function draw() {
  frameCheck++;

  background("black");

  if(gameState == "play"){
  textSize(20)
  textAlign(CENTER, CENTER);
 text("Score : "+score,70,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  // for (var j = 0; j < particles.length; j++) {
   
  //    particles[j].display();
  //  }
   if(particle){
    particle.display();
  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     colliders[k].check(particle, k);

   }
  }

   else if(gameState == "end"){
     textSize(50)
     textAlign(CENTER, CENTER);
     text("Game Over", width/2, height/2 - height/10)
     text("Score: " + score, width/2, height/2)
   }

}

function mousePressed(){
  if(gameState !== "end" && !particle){
    turns++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}
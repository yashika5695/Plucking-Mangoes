
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var tree, stone, launcherobj 
var launchingForce = 100  
var mango1 ,mango2 , mango3 
var engine ,world 
var boy , boyImage , treeImage

function preload()
{
	boyImage = loadImage("Images/boy.png")
	treeImage = loadImage("Images/tree.png")
}

function setup() {
	createCanvas(1300, 600 );


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    stone = new Stone(235 , 420 , 30)
    mango1 = new Mango(1112 , 244 , 30)
	mango2 = new Mango(905 , 276 , 30)
	mango3 = new Mango(1000 , 150 , 25)
	ground  =  new Ground(width/2 , 600 , width , 20)
	launcherobj = new Launcher(stone.body , {x:235 , y:420})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  
  image(boyImage , 200, 340 , 200 , 300)
  image(treeImage , 800 , 40, 450, 600)
 
  ground.display()
  launcherobj.display()
  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body , {x:mouseX , y:mouseY})
}

function mouseReleased(){
	launcherobj.fly()
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body , {x:235 , y:420})
		launcherobj.attach(stone.body)
	}

}
function collusion(lStone , lMango){
var mangoPos = lMango.body.position
var stonePos = lStone.body.position
var distance = dist(stonePos.x , stonePos.y , mangoPos.x , mangoPos.y) // calculate the distance in x and y pos of both the bodies given

if(distance<=lMango.r + lStone.r){
	Matter.Body.setStatic(lMango.body , false)
}
}
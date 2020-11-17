const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof1;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    //shapeColor("black");

	engine = Engine.create();
	world = engine.world;
	roof1 = new roof(350, 200, 280, 20);
	bobObject1 = new bob(250, 500);
	bobObject2 = new bob(300, 500);
	bobObject3 = new bob(350, 500);
	bobObject4 = new bob(400, 500);
	bobObject5 = new bob(450, 500);
	rope1 = new rope(bobObject1.body, roof1.body, -bobDiameter*2, 0);
	rope1 = new rope(bobObject2.body, roof1.body, -bobDiameter*2, 0);
	rope1 = new rope(bobObject3.body, roof1.body, -bobDiameter*2, 0);
	rope1 = new rope(bobObject4.body, roof1.body, -bobDiameter*2, 0);
	rope1 = new rope(bobObject5.body, roof1.body, -bobDiameter*2, 0);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}




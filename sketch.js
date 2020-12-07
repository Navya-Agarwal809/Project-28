
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stoneObj=new Stone(235,420,30);
	mango1=new Mango(1100,100,30); 
 	mango2=new Mango(1170,130,30); 
	mango3=new Mango(1010,140,30); 
	mango4=new Mango(1000,70,30); 
	mango5=new Mango(1100,70,30); 
	mango6=new Mango(1000,230,30); 
	mango7=new Mango(900,230,40);
	mango8=new Mango(1140,150,40);
	mango9=new Mango(1100,230,40); 
	mango10=new Mango(1200,200,40); 
	mango11=new Mango(1120,50,40); 
	mango12=new Mango(900,160,40); 
	treeObj=new Tree(1050,580); 
	groundObject=new Ground(width/2,600,width, height);	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  stoneObj.display();
  mango1.display();
  mango2.display(); 
  mango3.display(); 
  mango4.display(); 
  mango5.display(); 
  mango6.display(); 
  mango7.display(); 
  mango8.display(); 
  mango9.display(); 
  mango10.display(); 
  mango11.display(); 
  mango12.display(); 
  groundObject.display(); 

  
  drawSprites();
 
}




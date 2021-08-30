const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snow, snow1,snow2,snow3,snow4;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var snowCreatedFrame=0;
var bgImg;

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(800,800);

    bgImg = loadImage("snow3.jpg");


    //creating drops
    if(frameCount % 500 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new snowfall(random(0,800), random(0,800)));
        }

    }

}

function draw(){
    Engine.update(engine);
    background(bgImg); 

    //creating thunder

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY();
    }

    drawSprites();

} 
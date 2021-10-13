const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/forest.jpg");
}

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    Road1 = createSprite(400,600,800,40);
    Road1.shapeColor = "brown";
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    drawSprites();
}
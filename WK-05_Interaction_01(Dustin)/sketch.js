const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

const drawBody = Helpers.drawBody;
const drawMouse = Helpers.drawMouse;

let engine;

let boxA;
let boxB;
let ground;
let foil;
let hex1;
let hex2;
let hex3;
let hex4;
let hex5;
let hex6;
let hex7;
let hex8;
let hex9;
let hex10;
let hex11;
let hex12;
let hex13;
let hex14;
let hex15;
let hex16;
let hex17;
let hex18;
let midhex;
let midcircle;
let trapshield;
let shield1;
let shield2;
let shield3;
let shield4;
let line1;
let line2;
let line3;
let wallleft;
let wallright;

function setup() {
  createCanvas(1500, 1500);

  // create an engine
  engine = Engine.create();

  // create two boxes and a ground
  boxA = Bodies.rectangle(200, 100, 200, 100);
  boxB = Bodies.rectangle(300, 30, 300, 30);
  trapshield = Bodies.trapezoid(300, 300, 550, 265, 0.75);
  foil = Bodies.polygon(300, 300, 6, 195);
  hex1 = Bodies.polygon(50, 50, 6, 40);
  hex2 = Bodies.polygon(100, 50, 6, 40);
  hex3 = Bodies.polygon(150, 50, 6, 40);
  hex4 = Bodies.polygon(200, 50, 6, 40);
  hex5 = Bodies.polygon(250, 50, 6, 40);
  hex6 = Bodies.polygon(300, 50, 6, 40);
  hex7 = Bodies.polygon(350, 50, 6, 40);
  hex8 = Bodies.polygon(400, 50, 6, 40);
  hex9 = Bodies.polygon(450, 50, 6, 40);
  hex10 = Bodies.polygon(500, 50, 6, 40);
  hex11 = Bodies.polygon(550, 50, 6, 40);
  hex12 = Bodies.polygon(50, 100, 6, 40);
  hex13 = Bodies.polygon(150, 100, 6, 40);
  hex14 = Bodies.polygon(250, 100, 6, 40);
  hex15 = Bodies.polygon(350, 100, 6, 40);
  hex16 = Bodies.polygon(450, 100, 6, 40);
  hex17 = Bodies.polygon(550, 100, 6, 40);
  hex18 = Bodies.polygon(300, 0, 6, 40);
  midhex = Bodies.polygon(300, 300, 6, 40);
  midcircle = Bodies.circle(300, 350, 55);
  line1 = Bodies.rectangle(50, 50, 200, 2);
  line2 = Bodies.rectangle(50, 100, 200, 2);
  line3 = Bodies.rectangle(50, 150, 200, 2);
  shield1 = Bodies.rectangle(300, 500, 550, 10);
  shield2 = Bodies.rectangle(300, 515, 550, 10);
  shield3 = Bodies.rectangle(300, 530, 550, 10);
  shield4 = Bodies.rectangle(300, 530, 550, 10);
  wallleft = Bodies.rectangle(0, 0, 10, 3000, {
    isStatic: true
  });
  wallright = Bodies.rectangle(1500, 0, 10, 3000, {
    isStatic: true
  });
  ground = Bodies.rectangle(750, 1500, 1500, 10, {
    isStatic: true, angle: Math.PI * 0.0
  });

  // add all of the bodies to the world
  World.add(engine.world, [wallleft, wallright, boxA, boxB, ground, foil, hex1, hex2, hex3, hex4, hex5, hex6, hex7, hex8, hex9, hex10, hex11, hex12, hex13, hex14, hex15, hex16, hex17, hex18, midhex, midcircle, trapshield, shield1, shield2, shield3, shield4, line1, line2, line3]);

  let mouse = Mouse.create(canvas.elt);
  let mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05, angularStiffness: 0 }
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);

  // run the engine
  Engine.run(engine);
}

function draw() {
  background(0);

  fill(75, 25, 75);
  drawBody(boxA);

  fill(75, 25, 25);
  drawBody(boxB);

  fill(75);
  drawBody(foil);

  fill(212, 175, 55);
  drawBody(hex1);
  drawBody(hex2);
  drawBody(hex3);
  drawBody(hex4);
  drawBody(hex5);
  drawBody(hex6);
  drawBody(hex7);
  drawBody(hex8);
  drawBody(hex9);
  drawBody(hex10);
  drawBody(hex11);
  drawBody(hex12);
  drawBody(hex13);
  drawBody(hex14);
  drawBody(hex15);
  drawBody(hex16);
  drawBody(hex17);
  drawBody(hex18);

  fill(125);
  drawBody(midhex);

  fill(225);
  drawBody(midcircle);

  fill(200);
  drawBody(trapshield);
  drawBody(shield1);
  drawBody(shield2);
  drawBody(shield3);
  drawBody(shield4);

  fill(25);
  drawBody(line1);
  drawBody(line2);
  drawBody(line3);

  fill(128);
  drawBody(ground);
  drawBody(wallleft);
  drawBody(wallright);
}

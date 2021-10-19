let jwst;
let wrench01;
let testing;

// function preload() {
//   jwst = loadModel('test02.obj', true);
// }

function preload() {
  wrench01 = loadModel('wrench01.obj', true);
  jwst = loadModel('test02.obj', true);
}

// function preload() {
//   testing = loadModel('test.obj', true);
// }

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(0);
  ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 5000);

  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  // ambientMaterial(212, 175, 55);
  // normalMaterial();
  pointLight(255, 255, 255, locX, locY, 150);

  push();
  // normalMaterial();
  noStroke();
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.003);
  rotateZ(frameCount * 0.002);
  scale(3.5);
  model(jwst);
  pop();


  // push();
  // fill(255);
  // rect(50, 50, 50, 50);
  // pop();
  //
  // push();
  // rotateZ(frameCount * 0.01);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // sphere(40);
  // pop();
  //
  // push();
  // translate(150, 0);
  // rotateZ(frameCount * 0.01);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // box(50);
  // pop();
}

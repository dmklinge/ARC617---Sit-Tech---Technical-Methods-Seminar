let modify=0;
let modify2=0;
let boolean2=false;
let boolean3=false;


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(25);

  //Base Sunshield
  push();
  fill(200, 200, 200);
  translate(modify,modify2);
  rotate(modify/100);
  quad(400, 205, 200, 205, 25, 470, 575, 470)
  pop();

  //Other Shapes S1
  push();
  fill(75, 25, 75)
  translate(modify,modify2);
  rotate(modify/100);
  rect(200, 360, 200, 100);
  pop();

  //Foil Shield
  push();
  fill(75, 75, 75);
  translate(300, 240);
  translate(modify,modify2);
  rotate(modify/100);
  rotate(11);
  polygon(0, 0, 195, 6)
  pop();

  //Primary Mirror
  push();
  fill(212, 175, 55);
  translate(300, 100);
  translate(modify,modify2);
  rotate(modify/400);
  polygon(0, 0, 40, 6);
  translate(-60, 35);
  polygon(0, 0, 40, 6);
  translate(-60, 35);
  polygon(0, 0, 40, 6);
  translate(0, 70);
  polygon(0, 0, 40, 6);
  translate(0, 70);
  polygon(0, 0, 40, 6);
  translate(60, 35);
  polygon(0, 0, 40, 6);
  translate(60, 35);
  polygon(0, 0, 40, 6);
  translate(60, -35);
  polygon(0, 0, 40, 6);
  translate(60, -35);
  polygon(0, 0, 40, 6);
  translate(0, -70);
  polygon(0, 0, 40, 6);
  translate(0, -70);
  polygon(0, 0, 40, 6);
  translate(-60, -35);
  polygon(0, 0, 40, 6);
  translate(-60, 35);
  polygon(0, 0, 40, 6);
  translate(-60, 35);
  polygon(0, 0, 40, 6);
  translate(0, 70);
  polygon(0, 0, 40, 6);
  translate(60, 35);
  polygon(0, 0, 40, 6);
  translate(60, -35);
  polygon(0, 0, 40, 6);
  translate(0, -70);
  polygon(0, 0, 40, 6);
  pop();

  //Tertiary Mirror
  push();
  fill(125, 125, 125);
  translate(300, 240);
  translate(modify,modify2);
  rotate(modify/10000);
  polygon(0, 0, 40, 6);
  pop();

  //Secondary Mirror
  push();
  fill(200, 200, 200)
  translate(modify,modify2);
  rotate(modify/100);
  circle(300, 260, 55);
  pop();
  
  push();
  translate(modify,modify2);
  rotate(modify/100);
  line(215, 385, 285, 275);
  line(385, 385, 315, 275);
  line(300, 50, 300, 240);
  pop();

  //Other Shapes S1
  push();
  fill(75, 25, 25)
  translate(modify,modify2);
  rotate(modify/100);
  rect(150, 525, 300, 30);
  pop();

  //Second - Fifth Sun Shield
  push();
  fill(200, 200, 200);
  translate(modify,modify2);
  rotate(modify/100);
  rect(25, 475, 550, 10);
  pop();
  push();
  fill(200, 200, 200);
  translate(modify,modify2);
  rotate(modify/100);
  rect(25, 490, 550, 10);
  pop();
  push();
  fill(200, 200, 200);
  translate(modify,modify2);
  rotate(modify/100);
  rect(25, 505, 550, 10);
  pop();
  push();
  fill(200, 200, 200);
  translate(modify,modify2);
  rotate(modify/100);
  rect(25, 520, 550, 10);
  pop();
  
  
  if(modify > 3) {
    boolean2=true;
  }
  if(modify<=0){
    boolean2=false;
  }
  
  if(boolean2){
    modify-=.1
    modify2+=.1
  }else{
    modify+=.1
    modify2-=.1
  }

}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

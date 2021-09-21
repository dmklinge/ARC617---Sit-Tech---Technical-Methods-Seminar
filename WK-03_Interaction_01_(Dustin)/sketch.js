let color2 = 200;
let speed = 0;
let speed2 = 0;
let move = 0;
let test = false;
let boolean2 = false;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  //Base Sunshield
  push();
  fill(color2);
  quad(400, 205, 200, 205, 25, 470, 575, 470)
  pop();

  //Other Shapes S1
  push();
  fill(75, 25, 75)
  translate(move,0);
  rect(200, 360, 200, 100);
  pop();

  //Foil Shield
  push();
  fill(75, 75, 75);
  translate(300, 240);
  rotate(11);
  rotate(speed2);
  polygon(0, 0, 195, 6)
  pop();

  //Primary Mirror
  push();
  fill(212, 175, 55);
  translate(300, 100);
  scale(speed);
  polygon(0, 0, 40, 6);
  translate(-60, 35);
  scale(speed);
  polygon(0, 0, 40, 6);
  translate(-60, 35);
  scale(speed);
  polygon(0, 0, 40, 6);
  translate(0, 70);
  scale(speed);
  polygon(0, 0, 40, 6);
  translate(0, 70);
  scale(speed);
  polygon(0, 0, 40, 6);
  translate(60, 35);
  scale(speed);
  polygon(0, 0, 40, 6);
  translate(60, 35);
  scale(speed);
  polygon(0, 0, 40, 6);
  translate(60, -35);
  scale(speed);
  polygon(0, 0, 40, 6);
  translate(60, -35);
  scale(speed);
  polygon(0, 0, 40, 6);
  translate(0, -70);
  scale(speed);
  polygon(0, 0, 40, 6);
  translate(0, -70);
  scale(speed);
  polygon(0, 0, 40, 6);
  translate(-60, -35);
  scale(speed);
  polygon(0, 0, 40, 6);
  translate(-60, 35);
  scale(speed);
  polygon(0, 0, 40, 6);
  translate(-60, 35);
  scale(speed);
  polygon(0, 0, 40, 6);
  translate(0, 70);
  scale(speed);
  polygon(0, 0, 40, 6);
  translate(60, 35);
  scale(speed);
  polygon(0, 0, 40, 6);
  translate(60, -35);
  scale(speed);
  polygon(0, 0, 40, 6);
  translate(0, -70);
  scale(speed);
  polygon(0, 0, 40, 6);
  pop();

  //Tertiary Mirror
  push();
  fill(125, 125, 125);
  translate(300, 240);
  rotate(-speed2);
  polygon(0, 0, 40, 6);
  pop();

  //Secondary Mirror
  push();
  fill(color2)
  circle(300, 260, 55);
  pop();
  push();
  line(215, 385, 285, 275);
  line(385, 385, 315, 275);
  line(300, 50, 300, 240);
  pop();

  //Other Shapes S1
  push();
  fill(75, 25, 25);
  translate(-move,0);
  rect(150, 525, 300, 30);
  pop();

  //Second - Fifth Sun Shield
  push();
  fill(color2);
  rect(25, 475, 550, 10);
  pop();
  push();
  fill(color2);
  rect(25, 490, 550, 10);
  pop();
  push();
  fill(color2);
  rect(25, 505, 550, 10);
  pop();
  push();
  fill(color2);
  rect(25, 520, 550, 10);
  pop();


  if(speed > 1) {
    test=true;
  }
  if(speed<=0){
    test=false;
  }

  if(test){
    speed-=.005
    move-=1
  }else{
    speed+=.005
    move+=1
  }
  speed2+=.005
  if(color2>=200){
    boolean2=true;
  }
  if(color2<=0){
    boolean2=false;
  }
  if(boolean2){
    color2-=2
  }else{
    color2+=2
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

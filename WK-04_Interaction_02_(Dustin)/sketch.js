let Primmirror = {
  radius: 40,
  npoints: 6
}

let Foilhex = {
  radius: 195,
  npoints: 6
}

let Tertmirror = {
  radius: 40,
  npoints: 6
}

let Topshield = {
  p1: 400,
  p2: 205,
  p3: 200,
  p4: 205,
  p5: 25,
  p6: 470,
  p7: 575,
  p8: 470
}

let Rect1 = {
  length: 200,
  height: 100
}

let Secmirror = {
  radius: 55
}

let Rect2 = {
  length: 300,
  height: 30
}

let Sunshields = {
  length: 550,
  height: 10
}

let Color = {
  black: 0,
  white: 255,
  gray1: [200, 200, 200],
  gray2: [75, 75, 75],
  gray3: [125, 125, 125],
  gold: [212, 175, 55],
  purple: [75, 25, 75],
  brown: [75, 25, 25]
}

let Hexlist = {
  hex1: [0, 0, Primmirror.radius, Primmirror.npoints]

}

//let Hexmove = [("300,100"),("-65,40")];

let Shieldmove = 475;

let Rectmove = [(0, 15)];

let Xlist = [300, -60, -60, 0, 0, 60, 60, 60, 60, 0, 0, -60, -60, -60, 0, 60, 60, 0];

let Ylist = [100, 35, 35, 70, 70, 35, 35, -35, -35, -70, -70, -35, 35, 35, 70, 35, -35, -70];

let Mysound;

function preload() {
  //Mysound = loadSound('C:\Users\dusti\Desktop\Coding\Assignment Files\Assignment Files\WK-04_Interaction_02_(Dustin)\Slow Whoosh Sound Effect.mp3');

}

function setup() {
  Mysound = loadSound('Whoosh.mp3')
  let cnv = createCanvas(600, 600);
  cnv.mouseMoved(canvasPressed);

}

function draw() {
  background(0);

  //TopShield
  push();
  fill(Color.gray1);
  quad(mouseX+100, mouseY-95, mouseX-100, mouseY-95, mouseX-275, mouseY+200, mouseX+275, mouseY+200);
  pop();

  //rect1
  push();
  fill(Color.purple);
  rect(mouseX-100, mouseY+85, Rect1.length, Rect1.height);
  pop();

  //foilhex
  push();
  fill(Color.gray2);
  rotate(0);
  polygon2(mouseX, mouseY-20, Foilhex.radius, Foilhex.npoints);
  pop();

  //Primmirror
  push();
  for (let i = 0; i < 18; i++) {
    fill(Color.gold);
    translate(Xlist[i], Ylist[i]);
    rotate(0);
    polygon(mouseX-300, mouseY-260, Hexlist.hex1[2], Hexlist.hex1[3]);

  }
  pop();

  //Tertmirror
  push();
  fill(Color.gray3);
  polygon(mouseX, mouseY-20, Hexlist.hex1[2], Hexlist.hex1[3]);
  pop();

  //Secmirror
  push();
  fill(Color.gray1);
  circle(mouseX, mouseY, Secmirror.radius);
  pop();
  push();
  line(mouseX-10, mouseY+10, mouseX-120, mouseY+100);
  line(mouseX+10, mouseY+10, mouseX+120, mouseY+100);
  line(mouseX, mouseY-10, mouseX, mouseY-200);
  pop();

  // line(215, 385, 285, 275);
  // line(385, 385, 315, 275);
  // line(300, 50, 300, 240);

  //Rect2
  push();
  fill(Color.brown)
  rect(mouseX-150, mouseY+250, Rect2.length, Rect2.height);
  pop();

  //Sunshields
  for (let i = 0; i < 4; i++) {
    push();
    fill(Color.gray1);
    translate(Rectmove[i]);
    rect(mouseX-275, mouseY+Shieldmove-270, Sunshields.length, Sunshields.height);
    pop();
    Shieldmove+=15

}

Shieldmove = 475;

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
  function polygon2(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + sin(a) * radius;
      let sy = y + cos(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
}

function canvasPressed() {
  if(!Mysound.isPlaying()) {
  Mysound.play(0, 2, 1);  
  }
}

function setup() {
  createCanvas(800, 784);
  background(240,240,240);
}

function draw() {
strokeWeight(0);
fill(240,50,20);
rect(0,0, 360,315);
strokeWeight(0);
fill(240,240,240);
rect(360,0,440,315);
strokeWeight(0);
fill(240,240,240);
rect(0,315,800, 200);
strokeWeight(0);
fill(240,200,10);
rect(0,515,80, 269);
strokeWeight(0);
fill(240,240,240);
rect(80,515,280, 269);
strokeWeight(0);
fill(0,30,110);
rect(360,515,240, 240);


stroke (0,0,0);
strokeWeight(10);
line(360,0,360,784);
line(80,515,80,784);
line(600,515,600,784);
line(360,755,600,755);
stroke(0,0,0);
strokeWeight(15);
line(0,315,800,315);
line(0,515,800,515);

 

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

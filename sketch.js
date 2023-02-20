let posX
let posY
let radio
let texto

function setup() {
  createCanvas(300, 400);
  background(100);
  radio = 80;
  posX = width/2;
  posY = height/2;
  //texto = "Anda palla bobo"
}

function draw() {
  let c = color(200, 100, frameCount % 255);
  fill(c);
  radio = radio + 1;
  ellipse(posX, posY, radio);
  text(texto, posX, posY + 100);
}

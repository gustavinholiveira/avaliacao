let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(1000, 1000);
   background(color(900,900,0));
  cor = color(random(0,100), random(0,100), random(0,100));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
 
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical,
60);
 
 
 
  if (mouseX < posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal - 1;
  }
 
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal + 1;
  }
 
  if (mouseY < posicaoVertical){
    posicaoVertical--;
  }
   
  if (mouseY > posicaoVertical){
    posicaoVertical++;
  }
   
}

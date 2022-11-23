let CANVAS_SIZE = 400
let GRID_SQUARES = 10
let STEP = CANVAS_SIZE/GRID_SQUARES;
let NUM_CIRCLES = 400
let NUM_TRI = 150
let NUM_TRANSFORM = 50
let TRANSPERANCY = 5

var COLORS = [[216, 164, 127, TRANSPERANCY],[239, 131, 84, TRANSPERANCY],[238, 75, 106, TRANSPERANCY],[223, 59, 87, TRANSPERANCY],[15, 113, 115, TRANSPERANCY], [179, 255, 179, TRANSPERANCY], [202, 231, 185, TRANSPERANCY], [205, 247, 246, TRANSPERANCY], [16, 255, 203, TRANSPERANCY], [181, 248, 254, TRANSPERANCY], [151, 249, 249, TRANSPERANCY], [164, 222, 249, TRANSPERANCY]]



function setupStandardAxes(showLines){
  push()
  translate(CANVAS_SIZE/2,CANVAS_SIZE/2)
  scale(1.0,-1.0)
}



function drawGridLines(){
  
  fill(0,0,255)
  circle(0,0,5)
  stroke(200)
  for(var i = -GRID_SQUARES;i<GRID_SQUARES;i++){
    
      line(i*STEP,-GRID_SQUARES/2*STEP,i*STEP,GRID_SQUARES/2*STEP)
      
  }
  for(var j = -GRID_SQUARES;j<GRID_SQUARES;j++){
    
      line(-GRID_SQUARES/2*STEP,j*STEP,GRID_SQUARES/2*STEP,j*STEP)
      
  }
}


    
function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(220);
  angleMode(DEGREES);
  setupStandardAxes();
  drawGridLines();

  
  for(var i = 0;i < NUM_CIRCLES;i++){
    
    
    let random_X = random(-GRID_SQUARES/2, GRID_SQUARES/2)
    let random_Y = random(-GRID_SQUARES/2, GRID_SQUARES/2)
    let randomColor = random(COLORS)
    fill(randomColor)
    
 // noStroke();

    for(var j = 0;j < NUM_TRANSFORM;j++){
    circle(random_X*STEP, random_Y*STEP,20)
    triangle(random_X*STEP/3, random_Y*STEP/3, random_X*STEP/2, random_Y*STEP/2, random_X*STEP, random_Y*STEP)
             

    
//  for(var j = 0; j < NUM_CIRCLES; j++){
//     circle(random_X, random_Y, 50)
//     translate(random_X, random_Y);

   
    } 
    
  }
    
  
    
}


function draw() {


}

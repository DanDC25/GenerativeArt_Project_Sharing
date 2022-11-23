let CANVAS_SIZE = 400
let GRID_SQUARES = 10
let STEP = CANVAS_SIZE/GRID_SQUARES;
let NUM_CIRCLES

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
  setupStandardAxes();
  drawGridLines();
 
  for(var i = 0; i < NUM_CIRCLES; i++);
    let random_X = random(-CANVAS_SIZE/2, CANVAS_SIZE/2)
    let random_Y = random(-CANVAS_SIZE/2, CANVAS_SIZE/2)
    
  
  square(100,200,300)
  circle (random_X, random_Y, 50)
}
  
  


function draw() {

}

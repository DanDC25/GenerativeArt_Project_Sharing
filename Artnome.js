let CANVAS_SIZE = 400
let GRID_SQUARES = 10
let STEP = CANVAS_SIZE/GRID_SQUARES;
let NUM_CIRCLES = 400
let NUM_TRI = 150
let NUM_TRANSFORM = 50
let TRANSPARENCY = 4






var COLORS = [[216, 164, 127, TRANSPARENCY],[239, 131, 84, TRANSPARENCY],[238, 75, 106, TRANSPARENCY],[223, 59, 87, TRANSPARENCY],[15, 113, 115, TRANSPARENCY], [179, 255, 179, TRANSPARENCY], [202, 231, 185, TRANSPARENCY], [205, 247, 246, TRANSPARENCY], [16, 255, 203, TRANSPARENCY], [181, 248, 254, TRANSPARENCY], [151, 249, 249, TRANSPARENCY], [164, 222, 249, TRANSPARENCY]]



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
    
      line(iSTEP,-GRID_SQUARES/2,STEP,iSTEP,GRID_SQUARES/2*STEP)
      
  }
  for(var j = -GRID_SQUARES;j<GRID_SQUARES;j++){
    line(-GRID_SQUARES/2*STEP,jSTEP,GRID_SQUARES/2*STEP,jSTEP)
  }
}


    
function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(color('#99999999999999'));
  angleMode(DEGREES);
  setupStandardAxes();
  // drawGridLines();

  function circ(x, y, size, color, strokeT, strokeweight){
    fill(color)
    if (strokeT == 0){
      noStroke()
    }
    else{
      stroke(strokeT)
      strokeWeight(strokeweight)
    }
    circle(x,y,size)
  }
  
  for(var i = 0;i < NUM_CIRCLES;i++){
      
    let random_X = random(-GRID_SQUARES/2, GRID_SQUARES/2)
    let random_Y = random(-GRID_SQUARES/2, GRID_SQUARES/2)
    
    let randomColor = random(COLORS)
    
    let highlight = color(200,200,200,1)
    let highlightFill = lerpColor(color(randomColor), highlight, 0.7)
    
    let outline = color(100,100,100, 1)
    let border = lerpColor(color(randomColor), outline, 0.7);
    
    for(var j = 0;j < NUM_TRANSFORM;j++){
    circ(random_X*STEP, random_Y*STEP, 20, randomColor, border, 3)
    circ(random_X*STEP, random_Y*STEP, 16, highlightFill, 0, 0)
      
    // triangle(random_XSTEP/3, random_YSTEP/3, random_XSTEP/2, random_YSTEP/2, random_XSTEP, random_YSTEP)
      

    
//  for(var j = 0; j < NUM_CIRCLES; j++){
//     circle(random_X, random_Y, 50)
//     translate(random_X, random_Y);

   
    }
//     fill(from);
//   rect(10, 20, 20, 60);
//   fill(interA);
//   rect(30, 20, 20, 60);
//   fill(interB);
//   rect(50, 20, 20, 60);
//   fill(to);
//   rect(70, 20, 20, 60);
    
    
    
    
  }
    
  
    
}


function draw() {
//   let from = color(218, 165, 32);
//   let to = color(72, 61, 139);
//   colorMode(RGB); // Try changing to HSB.
//   let interA = lerpColor(from, to, 0.33);
//   let interB = lerpColor(from, to, 0.66);

  
//   fill(from);
//   rect(10, 20, 20, 60);
//   fill(interA);
//   rect(30, 20, 20, 60);
//   fill(interB);
//   rect(50, 20, 20, 60);
//   fill(to);
//   rect(70, 20, 20, 60);
  
}



# GenerativeArt_Project_Sharing

Project written in Advanced Automation at SSIS by Dan

This is my inspiration and how I'd like the results to be.

![Dan](https://github.com/DanDC25/generative-art-groups/blob/main/docs/dan2022.png) [Manolo Gamboa Naon 2018](https://www.behance.net/gallery/64930903/VVRRR)

Update: I found out Artnome isn't a type of generative art but rather a name of a website that publish generative arts. I have found a new type of generative art I found online but does not know the name to it. Here are the pictures. 

<img src="https://github.com/DanDC25/GenerativeArt_Project_Sharing/blob/main/Screen%20Shot%202022-11-25%20at%2010.29.35.png" width="60%">

A similar code could look like this:

``` js
// new
let CANVAS_WIDTH  = 600;
let CANVAS_HEIGHT = 400;
let TRANSPARENCY  = 5;
let RADIUS_CIRCLE = 25;

// old
let NUM_CIRCLES = 400;
let NUM_TRI = 150;
let NUM_TRANSFORM = 50;

var COLORS = [
  [216, 164, 127, TRANSPARENCY],
  [239, 131, 84,  TRANSPARENCY],
  [238, 75, 106,  TRANSPARENCY],
  [223, 59, 87,   TRANSPARENCY],
  [15, 113, 115,  TRANSPARENCY],
  [179, 255, 179, TRANSPARENCY],
  [202, 231, 185, TRANSPARENCY],
  [205, 247, 246, TRANSPARENCY],
  [16, 255, 203,  TRANSPARENCY],
  [181, 248, 254, TRANSPARENCY],
  [151, 249, 249, TRANSPARENCY],
  [164, 222, 249, TRANSPARENCY],
];

function setup() {
  // createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(240);
  angleMode(DEGREES);
  // setupStandardAxes();
  // drawGridLines();

  noStroke();
  for (var i = 0; i < NUM_CIRCLES; i++) {
    let random_X = random(0, CANVAS_WIDTH);
    let random_Y = random(0, CANVAS_HEIGHT);
    let randomColor = random(COLORS);
    fill(randomColor);
    for (var j = 0; j < NUM_TRANSFORM; j++) {
      for (var r = random(15, RADIUS_CIRCLE); r > 3; r--) {
        circle(random_X, random_Y, r);
      }
    }
  }
}

function draw() {}

```

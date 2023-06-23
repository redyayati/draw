let clearButton ;
let canvas ; 
let doodleClassifier ;
let resultsDiv ;

function setup() {
  canvas = createCanvas(400, 400);
  clearButton = createButton('clear');
  clearButton.mousePressed(clearCanvas);
  background(255);
  doodleClassifier = ml5.imageClassifier('DoodleNet' , modelReady) ;
  resultsDiv = createDiv('Model Loading') ; 
}

function modelReady() {
  console.log("model loaded") ; 
  doodleClassifier.classify(canvas,gotResults) ;
}

function gotResults(error, results){
  if (error){
    console.error(error) ;
    return ;
  }else { 
    // console.log(results)
    resultsDiv.html(results[0].label) ;
    doodleClassifier.classify(canvas,gotResults) ;
  }
}

function clearCanvas(){
  background(255);
}
function draw() {
  if (mouseIsPressed) {
    strokeWeight(16);
    line(mouseX,mouseY,pmouseX,pmouseY) ;
  }
}

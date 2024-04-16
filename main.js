function preload() {

}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();

}

function draw(){
    image(video, 125, 90, 400, 300);

    stroke(128, 128, 171);
    fill(155, 155, 204)
    rect(90, 40, 460, 20);

    rect(90, 420, 460, 20);

    rect(40, 90, 20, 300);

    rect(580, 90, 20, 300);

    stroke(7, 99, 133)
    fill(4, 76, 102)
    circle(50, 50, 80);

    circle(50, 430, 80);
  
    circle(590, 50, 80);
  
    circle(590, 430, 80);

}

function take_snapshot(){
    save('Framed_photo')
}
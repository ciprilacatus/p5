function setup() {
  createCanvas(800, 800);
  background(32);

  socket = io.connect("http://localhost:3000");
  socket.on("mouse", newDrawing);
}

function newDrawing(data) {
  noStroke();
  fill(100, 100, 11);
  ellipse(data.x, data.y, 36, 36);
}

function mouseDragged() {
  console.log("Sending: " + mouseX + "," + mouseY);

  var data = {
    x: mouseX,
    y: mouseY,
  };

  socket.emit("mouse", data);

  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 36, 36);
}

function draw() {}

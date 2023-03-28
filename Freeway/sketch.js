function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(roadPicture);
  showsActor();
  showsCar();
  moveCar();
  moveActor();
  backInitialCarPosition();
  checkCollision();
}




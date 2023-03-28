//Actor
let xActor = 100;
let yActor = 366;
let collision = false;

function showsActor() {
  image(actorPicture, xActor, yActor, 30, 30);
}

function moveActor() {
  if(keyIsDown(UP_ARROW)) {
    yActor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yActor += 3;
  }
  if(keyIsDown(RIGHT_ARROW)) {
    xActor += 3;
  }
  if(keyIsDown(LEFT_ARROW)) {
    xActor -= 3;
  }
}

function checkCollision() {
  for(let i = 0; i > imageCars.length; i += 1) {
    collision = collideRectCircle(xCars[i], yCars[i], widthCar, heightCar, xActor, yActor, 15);
      if(collision) {
        crashed();
      }
  }
}

function crashed() {
  yActor = 366;
}
 
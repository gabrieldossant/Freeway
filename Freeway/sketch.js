let roadPicture;
let actorPicture;
let car1Picture;
//car
let xCar = 700;
//Actor
let xActor = 100;
let yActor = 366;

function preload() {
  roadPicture = loadImage("Images/estrada.png");
  actorPicture = loadImage("Images/ator-1.png");
  car1Picture = loadImage("Images/carro-1.png");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(roadPicture);
  showsActor();
  showsCar();
  moveCar();
  moveActor();
}

function showsActor() {
  image(actorPicture, xActor, yActor, 30, 30);
}

function showsCar() {
  image(car1Picture, xCar, 40, 50, 40);
}

function moveCar() {
  xCar -= 2;
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
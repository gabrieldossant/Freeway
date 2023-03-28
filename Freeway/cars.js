// Cars

let xCars = [700, 700, 700];
let yCars = [40, 96, 150];
let carSpeed = [4, 4.5, 5];
let widthCar = 50;
let heightCar = 40;

function showsCar() {
  for (let i = 0; i < imageCars.length; i += 1) {
    image(imageCars[i], xCars[i], yCars[i], widthCar, heightCar);
  }
}

function moveCar() {
  for (let i = 0; i < imageCars.length; i += 1) {
    xCars[i] -= carSpeed[i];
  }
}

function backInitialCarPosition() {
  for (let i = 0; i < imageCars.length; i += 1) {
    if(pastScreen(xCars[i])) {
      xCars[i] = 700
    }
  }
}

function pastScreen(xCar) {
  return xCar < -100;
}
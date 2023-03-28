// Cars

let xCars = [700, 700, 700, 700, 700, 700];
let yCars = [40, 96, 150, 210, 270, 318];
let carSpeed = [9, 8, 7, 7.5, 6.4, 5.5];
let widthCar = 50;
let heightCar = 40;

function showsCar() {
  for (let i = 0; i < imageCars.length; i++) {
    image(imageCars[i], xCars[i], yCars[i], widthCar, heightCar);
  }
}

function moveCar() {
  for (let i = 0; i < imageCars.length; i++) {
    xCars[i] -= carSpeed[i];
  }
}

function backInitialCarPosition() {
  for (let i = 0; i < imageCars.length; i++) {
    if(xCars[i] < -100) {
      xCars[i] = 700
    }
  }
}

/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class Car {
    constructor(model, accelerationRate, maxSpeed) {
        this.currentSpeed = 0;
        this.model = model;
        this.accelerationRate = accelerationRate;
        this.maxSpeed = maxSpeed;
    }
    accelerate = () => {
        this.currentSpeed += this.accelerationRate;
    }
    brake = () => {
        this.currentSpeed -= this.accelerationRate;
    }

    toString = () => {
        return (`model: ${this.model}, currentSpeed:${this.currentSpeed}), maxSpeed:${this.maxSpeed}`);
    }
    static sort(a, b) {
        return b.maxSpeed - a.maxSpeed;
    }
}

const myCar = new Car('civic', 10 , 500)

myCar.accelerate();
myCar.accelerate();
myCar.brake();

console.log(myCar.toString());

// const cars = [
// new car('camery',100),
// new car('911', 160)
// ]
// cars.sort(car.sort);

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class ElectricCar extends Car {
    constructor(model, accelerationRate, maxSpeed) {
        super(model, accelerationRate, maxSpeed);
        this.motor = 'electric';
    }
    accelerate = () => {
        this.currentSpeed += (this.accelerationRate) * 2;
    }
}

const myElectricCar = new ElectricCar('Electric civic', 5, 500)

myElectricCar.accelerate();
myElectricCar.accelerate();
myElectricCar.brake();

console.log(myElectricCar.toString());
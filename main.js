class Vehicle {
  constructor (name, wheelCount, maxSpeed, speed = 0){
    this.name = name,
    this.wheelCount = wheelCount,
    this.maxSpeed = maxSpeed,
    this.speed = speed;
  }
  accelerate(){
    if ((this.maxSpeed - this.speed) < (this.maxSpeed/3)) {
      this.speed = this.maxSpeed;
    } else {
      this.speed = this.speed + this.maxSpeed/3
    }
  }
}

class Car extends Vehicle {
  constructor(name,maxSpeed, speed){
    super(name,4,maxSpeed, speed)
}
drive(){
  return `Vroom. `;
}
}


class Ferrari extends Car{
  constructor() {
    super('Ferrari', 180);
  }
  drive() {
    return super.drive() + "I'm a Ferrari!";
  }

accelerate() {
  if ((this.maxSpeed - this.speed) < (this.maxSpeed/2)){
    this.speed = this.maxSpeed;
  } else {
    this.speed = this.speed + this.maxSpeed/2
  }
  
  }
}





module.exports = {
  Vehicle,
  Car,
  Ferrari
}

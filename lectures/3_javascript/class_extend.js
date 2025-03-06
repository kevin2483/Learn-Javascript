//메소드 오버라이딩

class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log('drive..');
  }
  stop() {
    console.log('STOP!');
  }
}

class Bmw extends Car {
  constructor() {
    super(color);
    this.navigation = 1;
  }
  park() {
    console.log('PARK');
  }
  stop() {
    super.stop(); // Car의 stop을 가져온다 (메소드 오버라이딩)
    console.log('OFF');
  }
}

// const z4 = new Bmw('blue');

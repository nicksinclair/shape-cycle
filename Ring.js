class Ring {
  constructor(posX, posY, diameter) {
    this.x = posX;
    this.y = posY;
    this.diameter = diameter;
    this.radius = this.diameter / 2;
    this.capacity = 2 * floor(random(3, 12));
    this.angle = 360 / this.capacity;
    this.shapes = [];
    this.clockwise = randomSelectTwo();
    this.inc = (floor(random(3)) + 1) / 100;
    this.speed = this.clockwise ? this.inc : -this.inc;
    this.counter = 0;
  }
  
  allocateShapes() {
    for (let i = 0; i < this.capacity; i++) {
      this.shapes.push(new Shape(0, 0));
    }
  }

  render() {
    noFill();
    stroke(PALETTE[0]);

    push();
    translate(width / 2, height / 2);
    ellipse(this.x, this.y, this.diameter);
    pop();
  }

  renderShapes() {
    push();
    this.shapes.forEach((shape, index) => {
      push();
      translate(width / 2, height / 2);
      rotate(this.angle * index);
      this.animateShapes();
      translate(0, this.radius);
      shape.render();
      pop();
    });
    pop();
  }
  
  animateShapes() {
    rotate(this.counter += this.speed);
  }
  
  grow(inc) {
    this.diameter += inc;
    this.radius += inc / 2;
  }

  update() {
    // TODO
  }
}




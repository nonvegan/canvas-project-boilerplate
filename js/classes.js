class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  assign(vector) {
    this.x = vector.x;
    this.y = vector.y;
  }
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }
  rotate(angle) {
    let x2 = Math.round(Math.cos(angle) * this.x - Math.sin(angle) * this.y);
    let y2 = Math.round(Math.sin(angle) * this.x + Math.cos(angle) * this.y);
    this.x = x2;
    this.y = y2;
  }
}

class Ant {
  constructor(pos, size,vel) {
    this.pos = new Vector(pos.x, pos.y);
    this.size = new Vector(size.x, size.y);
    this.vel = new Vector(vel.x,vel.y);
  }
  setDirection(dir) {
    switch (dir) {
      case "UP":
        this.vel.x = 0;
        this.vel.y = -this.size.y;
        break;
      case "RIGHT":
        this.vel.x = this.size.x;
        this.vel.y = 0;
        break;
      case "DOWN":
        this.vel.x = 0;
        this.vel.y = this.size.y;
        break;
      case "LEFT":
        this.vel.x = -this.size.x;
        this.vel.y = 0;
        break;
      default:
        console.error("No direction");
    }
  }
  getGridCords(width, height) {
    return new Vector(this.pos.x / this.size.x, this.pos.y / this.size.y);
  }
}

export { Ant, Vector };

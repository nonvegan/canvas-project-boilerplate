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
  constructor(pos, size, vel) {
    this.pos = new Vector(pos.x, pos.y);
    this.size = new Vector(size.x, size.y);
    this.vel = new Vector(vel.x, vel.y);
  }
  getGridCords(width, height) {
    return new Vector(this.pos.x / this.size.x, this.pos.y / this.size.y);
  }
}

export { Ant, Vector };

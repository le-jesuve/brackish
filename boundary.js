class Boundary {
  constructor(x1, y1, x2, y2) {
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);
  }

  show() {
    stroke(255);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }

  // mediaBox(walls){
  //   walls.push (new Boundary((w/30)*7, (h/30)*18, (w/30)*7, (h/30)*9));
  //   walls.push (new Boundary((w/30)*23, (h/30)*18, (w/30)*23, (h/30)*9));
  //   walls.push (new Boundary((w/30)*23, (h/30)*18, (w/30)*7, (h/30)*18));
  //   walls.push (new Boundary((w/30)*23, (h/30)*9, (w/30)*7, (h/30)*9));
  //
  // }
}

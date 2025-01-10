class Particle {
  constructor() {
    //  this.i = 0;
    // this.bSet = [4, 2, 1];
    // this.b = bSet[i%3];
    this.pos = createVector(window.innerWidth / 2, window.innerHeight); // Start at the bottom center of the window
    this.dest = createVector(window.innerWidth / 2, window.innerHeight / 6); // this.pos = createVector(w / 2, origy);
    this.rays = [];
    this.size = 10;
    if (window.innerHeight > window.innerWidth) {
      for (let i = 0; i < 360; i += 4) {
        this.rays.push(new Ray(this.pos, radians(i / 2)));
      }
    }

    for (let i = 0; i < 360; i += 1) {
      this.rays.push(new Ray(this.pos, radians(i / 2)));
    }
  }

  update() {
    let acc = this.pos.y - this.dest.y;
    // if(window.innerHeight > 1000){
    //   if(acc > 450){
    //   this.pos.y -= acc / 35; // Move up towards the destination
    // }
    //
    //   this.pos.y -= acc / 40; // Move up towards the destination
    // }
    if (this.pos.y > this.dest.y) {
      this.pos.y -= acc / 70 + 1; // Move up towards the destination
    }
    // if(this.pos.y < desty){
    //
    //    this.pos.set(x, y+1);
    //   }
    else {
      return;
    }
  }

  mouseHover(x, y) {
    // if(x >= this.pos.x + 20 && x <= this.pos.x -20 && y >= this.pos.y + 20 && y <= this.pos.y - 20){
    if (x === this.pos.x && y === this.pos.y) {
      fill(255);
      ellipse(this.pos.x, this.pos.y, 50, 30);
      textSize(20);
      text("hover", this.pos.x, this.pos.y - 55);
    }
  }

  // mousePressed() {
  //   if (mouseX <= this.dest.x + 10 && mouseY <= this.dest.y + 10) {
  //          this.i++;
  //    this.b = bSet[i % 3];
  //   }
  // }
  look(walls) {
    for (let ray of this.rays) {
      let closest = null;
      let record = Infinity;
      // let below = false;
      for (let wall of walls) {
        const pt = ray.cast(wall);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      if (closest) {
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }
  show() {
    fill(0);
    ellipse(this.pos.x, this.pos.y, 50, 30);
    fill(255);
    ellipse(this.pos.x, this.pos.y, 15);
    fill(255);
    line(this.pos.x + 25, this.pos.y, this.pos.x - 25, this.pos.y);
    fill(0);
    ellipse(this.pos.x, this.pos.y, 40, 15);

    // fill(255);
    // line(this.pos.x + 20, this.pos.y, this.pos.x - 20, this.pos.y);
    for (let ray of this.rays) {
      ray.show();
    }
  }
}

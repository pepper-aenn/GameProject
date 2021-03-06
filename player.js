console.log("Hello");

class Player {
  constructor(ctx, url, speed) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = url;
    this.x = 30;
    this.y = 50;
    this.height = this.img.height;
    this.width = this.img.width;
    this.gravity = 1;
    this.speedY = 0;
    this.minY = ctx.canvas.height - this.height - 88;
    this.maxY = ctx.canvas.height;
  }
  update() {
    this.speedY += this.gravity;
    this.y += this.speedY;
    if (this.y > this.minY) {
      this.y = this.minY;
    }
    if (this.y < 80) {
      this.y = 80;
    }
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  jump() {
    this.speedY = -20;
  }
  crashWith(otherObstacle) {
    var myleft = this.x ;
    var myright = this.x + this.width;
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var otherLeft = otherObstacle.x;
    var otherRight = otherObstacle.x + otherObstacle.width;
    var otherTop = otherObstacle.y;
    var otherBottom = otherObstacle.y + otherObstacle.height;
    var crash = true;
    if (
      mybottom < otherTop ||
      mytop > otherBottom ||
      myright < otherLeft ||
      myleft > otherRight
    ) {
      crash = false;
    }
    return crash;
  }
  // checkMakrele(fish) {
  //   if (
  //     this.x == fish.x &&
  //     (this.x + this.width) == (fish.x + fish.width) &&
  //     (this.y == fish.y) &&
  //     (this.y + this.height) == fish.y + fish.height
  //     ){
  //     counter = counter + 1;
  //     console.log("this", counter);
  //     document.getElementById("overlay").innerHTML =
  //      document.getElementById("Makrele") + " x " + counter;
  //     // sound1.play();
  //     console.log("YAY")
  //     }
  //     return false;
  // }
}

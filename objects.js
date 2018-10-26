console.log("Hello");

class Obstacle {
  constructor(ctx, url, speed, y, x) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = url;
    this.x = x;
    this.y = y;
    this.height = this.img.height;
    this.width = this.img.width;
    this.speed = speed;
  }
  update() {
    this.x -= this.speed;

  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y,this.width,this.height);
  }
  
}

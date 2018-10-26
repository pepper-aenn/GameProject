class Fish {
  constructor(ctx, url, speed) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = url;
    this.x = 1200;
    this.y = 250;
    this.speed = speed;
    this.height = this.img.height;
    this.width = this.img.width;
  }
  update() {
    this.x -= this.speed;
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    this.ctx.stroke();
  }
}

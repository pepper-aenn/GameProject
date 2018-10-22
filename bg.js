console.log("Hello")

class Background {
  constructor(ctx, url, speed) {
    this.ctx = ctx
    this.img = new Image()
    this.img.src = url
    this.speed = speed
    this.x = 0
    this.height = this.ctx.canvas.height
    this.width = this.height*this.img.width/this.img.height
  }

  update () {
    this.x -= this.speed
    if (this.x < -this.width){
      this.x += this.width
    }
  }         

  draw() {
    this.ctx.drawImage(this.img,this.x,0,width,this.height)
    this.ctx.drawImage(this.img,this.x+width,0,this.width,this.height)
  }
}
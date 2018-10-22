console.log("Hello")

class Player {
  constructor(ctx,url,speed) {
    this.ctx = ctx
    this.img = new Image()
    this.img.src = url
    this.x = 30
    this.y=  100  
    this.height = 139
    this.width = 115
    this.gravity = 1
    this.speedY = 0
    this.minY = ctx.canvas.height - this.height - 10
  }
  update() {
    this.speedY += this.gravity
    this.y += this.speedY 
    if (this.y > this.minY) {
      this.y = this.minY
    }
  }
  draw() {
    this.ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
  }
  moveUp(){this.y -= 10}

  jump (){ 
    this.speedY = -30
  }
 }
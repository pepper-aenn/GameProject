console.log("Hello")

class Object{
  constructor(ctx,url,speed) {
    this.ctx = ctx
    this.img = new Image()
    this.img.src = url
    this.x = 1200
    this.y =  120    
    this.height = 139
    this.width = 100
    this.speed = speed
  }
  update(){
    this.x -= this.speed 
    if (this.x < -20 -this.width){
      this.x += canvas.width + this.width
    }

  }
  draw (){
    this.ctx.drawImage(this.img,this.x,this.y);
  }
  
}

class Object2{
  constructor(ctx,url,speed) {
    this.ctx = ctx
    this.img = new Image()
    this.img.src = url
    this.x = 1200
    this.y =  345    
    this.height = 139
    this.width = 100
    this.speed = speed
  }
  update(){
    this.x -= this.speed 
    if (this.x < -20 -this.width){
      this.x += canvas.width + this.width
    }

  }
  draw (){
    this.ctx.drawImage(this.img,this.x,this.y);
  }
  
}

class Object3{
  constructor(ctx,url,speed) {
    this.ctx = ctx
    this.img = new Image()
    this.img.src = url
    this.x = 1200
    this.y =  340     
    this.speed = speed
  }
  update(){
    this.x -= this.speed 
    if (this.x < -20 -this.width){
      this.x += canvas.width + this.width
    }

  }
  draw (){
    this.ctx.drawImage(this.img,this.x,this.y);
  }
  
}
console.log("Hello")

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
var bg = new Background(ctx, '/images/city2.png', 0.5)
var penguin = new Player(ctx, '/images/pen2.png', 0.5 )

setInterval(function() {
 update()
 drawEverything()
}, 1000/90)

function update() {
  bg.update() 
  penguin.update()
}

function drawEverything() {
  ctx.clearRect(0,0,width,height)
  bg.draw() 
  penguin.draw()
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 32: penguin.jump(); console.log('jump', penguin);break;
  }
}
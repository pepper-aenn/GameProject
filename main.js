console.log("Hello")

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
var bg = new Background(ctx, '/images/city2.png', 0.5)
var penguin = new Player(ctx, '/images/pen2.png', 0.5 )
var object1 = new Object(ctx, '/images/object1.png', 1)
var object2 = new Object (ctx, '/images/obejct2.png', 2)
var object3 = new Object (ctx, '/images/object3.png', 2.5)
var makrele = new Fish (ctx,'/images/Makrele_seefrost_1.png',3)
var startButton;
var playing = false;

setInterval(function() {
 update()
 drawEverything()
}, 1000/90)

function update() {
  bg.update() 
  penguin.update()
  object1.update()
  object2.update()
  object3.update()
  makrele.update()
}
   
function drawEverything() {
  ctx.clearRect(0,0,width,height)
  bg.draw() 
  penguin.draw()
  object1.draw()
  object2.draw()
  object3.draw()
  makrele.draw()
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 32: penguin.jump(); console.log('jump', penguin);break;
  }
}




function startGame() {
  startButton.destroy();
  playing = true;
}

function preload() {}
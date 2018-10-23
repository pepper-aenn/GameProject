console.log("Hello")

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height
var bg = new Background(ctx, '/images/city2.png', 0.5)
var penguin = new Player(ctx, '/images/New Project.png', 1 )
var pigeon = new Object(ctx,'images/pigeon.png', 1.5)
var trash = new Object2 (ctx, '/images/trash.png', 1.5)
var bench = new Object3 (ctx, '/images/bench.png', 1)
var makrele = new Fish (ctx,'/images/Makrele_seefrost_1.png', 2)
var startButton;
var playing = false;

setInterval(function() {
 update()
 drawEverything()
}, 1000/50)

function update() {
  bg.update() 
  penguin.update()
  pigeon.update()
  trash.update()
  bench.update()
  makrele.update()
}
   
function drawEverything() {
  ctx.clearRect(0,0,width,height)
  bg.draw() 
  penguin.draw()
  pigeon.draw()
  trash.draw()
  bench.draw()
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
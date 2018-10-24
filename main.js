console.log("Hello");

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var bg = new Background(ctx, "/images/city2.png", 0.5);
var penguin = new Player(ctx, "/images/New Project.png", 1);
var makrele = new Fish(ctx, "/images/Makrele_seefrost_1.png", 1);
var obstacle = ["/images/bench.png", "/images/pigeon.png", "/images/trash.png"];
var newObstacle = [];
var frame = 0;

var interval = setInterval(function() {
  update();
  drawEverything();
}, 1000 / 100);


function update() {
  if (penguin.crashWith(newObstacle)) {
    interval.stop();
} 
else {
  bg.update();
  penguin.update();
  makrele.update();
  frame++;
  if (frame % 500 === 0) {
    console.log("Creating obstacle", frame);
        newObstacles();
  }
  for (var i = 0; i < newObstacle.length; i++) {
  
    newObstacle[i].update();
  }
  newObstacle.filter(
    obstacle => (obstacle.x + obstacle.width < 0 ? false : true)
  );
  }
}

function drawEverything() {
  ctx.clearRect(0, 0, width, height);
  bg.draw();
  penguin.draw();
  makrele.draw();
  for (var i = 0; i < newObstacle.length; i++) {
    newObstacle[i].draw();
  }
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 32:
      penguin.jump();
      console.log("jump", penguin);
      break;
  }
};

function newObstacles() {
  var iObstacle = Math.floor(Math.random() * Math.floor(obstacle.length));
  console.log("obstacle[iObstacle]", obstacle[iObstacle]);
  var y;
  if (iObstacle === 0) {
    y = 340;
  } else if (iObstacle === 1) {
    y = 100;
  } else {
    y = 345;
  }
   newObstacle.push(
    new Obstacle(ctx, obstacle[iObstacle], 1, y, canvas.width + 1)
  );
  
}



soundTrack.play();



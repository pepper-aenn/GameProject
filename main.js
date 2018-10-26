console.log("Hello");

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var bg = new Background(ctx, "images/city2.png", 0.5);
var penguin = new Player(ctx, "images/New Project.png", 1);
var makreleSpawn = [];
var obstacle = ["images/bench.png", "images/pigeon.png", "images/trash.png"];
var newObstacle = [];
var frame = 0;
var counter = 0;

var interval = setInterval(function() {
  update();
  drawEverything();
}, 1000 / 100);

function update() {
  bg.update();
  penguin.update();
  if (makreleSpawn.length <= 0) {
    makreleSpawn.push(new Fish(ctx, "images/Makrele_seefrost_1.png", 1));
  }

  // makrele.update();
  makreleSpawn.forEach(one => {
    one.update();
  });
  frame++;
  if (frame % 500 === 0) {
    console.log("Creating obstacle", frame);
    newObstacles();
  }
  for (var i = 0; i < newObstacle.length; i++) {
    newObstacle[i].update();
  }
  newObstacle.forEach(obstacle => {
    if (newObstacle.length > 0 && penguin.crashWith(obstacle)) {
      console.log("Crashed");
      crash.play();
      clearInterval(interval);
    }
  });
  makreleSpawn.forEach((one, i) => {
    if (penguin.crashWith(one)) {
      console.log("nam!");

      collect.play();
      counter += 1;
      makreleSpawn.splice(i, 1);
      console.log("splice", makreleSpawn);
    }
  });
  newObstacle.filter(
    obstacle => (obstacle.x + obstacle.width < 0 ? false : true)
  );
}

function drawEverything() {
  ctx.clearRect(0, 0, width, height);
  bg.draw();
  penguin.draw();
  makreleSpawn.forEach(makrele => {
  makrele.draw();
  });
  for (var i = 0; i < newObstacle.length; i++) {
    newObstacle[i].draw();
  }
  function counterDraw() {
    console.log("count")
  ctx.drawImage("images/New Project.png", 100,100);
  ctx.font = "14px monospace";
  ctx.fillText("x " + counter,100,50);
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

// soundTrack.play();

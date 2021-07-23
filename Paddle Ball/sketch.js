
//Paddle Game
//4/12/19
var nextround = 4;
var number = 1;
var balls = [];
var paddle;
var stage = 1;
var score = 0;
var endgame = false;
var startgame = true;
var pause = false;
collision = false;
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 150,10);
  loadballs(number);
  //i create two paddles. One on the top and one on the bottom
  paddle = new Paddle(createVector(5,10), 33, color(255));
  paddle2 = new Paddle2(createVector(5,10), 33, color(255));
}

//  The draw function is called @ 30 fps
//Here im going to call the paddle
function draw() {
  if(startgame === true){
    background(0)
    fill(255);
    rect(100,100,600,600)
    fill(200,0,0);
    rect(200,200,400,400)
    textSize(30)
    fill(0)
    text('Press ENTER to begin!!',250 ,400)
    if(pause === false){
    if(keyCode === ENTER){
      background(20, 20, 20);
      paddle.run();
      paddle2.run();
      points();
      levelNumber();
      end_Game();
      console.log(collision);
      console.log(balls.vel);
      numberofballs = 'there are ' + balls.length + ' balls'
      for(var i = 0 ; i < balls.length; i++){
        balls[i].run();
        }
      }
    }
    if(keyCode === SHIFT){
      pause!=pause
    }
  }
  //this is the screen that pops up whenever the ball goes past the boundaries and the game ends
function end_Game(){
  if(endgame === true){
    //sets background black
    background(0)
    //sets two more screens as rectangles to make end screen look better
    fill(255);
    rect(100,100,600,600)
    fill(200,0,0);
    rect(200,200,400,400)
    fill(255);
    textSize(30)
    text('GAME OVER!',300,400)
    //after game is over shows score and stops the whole program
    text('Your score was ' + score, 275, 450);
    startgame = false;
  }
}
  function points(){
    //this projects the score and stage on the screen
    fill(255);
    textSize(15)
    text('Your Score is ' + score + '.',10,90)
    fill(255);
    textSize(15)
    text('its round ' + stage + '.', 10, 60);
  }
  //this checks whether the score is an iteration of 5 AND adds 1 to the score whenever
  //this is true
  function levelNumber(){
    if(score%5 === 0 && collision === true){
      stage+=1
    }
  }
}
//this function will load the amount of balls into the array balls[]
//then it will set the variables inside of the balls so each will have
//location, velocity, color, radius, and acceleration
function loadballs(number){
  for(var i = 0; i < number; i++){
    var loc = createVector(200,200);
    var vel = createVector(5*stage,6*stage);
    var col = color(random(255), random(255), random(255));
    var rad = (20);
    var b = new ball(loc, vel, col, rad);
    balls.push(b)
  }
}

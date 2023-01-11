var spaceImg , rocketImg ,  space , rocket   ;
var asteroidImg, asteroid, asteroidsGroup;
var  ufoImg, ufo;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";
var PLAY = 1;
var END = 0;
var score;
var gameOverImg,restartImg;

function preload(){
   rocketImg = loadImage("rocket.jpg");
    ufoImg = loadImage("UFO.webp");
    asteroidImg = loadImage("ASTEROID.webp");
   restartImg = loadImage("RESTART.webp");
    spaceImg= loadImage("SPACE.webp");
  gameOverImg = loadImage("gameOver.webp");
}

function setup() {
    createCanvas(600,600);
   space = createSprite(300,300);
    space.addImage("space",spaceImg);
    space.velocityY = 1;
    
  asteroidsGroup = new Group();
  ufosGroup = new Group();
  invisibleBlockGroup = new Group();
  
  rocket = createSprite(200,200,50,50);
  rocket.scale = 0.3;
  rocket.addImage("rocket", rocketImg);

  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  gameOver.scale = 0.5;
  restart.scale = 0.5;
}


function draw() {
    function draw() {
        background(255);
        text("Score: "+ score, 500,50);
        console.log("this is ",gameState)
          if(gameState === PLAY){gameOver.visible = false
            restart.visible = false
      score = score + Math.round(frameCount/60);
     if(score>0 && score%100 === 0 ) 
         if(space.y > 400 ) {
              space.y = 300
            }  
        }
        
        if (gameState === "play") {
          
          if(keyDown("left_arrow")){
              rocket.x = rocket.x - 3;
          }
          if(keyDown("right_arrow")){
        
               rocket.x = rocket.x + 3; 
          }
          if(keyDown("space")){
        
            rocket.velocityY = -10;
          }
        
          rocket.velocityY = rocket.velocityY + 0.8;
        
           if(asteroidGroup.isTouching(rocket)){
            rocket.velocityY=0 ;
           }
          else  if(ufoGroup.isTouching(rocket)){
            rocket.velocityY=0 ;
           }

           else if (gameState === END) {
            gameOver.visible = true;
            restart.visible = true;
            ground.velocityX = 0;
            trex.velocityY = 0  
             asteroidsGroup.setLifetimeEach(-1);
             ufosGroup.setLifetimeEach(-1);
              asteroidsGroup.setVelocityXEach(0);
             ufosGroup.setVelocityXEach(0);


            }

    
           if(invisibleBlockGroup.isTouching(rocket) ||rocket.Y > 600 ){
            rocket.destroy();
            gameState="end";
           }
            spawnDoors();    
        drawSprites();
      
        }
}}

 function spawnDoors()
 {
 
  if (frameCount % 240 === 0) {
    var ufo = createSprite(200, -50);
    var asteroid = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    
    
    ufo.addImage(doorImg);
   asteroid.addImage(climberImg);
    
   ufo.velocityY = 1;
    asteroid.velocityY = 1;
    invisibleBlock.velocityY = 1;

 ufo.lifetime = 800;
 asteroid.lifetime = 800;
    invisibleBlock.lifetime = 800;
     ufosGroup.add(door);
    invisibleBlock.debug = true;
    asteroidsGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
} 
       

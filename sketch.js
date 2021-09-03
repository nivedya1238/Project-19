
var pikachu, pikachuImg, pikachucatchImg;
var mariokart, mariokartImg, mariocatch, mariocatchImg, marioGroup;
var ground, groundImg
var gameState = "play"

function preload(){

pikachuImg = loadImage("Unknown-2.png")
mariokartImg = loadImage("Unknown.jpeg")
groundImg = loadImage("ground.jpeg")
mariocatchImg = loadImage("Unknown-1.jpeg")
pikachucatchImg = loadImage("Unknown-3.jpeg")
}

function setup() {
 createCanvas(600, 600)
 pikachu = createSprite(300, 450, 100, 100)
 pikachu.addImage(pikachuImg)
 pikachu.scale = 0.5
 pikachu.velocityX = 1
 
 ground = createSprite(600, 600)
 ground.addImage(groundImg)
 ground.scale=3
 marioGroup = new Group();

}

function mariok(){
    mario = createSprite(100, 400, 100, 100)
    mario.addImage(mariokartImg)
    mario.scale = 0.5
    mario.velocityX = 1
    marioGroup.add(mario)
    mario.lifetime=600
}


function draw() {
    background("white")

    if(gameState === "play"){
        if(keyDown("up")){
            pikachu.velocityY = -4
            pikachu.velocityY = pikachu.velocityY + 0.8
            pikachu.collide(ground)
        }
    }

        if(gameState === "end") {
            if(marioGroup.isTouching(pikachu)){
                mario.addImage(mariocatchImg)
                pikachu.addImage(pikachucatchImg)
                mario.velocityX = 0
                pikachu.velocityY = 0
        }
    }

    mariok();
    drawSprites();
}

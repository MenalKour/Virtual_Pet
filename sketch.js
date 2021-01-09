var dog,happydog,dog1,happyDog1,database,foodS,foodStock,backgroundImage;

function preload(){
dog1=loadImage("Dog.png")
happyDog1=loadImage("happydog.png")
backgroundImage=loadImage("bg.jpg")
}
function setup(){
    database=firebase.database()
    createCanvas(500,500);
dog=createSprite(250,450,30,30)
dog.addImage(dog1)
dog.scale=0.15
foodStock=database.ref('food')
foodStock.on('value',readPosition)
}

function draw(){
    background(backgroundImage)
   
     if(keyWentDown(UP_ARROW)){
        writePosition(foodS)
        dog.addImage(happyDog1)
    }
    if(keyWentUp(UP_ARROW)){
        dog.addImage(dog1)
    }
   
    drawSprites();
textSize(20)
    fill(5,152,99);
  stroke("black");
  text("Milk Remaning :"+foodS,170,200);
  textSize(20);
  text("Press Up_Arrow Key To Feed",100,10,300,20);
  text("Milk To Spike!!!",160,40,300,20)
}
function readPosition(data){
    foodS=data.val();
    
}

function writePosition(x){
if(foodS<=0){
    foodS=0
}
else{
    foodS = foodS-1;
  }
    database.ref('/').update({
        
       Food:x

    })

}

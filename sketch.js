var box 
function setup() {
  createCanvas(400,400);

box = createSprite (200,200,40,40);

}

function draw() 
{

  background("blue");

  if (keyIsDown(DOWN_ARROW)) 
  {
    background ("red");
  }

  if (keyIsDown(UP_ARROW)) 
  {
    background ("green");
  }

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background ("black");
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background ("yellow");
  }



  if (keyIsDown (RIGHT_ARROW ))  
  {
  box.x = box.x+5

 }

   if(keyIsDown (LEFT_ARROW))  {
     box.x = box.x-5
   }
  
   if(keyIsDown (DOWN_ARROW))  {
    box.y = box.y+5
  }
  if(keyIsDown (UP_ARROW))  {
    box.y = box.y-5
  }

  

drawSprites () 

}






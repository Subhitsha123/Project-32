class Box {
  constructor(x,y,width,height) {
    var options = {
        //isStatic: false,
        restitution:0.4,
        friction:0.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.Visibility = 225;
    //this.image = loadImage("grey.webp");
    World.add(world, this.body);
  }
  display(){
    
    if (this.body.speed<3){
    var pos =this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
  else{
    push();
    this.Visibility = this.Visibility-5;
    pop();

    World.remove(world,this.body);

  }
}

score(){
  if(this.Visibility<0 && this.Visibility>-105){
    score++;
  }
}
};


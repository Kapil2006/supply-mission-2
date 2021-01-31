class Ground {
    constructor (x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        world.add(world,this.body);
        this.width = width;
        this.height = height;
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("lime");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
}
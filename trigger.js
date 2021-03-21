class Trigger{
    constructor(x){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,780,800,1,options);
        
        this.width = 800;
        this.height = 1;
        World.add(world, this.body);
        console.log(this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, 800, 1);
      pop();
    }
}
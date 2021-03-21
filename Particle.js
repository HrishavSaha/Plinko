class Particle{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        this.remove = false;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        if(pos.x > 165 && pos.x < 315 && pos.y > 400 && this.remove === false){
          score = score + 200;
          //World.remove(world, this.body);
          this.remove = true;
        }else if(((pos.x > 85 && pos.x < 155) || (pos.x > 325 && pos.x < 395)) && pos.y > 400 && this.remove === false){
          score = score + 100;
          //World.remove(world, this.body);
          this.remove = true;
        }else if(((pos.x > 5 && pos.x < 75) || (pos.x > 405 && pos.x < 475)) && pos.y > 400 && this.remove === false){
          score = score + 50;
          //World.remove(world, this.body);
          this.remove = true;
        }
        push();
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(pos.x,pos.y,10);
        pop();
      }
}
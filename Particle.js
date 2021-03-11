class Particle{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(pos.x,pos.y,10);
        pop();
      }
}
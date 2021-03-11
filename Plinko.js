class Plinko{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.color=color(0,0,0);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,10);
        pop();
      }
}
class Slingshot{
    constructor(body1,pointB)
    {
        var options={
            bodyA:body1,
            pointB:pointB,
            stiffness: 0.04,
            length:100
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    fly()
    {
        this.sling.bodyA=null;
    }
    display()
    {
        if(this.sling.bodyA)
        {
            var pointA=this.sling.bodyA.position;
            //var pointB=this.chain.bodyB.position;
            line(pointA.x,pointA.y,this.pointB.x,this.pointB.y);
        }
    }
}
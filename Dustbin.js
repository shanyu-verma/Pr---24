class Dustbin{
    constructor(x,y,width,height){
            var options = {
                'isStatic' : true,
                'restitution':0.8,
                'friction':1,
                'density':1.0
            }

            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            
            World.add(world, this.body);

            this.Rbody = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            
            World.add(world, this.Rbody);

            this.Bbody = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            
            World.add(world, this.Bbody);
        

    }

    display(){
        
      


        var pos =this.body.position;
        var posR =this.Rbody.position;
        var posB =this.Bbody.position;
        var angle = this.body.angle;


        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();

        push();
        translate(posR.x, posR.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();

        push();
        translate(posB.x, posB.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();

    


    }



}
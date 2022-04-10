class Ground {
    constructor(x,y,w,h)
    {
     this.w= w
     this.h = h;
     var options = {
         isStatic:true
     }
     this.body = Bodies.rectangle(x,y,w,h,options)
     World.add(world,this.body)
    }
    display(){
        var pus= this.body.position
        push()
         rectMode(CENTER)
         stroke("yellow")
         fill("yellow")
         rect(pus.x,pus.y,this.w,this.h)
         pop()

     }
}
class computerArcher{
    constructor(x,y,h,w){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true})
        World.add(world,this.body)
        this.Image = loadImage("assets/computerArcher.png")
        this.width = w
        this.height = h
        Matter .Body.setAngle(this.body,PI/2)
   }

   display(){
    var p = this.body.position
    var a = this.body.angle
    push ()
    translate (p.x,p.y)
    rotate (a)  
    imageMode(CENTER)
    image (this.Image,0,0,this.width,this.height)
    pop ()


   }
}
class playerArcher{
    constructor(x,y,h,w){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true})
        World.add(world,this.body)
        this.Image = loadImage("assets/playerArcher.png")
        this.width = w
        this.height = h
        Matter .Body.setAngle(this.body,-PI/2)
   }

   display(){
    var p = this.body.position
    var a = this.body.angle
    if(keyIsDown(UP_ARROW)){
        a = a-0.2
        Matter .Body.setAngle(this.body,a)
        
    }
    if(keyIsDown(DOWN_ARROW)){
        a = a+0.2
        Matter .Body.setAngle(this.body,a)
        
    }
    push ()
    translate (p.x,p.y)
    rotate (a)  
    imageMode(CENTER)
    image (this.Image,0,0,this.width,this.height)
    pop ()


   }

   
}
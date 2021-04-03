class Mango{
    constructor(x , y , r){  // to add properties
      var options = {isStatic: true , restitution:0 , friction:1 , density:1.2}
      this.x = x
      this.y = y
      this.r = r
      
      this.image = loadImage("Images/mango.png")
      this.body = Bodies.circle(x , y ,this.r , options)
      World.add(world , this.body) // adding mangoes to the world
    }
    display(){
        push()
        translate(this.body.position.x , this.body.position.y) // giving position(for displacement)
        rotate(this.body.angle) // so that whn the mangoes fall, they will rotate in a certain angle that it doesnot collapse woth others
        imageMode(CENTER)
        image(this.image , 0 , 0 , this.r*2 , this.r*2)
        pop() //limit to ground
    
    }
}
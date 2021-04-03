class Stone{
    constructor(x , y , r){  // to add properties
      var options = { restitution:0 , friction:1 , density:0.1}
      this.x = x
      this.y = y
      this.r = r
      
      this.image = loadImage("Images/stone.png")
      this.body = Bodies.circle(x , y ,this.r/2 , options)
      World.add(world , this.body)
    }
    display(){
        push() // adding nuisense
        translate(this.body.position.x , this.body.position.y) // giving position(for displacement)
        //rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image , 0 , 0 , this.r*2 , this.r*2)
        pop() //limit to ground
    
    }
}
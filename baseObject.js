class BaseObject {
  constructor (obj = {}) {
    Object.keys(obj).forEach(k => this[k] = obj[k])
    this.angle = Math.PI*2 
    this.check()
  }

  draw(ctx) {
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.rads, 0, this.angle)
    ctx.fill()
    ctx.closePath()
  }

  move () {
    if (this.x+this.rads > this.SW || this.x-this.rads < 0) 
      this.speedX *=  -1
 
    if (this.y+this.rads > this.SH ||
      this.y-this.rads < 0) 
      this.speedY *= -1

    this.x += this.speedX 
    this.y += this.speedY 
  }
  handleCollision() { 
    if (!touch.x) return 
    let distance = pointDistance(touch.x, touch.y, this.x, this.y)
    if (distance <= this.rads) {
      texts.push(new Text(this.x,this.y,TEXT))
    touch.x = touch.y = null
    }
  }
  
  check() {
    if (this.x <= this.rads || this.x>= this.SW-this.rads || this.y <= this.rads || this.y>= this.SH-this.rads){
      this.x = (this.SW*getRandomNum(2))+getRandomNum(100)
      this.y = (this.SH*getRandomNum(2.5))+getRandomNum(150)
      console.log ("called")
    }
  }
  update(ctx) {
    this.draw(ctx)
    this.move()
    this.handleCollision()
  }
}
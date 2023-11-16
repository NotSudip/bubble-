class Text {
  constructor (x,y,txt) {
    this.x = x
    this.y = y
    this.speedY = getRandomNum(3)
    this.txt = txt
    this.delete = false
  }

  move () {
    this.y -= this.speedY
  }
  update(ctx) { 
    if (this.y<0) this.delete = true
    ctx.fillStyle = getRandomColor()
    ctx.fillText (this.txt,this.x,this.y)
    this.move()
  }
}
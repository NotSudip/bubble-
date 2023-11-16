const TEXT = prompt("ENTER A TEXT ") 
 const ballNums = +prompt("ENTER BALL NUMBERS ")
 const ballRads = +prompt("ENTER RADIUS OF A BALL ")

if (!TEXT || ballNums<0 || ballRads<5) {
  alert ("Invalid input !!\n Try again")
  window.stop()
}
const CW = myCanvas.width = innerWidth
const CH = myCanvas.height = innerHeight
const ctx = myCanvas.getContext ("2d")
ctx.font = "25px Arial"
const balls = []
const texts = []

for (let i = 0; i < ballNums; ++i) 
  balls.push(new Ball({
  x: CW*Math.random(),
  y: CH*Math.random(),
  rads: ballRads,
  color: getRandomColor(),
  speedX: getRandomNum(3),
  speedY: getRandomNum(3),
  SW: CW,
  SH: CH
}))


function animate() {
  ctx.clearRect(0, 0, CW, CH) 
  balls.forEach (ball => ball.update(ctx))
  texts.forEach((text,i)=>{
    if (text.delete)texts.splice(i,1)
    text.update(ctx)
    })
  requestAnimationFrame(animate)
}
animate()


window.addEventListener ("touchstart", ({
  changedTouches: {
    "0": {
      pageX, pageY
    }}}) => {

  touch.x = pageX
  touch.y = pageY

})


const COLORS = ["#04fdebd4","#73f879d4","#ffe419d4","#ff4315d4","#15aaffd4","#b863fdd4","#ff3294d4","#50ff32e5","#ffc432e5","#ffffffe5"] 
let i = 0

let touch = {
  x : null,
  y : null
}

const getRandomColor = () => COLORS[i<COLORS.length-1?++i:i=0]
  
const getRandomNum = n => {
  const temp = n ? Math.random()*n : Math.random()
  return temp<0.6?0.6:temp
}


const pointDistance = (x1,y1,x2,y2) => Math.sqrt((x1-x2)**2 - (y1-y2)**2)
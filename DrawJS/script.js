const penBtn = document.querySelector('.pen')
const eraserBtn = document.querySelector('.eraser')
const colorEl = document.getElementById('color')
const clearBtn = document.getElementById('clear')
const mainContainer = document.querySelector('.main-container')
const toolBox = document.querySelector('.toolbox')

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let boxSize 
let isPressed = false
let size = 15
let color 
let x
let y

penBtn.addEventListener('click', startDraw)
eraserBtn.addEventListener('click', startErase)

function startDraw(){

  color = 'black'
  boxSize = penBtn.nextElementSibling

  sizeChanger()
  mouseEvent()
  touchEvent()

}

function startErase(){
  
  color = '#fff'
  boxSize = eraserBtn.nextElementSibling

  sizeChanger()
  mouseEvent()
  touchEvent()
}

function mouseEvent(){
  canvas.addEventListener('mousedown', (e) => {
    isPressed = true
  
    x = e.offsetX
    y = e.offsetY
  })
  
  canvas.addEventListener('mouseup', (e) => {
    isPressed = false
  
    x = undefined
    y = undefined
  })
   
  canvas.addEventListener('mousemove', (e) => {
    
    if(isPressed){
      x2 = e.offsetX
      y2 = e.offsetY
  
      drawCircle(x2,y2)
      drawLine(x,y,x2,y2)
  
      x=x2
      y=y2
    }
  })
}

// Touch Input for smartphones and tablets

function touchEvent(){

  let canvasTop = canvas.getBoundingClientRect().top
  let canvasLeft = canvas.getBoundingClientRect().left

  canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();

    isPressed = true
    
    x0 = e.touches[0].clientX - canvasLeft
    y0 = e.touches[0].clientY - canvasTop
    
  }, {passive: false});

  canvas.addEventListener('touchend', (e) => {
    e.preventDefault();

    isPressed = false
      
    x0 = undefined
    y0 = undefined
  }, {passive: false})

  
  canvas.addEventListener("touchmove", (e) => {
    
    if(isPressed){
      x3 = e.touches[0].clientX - canvasLeft
      y3 = e.touches[0].clientY - canvasTop
  
      drawCircle(x3,y3)
      drawLine(x0,y0,x3,y3)
  
      x0=x3
      y0=y3
    }
  }, {passive: false})
}

function sizeChanger(){
  const decrease = boxSize.firstElementChild
  const increase = boxSize.lastElementChild
  const sizeEl = decrease.nextElementSibling
  
  function updateScreenSize() {
    sizeEl.innerText = size
  }

  decrease.addEventListener('click', () => {
    size -= 5
  
    if(size < 5){
      size = 5
    }
  
    updateScreenSize()
  })

  increase.addEventListener('click', () => {
    size += 5
  
    if(size > 50){
      size = 50
    }
  
    updateScreenSize()
  })
}

function drawCircle(x,y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size *2
  ctx.stroke()
}


colorEl.addEventListener('change', (e) => color = e.target.value)

clearBtn.addEventListener('click', () => ctx.clearRect(0,0,canvas.width,canvas.height))


// Media Queries

let mqls = [
  window.matchMedia('(max-width: 1020px) and (min-width: 549px)'),
  window.matchMedia('(max-width: 550px)')
]

function mediaqueryresponse(){
  if (mqls[0].matches) {
    canvas.width = 500
    canvas.height = 550
  }
  else if(mqls[1].matches){
    canvas.width = 350
    canvas.height = 400
  }
  else {
    canvas.width = 750
    canvas.height = 550
  }  
}

for (var i=0; i<mqls.length; i++){ 
  mediaqueryresponse(mqls[i]) 
  mqls[i].addListener(mediaqueryresponse) 
}







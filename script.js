const D_RADIUS = 50
const WIDTH = 600
const HEIGHT = 600

window.onload = () => {
  const $el = document.querySelector('.box')
  const data = [
    { angle: 60, value: 3 },
    { angle: 120, value: 2 },
    { angle: 180, value: 3 },
    { angle: 240, value: 4 },
    { angle: 300, value: 5 },
    { angle: 360, value: 3 },
  ]
  createClip($el, data)
}

function createClip($el, data) {
  const path = data.map(polarToCartesian)
  $el.style.clipPath = createPoligon(path)
}

function getRad(deg) {
  return deg * Math.PI / 180;
}

function createPoligon(array) {
  array = array.map((coords) => `${coords.x}% ${coords.y}%`)
  return `polygon(${array.join(', ')})`
}

function polarToCartesian({ angle, value }) {
  const cos = Math.cos(getRad(angle))
  const sin = Math.sin(getRad(angle))
  const radius = value * D_RADIUS
  const x = radius * cos
  const y = radius * sin
  return coordsToPercents(coordsShift({ x, y }))
}

function coordsToPercents({ x, y }) {
  return {
    x: x / WIDTH * 100,
    y: y / HEIGHT * 100
  }
}

function coordsShift({ x, y }) {
  return {
    x: x + WIDTH / 2,
    y: y + HEIGHT / 2
  }
}
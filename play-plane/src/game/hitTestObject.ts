interface rect {
  x: number,
  y: number,
  width: number,
  height: number
}
export function hitTestObject(rectA: rect, rectB: rect) {
  return (
    rectA.x + rectA.width >= rectB.x &&
    rectB.x + rectB.width >= rectA.x &&
    rectA.y + rectA.height >= rectB.y &&
    rectB.y + rectB.height >= rectA.y
  )
}
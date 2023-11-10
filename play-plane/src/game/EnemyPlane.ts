export interface EnemyPlane {
  move(): void,
  x: number,
  y: number,
  width: number,
  height: number,
  speed: number,
  destroy(): void,
}
const defineOption = {
  x: 0,
  y: 0,
  speed: 1,
  border: 600,
  width: 197,
  height: 134
}
export function createEnemyPlane(option?: {
  x: number,
  y: number,
  speed?: number
  border?: number
}, EnemyPlanes: EnemyPlane[] = []) {
  return {
    ...defineOption,
    ...option,
    move() {
      this.y += this.speed
      if (this.y > this.border) {
        this.destroy()
      }
    },
    destroy() {
      EnemyPlanes.splice(EnemyPlanes.indexOf(this), 1)
    },
  }
}
export function initEnemyPlane(enemyPlanes: EnemyPlane[]) {
  let x = 0;
  setInterval(() => {
    if (x + 100 > 500) {
      x = 0
    } else {
      x += 100
    }
    enemyPlanes.push(createEnemyPlane({
      y: 0,
      x,
    },enemyPlanes))
  }, 2000);
}
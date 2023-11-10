const defineOption = {
  x: 0,
  y: 0,
  speed: 5,
  border: 0,
  width: 96,
  height: 96
}
export function createBullet(option?: {
  x: number,
  y: number,
  speed?: number
  border?: number
}, bullets: BulletType[] = []) {
  return {
    ...defineOption,
    ...option,
    move() {
      this.y -= this.speed
      if (this.y <= this.border) {
        this.destroy()
      }
    },
    destroy() {
      bullets.splice(bullets.indexOf(this), 1)
    },
  }
}
export interface BulletType {
  move(): void,
  x: number,
  y: number,
  height: number,
  width: number,
  speed: number,
  destroy(): void,
  border: number
}
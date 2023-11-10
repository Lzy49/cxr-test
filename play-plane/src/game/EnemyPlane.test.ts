import { expect, it, describe } from 'vitest'
import { createEnemyPlane } from './EnemyPlane.ts'
describe('测试敌机', () => {
  it('敌机移动', () => {
    const plane = createEnemyPlane({
      x: 0,
      y: 0,
      speed: 5,
    },)
    plane.move()
    expect(plane.y).toBe(5)
  })
})
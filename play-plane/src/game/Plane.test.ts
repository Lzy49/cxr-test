import { describe, it, expect } from 'vitest'
import { direction, setupPlane } from './Plane.ts'
describe('飞机逻辑', () => {
  function createPlane(bullets = []) {
    const defineOption = {
      x: 0,
      y: 0,
      speed: 1
    }
    return setupPlane({}, bullets, { ...defineOption })
  }
  describe('飞机转向逻辑', () => {

    it('plane left', () => {
      const plane = createPlane()
      plane.moveLeft()
      expect(plane.direction).toBe(direction['left'])
    })
    it('plane right', () => {
      const plane = createPlane()
      plane.moveRight()
      expect(plane.direction).toBe(direction['right'])
    })
    it('plane top', () => {
      const plane = createPlane()
      plane.moveTop()
      expect(plane.direction).toBe(direction['top'])
    })
    it('plane bottom', () => {
      const plane = createPlane()
      plane.moveBottom()
      expect(plane.direction).toBe(direction['bottom'])
    })
    it('plane stop', () => {
      const plane = createPlane()
      plane.moveBottom()
      plane.stop(direction.bottom)
      expect(plane.direction).toBe(direction['stop'])
    })
  })
  it('飞机攻击', () => {
    const bullets: any = []
    const plane = createPlane(bullets);
    plane.attack()
    expect(bullets.length).toBe(1)
  })
})
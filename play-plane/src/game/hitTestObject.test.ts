import { describe, it, expect } from 'vitest'
import { hitTestObject } from './hitTestObject'
describe('测试叠加', () => {
  it('检测两个矩形碰撞上', () => {
    const rectA = {
      x: 0,
      y: 0,
      width: 50,
      height: 50
    }
    const rectB = {
      x: 50,
      y: 49,
      width: 50,
      height: 50
    }
    const r = hitTestObject(rectA, rectB)
    expect(r).toBe(true)
  })
  it('检测两个矩形没有碰撞', () => {
    const rectA = {
      x: 0,
      y: 0,
      width: 50,
      height: 50
    }
    const rectB = {
      x: 51,
      y: 51,
      width: 50,
      height: 50
    }
    const r = hitTestObject(rectA, rectB)
    expect(r).toBe(false)
  })
})
import { describe, expect, it, vi } from 'vitest'
import { createBullet } from './Bullet'

describe('测试子弹', () => {
  it('测试子弹 移动', () => {
    const bullet = createBullet({
      x: 0,
      y: 5
    });
    bullet.move()
    expect(bullet.y).toBe(0)
  })
  it('测试子弹销毁', () => {
    const bullet = createBullet({
      x: 0,
      y: 5
    });
    const destroyFn = vi.fn()
    bullet.destroy = destroyFn
    bullet.move()
    expect(destroyFn).toBeCalled()
  })
})
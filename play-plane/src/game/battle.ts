import type { EnemyPlane, Plane } from ".";
import { hitTestObject } from "./hitTestObject";

export function battle(enemyPlanes: EnemyPlane[], plane: Plane) {
  enemyPlanes.forEach(item => {
    // 检测子弹是否击中敌机
    plane.bullets.forEach(bullet => {
      const r = hitTestObject(item, bullet)
      if(r) {
        item.destroy()
        bullet.destroy()
      }
    })
  })
}
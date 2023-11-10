export * from './Plane'
export * from './Bullet'
export * from './EnemyPlane'
export * from './battle'
import { Application } from 'pixi.js'
import { setupPlane, BulletType, Plane, EnemyPlane, initEnemyPlane, battle } from '../game';
export const game = new Application({
  width: 500,
  height: 500
})
document.body.append(game.view as HTMLCanvasElement);
export function initGame(_plane: {}, _bullets: [], _enemyPlanes: []): {
  plane: Plane,
  bullets: BulletType[],
  enemyPlanes: EnemyPlane[]
} {
  const plane = setupPlane(_plane, _bullets, {})
  const enemyPlanes: EnemyPlane[] = _enemyPlanes
  const bullets: BulletType[] = _bullets
  initEnemyPlane(enemyPlanes)
  game.ticker.add(() => {
    plane.move()
    bullets.forEach(item => {
      item.move()
    });
    enemyPlanes.forEach(item => {
      item.move()
    })
    battle(enemyPlanes, plane)
  })
  return {
    plane,
    bullets,
    enemyPlanes
  }
}
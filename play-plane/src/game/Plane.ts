import { createBullet, BulletType } from "./Bullet";

export interface Plane {
  x: number,
  y: number,
  speed: number,
  height: number,
  width: number,
  direction: string
  bullets: BulletType[],
  moveLeft: () => void,
  moveRight: () => void,
  moveTop: () => void,
  moveBottom: () => void
  attack: () => void
  stop: (d: direction) => void
  move: () => void
}
export enum direction {
  "stop",
  "left",
  "right",
  "top",
  "bottom"
}
const defaultOptions = {
  x: 250,
  y: 250,
  speed: 5,
  height: 178,
  width: 140,
  direction: 'stop'
};
export function setupPlane(plane: any, bullets: BulletType[] = [], defineOption = {}): Plane {
  plane = Object.assign(plane, defaultOptions, defineOption)
  plane.bullets = bullets
  plane.moveLeft = () => {
    plane.direction = direction['left']
  }
  plane.moveRight = () => {
    plane.direction = direction['right']
  }
  plane.move = () => {
    switch (plane.direction) {
      case direction['left']:
        plane.x -= plane.speed
        break
      case direction['right']:
        plane.x += plane.speed
        break
      case direction['top']:
        plane.y -= plane.speed
        break
      case direction['bottom']:
        plane.y += plane.speed
        break
    }
  }
  plane.moveTop = () => {
    plane.direction = direction['top']
  }
  plane.moveBottom = () => {
    plane.direction = direction['bottom']
  }
  plane.stop = (code: direction) => {
    if (code === plane.direction) {
      plane.direction = direction['stop']
    }
  }
  plane.attack = () => {
    bullets.push(createBullet({
      x: plane.x + 21,
      y: plane.y
    }, bullets))
  }
  return plane
}
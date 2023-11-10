<script setup lang="ts">
import img from '../../assets/plane.png'
import type { Plane } from '../game/index'
import { direction } from '../game/index'
const { plane } = defineProps<{ plane: Plane }>()
document.addEventListener('keydown', (e: { code: string }) => {
  const keys: { [key: string]: () => void } = {
    'KeyA': plane.moveLeft,
    'KeyD': plane.moveRight,
    'KeyW': plane.moveTop,
    'KeyS': plane.moveBottom,
    'Space': plane.attack
  }
  keys[e.code] && keys[e.code]()
})
document.addEventListener('keyup', (e: { code: string }) => {
  const key2direction: { [key: string]: direction } = {
    'KeyA': direction['left'],
    'KeyD': direction['right'],
    'KeyW': direction['top'],
    'KeyS': direction['bottom'],
  }
  if (e.code in key2direction) {
    plane.stop(key2direction[e.code])
  }
})
</script>
<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="img"></Sprite>
  </Container>
</template>
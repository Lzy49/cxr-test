<script setup lang="ts">
import EnemyPlane from '../../assets/enemyPlane.png'
defineProps<{ enemyPlane: { x: number, y: number } }>()
</script>
<template>
  <Container :x="enemyPlane.x" :y="enemyPlane.y">
    <Sprite :texture="EnemyPlane"></Sprite>
  </Container>
</template>
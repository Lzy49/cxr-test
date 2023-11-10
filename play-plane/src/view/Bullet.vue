<script setup lang="ts">
import bulletImg from '../../assets/bullet.png'
defineProps<{ bullet: { x: number, y: number } }>()
</script>
<template>
  <Container :x="bullet.x" :y="bullet.y">
    <Sprite :texture="bulletImg"></Sprite>
  </Container>
</template>
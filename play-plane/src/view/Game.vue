<script setup lang="ts">
import Plane from './Plane.vue'
import Bullet from './Bullet.vue'
import EnemyPlane from './EnemyPlane.vue'
import { reactive } from 'vue';
import { initGame } from '../game';
const { bullets, plane, enemyPlanes } = initGame(reactive({}), reactive([]), reactive([]))
</script>
<template>
  <Plane :plane="plane" />
  <Bullet v-for="item in bullets" :bullet="item" />
  <EnemyPlane v-for="item in enemyPlanes" :enemy-plane="item" />
</template>
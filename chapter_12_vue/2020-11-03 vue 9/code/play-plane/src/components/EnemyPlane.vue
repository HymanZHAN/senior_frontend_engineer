<template>
  <container>
    <sprite :texture="enemyImg"></sprite>
  </container>
</template>

<script>
// 由2张图片
import enemyImg from "../assets/enemy.png";
import { reactive } from "vue";

export default {
  setup() {
    return { enemyImg };
  }
};

export function useEnemyPlane() {
  const width = 308;
  const height = 207;
  const enemyPlanes = reactive([
    {
      x: 10,
      y: 20,
      width,
      height
    },
    {
      x: 60,
      y: 80,

      width,
      height
    }
  ]);

  //game.ticker
  // 向下移动

  return {
    enemyPlanes
  };
}
</script>

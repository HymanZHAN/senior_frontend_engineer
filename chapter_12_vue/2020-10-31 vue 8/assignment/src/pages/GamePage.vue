<template>
  <container>
    <circle :x="circleX" :y="circleY"></circle>
  </container>
</template>

<script>
// 暗号：蜘蛛女皇
import { onMounted, onUnmounted, ref } from "vue";
import { game } from "../game";

export default {
  name: "Game",
  setup() {
    const stageWidth = 480;
    const radius = 50;
    const circleX = ref(0);
    const circleY = 100;

    // 移动小球
    const speedValue = 5;
    let speed = speedValue;
    const bounce = () => {
      circleX.value += speed;
      if (circleX.value == stageWidth - 2 * radius) {
        speed = -speedValue;
      }
      if (circleX.value == 0) {
        speed = speedValue;
      }
    };

    onMounted(() => {
      game.ticker.add(bounce);
    });

    onUnmounted(() => {
      game.ticker.remove(bounce);
    });

    return {
      circleX,
      circleY,
    };
  },
};
</script>

<style lang="scss" scoped></style>

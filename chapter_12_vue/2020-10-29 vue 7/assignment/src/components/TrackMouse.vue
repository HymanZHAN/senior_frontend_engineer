<template>
  <div>
    鼠标位置：
    <div>X: {{ x }}</div>
    <div>Y: {{ y }}</div>
  </div>
</template>

<script>
import { useMousePosition } from "../features/track-mouse-movement";
export default {
  setup() {
    let { x, y } = useMousePosition();
    return { x, y };
  },
};
</script>

<style lang="scss" scoped></style>

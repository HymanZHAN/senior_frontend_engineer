<template>
  <container>
    <sprite :texture="planeImg"></sprite>
  </container>
</template>

<script>
// 由2张图片
import planeImg from "../assets/plane.png";
import { reactive, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    return { planeImg };
  }
};

export function usePlane({ onAttack }) {
  const planeInfo = reactive({
    x: 100,
    y: 400,
    width: 258,
    height: 364
  });

  // 键盘事件就好了
  const speed = 10;
  const handleMove = e => {
    console.log(e.code);

    switch (e.code) {
      case "ArrowUp":
        planeInfo.y -= speed;
        break;
      case "ArrowDown":
        planeInfo.y += speed;
        break;
      case "ArrowLeft":
        planeInfo.x -= speed;
        break;
      case "ArrowRight":
        planeInfo.x += speed;
        break;
    }
  };

  const handleAttack = e => {
    // 按下空格的时候 发射子弹
    if (e.code === "Space") {
      console.log("attack");
      onAttack &&
        onAttack({
          x: planeInfo.x,
          y: planeInfo.y
        });

      // 创建子弹
    }
  };

  onMounted(() => {
    window.addEventListener("keyup", handleMove);
    window.addEventListener("keyup", handleAttack);
  });

  onUnmounted(() => {
    window.removeEventListener("keyup", handleMove);
    window.removeEventListener("keyup", handleAttack);
  });

  return {
    planeInfo
  };
}
</script>

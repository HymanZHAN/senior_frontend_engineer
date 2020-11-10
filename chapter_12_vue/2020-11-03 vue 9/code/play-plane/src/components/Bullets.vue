<template>
  <container>
    <sprite :texture="bulletImg"></sprite>
  </container>
</template>

<script>
import bulletImg from "../assets/bullet.png";
import { game } from "../game";
import { reactive } from "vue";

export default {
  setup() {
    return { bulletImg };
  }
};

export function useBullets() {
  const width = 0;
  const height = 0;
  const bullets = reactive([
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
    },

    {
      x: 160,
      y: 80,
      width,
      height
    },
    {
      x: 260,
      y: 80,
      width,
      height
    }
  ]);

  // window.bullets = bullets;

  const addBullet = info => {
    console.log(info);
    console.log({ ...info, width, height });
    // bullets.push({ ...info, width, height });
    console.log(bullets);
  };
  //game.ticker
  // 向下移动

  function move() {
    const speed = 5;
    game.ticker.add(() => {
      bullets.forEach(bullet => {
        bullet.y -= speed;
      });
    });
  }

  move();

  return {
    addBullet,
    bullets
  };
}
</script>

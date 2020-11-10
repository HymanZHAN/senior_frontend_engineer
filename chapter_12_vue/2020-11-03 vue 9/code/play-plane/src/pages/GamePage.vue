<template>
  <container>
    <Map></Map>
    <Plane :x="planeInfo.x" :y="planeInfo.y"></Plane>
    <EnemyPlane
      v-for="(enemy, index) in enemyPlanes"
      :key="index"
      :x="enemy.x"
      :y="enemy.y"
    ></EnemyPlane>

    <Bullets
      v-for="(bullet, index) in bullets"
      :key="index"
      :x="bullet.x"
      :y="bullet.y"
    ></Bullets>
  </container>
</template>

<script>
import Map from "../components/Map";
import Plane, { usePlane } from "../components/Plane.vue";
import EnemyPlane, { useEnemyPlane } from "../components/EnemyPlane.vue";
import Bullets, { useBullets } from "../components/Bullets.vue";
import { game } from "../game";
import { onMounted, onUnmounted } from "vue";
import { hitTestObject } from "../utils";

export default {
  components: {
    Map,
    Plane,
    EnemyPlane,
    Bullets
  },
  setup(props, { emit }) {
    // 飞机移动
    // 数据驱动视图
    const { bullets, addBullet } = useBullets();
    const { planeInfo } = usePlane({
      onAttack(position) {
        addBullet(position);
      }
    });
    // 构建敌军数据
    const { enemyPlanes } = useEnemyPlane();

    useFighting({
      planeInfo,
      enemyPlanes,
      emit
    });

    return {
      planeInfo,
      enemyPlanes,
      bullets
    };
  }
};

function useFighting({ planeInfo, enemyPlanes, emit }) {
  // 战斗逻辑
  const handleTicker = () => {
    // 碰撞检测
    // 碰撞检测
    enemyPlanes.forEach(enemy => {
      if (hitTestObject(planeInfo, enemy)) {
        // true
        console.log("hit");
        emit("change-page", "EndPage");
      }
    });
  };
  onMounted(() => {
    game.ticker.add(handleTicker);
  });

  onUnmounted(() => {
    game.ticker.remove(handleTicker);
  });
}
</script>

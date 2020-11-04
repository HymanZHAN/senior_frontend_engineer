// 暗号：尤大nb
import { onMounted, onUnmounted, ref } from "vue";

export function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  const trackMouseMovement = (e) => {
    x.value = e.offsetX;
    y.value = e.offsetY;
  };

  onMounted(() => {
    window.addEventListener("mousemove", trackMouseMovement);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", trackMouseMovement);
  });

  return {
    x,
    y,
  };
}

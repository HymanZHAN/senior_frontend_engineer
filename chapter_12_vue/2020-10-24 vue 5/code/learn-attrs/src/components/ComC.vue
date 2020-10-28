<template>
  <div>
    ComC
    <div>msg -> {{ $attrs.msg }}</div>
  </div>
</template>

<script>
import eventBus from "../eventBus";
export default {
  // props: ["msg"],
  mounted() {
    eventBus.$on("heihei", (msg) => {
      console.log(msg);
    });

    // emit("haha")
  },
};
</script>

<style lang="scss" scoped></style>

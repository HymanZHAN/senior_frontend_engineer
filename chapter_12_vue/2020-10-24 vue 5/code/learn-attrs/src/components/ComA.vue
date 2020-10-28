<template>
  <div class="ComA">
    ComA
    <br />
    <ComB v-bind="$attrs"></ComB>

    <br />

    <button @click="toComC">to ComC</button>
  </div>
</template>

<script>
import ComB from "./ComB";
import eventBus from "../eventBus";
export default {
  // props
  inheritAttrs: false,
  components: {
    ComB,
  },
  data() {
    return {
      title: "comA",
    };
  },
  mounted() {
    // 比较少见的属性
    console.log(this.$attrs);
    console.log(this.$listeners);
    this.$listeners.a();

    eventBus.$on("haha", (msg) => {
      console.log("haha");
    });
  },
  methods: {
    toComC() {
      // 向 comC 通信
      eventBus.$emit("heihei", this.title);
      eventBus.$on("heihei", () => {
        console.log("heihei");
      });

      // {
      // heihei:()=>{}
      // }
      // emit
      // 查找有没有heihei
      // heihei(this.title)
    },
  },
};
</script>

<style lang="scss" scoped></style>

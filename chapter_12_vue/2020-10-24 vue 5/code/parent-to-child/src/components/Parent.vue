<template>
  <div ref="rootContainer">
    Parent
    <br />
    <ChildA>
    </ChildA>
    <br />
    <button @click="getChildByRef">get child by ref</button>
    <input type="text" ref="input" />
  </div>
</template>

<script>
import Child from "./Child";
import ChildA from "./ChildA";

export default {
  components: {
    Child,
    ChildA,
  },
  mounted() {
    //$children 可以获取当前组件的所有子组件
    console.log(this.$children[0].heihei());
    this.$refs.input.focus();
  },
  methods: {
    getChildByRef() {
      console.log(this.$refs);
      this.$refs.childA.heihei();
    },
    handleToParent(msg) {
      console.log(msg);
    },
    haha() {
      console.log("haha -- parent");
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    Child
    {{ msg }}

    <br />

    <button @click="handleToParent">to parent</button>
  </div>
</template>

<script>
export default {
  name: "child",
  props: ["msg"],
  mounted() {
    console.log("------child------");
    console.log(this.$parent);
    // 知道对应的
    // 不推荐使用
    // this.$children[0].$children[0]
    console.log(this.$parent.$parent.haha());
    // 一个组件  只会有一个父级对象
    this.$parent.haha();
  },

  methods: {
    handleToParent() {
      // xx-xx -> 烤肉串命名法
      // aaBB -> 驼峰命名法
      this.$emit("to-parent", "heiheihei from child");
    },
    heihei() {
      console.log("heihei - child");
    },
  },
};
</script>

<style lang="scss" scoped></style>

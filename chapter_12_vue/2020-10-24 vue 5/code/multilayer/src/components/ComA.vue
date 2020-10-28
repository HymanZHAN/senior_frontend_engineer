<template>
  <div>
    ComA
    {{ title }}
    <br />
    <ComB msg="form ComA"></ComB>
  </div>
</template>

<script>
import ComB from "./ComB";
export default {
  components: {
    ComB,
  },
  data() {
    return {
      title: "",
    };
  },
  //   provide: {
  //     msg: "form provide comA",
  //     // this 指针的问题
  //     comA: this,
  //   },

  provide() {
    return {
      msg: "form provide comA",
      // this 指针的问题
      comA: this,
    };
  },
  methods: {
    setTitle(newTitle) {
      this.title = newTitle;
    },
  },
};
</script>

<style lang="scss" scoped></style>

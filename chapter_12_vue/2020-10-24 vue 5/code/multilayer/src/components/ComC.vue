<template>
  <div>
    ComC

    <div>msg -> {{ msg }}</div>

    <button @click="handleGetComA">get ComA</button>
  </div>
</template>

<script>
export default {
  // props: ["msg"],
  inject: ["msg", "comA"],

  methods: {
    handleGetComA() {
      console.log(this.msg);
      console.log(this.comA);
      this.comA.setTitle("heiheihei");
    },
  },
};
</script>

<style lang="scss" scoped></style>

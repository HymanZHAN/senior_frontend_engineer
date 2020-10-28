<template>
  <div>
    comB
    <br />
    <ComC v-bind="$attrs"></ComC>
  </div>
</template>

<script>
import ComC from "./ComC";
export default {
  components: {
    ComC,
  },

  mounted() {
    console.log(this.$attrs);
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    comB
    <br />
    <ComC :msg="msg"></ComC>
  </div>
</template>

<script>
import ComC from "./ComC";
export default {
  props: ["msg"],
  components: {
    ComC,
  },
};
</script>

<style lang="scss" scoped></style>

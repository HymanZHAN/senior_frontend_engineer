<template>
  <div>
    childA
    <Child
      ref="childA"
      msg="my name is parent"
      @to-parent="handleToParent"
    ></Child>
  </div>
</template>

<script>
import Child from "./Child";
export default {
  components: {
    Child,
  },
};
</script>

<style lang="scss" scoped></style>

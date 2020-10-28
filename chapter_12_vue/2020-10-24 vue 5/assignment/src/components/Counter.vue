<template>
  <div>
    <button @click="decreaseCount">减少</button>
    Count: {{ count }}
    <button @click="increaseCount">增加</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Counter",
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapActions(["increaseCount", "decreaseCount"])
  }
};
</script>

<style lang="scss" scoped></style>

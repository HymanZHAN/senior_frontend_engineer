<template>
  <div>ComB 十年后的年龄：{{ tenYearsOld }}</div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store);
  },
  computed: {
    tenYearsOld() {
      return this.$store.getters.tenYearsOld;
    },
  },
  methods: {
    handleChange() {
      // 直接修改了 msg 的值
      this.$store.state.msg = "new msg";

    },
  },
};
</script>

<style lang="scss" scoped></style>

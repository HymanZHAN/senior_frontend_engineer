<template>
  <div>
    ComA
    <!-- {{ msg }} -{{ name }} --{{ age }} -->
    {{ msg }} --{{ name }} --{{ age }} 十年后的年龄：{{ tenYearsOld }}
    <button @click="handleChange">change msg</button>
    <button @click="changeAge">change age</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      //   msg: this.$store.state.msg,
    };
  },
  computed: {
    ...mapState(["msg", "name", "age"]),
    // msg() {
    //   return this.$store.state.msg;
    // },
    // msg() {
    //   return this.$store.state.msg;
    // },
    // msg() {
    //   return this.$store.state.msg;
    // },
    ...mapGetters(["tenYearsOld"]),
    // tenYearsOld() {
    //   //   return this.$store.state.age + 10;
    //   //   console.log(this.$store.getters);
    //   return this.$store.getters.tenYearsOld;
    // },
  },
  methods: {
    changeAge() {
      //   this.$store.commit("changeAge", {
      //     age: 18,
      //   });
      this.$store.dispatch("changeAge", {
        age: 18,
      });
    },
    handleChange() {
      // 直接修改了 msg 的值
      //   this.$store.state.msg = "new msg";
      // 发起了commit
      this.$store.commit("changeMsg", {
        msg: "new msg",
      });
      // 能不能发起一个异步的
    },
  },
  mounted() {
    console.log(this.$store);
  },
};
</script>

<style lang="scss" scoped></style>

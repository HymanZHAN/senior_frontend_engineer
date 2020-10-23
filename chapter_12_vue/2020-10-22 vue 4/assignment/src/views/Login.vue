<template>
  <div>
    <button @click="login()">登录</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style lang="scss" scoped></style>

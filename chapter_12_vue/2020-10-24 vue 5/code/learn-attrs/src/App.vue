<template>
  <div id="app">
    <ComA msg="title - app.vue" @a="handleA" @b="handleB"></ComA>
    <Button disabled></Button>
  </div>
</template>

<script>
import ComA from "./components/ComA";
import Button from "./components/Button";
export default {
  name: "App",
  components: {
    ComA,
    Button,
  },
  methods: {
    handleB() {
      console.log("handleB");
    },
    handleA() {
      console.log("handleA");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div>
    test - store {{ count }}

    <el-button type="success" @click="onClick">click</el-button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    const store = useStore();
    console.log(store.state);

    const onClick = () => {
      store.commit("addCount");
    };

    // mapMutation
    const count = computed(() => {
      return store.state.count;
    });

    return {
      onClick,
      count
    };
  }
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

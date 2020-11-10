<template>
  <container>
    <!-- <Map></Map> -->
    <currentPage @change-page="onChangePage"></currentPage>
    <!-- <GamePage></GamePage> -->
  </container>
</template>

<script>
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import EndPage from "./pages/EndPage";
// import Map from "./components/Map";
import { computed, ref } from "vue";
export default {
  name: "App",
  components: {
    // Map,
    // StartPage,
    // GamePage
  },
  setup() {
    const currentPageName = ref("StartPage");
    // const currentPageName = ref("GamePage");
    // const currentPageName = ref("EndPage");

    const onChangePage = pageName => {
      currentPageName.value = pageName;
    };

    const currentPage = computed(() => {
      if (currentPageName.value === "StartPage") {
        return StartPage;
      } else if (currentPageName.value === "GamePage") {
        return GamePage;
      } else if (currentPageName.value === "EndPage") {
        return EndPage;
      }
    });

    return {
      currentPage,
      onChangePage
    };
  }
};
</script>

<style></style>

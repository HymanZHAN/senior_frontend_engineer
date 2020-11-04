<template>
  <container>
    <currentPage @change-page="onChangePage"></currentPage>
    <!-- <GamePage></GamePage> -->
  </container>
</template>

<script>
import StartPage from "./pages/StartPage.vue";
import GamePage from "./pages/GamePage";
import { computed, ref } from "vue";
export default {
  name: "App",
  components: {
    // StartPage,
    // GamePage
  },
  setup() {
    const currentPageName = ref("StartPage");

    const onChangePage = (pageName) => {
      currentPageName.value = pageName;
    };

    const currentPage = computed(() => {
      if (currentPageName.value === "StartPage") {
        return StartPage;
      } else if (currentPageName.value === "GamePage") {
        return GamePage;
      }
    });

    return {
      currentPage,
      onChangePage,
    };
  },
};
</script>

<style></style>

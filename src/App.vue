<template>
  <div :style="styleBackgroundObject" class="app">
    <kanban></kanban>
  </div>
</template>

<script>
import Kanban from "@/components/Kanban.vue";
export default {
  components: { Kanban },
  data() {
    return {
      styleBackgroundObject: {},
    };
  },
  methods: {
    changeColor() {
      let hex_numbers = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];
      let hexcode1 = "";
      let hexcode2 = "";
      let random_index = 0;

      for (let i = 0; i < 6; i++) {
        random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode1 += hex_numbers[random_index];
        random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode2 += hex_numbers[random_index];
      }
      this.styleBackgroundObject = {
        background: `linear-gradient(to right, #${hexcode1}, #${hexcode2})`,
      };
    },
  },
  beforeMount() {
    this.$store.commit("initialiseVars")
  },
  created() {
    this.changeColor();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100%;
}
.app {
  padding: 50px 150px 50px;
  min-height: 100vh;
}
@media screen and (max-width: 720px) {
  .app {
    min-width: 420px;
    padding: 0;
  }
}
</style>
<template>
  <draggable class="wrapper" v-model="myList">
    <transition-group name="list-complete">
      <tasks-column
        v-for="(column, index) in myList"
        :column="column"
        :columnIndex="index"
        :key="column.id"
        class="list-complete-item"
      ></tasks-column>
    </transition-group>
  </draggable>
</template>

<script>
import TasksColumn from "./TasksColumn.vue";

import { VueDraggableNext } from "vue-draggable-next";
export default {
  components: { TasksColumn, draggable: VueDraggableNext },
  computed: {
    myList: {
      get() {
        return this.$store.state.columns;
      },
      set(columns) {
        this.$store.dispatch("updateColumn", columns);
      },
    },
  },
};
</script>

<style>
.wrapper {
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  display: grid;
}

@media (min-width: 1366px) {
  .wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1000px) and (max-width: 1500px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 720px) {
.wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}


.list-complete-item {
  transition: all 0.8s ease;
  display: inline-block;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>
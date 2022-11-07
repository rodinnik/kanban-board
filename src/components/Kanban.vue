<template>
  <div class="kanban">
    <input-add-column class="input-add"></input-add-column>
    <tasks-board></tasks-board>
  </div>
</template>

<script>
import TasksBoard from "@/components/TasksBoard.vue";
import InputAddColumn from "@/components/InputAddColumn.vue";
export default {
  components: { TasksBoard, InputAddColumn },
};
</script>

<style>
.kanban {
  /* height: 100%; */
  /* min-height: 100vh; */
  min-height: calc(100vh - 100px);
  background: #d1dbea;
  padding: 60px;
  border: 1px solid teal;
  margin-left: auto;
  margin-right: auto;
  max-width: 1366px;
}
@media screen and (max-width: 720px) {
  .kanban {
    min-height: 100vh;
  }
}
.input-add{
  margin-right: 0px;
  margin-bottom: 10px;
}
</style>
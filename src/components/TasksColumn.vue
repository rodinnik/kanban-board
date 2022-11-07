<template>
  <div class="kanban-columns">
    <div class="column-head">
      <h2>{{ column.name }}</h2>
      <div @click="deleteColumn"><img class="column-delete-button" :src="deleteButtonSrc" alt="x" /></div>
    </div>
    <draggable
      :list="column.tasks"
      :group="{ name: 'tasks' }"
      class="task-items-area"
    >
      <task-item
        v-for="(task, index) in column.tasks"
        :key="task.id"
        :taskName="task.taskName"
        :columnIndex="this.columnIndex"
        :taskIndex="index"
      ></task-item>
    </draggable>
    <form @submit.prevent="PushTaskInColumn">
      <div class="column-add-form">
        <input v-model.trim="TaskName" type="text" />
        <button>Добавить задачу</button>
      </div>
    </form>
  </div>
</template>

<script>
import { VueDraggableNext } from "vue-draggable-next";
import TaskItem from "@/components/TaskItem.vue";

import deleteButtonSrc from "@/icons/deleteButton.svg";

export default {
  components: { TaskItem, draggable: VueDraggableNext },
  props: {
    column: {
      type: Object,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      TaskName: "",
      deleteButtonSrc,
    };
  },
  methods: {
    PushTaskInColumn() {
      this.TaskName
        ? this.$store.commit("PushTaskInColumn", {
            task: { id: Date.now(), taskName: this.TaskName },
            columnId: this.column.id,
          })
        : false;
      this.TaskName = "";
    },
    deleteColumn() {
      this.$store.commit("deleteColumn", { columnIndex: this.columnIndex });
    },
  },
};
</script>

<style scoped>
h2 {
  overflow-x: hidden;
  object-fit: cover;
}
.kanban-columns {
  background: white;
  padding: 10px;
  border: 1px solid teal;
  cursor: pointer;
  /* overflow-x: hidden;
  margin: 0 5px 10px 5px; */
  position: relative;
}

input {
  width: 100%;
  border: 1px solid teal;
  padding: 7px 12px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
button {
  border: 1px solid teal;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.column-add-form {
  display: flex;
  width: calc(100% - 20px);
  position: absolute;
  bottom: 10px;
  left: 10px;
}
.task-items-area {
  min-height: 30px;
  height: 100%;
  padding-bottom: 44px;
}
.column-head{
  position: relative;
}
.column-delete-button {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 20px;
}
</style>
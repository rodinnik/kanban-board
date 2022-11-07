<template>
  <div class="task-item">
    {{ taskName }}
    <div @click="deleteTask">
      <img class="task-delete-button" :src="deleteButtonSrc" alt="x" />
    </div>
  </div>
</template>

<script>
import deleteButtonSrc from "@/icons/deleteButton.svg";

export default {
  data() {
    return {
      deleteButtonSrc,
    };
  },
  props: {
    taskName: {
      type: String,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    taskIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    deleteTask() {
      this.$store.commit("deleteTask", {
        taskIndex: this.taskIndex,
        columnIndex: this.columnIndex,
      });
    },
  },
};
</script>

<style>
.task-item {
  border-bottom: 1px solid teal;
  height: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.task-delete-button {
  width: 10px;
}
</style>
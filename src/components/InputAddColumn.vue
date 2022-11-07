<template>
<form @submit.prevent="createPost">
  <div class="column-add-form">
    <input v-model.trim="columnName" type="text" class="input" />
    <button>Добавить колонку</button>
  </div></form>
</template>

<script>
export default {
  data() {
    return {
      columnName: "",
    };
  },
  methods: {
    createPost() {
      this.columnName ? this.$store.commit('pashColumn', {id: Date.now(), name: this.columnName, tasks: []}) : false
      this.columnName = ""
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  border-top-left-radius:5px;
  border-bottom-left-radius:5px;
}
button{
  border: 1px solid teal;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
}
.column-add-form {
  display: flex;
  width: 300px;
}
</style>
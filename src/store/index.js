import { createStore } from "vuex";

const myPlugin = (store) => {
  store.subscribe((mutation, state) => {
    localStorage.setItem("columns", JSON.stringify(state.columns));
  });
};

const store = createStore({
  plugins: [myPlugin],
  state: {
    columns: [],
  },
  mutations: {
    initialiseVars(state) {
      if (localStorage.getItem("columns")) {
        state.columns = JSON.parse(localStorage.getItem("columns"));
      }
    },
    pashColumn(state, column) {
      state.columns.push(column);
    },
    updateColumn(state, columns) {
      state.columns = columns;
    },
    PushTaskInColumn(state, payload) {
      state.columns
        .find((column) => column.id === payload.columnId)
        .tasks.push(payload.task);
    },
    deleteTask(state, payload) {
      state.columns[payload.columnIndex].tasks.splice(payload.taskIndex, 1);
    },
    deleteColumn(state, payload) {
      state.columns.splice(payload.columnIndex, 1);
    },
  },
  actions: {
    updateColumn: ({ commit }, columns) => {
      commit("updateColumn", columns);
    },
  },
});
export default store
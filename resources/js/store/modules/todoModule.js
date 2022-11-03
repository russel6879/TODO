import axios from 'axios'

const state = {
  todos: [],




};

const getters = {
  todoList: state => state.todos,


};
const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get("api/todo");
    commit("setTodos", response.data.data)
  },

  async addTodo({ commit }, todo) {
    state.loading = true;
    const response = await axios.post("api/todo", todo).then(res => {

      Toast.fire({
        icon: "success",
        title: "Successfully Created !!!"
      });

      state.loading = false;
      $('#todo').val('');

    }).catch(res => {
      Toast.fire({
        icon: "error",
        title: "Please Fill The Form Currectly"
      });
      state.loading = false

    })

    // commit("addNewUnit", response)
  },


  async deleteTodo({ commit }, id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!"
    }).then((result) => { // <--
      if (result.value) { // <-- if confirmed
        axios.delete(`api/todo/${id}`).then(res => {
          Toast.fire({
            icon: "success",
            title: "Successfully Deleted !!!"
          });
        });
        commit("removeTodo", id)

      }
    });

  }
};
const mutations = {
  setTodos: (state, todos) => (
    state.todos = todos

  ),


  addNewTodo: (state, todo) => { state.todos.unshift(todo) },
  removeTodo: (state, id) => {
    var index = state.todos.findIndex(todo => todo.id == id);
    state.todos.splice(index, 1)
  }
};
export default {
  state,
  getters,
  actions,
  mutations,
}
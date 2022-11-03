<template>
  <div>
    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvgxmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li>Show Category: &nbsp;</li>
        <li class="breadcrumb-item" v-for="list in categoryList" :key="list.id">
          <router-link :to="{ name: 'todo', params: { id:list.id } }">{{list.category_name}}</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">All</li>
      </ol>
    </nav>
    <div class="form-check" v-for="list in todoList" :key="list.id">
      <input class="form-check-input" type="checkbox" value="" @change="todoCategory(list.id)">
      <label class="form-check-label" for="flexCheckDefault" :id="'selectTodo'+list.id" style="display: inline !important;">
        {{list.todo}}
      </label>
      <i class="fa-sharp fa-solid fa-xmark  fw-bold text-dark float-right" style="float:right;color: #796852 !important;" @click="deleteTodo(list.id)"></i>
    </div>
    <hr>
    <form @submit.prevent="onTodoSubmit">
      <fieldset>
        <div class="mb-3">
          <label for="disabledTextInput" class="form-label">Add TO DO</label>
          <input type="text" id="todo" v-model="form.todo" class="form-control" placeholder="">
        </div>
        <div class="mb-3">
          <div class="row g-3">
            <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">Category</label>
              <select id="disabledSelect" v-model="form.category_id" class="form-select">
                <option selected >Select Category</option>
                <option v-for="list in categoryList" :key="list.id" :value="list.id">{{list.category_name}}</option>
              </select>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-dark mb-3">Add TODO</button>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
    <hr>
    <form @submit.prevent="onCategorySubmit">
      <fieldset>
        <h3>CATEGORIES</h3>
        <div class="row g-3">
          <div class="col-auto">
            <label for="inputPassword2" class="visually-hidden">Category</label>
            <input type="text" v-model="form.category_name" class="form-control" placeholder="">
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-dark mb-3">Add Category</button>
          </div>
        </div>
        <ul class="ml-0">
          <li v-for="list in categoryList" :key="list.id">
            <i class="fa-sharp fa-solid fa-xmark mx-3 fw-bold text-danger" @click="deleteCategory(list.id)"></i>{{list.category_name}}
          </li>
        </ul>
      </fieldset>
    </form>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions,
    mapState
  } from "vuex";
  export default {
    name: "my-component",
    data() {
      return {
        selected: undefined,
        createdModal: true,
        someModal: "",
        form: {
          todo: '',
          category_id: '',
          category_name: '',
        },
      };
    },
    // mounted() {
    //   this.viewPost();
    // },
    computed: {
      ...mapGetters(["categoryList", "loading", "todoList"])
    },
    created() {
      this.fetchCategories();
      this.fetchTodos();
    },
    methods: {
      ...mapActions(["addTodo", "addCategory", "fetchCategories", "fetchTodos", "deleteCategory", "deleteTodo", "updateCategory"]),
      todoCategory(id) {
        if ($('#selectTodo' + id).hasClass('text-decoration-line-through')) {
          $('#selectTodo' + id).removeClass('text-decoration-line-through');
        } else {
          $('#selectTodo' + id).addClass('text-decoration-line-through');
        }
      },
      onTodoSubmit() {
        this.addTodo({
          todo: this.form.todo,
          category_id: this.form.category_id,
        })
        this.form.todo = ''
        this.$store.dispatch("fetchTodos");
      },
      onCategorySubmit() {
        this.addCategory({
          category_name: this.form.category_name,
        })
        this.form.category_name = ''
        this.$store.dispatch("fetchCategories");
      },
    },
  };
</script>
<style></style>
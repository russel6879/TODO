<template>
  <div>
    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvgxmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li>Show Category: &nbsp;</li>
        <li class="breadcrumb-item" v-for="list in categoryList" :key="list.id">
          <a href="#" @click="showTodo(list.id)">
            <span v-if="active_link==list.id" class="text-dark">{{list.category_name}}</span>
            <span v-else>{{list.category_name}}</span>
          </a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <router-link :to="{ name: 'index'}">All</router-link>
        </li>
      </ol>
    </nav>
    <div class="form-check" v-for="list in todoListGet" :key="list.id">
      <input class="form-check-input" type="checkbox" value="" @change="todoCategory(list.id)">
      <label class="form-check-label" for="flexCheckDefault" :id="'selectTodo'+list.id" style="display: inline !important;">
        {{list.todo}}
      </label>
      <i class="fa-sharp fa-solid fa-xmark  fw-bold text-dark float-right" style="float:right;color: #796852 !important;" @click="deleteTodo(list.id)"></i>
    </div>
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
        todoListGet: [],
        active_link: ''
      };
    },
    // mounted() {
    //   this.viewPost();
    // },
    computed: {
      ...mapGetters(["categoryList", "loading"])
    },
    created() {
      this.fetchCategories();
      this.todoList();
      this.activeLink();
    },
    methods: {
      ...mapActions(["fetchCategories", "deleteTodo"]),
      activeLink() {
        this.active_link = this.$route.params.id;
      },
      todoList() {
        axios.get('api/todo/' + this.$route.params.id).then(res => {
          this.todoListGet = res.data.data
        })
      },
      deleteTodo(id) {
        axios.delete(`api/todo/${id}`).then(res => {
          Toast.fire({
            icon: "success",
            title: "Successfully Deleted !!!"
          });
          this.showTodo(this.active_link);
        });
      },
      showTodo(id) {
        NProgress.start();
        axios.get('api/todo/' + id).then(res => {
          this.todoListGet = res.data.data
          this.active_link = id
          NProgress.done();
        })
      },
      todoCategory(id) {
        if ($('#selectTodo' + id).hasClass('text-decoration-line-through')) {
          $('#selectTodo' + id).removeClass('text-decoration-line-through');
        } else {
          $('#selectTodo' + id).addClass('text-decoration-line-through');
        }
      },
    },
  };
</script>
<style></style>
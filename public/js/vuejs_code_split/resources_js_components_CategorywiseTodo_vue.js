"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CategorywiseTodo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CategorywiseTodo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CategorywiseTodo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "my-component",
  data: function data() {
    return {
      todoListGet: [],
      active_link: ''
    };
  },
  // mounted() {
  //   this.viewPost();
  // },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["categoryList", "loading"])),
  created: function created() {
    this.fetchCategories();
    this.todoList();
    this.activeLink();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["fetchCategories", "deleteTodo"])), {}, {
    activeLink: function activeLink() {
      this.active_link = this.$route.params.id;
    },
    todoList: function todoList() {
      var _this = this;

      axios.get('api/todo/' + this.$route.params.id).then(function (res) {
        _this.todoListGet = res.data.data;
      });
    },
    deleteTodo: function deleteTodo(id) {
      var _this2 = this;

      axios["delete"]("api/todo/".concat(id)).then(function (res) {
        Toast.fire({
          icon: "success",
          title: "Successfully Deleted !!!"
        });

        _this2.showTodo(_this2.active_link);
      });
    },
    showTodo: function showTodo(id) {
      var _this3 = this;

      NProgress.start();
      axios.get('api/todo/' + id).then(function (res) {
        _this3.todoListGet = res.data.data;
        _this3.active_link = id;
        NProgress.done();
      });
    },
    todoCategory: function todoCategory(id) {
      if ($('#selectTodo' + id).hasClass('text-decoration-line-through')) {
        $('#selectTodo' + id).removeClass('text-decoration-line-through');
      } else {
        $('#selectTodo' + id).addClass('text-decoration-line-through');
      }
    }
  })
});

/***/ }),

/***/ "./resources/js/components/CategorywiseTodo.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/CategorywiseTodo.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategorywiseTodo_vue_vue_type_template_id_47dbc873___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategorywiseTodo.vue?vue&type=template&id=47dbc873& */ "./resources/js/components/CategorywiseTodo.vue?vue&type=template&id=47dbc873&");
/* harmony import */ var _CategorywiseTodo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategorywiseTodo.vue?vue&type=script&lang=js& */ "./resources/js/components/CategorywiseTodo.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategorywiseTodo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategorywiseTodo_vue_vue_type_template_id_47dbc873___WEBPACK_IMPORTED_MODULE_0__.render,
  _CategorywiseTodo_vue_vue_type_template_id_47dbc873___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CategorywiseTodo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CategorywiseTodo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/CategorywiseTodo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorywiseTodo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategorywiseTodo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CategorywiseTodo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorywiseTodo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CategorywiseTodo.vue?vue&type=template&id=47dbc873&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/CategorywiseTodo.vue?vue&type=template&id=47dbc873& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorywiseTodo_vue_vue_type_template_id_47dbc873___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorywiseTodo_vue_vue_type_template_id_47dbc873___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorywiseTodo_vue_vue_type_template_id_47dbc873___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategorywiseTodo.vue?vue&type=template&id=47dbc873& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CategorywiseTodo.vue?vue&type=template&id=47dbc873&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CategorywiseTodo.vue?vue&type=template&id=47dbc873&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CategorywiseTodo.vue?vue&type=template&id=47dbc873& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "nav",
        {
          staticStyle: {
            "--bs-breadcrumb-divider":
              "url(&#34;data:image/svg+xml,%3Csvgxmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;)",
          },
          attrs: { "aria-label": "breadcrumb" },
        },
        [
          _c(
            "ol",
            { staticClass: "breadcrumb" },
            [
              _c("li", [_vm._v("Show Category:  ")]),
              _vm._v(" "),
              _vm._l(_vm.categoryList, function (list) {
                return _c(
                  "li",
                  { key: list.id, staticClass: "breadcrumb-item" },
                  [
                    _c(
                      "a",
                      {
                        attrs: { href: "#" },
                        on: {
                          click: function ($event) {
                            return _vm.showTodo(list.id)
                          },
                        },
                      },
                      [
                        _vm.active_link == list.id
                          ? _c("span", { staticClass: "text-dark" }, [
                              _vm._v(_vm._s(list.category_name)),
                            ])
                          : _c("span", [_vm._v(_vm._s(list.category_name))]),
                      ]
                    ),
                  ]
                )
              }),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "breadcrumb-item active",
                  attrs: { "aria-current": "page" },
                },
                [
                  _c("router-link", { attrs: { to: { name: "index" } } }, [
                    _vm._v("All"),
                  ]),
                ],
                1
              ),
            ],
            2
          ),
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.todoListGet, function (list) {
        return _c("div", { key: list.id, staticClass: "form-check" }, [
          _c("input", {
            staticClass: "form-check-input",
            attrs: { type: "checkbox", value: "" },
            on: {
              change: function ($event) {
                return _vm.todoCategory(list.id)
              },
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "form-check-label",
              staticStyle: { display: "inline !important" },
              attrs: { for: "flexCheckDefault", id: "selectTodo" + list.id },
            },
            [_vm._v("\n      " + _vm._s(list.todo) + "\n    ")]
          ),
          _vm._v(" "),
          _c("i", {
            staticClass:
              "fa-sharp fa-solid fa-xmark  fw-bold text-dark float-right",
            staticStyle: { float: "right", color: "#796852 !important" },
            on: {
              click: function ($event) {
                return _vm.deleteTodo(list.id)
              },
            },
          }),
        ])
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
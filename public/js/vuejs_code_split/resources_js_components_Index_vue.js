"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
      selected: undefined,
      createdModal: true,
      someModal: "",
      form: {
        todo: '',
        category_id: '',
        category_name: ''
      }
    };
  },
  // mounted() {
  //   this.viewPost();
  // },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["categoryList", "loading", "todoList"])),
  created: function created() {
    this.fetchCategories();
    this.fetchTodos();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["addTodo", "addCategory", "fetchCategories", "fetchTodos", "deleteCategory", "deleteTodo", "updateCategory"])), {}, {
    todoCategory: function todoCategory(id) {
      if ($('#selectTodo' + id).hasClass('text-decoration-line-through')) {
        $('#selectTodo' + id).removeClass('text-decoration-line-through');
      } else {
        $('#selectTodo' + id).addClass('text-decoration-line-through');
      }
    },
    onTodoSubmit: function onTodoSubmit() {
      this.addTodo({
        todo: this.form.todo,
        category_id: this.form.category_id
      });
      this.form.todo = '';
      this.$store.dispatch("fetchTodos");
    },
    onCategorySubmit: function onCategorySubmit() {
      this.addCategory({
        category_name: this.form.category_name
      });
      this.form.category_name = '';
      this.$store.dispatch("fetchCategories");
    }
  })
});

/***/ }),

/***/ "./resources/js/components/Index.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Index.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_bb962f12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=bb962f12& */ "./resources/js/components/Index.vue?vue&type=template&id=bb962f12&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_bb962f12___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_bb962f12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Index.vue?vue&type=template&id=bb962f12&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Index.vue?vue&type=template&id=bb962f12& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_bb962f12___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_bb962f12___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_bb962f12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=bb962f12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Index.vue?vue&type=template&id=bb962f12&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Index.vue?vue&type=template&id=bb962f12&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Index.vue?vue&type=template&id=bb962f12& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
                      "router-link",
                      {
                        attrs: {
                          to: { name: "todo", params: { id: list.id } },
                        },
                      },
                      [_vm._v(_vm._s(list.category_name))]
                    ),
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c(
                "li",
                {
                  staticClass: "breadcrumb-item active",
                  attrs: { "aria-current": "page" },
                },
                [_vm._v("All")]
              ),
            ],
            2
          ),
        ]
      ),
      _vm._v(" "),
      _vm._l(_vm.todoList, function (list) {
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
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.onTodoSubmit.apply(null, arguments)
            },
          },
        },
        [
          _c("fieldset", [
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "label",
                {
                  staticClass: "form-label",
                  attrs: { for: "disabledTextInput" },
                },
                [_vm._v("Add TO DO")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.todo,
                    expression: "form.todo",
                  },
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "todo", placeholder: "" },
                domProps: { value: _vm.form.todo },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "todo", $event.target.value)
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-3" }, [
              _c("div", { staticClass: "row g-3" }, [
                _c("div", { staticClass: "col-auto" }, [
                  _c(
                    "label",
                    {
                      staticClass: "visually-hidden",
                      attrs: { for: "inputPassword2" },
                    },
                    [_vm._v("Category")]
                  ),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.category_id,
                          expression: "form.category_id",
                        },
                      ],
                      staticClass: "form-select",
                      attrs: { id: "disabledSelect" },
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form,
                            "category_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { selected: "" } }, [
                        _vm._v("Select Category"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.categoryList, function (list) {
                        return _c(
                          "option",
                          { key: list.id, domProps: { value: list.id } },
                          [_vm._v(_vm._s(list.category_name))]
                        )
                      }),
                    ],
                    2
                  ),
                ]),
                _vm._v(" "),
                _vm._m(0),
              ]),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.onCategorySubmit.apply(null, arguments)
            },
          },
        },
        [
          _c("fieldset", [
            _c("h3", [_vm._v("CATEGORIES")]),
            _vm._v(" "),
            _c("div", { staticClass: "row g-3" }, [
              _c("div", { staticClass: "col-auto" }, [
                _c(
                  "label",
                  {
                    staticClass: "visually-hidden",
                    attrs: { for: "inputPassword2" },
                  },
                  [_vm._v("Category")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.category_name,
                      expression: "form.category_name",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "" },
                  domProps: { value: _vm.form.category_name },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "category_name", $event.target.value)
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _vm._m(1),
            ]),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "ml-0" },
              _vm._l(_vm.categoryList, function (list) {
                return _c("li", { key: list.id }, [
                  _c("i", {
                    staticClass:
                      "fa-sharp fa-solid fa-xmark mx-3 fw-bold text-danger",
                    on: {
                      click: function ($event) {
                        return _vm.deleteCategory(list.id)
                      },
                    },
                  }),
                  _vm._v(_vm._s(list.category_name) + "\n        "),
                ])
              }),
              0
            ),
          ]),
        ]
      ),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c(
        "button",
        { staticClass: "btn btn-dark mb-3", attrs: { type: "submit" } },
        [_vm._v("Add TODO")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c(
        "button",
        { staticClass: "btn btn-dark mb-3", attrs: { type: "submit" } },
        [_vm._v("Add Category")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
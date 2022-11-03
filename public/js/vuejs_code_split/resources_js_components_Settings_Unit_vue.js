"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Settings_Unit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Unit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Unit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      name: "",
      operation_value: 1,
      operator: "Multiply (*)",
      base_unit: "",
      short_name: "",
      editUnitInfo: "",
      edit: {
        id: "",
        name: "",
        operation_value: "",
        operator: "",
        base_unit: "",
        short_name: ""
      },
      operators: ["Multiply (*)", "Divide (/)"],
      columns: [{
        label: "Name",
        field: "name"
      }, {
        label: "Short Name",
        field: "short_name"
      }, {
        label: "Base Unit",
        field: "unit_name.name"
      }, {
        label: "Operator",
        field: "operator"
      }, {
        label: "Operation Value",
        field: "operation_value"
      }, {
        label: "Actions",
        field: "actions",
        sortable: false
      }],
      rows: []
    };
  },
  // mounted() {
  //   this.viewPost();
  // },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["unitList", "parrentUnitList", "loading"])),
  created: function created() {
    this.fetchUnits();
    this.fetchParrentUnits();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["addUnit", "fetchUnits", "fetchParrentUnits", "deleteUnit", "updateUnit"])), {}, {
    onUnitSubmit: function onUnitSubmit() {
      this.addUnit({
        name: this.name,
        short_name: this.short_name,
        base_unit: this.base_unit,
        operator: this.operator,
        operation_value: this.operation_value
      });
      this.$store.dispatch("fetchUnits");
      this.fetchParrentUnits();
    },
    update: function update() {
      this.updateUnit({
        id: this.edit.id,
        name: this.edit.name,
        short_name: this.edit.short_name,
        base_unit: this.edit.base_unit,
        operator: this.edit.operator,
        operation_value: this.edit.operation_value
      });
      this.$store.dispatch("fetchUnits");
    },
    editUnits: function editUnits(id) {
      var _this = this;

      this.createdModal = false;
      $("#exampleModal").modal("show");
      axios.get("api/unit/".concat(id, "/edit")).then(function (res) {
        _this.edit.id = res.data.id, _this.edit.name = res.data.name, _this.edit.short_name = res.data.short_name, _this.edit.base_unit = res.data.base_unit, _this.edit.operator = res.data.operator, _this.edit.operation_value = res.data.operation_value;
      });
    },
    close: function close() {
      $("#exampleModal").modal("hide");
    },
    createModal: function createModal() {
      this.name = "", this.short_name = "", this.operation_value = 1, this.operator = "Multiply (*)", this.base_unit = "", this.createdModal = true;
    }
  })
});

/***/ }),

/***/ "./resources/js/components/Settings/Unit.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Settings/Unit.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Unit_vue_vue_type_template_id_2d7e93b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit.vue?vue&type=template&id=2d7e93b5& */ "./resources/js/components/Settings/Unit.vue?vue&type=template&id=2d7e93b5&");
/* harmony import */ var _Unit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Unit.vue?vue&type=script&lang=js& */ "./resources/js/components/Settings/Unit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Unit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Unit_vue_vue_type_template_id_2d7e93b5___WEBPACK_IMPORTED_MODULE_0__.render,
  _Unit_vue_vue_type_template_id_2d7e93b5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Settings/Unit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Settings/Unit.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Settings/Unit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Unit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Unit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Unit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Unit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Settings/Unit.vue?vue&type=template&id=2d7e93b5&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Settings/Unit.vue?vue&type=template&id=2d7e93b5& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Unit_vue_vue_type_template_id_2d7e93b5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Unit_vue_vue_type_template_id_2d7e93b5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Unit_vue_vue_type_template_id_2d7e93b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Unit.vue?vue&type=template&id=2d7e93b5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Unit.vue?vue&type=template&id=2d7e93b5&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Unit.vue?vue&type=template&id=2d7e93b5&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Unit.vue?vue&type=template&id=2d7e93b5& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "app-page-title" }, [
      _c("div", { staticClass: "page-title-wrapper" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "page-title-actions" }, [
          _c("div", { staticClass: "d-inline-block" }, [
            _c(
              "button",
              {
                staticClass: "btn-shadow btn btn-info",
                attrs: {
                  type: "button",
                  "data-toggle": "modal",
                  "data-target": "#exampleModal",
                },
                on: {
                  click: function ($event) {
                    return _vm.createModal()
                  },
                },
              },
              [_vm._m(1), _vm._v(" Create ")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal fade",
                attrs: {
                  id: "exampleModal",
                  tabindex: "-1",
                  role: "dialog",
                  "aria-labelledby": "exampleModalLabel",
                  "aria-hidden": "true",
                },
              },
              [
                _c(
                  "div",
                  { staticClass: "modal-dialog", attrs: { role: "document" } },
                  [
                    _vm.createdModal == true
                      ? _c("div", { staticClass: "modal-content" }, [
                          _c("div", { staticClass: "modal-header" }, [
                            _c(
                              "h5",
                              {
                                staticClass: "modal-title",
                                attrs: { id: "exampleModalLabel" },
                              },
                              [_vm._v("Create")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "close",
                                attrs: {
                                  type: "button",
                                  "data-dismiss": "modal",
                                  "aria-label": "Close",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.close()
                                  },
                                },
                              },
                              [
                                _c(
                                  "span",
                                  { attrs: { "aria-hidden": "true" } },
                                  [_vm._v("×")]
                                ),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "modal-body" }, [
                            _c(
                              "form",
                              {
                                staticClass: "needs-validation",
                                attrs: { id: "myForm", novalidate: "" },
                                on: {
                                  submit: function ($event) {
                                    $event.preventDefault()
                                    return _vm.onUnitSubmit.apply(
                                      null,
                                      arguments
                                    )
                                  },
                                },
                              },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "text-inverse",
                                      attrs: { for: "inputEmail4" },
                                    },
                                    [_vm._v("Name*")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.name,
                                        expression: "name",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "name",
                                      placeholder: "Enter Unit Name",
                                      required: "",
                                    },
                                    domProps: { value: _vm.name },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.name = $event.target.value
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(" This field is required ")]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "text-inverse",
                                      attrs: { for: "inputEmail4" },
                                    },
                                    [_vm._v("Short Name*")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.short_name,
                                        expression: "short_name",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "short_name",
                                      placeholder: "Enter Short Name Unit",
                                      required: "",
                                    },
                                    domProps: { value: _vm.short_name },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.short_name = $event.target.value
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(" This field is required ")]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "text-inverse",
                                        attrs: { for: "inputEmail43" },
                                      },
                                      [_vm._v("Base Unit")]
                                    ),
                                    _vm._v(" "),
                                    _c("v-select", {
                                      attrs: {
                                        options: _vm.parrentUnitList,
                                        reduce: function (unit) {
                                          return unit.id
                                        },
                                        label: "name",
                                        placeholder: "Choose Base Unit",
                                      },
                                      model: {
                                        value: _vm.base_unit,
                                        callback: function ($$v) {
                                          _vm.base_unit = $$v
                                        },
                                        expression: "base_unit",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "text-inverse",
                                        attrs: { for: "inputEmail43" },
                                      },
                                      [_vm._v("Operator")]
                                    ),
                                    _vm._v(" "),
                                    _c("v-select", {
                                      attrs: {
                                        options: _vm.operators,
                                        label: "Base Unit",
                                        placeholder: "Choose Base Unit",
                                      },
                                      model: {
                                        value: _vm.operator,
                                        callback: function ($$v) {
                                          _vm.operator = $$v
                                        },
                                        expression: "operator",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "text-inverse",
                                      attrs: { for: "inputEmail4" },
                                    },
                                    [_vm._v("Operation Value")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.operation_value,
                                        expression: "operation_value",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "inputEmail4",
                                      placeholder: "Enter Short Name Unit",
                                      pattern: "[0-9]*",
                                      required: "",
                                    },
                                    domProps: { value: _vm.operation_value },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.operation_value =
                                          $event.target.value
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v("Please Enter Only Number.")]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group row mb-0" },
                                  [
                                    _c("div", { staticClass: "col-md-12" }, [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-primary",
                                          attrs: {
                                            type: "submit",
                                            disabled: _vm.loading,
                                          },
                                        },
                                        [_vm._v(" Submit ")]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "modal-footer" }, [
                            _vm.loading
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "spinner-border text-primary",
                                    attrs: { role: "status" },
                                  },
                                  [
                                    _c("span", { staticClass: "sr-only" }, [
                                      _vm._v("Loading..."),
                                    ]),
                                  ]
                                )
                              : _vm._e(),
                          ]),
                        ])
                      : _c("div", { staticClass: "modal-content" }, [
                          _c("div", { staticClass: "modal-header" }, [
                            _c(
                              "h5",
                              {
                                staticClass: "modal-title",
                                attrs: { id: "exampleModalLabel" },
                              },
                              [_vm._v("Edit")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "close",
                                attrs: {
                                  type: "button",
                                  "data-dismiss": "modal",
                                  "aria-label": "Close",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.close()
                                  },
                                },
                              },
                              [
                                _c(
                                  "span",
                                  { attrs: { "aria-hidden": "true" } },
                                  [_vm._v("×")]
                                ),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "modal-body" }, [
                            _c(
                              "form",
                              {
                                staticClass: "needs-validation",
                                attrs: { id: "myForm", novalidate: "" },
                                on: {
                                  submit: function ($event) {
                                    $event.preventDefault()
                                    return _vm.update(_vm.edit.id)
                                  },
                                },
                              },
                              [
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "text-inverse",
                                      attrs: { for: "inputEmail4" },
                                    },
                                    [_vm._v("Name*")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.edit.name,
                                        expression: "edit.name",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "inputEmail4",
                                      placeholder: "Enter Unit Name",
                                      required: "",
                                    },
                                    domProps: { value: _vm.edit.name },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.edit,
                                          "name",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(" This field is required ")]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "text-inverse",
                                      attrs: { for: "inputEmail4" },
                                    },
                                    [_vm._v("Short Name*")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.edit.short_name,
                                        expression: "edit.short_name",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "inputEmail4",
                                      placeholder: "Enter Short Name Unit",
                                      required: "",
                                    },
                                    domProps: { value: _vm.edit.short_name },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.edit,
                                          "short_name",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(" This field is required ")]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "text-inverse",
                                        attrs: { for: "inputEmail43" },
                                      },
                                      [_vm._v("Base Unit")]
                                    ),
                                    _vm._v(" "),
                                    _c("v-select", {
                                      attrs: {
                                        options: _vm.parrentUnitList,
                                        reduce: function (unit) {
                                          return unit.id
                                        },
                                        label: "name",
                                        placeholder: "Choose Base Unit",
                                      },
                                      model: {
                                        value: _vm.edit.base_unit,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.edit, "base_unit", $$v)
                                        },
                                        expression: "edit.base_unit",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "text-inverse",
                                        attrs: { for: "inputEmail43" },
                                      },
                                      [_vm._v("Operator")]
                                    ),
                                    _vm._v(" "),
                                    _c("v-select", {
                                      attrs: {
                                        options: _vm.operators,
                                        label: "Base Unit",
                                        placeholder: "Choose Base Unit",
                                      },
                                      model: {
                                        value: _vm.edit.operator,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.edit, "operator", $$v)
                                        },
                                        expression: "edit.operator",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "text-inverse",
                                      attrs: { for: "inputEmail4" },
                                    },
                                    [_vm._v("Operation Value")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.edit.operation_value,
                                        expression: "edit.operation_value",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "inputEmail4",
                                      placeholder: "Enter Short Name Unit",
                                      pattern: "[0-9]*",
                                    },
                                    domProps: {
                                      value: _vm.edit.operation_value,
                                    },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.edit,
                                          "operation_value",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v("Please Enter Only Number.")]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group row mb-0" },
                                  [
                                    _c("div", { staticClass: "col-md-12" }, [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-primary",
                                          attrs: {
                                            type: "submit",
                                            disabled: _vm.loading,
                                          },
                                        },
                                        [_vm._v(" Submit ")]
                                      ),
                                    ]),
                                  ]
                                ),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "modal-footer" }, [
                            _vm.loading
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "spinner-border text-primary",
                                    attrs: { role: "status" },
                                  },
                                  [
                                    _c("span", { staticClass: "sr-only" }, [
                                      _vm._v("Loading..."),
                                    ]),
                                  ]
                                )
                              : _vm._e(),
                          ]),
                        ]),
                  ]
                ),
              ]
            ),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c("vue-good-table", {
            attrs: {
              columns: _vm.columns,
              rows: _vm.unitList,
              "pagination-options": {
                enabled: true,
                perPage: 10,
              },
              "search-options": {
                enabled: true,
              },
            },
            scopedSlots: _vm._u([
              {
                key: "table-row",
                fn: function (props) {
                  return [
                    props.column.field == "actions"
                      ? _c("span", [
                          _c(
                            "button",
                            {
                              staticClass: "mb-2 mr-2 btn-icon btn btn-danger",
                              on: {
                                click: function ($event) {
                                  return _vm.deleteUnit(props.row.id)
                                },
                              },
                            },
                            [
                              _c("i", {
                                staticClass: "pe-7s-trash btn-icon-wrapper",
                              }),
                              _vm._v("Delete "),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "mb-2 mr-2 btn-icon btn btn-primary",
                              on: {
                                click: function ($event) {
                                  return _vm.editUnits(props.row.id)
                                },
                              },
                            },
                            [
                              _c("i", {
                                staticClass: "pe-7s-pen btn-icon-wrapper",
                              }),
                              _vm._v("Edit "),
                            ]
                          ),
                        ])
                      : _c("span", [
                          _vm._v(
                            "\n            " +
                              _vm._s(props.formattedRow[props.column.field]) +
                              "\n          "
                          ),
                        ]),
                  ]
                },
              },
            ]),
          }),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-title-heading" }, [
      _c("div", { staticClass: "page-title-icon" }, [
        _c("i", { staticClass: "pe-7s-medal icon-gradient bg-tempting-azure" }),
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n          Unit\n          "),
        _c("div", { staticClass: "page-title-subheading" }, [
          _vm._v("Settings | Unit"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "btn-icon-wrapper pr-2 opacity-7" }, [
      _c("i", { staticClass: "fa fa-plus fa-w-20" }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
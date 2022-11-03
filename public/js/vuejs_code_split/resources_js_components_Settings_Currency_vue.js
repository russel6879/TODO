"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Settings_Currency_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Currency.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Currency.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "my-component",
  data: function data() {
    return {
      selected: undefined,
      createdModal: true,
      someModal: "",
      form: {
        currency_name: '',
        currency_code: '',
        symbol: ''
      },
      edit: {
        id: '',
        currency_name: '',
        currency_code: '',
        symbol: ''
      },
      columns: [{
        label: "Currency Name",
        field: "currency_name"
      }, {
        label: "Currency Code",
        field: "currency_code"
      }, {
        label: "Symbol",
        field: "symbol"
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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["currencyList", "loading"])),
  created: function created() {
    this.fetchCurrencies();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["addCurrency", "fetchCurrencies", "deleteCurrency", "updateCurrency"])), {}, {
    onUnitSubmit: function onUnitSubmit() {
      this.addCurrency({
        currency_name: this.form.currency_name,
        currency_code: this.form.currency_code,
        symbol: this.form.symbol
      });
      this.$store.dispatch("fetchCurrencies");
    },
    update: function update() {
      this.updateCurrency({
        id: this.edit.id,
        currency_name: this.edit.currency_name,
        currency_code: this.edit.currency_code,
        symbol: this.edit.symbol
      });
    },
    editCurrencies: function editCurrencies(id) {
      var _this = this;

      this.createdModal = false;
      $("#currencyModal").modal("show");
      axios.get("api/currency/".concat(id, "/edit")).then(function (res) {
        _this.edit.id = res.data.id, _this.edit.currency_name = res.data.currency_name, _this.edit.currency_code = res.data.currency_code, _this.edit.symbol = res.data.symbol;
      });
    },
    close: function close() {
      $("#currencyModal").modal("hide");
    },
    createModal: function createModal() {
      this.form.currency_name = '', this.form.currency_code = '', this.form.symbol = '', this.createdModal = true;
    }
  })
});

/***/ }),

/***/ "./resources/js/components/Settings/Currency.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Settings/Currency.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Currency_vue_vue_type_template_id_3b29b17c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Currency.vue?vue&type=template&id=3b29b17c& */ "./resources/js/components/Settings/Currency.vue?vue&type=template&id=3b29b17c&");
/* harmony import */ var _Currency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Currency.vue?vue&type=script&lang=js& */ "./resources/js/components/Settings/Currency.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Currency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Currency_vue_vue_type_template_id_3b29b17c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Currency_vue_vue_type_template_id_3b29b17c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Settings/Currency.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Settings/Currency.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Settings/Currency.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Currency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Currency.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Currency.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Currency_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Settings/Currency.vue?vue&type=template&id=3b29b17c&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Settings/Currency.vue?vue&type=template&id=3b29b17c& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Currency_vue_vue_type_template_id_3b29b17c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Currency_vue_vue_type_template_id_3b29b17c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Currency_vue_vue_type_template_id_3b29b17c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Currency.vue?vue&type=template&id=3b29b17c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Currency.vue?vue&type=template&id=3b29b17c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Currency.vue?vue&type=template&id=3b29b17c&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/Currency.vue?vue&type=template&id=3b29b17c& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
                  "data-target": "#currencyModal",
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
                  id: "currencyModal",
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
                                      attrs: { for: "inputCurrencyCode" },
                                    },
                                    [_vm._v("Currency Code*")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.currency_code,
                                        expression: "form.currency_code",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "inputCurrencyCode",
                                      placeholder: "Enter Currency Code",
                                      required: "",
                                    },
                                    domProps: { value: _vm.form.currency_code },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "currency_code",
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
                                      attrs: { for: "inputCurrencyName" },
                                    },
                                    [_vm._v("Currency Name*")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.currency_name,
                                        expression: "form.currency_name",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "inputCurrencyName",
                                      placeholder: "Enter Currency Name",
                                      required: "",
                                    },
                                    domProps: { value: _vm.form.currency_name },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "currency_name",
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
                                      attrs: { for: "symbol" },
                                    },
                                    [_vm._v("Symbol*")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.symbol,
                                        expression: "form.symbol",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "symbol",
                                      placeholder: "Enter Short Name Unit",
                                      required: "",
                                    },
                                    domProps: { value: _vm.form.symbol },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "symbol",
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
                                      attrs: { for: "inputCurrencyCode" },
                                    },
                                    [_vm._v("Currency Code*")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.edit.currency_code,
                                        expression: "edit.currency_code",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "inputCurrencycode",
                                      placeholder: "Enter Currency Code",
                                      required: "",
                                    },
                                    domProps: { value: _vm.edit.currency_code },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.edit,
                                          "currency_code",
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
                                      attrs: { for: "inputCurrencyName" },
                                    },
                                    [_vm._v("Currency Name*")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.edit.currency_name,
                                        expression: "edit.currency_name",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "inputCurrencyName",
                                      placeholder: "Enter Currency Name",
                                      required: "",
                                    },
                                    domProps: { value: _vm.edit.currency_name },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.edit,
                                          "currency_name",
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
                                      attrs: { for: "symbol" },
                                    },
                                    [_vm._v("Symbol*")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.edit.symbol,
                                        expression: "edit.symbol",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "symbol",
                                      placeholder: "Enter Short Name Unit",
                                      required: "",
                                    },
                                    domProps: { value: _vm.edit.symbol },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.edit,
                                          "symbol",
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
              rows: _vm.currencyList,
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
                                  return _vm.deleteCurrency(props.row.id)
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
                                  return _vm.editCurrencies(props.row.id)
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
        _c("i", { staticClass: "pe-7s-cash icon-gradient bg-tempting-azure" }),
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n          Currency\n          "),
        _c("div", { staticClass: "page-title-subheading" }, [
          _vm._v("Settings | Currency"),
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
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_adjustment_StockAdjust_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adjustment/StockAdjust.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adjustment/StockAdjust.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "my-component",
  data: function data() {
    return {
      selected: undefined,
      createdModal: true,
      someModal: "",
      current_qt: "",
      form: {
        product_id: '',
        quantity: '',
        adjustment_type: 'add',
        notes: ''
      },
      edit: {
        id: '',
        brand_name: '',
        brand_description: '',
        image: ''
      },
      columns: [{
        label: "Product",
        field: "products"
      }, {
        label: "Quantity",
        field: "quantitys"
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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["stockList", "loading"])),
  created: function created() {
    this.fetchStocks();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["addStock", "fetchStocks", "deleteBrand", "updateBrand"])), {}, {
    onStockSubmit: function onStockSubmit() {
      this.addStock({
        product_id: this.form.product_id,
        quantity: this.form.quantity,
        adjustment_type: this.form.adjustment_type,
        notes: this.form.notea
      });
      this.$store.dispatch("fetchStocks");
    },
    close: function close() {
      $("#stockModal").modal("hide");
    },
    createModal: function createModal() {
      this.form.product_id = '', this.form.quantity = '', this.form.adjustment_type = '', this.form.notes = '', this.createdModal = true;
      this.form.product_id = '';
      this.current_qt = '';
      this.$refs.autocomplete.value = '';
    },
    search: function search(input) {
      this.form.product_id = '';
      this.current_qt = '';
      var url = "api/product?page=1&limit=-1&sort=desc&search=".concat(encodeURI(input));
      return new Promise(function (resolve) {
        if (input.length < 1) {
          return resolve([]);
        }

        fetch(url).then(function (response) {
          return response.json();
        }).then(function (data) {
          resolve(data.data);
        });
      });
    },
    getResultValue: function getResultValue(result) {
      return result.name;
    },
    handleSubmit: function handleSubmit(result) {
      var _this = this;

      this.$refs.autocomplete.value = result.name;
      this.form.product_id = result.id; // this.current_qt=result.stock

      result.stock.map(function (entryObj) {
        return _this.current_qt = entryObj.total_stock;
      });
    },
    handleProduct: function handleProduct() {
      if (this.form.product_id == '') {
        this.$refs.autocomplete.value = '';
      }
    }
  })
});

/***/ }),

/***/ "./resources/js/components/adjustment/StockAdjust.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/adjustment/StockAdjust.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StockAdjust_vue_vue_type_template_id_67b2bb0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StockAdjust.vue?vue&type=template&id=67b2bb0e& */ "./resources/js/components/adjustment/StockAdjust.vue?vue&type=template&id=67b2bb0e&");
/* harmony import */ var _StockAdjust_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StockAdjust.vue?vue&type=script&lang=js& */ "./resources/js/components/adjustment/StockAdjust.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StockAdjust_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StockAdjust_vue_vue_type_template_id_67b2bb0e___WEBPACK_IMPORTED_MODULE_0__.render,
  _StockAdjust_vue_vue_type_template_id_67b2bb0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/adjustment/StockAdjust.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/adjustment/StockAdjust.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/adjustment/StockAdjust.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StockAdjust_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StockAdjust.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adjustment/StockAdjust.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StockAdjust_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/adjustment/StockAdjust.vue?vue&type=template&id=67b2bb0e&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/adjustment/StockAdjust.vue?vue&type=template&id=67b2bb0e& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StockAdjust_vue_vue_type_template_id_67b2bb0e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StockAdjust_vue_vue_type_template_id_67b2bb0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StockAdjust_vue_vue_type_template_id_67b2bb0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StockAdjust.vue?vue&type=template&id=67b2bb0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adjustment/StockAdjust.vue?vue&type=template&id=67b2bb0e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adjustment/StockAdjust.vue?vue&type=template&id=67b2bb0e&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/adjustment/StockAdjust.vue?vue&type=template&id=67b2bb0e& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
                  "data-target": "#stockModal",
                },
                on: {
                  click: function ($event) {
                    return _vm.createModal()
                  },
                },
              },
              [_vm._m(1), _vm._v(" Add New Adjustment")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal fade",
                attrs: {
                  id: "stockModal",
                  tabindex: "-1",
                  role: "dialog",
                  "aria-labelledby": "brandModalLabel",
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
                              [_vm._v("Adjustment")]
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
                                    return _vm.onStockSubmit.apply(
                                      null,
                                      arguments
                                    )
                                  },
                                },
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "text-inverse",
                                        attrs: { for: "inputBrandName" },
                                      },
                                      [_vm._v("Product *")]
                                    ),
                                    _vm._v(" "),
                                    _c("autocomplete", {
                                      ref: "autocomplete",
                                      attrs: {
                                        search: _vm.search,
                                        placeholder: "Search Wikipedia",
                                        "aria-label": "Select Product",
                                        "get-result-value": _vm.getResultValue,
                                      },
                                      on: { submit: _vm.handleSubmit },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-4" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "text-inverse",
                                          attrs: { for: "inputBrandName" },
                                        },
                                        [_vm._v("Current Quantity *")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.current_qt,
                                            expression: "current_qt",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          disabled: "",
                                          type: "text",
                                          id: "inputBrandName",
                                        },
                                        domProps: { value: _vm.current_qt },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.current_qt = $event.target.value
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-4" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "text-inverse",
                                          attrs: { for: "inputBrandName" },
                                        },
                                        [_vm._v("Quantity *")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.quantity,
                                            expression: "form.quantity",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "inputBrandName",
                                          placeholder: "Enter Quantity",
                                          required: "",
                                        },
                                        domProps: { value: _vm.form.quantity },
                                        on: {
                                          click: _vm.handleProduct,
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "quantity",
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
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-4" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "inputState" } },
                                        [_vm._v("Adjustment Type")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "select",
                                        {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.form.adjustment_type,
                                              expression:
                                                "form.adjustment_type",
                                            },
                                          ],
                                          staticClass: "form-control",
                                          attrs: { id: "inputState" },
                                          on: {
                                            click: _vm.handleProduct,
                                            change: function ($event) {
                                              var $$selectedVal =
                                                Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function (o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function (o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                              _vm.$set(
                                                _vm.form,
                                                "adjustment_type",
                                                $event.target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              )
                                            },
                                          },
                                        },
                                        [
                                          _c(
                                            "option",
                                            { attrs: { value: "stock_add" } },
                                            [_vm._v("Add")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "option",
                                            { attrs: { value: "stock_sub" } },
                                            [_vm._v("Subtract")]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      attrs: {
                                        for: "brandDescriptionTextarea1",
                                      },
                                    },
                                    [_vm._v("Notes")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "textarea",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.notes,
                                          expression: "form.notes",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "brandDescriptionTextarea1",
                                        rows: "3",
                                      },
                                      domProps: { value: _vm.form.notes },
                                      on: {
                                        click: _vm.handleProduct,
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "notes",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    },
                                    [_vm._v("Notes")]
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
                                      attrs: { for: "inputBrandName" },
                                    },
                                    [_vm._v("Brand Name*")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.edit.brand_name,
                                        expression: "edit.brand_name",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      id: "inputBrandName",
                                      placeholder: "Enter Brand Name",
                                      required: "",
                                    },
                                    domProps: { value: _vm.edit.brand_name },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.edit,
                                          "brand_name",
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
                                      attrs: {
                                        for: "brandDescriptionTextarea1",
                                      },
                                    },
                                    [_vm._v("Brand Description")]
                                  ),
                                  _vm._v(" "),
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.edit.brand_description,
                                        expression: "edit.brand_description",
                                      },
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      id: "brandDescriptionTextarea1",
                                      rows: "3",
                                    },
                                    domProps: {
                                      value: _vm.edit.brand_description,
                                    },
                                    on: {
                                      input: function ($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.edit,
                                          "brand_description",
                                          $event.target.value
                                        )
                                      },
                                    },
                                  }),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c("div", { staticClass: "col-md-12" }, [
                                    _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          attrs: {
                                            for: "exampleFormControlFile1",
                                          },
                                        },
                                        [_vm._v("Upload Logo")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "form-control-file",
                                        attrs: {
                                          type: "file",
                                          id: "exampleFormControlFile1",
                                          name: "image",
                                        },
                                        on: {
                                          change: function ($event) {
                                            return _vm.changeEditImage($event)
                                          },
                                        },
                                      }),
                                      _vm._v(" "),
                                      _vm.edit.image
                                        ? _c("img", {
                                            staticClass: "img-responsive",
                                            attrs: {
                                              src: _vm.logoImage(),
                                              height: "70",
                                              width: "90",
                                            },
                                          })
                                        : _vm._e(),
                                    ]),
                                  ]),
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
              rows: _vm.stockList,
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
                    props.column.field == "products"
                      ? _c("span", [
                          _vm._v(
                            "\n                  " +
                              _vm._s(props.row.product_name.name) +
                              "  "
                          ),
                          _c("img", {
                            staticClass: "img-responsive",
                            attrs: {
                              src:
                                "productImages/" +
                                props.row.product_name.images,
                              height: "30",
                              width: "50",
                            },
                          }),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    props.column.field == "quantitys"
                      ? _c("span", [
                          props.row.quantity < 0
                            ? _c("span", { staticClass: "text-success" }, [
                                _vm._v(
                                  "\n                          " +
                                    _vm._s(props.row.quantity) +
                                    "           \n                  "
                                ),
                              ])
                            : _c("span", { staticClass: "text-success" }, [
                                _vm._v(
                                  "\n                 +" +
                                    _vm._s(props.row.quantity) +
                                    "                      \n                  "
                                ),
                              ]),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    props.column.field == "actions"
                      ? _c("span", [
                          _c(
                            "button",
                            {
                              staticClass:
                                "mb-2 mr-2 btn-transition btn btn-outline-danger",
                              on: {
                                click: function ($event) {
                                  return _vm.deleteProduct(props.row.id)
                                },
                              },
                            },
                            [
                              _c("i", {
                                staticClass: "pe-7s-trash btn-icon-wrapper",
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass:
                                "mb-2 mr-2 btn-transition btn btn-outline-success",
                              on: {
                                click: function ($event) {
                                  return _vm.editBrands(props.row.id)
                                },
                              },
                            },
                            [
                              _c("i", {
                                staticClass: "pe-7s-pen btn-icon-wrapper",
                              }),
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
        _c("i", {
          staticClass: "pe-7s-plugin icon-gradient bg-tempting-azure",
        }),
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._v(" Stock Adjustment "),
        _c("div", { staticClass: "page-title-subheading" }, [
          _vm._v("Stock Adjustment | Stock Adjustment "),
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
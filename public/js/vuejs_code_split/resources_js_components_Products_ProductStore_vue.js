"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_products_ProductStore_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductStore.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductStore.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
      name: '',
      product_code: '',
      category_id: '',
      brand_id: '',
      unit_id: '',
      barcode_symbology: '',
      product_cost: '',
      product_price: '',
      sale_unit: '',
      purchase_unit: '',
      stock_alert_qt: 0,
      tax: 0,
      tax_type: '',
      description: '',
      varantis: '',
      serial_number: '',
      barcodeSymbologies: ["Code 128", "Code 39", "EN8", "EN13", "UPC"],
      chooseUnits: [],
      tag: '',
      tags: [],
      image: '',
      multiVarantis: false
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["categoryList", "loading", "brandList", "parrentUnitList"])),
  created: function created() {
    this.fetchCategories();
    this.fetchBrands();
    this.fetchParrentUnits();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["fetchCategories", "fetchBrands", "fetchParrentUnits", "addProduct"])), {}, {
    onProductSubmit: function onProductSubmit() {
      this.addProduct({
        name: this.name,
        product_code: this.product_code,
        category_id: this.category_id,
        brand_id: this.brand_id,
        unit_id: this.unit_id,
        barcode_symbology: this.barcode_symbology,
        product_cost: this.product_cost,
        product_price: this.product_price,
        sale_unit: this.sale_unit,
        purchase_unit: this.purchase_unit,
        stock_alert_qt: this.stock_alert_qt,
        tax: this.tax,
        tax_type: this.tax_type,
        description: this.description,
        varantis: this.varantis,
        serial_number: this.serial_number,
        images: this.image
      }); //   data.reset()
    },
    changeImage: function changeImage(event) {
      var _this = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this.image = event.target.result;
        console.log(event.target.result);
      };

      reader.readAsDataURL(file);
    },
    setSelected: function setSelected(id) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get("api/unit/".concat(id)).then(function (res) {
        _this2.chooseUnits = res.data;
      });
    },
    barcodeGenarate: function barcodeGenarate() {
      this.product_code = Math.floor(1000000000 + Math.random() * 9000000000);
    },
    hasmultiVarantis: function hasmultiVarantis() {
      if (this.multiVarantis == false) {
        this.multiVarantis = true;
      } else {
        this.multiVarantis = false;
      }
    }
  })
});

/***/ }),

/***/ "./resources/js/components/products/ProductStore.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/products/ProductStore.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductStore_vue_vue_type_template_id_60edcf3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductStore.vue?vue&type=template&id=60edcf3c& */ "./resources/js/components/products/ProductStore.vue?vue&type=template&id=60edcf3c&");
/* harmony import */ var _ProductStore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductStore.vue?vue&type=script&lang=js& */ "./resources/js/components/products/ProductStore.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductStore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductStore_vue_vue_type_template_id_60edcf3c___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductStore_vue_vue_type_template_id_60edcf3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/ProductStore.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/ProductStore.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/products/ProductStore.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductStore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductStore.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductStore.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductStore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/ProductStore.vue?vue&type=template&id=60edcf3c&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/products/ProductStore.vue?vue&type=template&id=60edcf3c& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductStore_vue_vue_type_template_id_60edcf3c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductStore_vue_vue_type_template_id_60edcf3c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductStore_vue_vue_type_template_id_60edcf3c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductStore.vue?vue&type=template&id=60edcf3c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductStore.vue?vue&type=template&id=60edcf3c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductStore.vue?vue&type=template&id=60edcf3c&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductStore.vue?vue&type=template&id=60edcf3c& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                ref: "textareaform",
                staticClass: "needs-validation",
                attrs: { id: "myForm", novalidate: "" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.onProductSubmit.apply(null, arguments)
                  },
                },
              },
              [
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", { attrs: { for: "inputName4" } }, [
                      _vm._v("Name *"),
                    ]),
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
                        id: "inputName4",
                        placeholder: "Enter Product Name",
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
                    _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(" This field is required "),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", { attrs: { for: "inputProductCode4" } }, [
                      _vm._v("Product Code *"),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group  mb-3" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.product_code,
                            expression: "product_code",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          "aria-label": "Order Tax",
                          "aria-describedby": "basic-addon2",
                          required: "",
                        },
                        domProps: { value: _vm.product_code },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.product_code = $event.target.value
                          },
                        },
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group-append" }, [
                        _c(
                          "span",
                          {
                            staticClass: "input-group-text",
                            attrs: { id: "basic-addon2" },
                            on: {
                              click: function ($event) {
                                return _vm.barcodeGenarate()
                              },
                            },
                          },
                          [
                            _c(
                              "i",
                              {
                                staticClass: "fa fa-fw",
                                attrs: {
                                  "aria-hidden": "true",
                                  title: "Copy to use barcode",
                                },
                              },
                              [_vm._v("")]
                            ),
                            _vm._v(" Generate Barcode "),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(" This field is required "),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group col-md-6" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "text-inverse",
                          attrs: { for: "inputCategory4" },
                        },
                        [_vm._v("Category *")]
                      ),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          options: _vm.categoryList,
                          reduce: function (category) {
                            return category.id
                          },
                          label: "category_name",
                          placeholder: "Choose Product Category",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "search",
                            fn: function (ref) {
                              var attributes = ref.attributes
                              var events = ref.events
                              return [
                                attributes.type === "checkbox"
                                  ? _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.category_id,
                                                expression: "category_id",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: "checkbox",
                                            },
                                            domProps: {
                                              checked: Array.isArray(
                                                _vm.category_id
                                              )
                                                ? _vm._i(
                                                    _vm.category_id,
                                                    null
                                                  ) > -1
                                                : _vm.category_id,
                                            },
                                            on: {
                                              change: function ($event) {
                                                var $$a = _vm.category_id,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = null,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      (_vm.category_id =
                                                        $$a.concat([$$v]))
                                                  } else {
                                                    $$i > -1 &&
                                                      (_vm.category_id = $$a
                                                        .slice(0, $$i)
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        ))
                                                  }
                                                } else {
                                                  _vm.category_id = $$c
                                                }
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    )
                                  : attributes.type === "radio"
                                  ? _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.category_id,
                                                expression: "category_id",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.category_id,
                                                null
                                              ),
                                            },
                                            on: {
                                              change: function ($event) {
                                                _vm.category_id = null
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    )
                                  : _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.category_id,
                                                expression: "category_id",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: attributes.type,
                                            },
                                            domProps: {
                                              value: _vm.category_id,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.category_id =
                                                  $event.target.value
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    ),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(" This field is required "),
                                ]),
                              ]
                            },
                          },
                        ]),
                        model: {
                          value: _vm.category_id,
                          callback: function ($$v) {
                            _vm.category_id = $$v
                          },
                          expression: "category_id",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group col-md-6" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "text-inverse",
                          attrs: { for: "inputBrand4" },
                        },
                        [_vm._v("Brand ")]
                      ),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          options: _vm.brandList,
                          reduce: function (brand) {
                            return brand.id
                          },
                          label: "brand_name",
                          placeholder: "Choose Product Brand",
                        },
                        model: {
                          value: _vm.brand_id,
                          callback: function ($$v) {
                            _vm.brand_id = $$v
                          },
                          expression: "brand_id",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group col-md-6" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "text-inverse",
                          attrs: { for: "inputSymbology4" },
                        },
                        [_vm._v("Barcode Symbology *")]
                      ),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          options: _vm.barcodeSymbologies,
                          label: "barcode_symbology",
                          placeholder: "Choose Barcode Symbology",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "search",
                            fn: function (ref) {
                              var attributes = ref.attributes
                              var events = ref.events
                              return [
                                attributes.type === "checkbox"
                                  ? _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.barcode_symbology,
                                                expression: "barcode_symbology",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: "checkbox",
                                            },
                                            domProps: {
                                              checked: Array.isArray(
                                                _vm.barcode_symbology
                                              )
                                                ? _vm._i(
                                                    _vm.barcode_symbology,
                                                    null
                                                  ) > -1
                                                : _vm.barcode_symbology,
                                            },
                                            on: {
                                              change: function ($event) {
                                                var $$a = _vm.barcode_symbology,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = null,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      (_vm.barcode_symbology =
                                                        $$a.concat([$$v]))
                                                  } else {
                                                    $$i > -1 &&
                                                      (_vm.barcode_symbology =
                                                        $$a
                                                          .slice(0, $$i)
                                                          .concat(
                                                            $$a.slice($$i + 1)
                                                          ))
                                                  }
                                                } else {
                                                  _vm.barcode_symbology = $$c
                                                }
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    )
                                  : attributes.type === "radio"
                                  ? _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.barcode_symbology,
                                                expression: "barcode_symbology",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.barcode_symbology,
                                                null
                                              ),
                                            },
                                            on: {
                                              change: function ($event) {
                                                _vm.barcode_symbology = null
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    )
                                  : _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.barcode_symbology,
                                                expression: "barcode_symbology",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: attributes.type,
                                            },
                                            domProps: {
                                              value: _vm.barcode_symbology,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.barcode_symbology =
                                                  $event.target.value
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    ),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(" This field is required "),
                                ]),
                              ]
                            },
                          },
                        ]),
                        model: {
                          value: _vm.barcode_symbology,
                          callback: function ($$v) {
                            _vm.barcode_symbology = $$v
                          },
                          expression: "barcode_symbology",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", { attrs: { for: "inputProductCost4" } }, [
                      _vm._v("Product Cost *"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.product_cost,
                          expression: "product_cost",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "inputProductCost4",
                        placeholder: "Enter Product Cost",
                        pattern: "[0-9]*",
                        required: "",
                      },
                      domProps: { value: _vm.product_cost },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.product_cost = $event.target.value
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(" This field must be a valid "),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", { attrs: { for: "inputProductPrice4" } }, [
                      _vm._v("Product Price *"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.product_price,
                          expression: "product_price",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "inputProductPrice4",
                        placeholder: "Enter Product Price",
                        pattern: "[0-9]*",
                        required: "",
                      },
                      domProps: { value: _vm.product_price },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.product_price = $event.target.value
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(" This field must be a valid"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group col-md-6" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "text-inverse",
                          attrs: { for: "inputProductUnit4" },
                        },
                        [_vm._v("Product Unit * ")]
                      ),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          options: _vm.parrentUnitList,
                          reduce: function (unit) {
                            return unit.id
                          },
                          label: "name",
                          placeholder: "Choose Product Unit",
                        },
                        on: { input: _vm.setSelected },
                        scopedSlots: _vm._u([
                          {
                            key: "search",
                            fn: function (ref) {
                              var attributes = ref.attributes
                              var events = ref.events
                              return [
                                attributes.type === "checkbox"
                                  ? _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.unit_id,
                                                expression: "unit_id",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: "checkbox",
                                            },
                                            domProps: {
                                              checked: Array.isArray(
                                                _vm.unit_id
                                              )
                                                ? _vm._i(_vm.unit_id, null) > -1
                                                : _vm.unit_id,
                                            },
                                            on: {
                                              change: function ($event) {
                                                var $$a = _vm.unit_id,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = null,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      (_vm.unit_id = $$a.concat(
                                                        [$$v]
                                                      ))
                                                  } else {
                                                    $$i > -1 &&
                                                      (_vm.unit_id = $$a
                                                        .slice(0, $$i)
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        ))
                                                  }
                                                } else {
                                                  _vm.unit_id = $$c
                                                }
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    )
                                  : attributes.type === "radio"
                                  ? _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.unit_id,
                                                expression: "unit_id",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.unit_id,
                                                null
                                              ),
                                            },
                                            on: {
                                              change: function ($event) {
                                                _vm.unit_id = null
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    )
                                  : _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.unit_id,
                                                expression: "unit_id",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: attributes.type,
                                            },
                                            domProps: { value: _vm.unit_id },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.unit_id =
                                                  $event.target.value
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    ),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(" This field is required "),
                                ]),
                              ]
                            },
                          },
                        ]),
                        model: {
                          value: _vm.unit_id,
                          callback: function ($$v) {
                            _vm.unit_id = $$v
                          },
                          expression: "unit_id",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group col-md-6" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "text-inverse",
                          attrs: { for: "inputSaleUnit4" },
                        },
                        [_vm._v("Sale Unit * ")]
                      ),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          options: _vm.chooseUnits,
                          reduce: function (saleunit) {
                            return saleunit.id
                          },
                          label: "name",
                          placeholder: "Choose Sale Unit",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "search",
                            fn: function (ref) {
                              var attributes = ref.attributes
                              var events = ref.events
                              return [
                                attributes.type === "checkbox"
                                  ? _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.sale_unit,
                                                expression: "sale_unit",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: "checkbox",
                                            },
                                            domProps: {
                                              checked: Array.isArray(
                                                _vm.sale_unit
                                              )
                                                ? _vm._i(_vm.sale_unit, null) >
                                                  -1
                                                : _vm.sale_unit,
                                            },
                                            on: {
                                              change: function ($event) {
                                                var $$a = _vm.sale_unit,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = null,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      (_vm.sale_unit =
                                                        $$a.concat([$$v]))
                                                  } else {
                                                    $$i > -1 &&
                                                      (_vm.sale_unit = $$a
                                                        .slice(0, $$i)
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        ))
                                                  }
                                                } else {
                                                  _vm.sale_unit = $$c
                                                }
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    )
                                  : attributes.type === "radio"
                                  ? _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.sale_unit,
                                                expression: "sale_unit",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.sale_unit,
                                                null
                                              ),
                                            },
                                            on: {
                                              change: function ($event) {
                                                _vm.sale_unit = null
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    )
                                  : _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.sale_unit,
                                                expression: "sale_unit",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: attributes.type,
                                            },
                                            domProps: { value: _vm.sale_unit },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.sale_unit =
                                                  $event.target.value
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    ),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(" This field is required "),
                                ]),
                              ]
                            },
                          },
                        ]),
                        model: {
                          value: _vm.sale_unit,
                          callback: function ($$v) {
                            _vm.sale_unit = $$v
                          },
                          expression: "sale_unit",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group col-md-6" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "text-inverse",
                          attrs: { for: "inputPurchaseUnit4" },
                        },
                        [_vm._v("Purchase Unit * ")]
                      ),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          options: _vm.chooseUnits,
                          reduce: function (saleunit) {
                            return saleunit.id
                          },
                          label: "name",
                          placeholder: "Choose Purchase Unit",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "search",
                            fn: function (ref) {
                              var attributes = ref.attributes
                              var events = ref.events
                              return [
                                attributes.type === "checkbox"
                                  ? _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.purchase_unit,
                                                expression: "purchase_unit",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: "checkbox",
                                            },
                                            domProps: {
                                              checked: Array.isArray(
                                                _vm.purchase_unit
                                              )
                                                ? _vm._i(
                                                    _vm.purchase_unit,
                                                    null
                                                  ) > -1
                                                : _vm.purchase_unit,
                                            },
                                            on: {
                                              change: function ($event) {
                                                var $$a = _vm.purchase_unit,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = null,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      (_vm.purchase_unit =
                                                        $$a.concat([$$v]))
                                                  } else {
                                                    $$i > -1 &&
                                                      (_vm.purchase_unit = $$a
                                                        .slice(0, $$i)
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        ))
                                                  }
                                                } else {
                                                  _vm.purchase_unit = $$c
                                                }
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    )
                                  : attributes.type === "radio"
                                  ? _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.purchase_unit,
                                                expression: "purchase_unit",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.purchase_unit,
                                                null
                                              ),
                                            },
                                            on: {
                                              change: function ($event) {
                                                _vm.purchase_unit = null
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    )
                                  : _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.purchase_unit,
                                                expression: "purchase_unit",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: attributes.type,
                                            },
                                            domProps: {
                                              value: _vm.purchase_unit,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.purchase_unit =
                                                  $event.target.value
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    ),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(" This field is required "),
                                ]),
                              ]
                            },
                          },
                        ]),
                        model: {
                          value: _vm.purchase_unit,
                          callback: function ($$v) {
                            _vm.purchase_unit = $$v
                          },
                          expression: "purchase_unit",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", { attrs: { for: "inputName4" } }, [
                      _vm._v("Stock Alert *"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.stock_alert_qt,
                          expression: "stock_alert_qt",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "inputName4",
                        pattern: "[0-9]*",
                        required: "",
                      },
                      domProps: { value: _vm.stock_alert_qt },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.stock_alert_qt = $event.target.value
                        },
                      },
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(" This field must be a valid"),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-6" }, [
                    _c("label", { attrs: { for: "inputName4" } }, [
                      _vm._v("Order Tax "),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group  mb-3" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.tax,
                            expression: "tax",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          "aria-label": "Order Tax",
                          "aria-describedby": "basic-addon2",
                        },
                        domProps: { value: _vm.tax },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.tax = $event.target.value
                          },
                        },
                      }),
                      _vm._v(" "),
                      _vm._m(1),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "form-group col-md-6" },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "text-inverse",
                          attrs: { for: "inputTax4" },
                        },
                        [_vm._v("Tax Type * ")]
                      ),
                      _vm._v(" "),
                      _c("v-select", {
                        ref: "selectedEl",
                        attrs: {
                          options: ["Exclusive", "Inclusive"],
                          placeholder: "Choose Product Brand",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "search",
                            fn: function (ref) {
                              var attributes = ref.attributes
                              var events = ref.events
                              return [
                                attributes.type === "checkbox"
                                  ? _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.tax_type,
                                                expression: "tax_type",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: "checkbox",
                                            },
                                            domProps: {
                                              checked: Array.isArray(
                                                _vm.tax_type
                                              )
                                                ? _vm._i(_vm.tax_type, null) >
                                                  -1
                                                : _vm.tax_type,
                                            },
                                            on: {
                                              change: function ($event) {
                                                var $$a = _vm.tax_type,
                                                  $$el = $event.target,
                                                  $$c = $$el.checked
                                                    ? true
                                                    : false
                                                if (Array.isArray($$a)) {
                                                  var $$v = null,
                                                    $$i = _vm._i($$a, $$v)
                                                  if ($$el.checked) {
                                                    $$i < 0 &&
                                                      (_vm.tax_type =
                                                        $$a.concat([$$v]))
                                                  } else {
                                                    $$i > -1 &&
                                                      (_vm.tax_type = $$a
                                                        .slice(0, $$i)
                                                        .concat(
                                                          $$a.slice($$i + 1)
                                                        ))
                                                  }
                                                } else {
                                                  _vm.tax_type = $$c
                                                }
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    )
                                  : attributes.type === "radio"
                                  ? _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.tax_type,
                                                expression: "tax_type",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: "radio",
                                            },
                                            domProps: {
                                              checked: _vm._q(
                                                _vm.tax_type,
                                                null
                                              ),
                                            },
                                            on: {
                                              change: function ($event) {
                                                _vm.tax_type = null
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    )
                                  : _c(
                                      "input",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.tax_type,
                                                expression: "tax_type",
                                              },
                                            ],
                                            staticClass:
                                              "vs__search form-control vs__search_z-index",
                                            attrs: {
                                              required: !_vm.selected,
                                              type: attributes.type,
                                            },
                                            domProps: { value: _vm.tax_type },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.tax_type =
                                                  $event.target.value
                                              },
                                            },
                                          },
                                          "input",
                                          attributes,
                                          false
                                        ),
                                        events
                                      )
                                    ),
                                _vm._v(" "),
                                _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(" This field is required "),
                                ]),
                              ]
                            },
                          },
                        ]),
                        model: {
                          value: _vm.tax_type,
                          callback: function ($$v) {
                            _vm.tax_type = $$v
                          },
                          expression: "tax_type",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-12" }, [
                    _c(
                      "label",
                      {
                        staticClass: "text-inverse",
                        attrs: { for: "inputBrand4" },
                      },
                      [_vm._v("Description ")]
                    ),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.description,
                          expression: "description",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { id: "exampleFormControlTextarea1", rows: "3" },
                      domProps: { value: _vm.description },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.description = $event.target.value
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-12 row" }, [
                    _c("div", { staticClass: "col-sm-12" }, [
                      _c("div", { staticClass: "form-check" }, [
                        _c("input", {
                          staticClass: "form-check-input",
                          attrs: { type: "checkbox", id: "gridCheck1" },
                          on: {
                            change: function ($event) {
                              $event.preventDefault()
                              return _vm.hasmultiVarantis()
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "form-check-label",
                            attrs: { for: "gridCheck1" },
                          },
                          [_vm._v(" This Product Has Multi Varantis ")]
                        ),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm.multiVarantis
                    ? _c(
                        "div",
                        { staticClass: "form-group col-md-12" },
                        [
                          _c("vue-tags-input", {
                            attrs: { tags: _vm.tags, placeholder: "+ add" },
                            on: {
                              "tags-changed": function (newTags) {
                                return (_vm.tags = newTags)
                              },
                            },
                            model: {
                              value: _vm.varantis,
                              callback: function ($$v) {
                                _vm.varantis = $$v
                              },
                              expression: "varantis",
                            },
                          }),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group col-md-12 row" }, [
                    _c("div", { staticClass: "col-sm-12" }, [
                      _c("div", { staticClass: "form-check" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.serial_number,
                              expression: "serial_number",
                            },
                          ],
                          staticClass: "form-check-input",
                          attrs: {
                            value: "1",
                            type: "checkbox",
                            id: "gridCheck2",
                          },
                          domProps: {
                            checked: Array.isArray(_vm.serial_number)
                              ? _vm._i(_vm.serial_number, "1") > -1
                              : _vm.serial_number,
                          },
                          on: {
                            change: function ($event) {
                              var $$a = _vm.serial_number,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = "1",
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.serial_number = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.serial_number = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.serial_number = $$c
                              }
                            },
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "form-check-label",
                            attrs: { for: "gridCheck2" },
                          },
                          [_vm._v(" Product Has IMEI/Serial Number ")]
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("button", { staticClass: "mt-1 btn btn-primary" }, [
                  _vm._v("Submit"),
                ]),
              ]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("label", { attrs: { for: "exampleFormControlFile1" } }, [
              _vm._v("Upload Logo"),
            ]),
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
                  return _vm.changeImage($event)
                },
              },
            }),
            _vm._v(" "),
            _vm.image
              ? _c("img", {
                  staticClass: "img-responsive mt-3",
                  attrs: { src: _vm.image, height: "120", width: "120" },
                })
              : _c("img", {
                  staticClass: "img-responsive mt-3",
                  attrs: {
                    src: "images/emptyImage.jpg",
                    height: "120",
                    width: "120",
                  },
                }),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "app-page-title" }, [
      _c("div", { staticClass: "page-title-wrapper" }, [
        _c("div", { staticClass: "page-title-heading" }, [
          _c("div", { staticClass: "page-title-icon" }, [
            _c("i", {
              staticClass: "pe-7s-browser icon-gradient bg-tempting-azure",
            }),
          ]),
          _vm._v(" "),
          _c("div", [
            _vm._v(" Store Product "),
            _c("div", { staticClass: "page-title-subheading" }, [
              _vm._v("Products | Store Product"),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addon2" } },
        [_vm._v("%")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header mt-3" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("Multiple Image")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
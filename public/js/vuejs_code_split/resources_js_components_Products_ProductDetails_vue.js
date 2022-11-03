"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_products_ProductDetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "my-component",
  data: function data() {
    return {
      selected: undefined,
      createdModal: true,
      someModal: "",
      details: '',
      form: {
        image: '',
        brand_name: '',
        brand_description: ''
      },
      edit: {
        id: '',
        brand_name: '',
        brand_description: '',
        image: ''
      },
      columns: [{
        label: "Brand Name",
        field: "brand_name"
      }, {
        label: "Brand Description",
        field: "brand_description"
      }, {
        label: "Image",
        field: "imageShow"
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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["brandList", "loading"])),
  created: function created() {
    this.productDetails();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["addBrand", "fetchBrands", "deleteBrand", "updateBrand"])), {}, {
    productDetails: function productDetails() {
      var _this = this;

      axios.get("api/product/".concat(this.$route.params.id)).then(function (res) {
        _this.details = res.data;
      });
    },
    print: function print() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.$htmlToPaper('printMe');

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  })
});

/***/ }),

/***/ "./resources/js/components/products/ProductDetails.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/products/ProductDetails.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductDetails_vue_vue_type_template_id_446dc303___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetails.vue?vue&type=template&id=446dc303& */ "./resources/js/components/products/ProductDetails.vue?vue&type=template&id=446dc303&");
/* harmony import */ var _ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/products/ProductDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductDetails_vue_vue_type_template_id_446dc303___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductDetails_vue_vue_type_template_id_446dc303___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/ProductDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/ProductDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/products/ProductDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/ProductDetails.vue?vue&type=template&id=446dc303&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/products/ProductDetails.vue?vue&type=template&id=446dc303& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_template_id_446dc303___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_template_id_446dc303___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetails_vue_vue_type_template_id_446dc303___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductDetails.vue?vue&type=template&id=446dc303& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductDetails.vue?vue&type=template&id=446dc303&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductDetails.vue?vue&type=template&id=446dc303&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductDetails.vue?vue&type=template&id=446dc303& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-header" }, [
        _c(
          "button",
          {
            staticClass:
              "mb-2 mt-2 mr-2 btn-transition btn btn-outline-success",
            on: { click: _vm.print },
          },
          [
            _c("i", { staticClass: "pe-7s-print btn-icon-wrapper" }),
            _vm._v("  Print"),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body", attrs: { id: "printMe" } }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-4" }, [
            _vm.details.images
              ? _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src: "productImages/" + _vm.details.images,
                    alt: "product image",
                  },
                })
              : _c("img", {
                  staticClass: "img-fluid",
                  attrs: { src: "images/emptyImage.jpg", alt: "product image" },
                }),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-8" },
            [
              _c(
                "barcode",
                {
                  attrs: {
                    width: "2",
                    height: "70",
                    value: _vm.details.product_code,
                  },
                },
                [_vm._v("\n    Show this if the rendering fails.\n  ")]
              ),
              _vm._v(" "),
              _c(
                "table",
                { staticClass: "table table-striped table-bordered" },
                [
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [_vm._v("Product")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.details.name))]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Category")]),
                      _vm._v(" "),
                      _vm.details.category_name
                        ? _c("td", [
                            _vm._v(
                              _vm._s(_vm.details.category_name.category_name)
                            ),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Brand")]),
                      _vm._v(" "),
                      _vm.details.brand_name
                        ? _c("td", [
                            _vm._v(_vm._s(_vm.details.brand_name.brand_name)),
                          ])
                        : _c("td", [_vm._v("N/D")]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Cost")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.details.product_cost))]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Price")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.details.product_price))]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Unit")]),
                      _vm._v(" "),
                      _vm.details.unit_name
                        ? _c("td", [
                            _vm._v(_vm._s(_vm.details.unit_name.short_name)),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Tax")]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.details.tax) + " %")]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v("Stock Alert")]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "span",
                          {
                            staticClass:
                              "mb-2 mr-2 btn-transition btn btn-outline-warning",
                          },
                          [_vm._v(_vm._s(_vm.details.stock_alert_qt))]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm.details.description
                      ? _c("tr", [
                          _c("td", [_vm._v("Details")]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(" " + _vm._s(_vm.details.stock_alert_qt)),
                          ]),
                        ])
                      : _vm._e(),
                  ]),
                ]
              ),
            ],
            1
          ),
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
              staticClass: "pe-7s-ribbon icon-gradient bg-tempting-azure",
            }),
          ]),
          _vm._v(" "),
          _c("div", [
            _vm._v(" Product Details "),
            _c("div", { staticClass: "page-title-subheading" }, [
              _vm._v("Products | Product Details"),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "page-title-actions" }, [
          _c("div", { staticClass: "d-inline-block" }),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
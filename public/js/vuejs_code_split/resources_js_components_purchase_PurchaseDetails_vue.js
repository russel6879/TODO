"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_purchase_PurchaseDetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/purchase/PurchaseDetails.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/purchase/PurchaseDetails.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      invoice: ''
    };
  },
  // mounted() {
  //   this.viewPost();
  // },
  computed: {//   ...mapGetters(["brandList", "loading"])
  },
  created: function created() {
    this.purchaseDetails();
  },
  methods: {
    //   ...mapActions(["addBrand", "fetchBrands", "deleteBrand", "updateBrand"]),
    purchaseDetails: function purchaseDetails() {
      var _this = this;

      axios.get('api/purchase/' + this.$route.params.id).then(function (res) {
        _this.invoice = res.data.data;
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
  }
});

/***/ }),

/***/ "./resources/js/components/purchase/PurchaseDetails.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/purchase/PurchaseDetails.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PurchaseDetails_vue_vue_type_template_id_dba67ac4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PurchaseDetails.vue?vue&type=template&id=dba67ac4& */ "./resources/js/components/purchase/PurchaseDetails.vue?vue&type=template&id=dba67ac4&");
/* harmony import */ var _PurchaseDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PurchaseDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/purchase/PurchaseDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PurchaseDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PurchaseDetails_vue_vue_type_template_id_dba67ac4___WEBPACK_IMPORTED_MODULE_0__.render,
  _PurchaseDetails_vue_vue_type_template_id_dba67ac4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/purchase/PurchaseDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/purchase/PurchaseDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/purchase/PurchaseDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PurchaseDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/purchase/PurchaseDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/purchase/PurchaseDetails.vue?vue&type=template&id=dba67ac4&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/purchase/PurchaseDetails.vue?vue&type=template&id=dba67ac4& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetails_vue_vue_type_template_id_dba67ac4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetails_vue_vue_type_template_id_dba67ac4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseDetails_vue_vue_type_template_id_dba67ac4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PurchaseDetails.vue?vue&type=template&id=dba67ac4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/purchase/PurchaseDetails.vue?vue&type=template&id=dba67ac4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/purchase/PurchaseDetails.vue?vue&type=template&id=dba67ac4&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/purchase/PurchaseDetails.vue?vue&type=template&id=dba67ac4& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
            _vm._v("  Print "),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body", attrs: { id: "printMe" } }, [
        _c("div", { staticClass: "row justify-content-center" }, [
          _c("h4", { staticClass: "font-weight-bold" }, [
            _vm._v("Purchase Detail : " + _vm._s(_vm.invoice.Ref)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-5" }, [
          _c("div", { staticClass: "mb-4 col-sm-12 col-md-4 col-lg-4" }, [
            _c("h5", { staticClass: "font-weight-bold" }, [
              _vm._v("supplier Info"),
            ]),
            _vm._v(" "),
            _vm.invoice.supplier
              ? _c("div", [_vm._v(_vm._s(_vm.invoice.supplier.name))])
              : _vm._e(),
            _vm._v(" "),
            _vm.invoice.supplier
              ? _c("div", [_vm._v(" " + _vm._s(_vm.invoice.supplier.email))])
              : _vm._e(),
            _vm._v(" "),
            _vm.invoice.supplier
              ? _c("div", [_vm._v(_vm._s(_vm.invoice.supplier.phone))])
              : _vm._e(),
            _vm._v(" "),
            _vm.invoice.supplier
              ? _c("div", [_vm._v(_vm._s(_vm.invoice.supplier.address))])
              : _vm._e(),
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "mb-4 col-sm-12 col-md-4 col-lg-4" }, [
            _c("h5", { staticClass: "font-weight-bold" }, [
              _vm._v("Invoice Info"),
            ]),
            _vm._v(" "),
            _c("div", [_vm._v("Reference : SL_" + _vm._s(_vm.invoice.Ref))]),
            _vm._v(" "),
            _c("div", [
              _vm._v(" Payment Status :  "),
              _vm.invoice.payment_status == "paid"
                ? _c("span", { staticClass: "badge badge-success" }, [
                    _vm._v(_vm._s(_vm.invoice.payment_status)),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.invoice.payment_status == "unpaid"
                ? _c("span", { staticClass: "badge badge-danger" }, [
                    _vm._v(_vm._s(_vm.invoice.payment_status)),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.invoice.payment_status == "partial"
                ? _c("span", { staticClass: "badge badge-warning" }, [
                    _vm._v(_vm._s(_vm.invoice.payment_status)),
                  ])
                : _vm._e(),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-3" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("h5", { staticClass: "font-weight-bold" }, [
              _vm._v("Order Summary"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-hover table-md" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.invoice.details, function (product) {
                    return _c("tr", { key: product.id }, [
                      _c("td", [
                        _c("span", [
                          _vm._v(
                            _vm._s(product.code) +
                              " (" +
                              _vm._s(product.name) +
                              ")"
                          ),
                        ]),
                        _vm._v(" "),
                        _c("p", { staticStyle: { display: "none" } }, [
                          _vm._v("IMEI/SN : "),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("$ " + _vm._s(product.net_price))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(product.quentity) + _vm._s(product.unit_sale)
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("$ " + _vm._s(product.price))]),
                      _vm._v(" "),
                      _c("td", [_vm._v("$ " + _vm._s(product.discount))]),
                      _vm._v(" "),
                      _c("td", [_vm._v("$ " + _vm._s(product.tax))]),
                      _vm._v(" "),
                      _c("td", [_vm._v("$ " + _vm._s(product.total))]),
                    ])
                  }),
                  0
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "offset-md-9 col-md-3 mt-4" }, [
            _c("table", { staticClass: "table table-striped table-sm" }, [
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("Order Tax")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", [
                      _vm._v(
                        _vm._s(_vm.invoice.tax_rate) +
                          " (" +
                          _vm._s(_vm.invoice.tax_net) +
                          " %)"
                      ),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Discount")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("$ " + _vm._s(_vm.invoice.discount))]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("td", [_vm._v("Shipping")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("$ " + _vm._s(_vm.invoice.shipping))]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticClass: "font-weight-bold" }, [
                      _vm._v("$ " + _vm._s(_vm.invoice.grand_total)),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _vm._m(4),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticClass: "font-weight-bold" }, [
                      _vm._v("$ " + _vm._s(_vm.invoice.paid_amount)),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("tr", [
                  _vm._m(5),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticClass: "font-weight-bold" }, [
                      _vm._v(
                        "$ " +
                          _vm._s(
                            _vm.invoice.grand_total - _vm.invoice.paid_amount
                          )
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]),
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
              staticClass: "pe-7s-cart icon-gradient bg-tempting-azure",
            }),
          ]),
          _vm._v(" "),
          _c("div", [
            _vm._v(" Purchase Details "),
            _c("div", { staticClass: "page-title-subheading" }, [
              _vm._v("Purchase | Purchase Details"),
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
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-4 col-sm-12 col-md-4 col-lg-4" }, [
      _c("h5", { staticClass: "font-weight-bold" }, [_vm._v("Company Info")]),
      _vm._v(" "),
      _c("div", [_vm._v("Stocky")]),
      _vm._v(" "),
      _c("div", [_vm._v("admin@example.com")]),
      _vm._v(" "),
      _c("div", [_vm._v("6315996770")]),
      _vm._v(" "),
      _c("div", [_vm._v("3618 Abia Martin Drive")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-gray-300" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Net Unit Price")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Unit Price")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Discount")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Tax")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Subtotal")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("span", { staticClass: "font-weight-bold" }, [_vm._v("Grand Total")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("span", { staticClass: "font-weight-bold" }, [_vm._v("Paid")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("span", { staticClass: "font-weight-bold" }, [_vm._v("Due")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
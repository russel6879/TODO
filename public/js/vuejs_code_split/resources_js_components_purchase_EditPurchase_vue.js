"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_purchase_EditPurchase_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/purchase/EditPurchase.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/purchase/EditPurchase.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      invoice: [],
      supplierList: [],
      product_id: '',
      grandTotal: '',
      editcarts: [],
      totalprice: '',
      edit: {
        price: '',
        net_price: '',
        tax: 0,
        discount: 0
      }
    };
  },
  // mounted() {
  //   this.viewPost();
  // },
  computed: {//   ...mapGetters(["brandList", "loading"])
  },
  created: function created() {
    this.purchaseDetails();
    this.fetchSuppliers();
  },
  methods: {
    //   ...mapActions(["addBrand", "fetchBrands", "deleteBrand", "updateBrand"]),
    fetchSuppliers: function fetchSuppliers() {
      var _this = this;

      axios.get('/api/supplier/create').then(function (res) {
        _this.supplierList = res.data.data;
        _this.supplier_id = res.data.data[0]['id'];
      });
    },
    purchaseDetails: function purchaseDetails() {
      var _this2 = this;

      axios.get('api/purchase/' + this.$route.params.id).then(function (res) {
        _this2.invoice = res.data.data;
        _this2.grandTotal = _this2.invoice.grand_total;
      });
    },
    removeCart: function removeCart(index) {
      this.invoice.details.splice(index, 1);
      this.viewCart();
      this.totalPriceCal();
      this.taxCalculate();
    },
    search: function search(input) {
      var _this3 = this;

      this.product_id = '';
      $("#autocomplete-result-list-1").css("display", "");
      var url = "api/product?page=1&limit=-1&sort=desc&search=".concat(encodeURI(input));
      return new Promise(function (resolve) {
        if (input.length < 1) {
          return resolve([]);
        }

        fetch(url).then(function (response) {
          return response.json();
        }).then(function (data) {
          resolve(data.data);

          if (data.data[0]['product_code'] == input) {
            _this3.invoice.details(data.data[0]);

            _this3.$refs.autocomplete.value = '';
            $("#autocomplete-result-list-1").css("display", "none");
          }
        });
      });
    },
    getResultValue: function getResultValue(result) {
      return result.name;
    },
    handleSubmit: function handleSubmit(result) {
      this.$refs.autocomplete.value = result.name;
      this.product_id = result.id;
      this.addCart(result);
      this.$refs.autocomplete.value = ''; // this.current_qt=result.stock
      // result.stock.map(entryObj => {
      //         return  this.current_qt = (entryObj.total_stock)
      //     });
    },
    audio: function audio() {
      var audioFile = new Audio("/Barcode-scanner-beep-sound.mp3");
      audioFile.play();
    },
    addCart: function addCart(product) {
      var findProduct = this.invoice.details.find(function (o) {
        return o.code === product.product_code;
      });

      if (findProduct) {
        // this.audio();
        findProduct.quentity++;
        findProduct.total = findProduct.quentity * findProduct.net_price; // this.storeCart();     

        this.viewCart();
        this.totalPriceCal();
        this.taxCalculate();
      } else {
        this.audio();
        this.invoice.details.push({
          name: product.name,
          code: product.product_code,
          net_price: product.product_price,
          price: product.product_price,
          quentity: 1,
          unit_sale: product.unit_name.name,
          discount: 0,
          tax: product.tax,
          total: product.product_price
        });
        console.log(product); // this.cartadd = {};

        this.viewCart();
        this.totalPriceCal();
        this.taxCalculate();
      }
    },
    taxCalculate: function taxCalculate(tax) {
      if (tax) {
        var tax1 = tax;
      } else {
        var tax1 = this.invoice.tax_net;
      }

      this.invoice.tax_rate = this.invoice.grand_total * tax1 / 100;
      this.totalPriceCal();
    },
    discountCalculate: function discountCalculate(discount) {
      this.invoice.discount = discount;
      this.totalPriceCal();
    },
    shippingCalculate: function shippingCalculate(shipping) {
      this.invoice.shipping = shipping;
      this.totalPriceCal();
    },
    increment: function increment(product) {
      console.log(product);
      var findProduct = this.invoice.details.find(function (o) {
        return o.code === product.code;
      });
      findProduct.quentity++;
      findProduct.total = findProduct.quentity * findProduct.net_price; // this.storeCart();     

      this.viewCart();
      this.totalPriceCal();
      this.taxCalculate();
    },
    decrement: function decrement(product) {
      var findProduct = this.invoice.details.find(function (o) {
        return o.code === product.code;
      });

      if (findProduct.quentity === 1) {
        alert("Negative quantity not allowed");
      } else {
        findProduct.quentity--;
        findProduct.total = findProduct.quentity * findProduct.net_price; // this.storeCart();     

        this.viewCart();
        this.totalPriceCal();
        this.taxCalculate();
      }
    },
    totalPriceCal: function totalPriceCal() {
      this.grandTotal = this.invoice.grand_total + this.invoice.tax_rate - this.invoice.discount + +this.invoice.shipping; //  this.invoice.grand_total= this.grandTotal ;

      this.received_amount = this.grandTotal;
      this.paying_amount = this.grandTotal; //  this.invoice.grand_total = this.grandTotal ;
      //  this.viewCart();
    },
    viewCart: function viewCart() {
      this.invoice.grand_total = this.invoice.details.reduce(function (total, item) {
        return total + 1 * item.total;
      }, 0);
    },
    storeCart: function storeCart(product) {
      this.invoice.details.push({
        name: product
      });
    },
    onPaySubmit: function onPaySubmit() {
      var _this4 = this;

      axios.put('api/purchase/' + this.$route.params.id, {
        supplier_id: this.invoice.supplier_id,
        date: this.invoice.date,
        tax_rate: this.invoice.tax_rate,
        tax_net: this.invoice.tax_net,
        discount: this.invoice.discount,
        shipping: this.invoice.shipping,
        // paid_amount: this.paying_amount,
        // change: this.change_amount,
        // payment_type: this.payment_type,
        grand_total: this.grandTotal,
        note: this.note,
        product: this.invoice.details
      }).then(function (res) {
        _this4.$router.push({
          name: 'purchase-list'
        });
      });
    },
    print: function print() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this5.$htmlToPaper('printMe');

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

/***/ "./resources/js/components/purchase/EditPurchase.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/purchase/EditPurchase.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditPurchase_vue_vue_type_template_id_125481de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditPurchase.vue?vue&type=template&id=125481de& */ "./resources/js/components/purchase/EditPurchase.vue?vue&type=template&id=125481de&");
/* harmony import */ var _EditPurchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditPurchase.vue?vue&type=script&lang=js& */ "./resources/js/components/purchase/EditPurchase.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditPurchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditPurchase_vue_vue_type_template_id_125481de___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditPurchase_vue_vue_type_template_id_125481de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/purchase/EditPurchase.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/purchase/EditPurchase.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/purchase/EditPurchase.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPurchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditPurchase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/purchase/EditPurchase.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPurchase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/purchase/EditPurchase.vue?vue&type=template&id=125481de&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/purchase/EditPurchase.vue?vue&type=template&id=125481de& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPurchase_vue_vue_type_template_id_125481de___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPurchase_vue_vue_type_template_id_125481de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPurchase_vue_vue_type_template_id_125481de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditPurchase.vue?vue&type=template&id=125481de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/purchase/EditPurchase.vue?vue&type=template&id=125481de&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/purchase/EditPurchase.vue?vue&type=template&id=125481de&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/purchase/EditPurchase.vue?vue&type=template&id=125481de& ***!
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
    _c("div", { staticClass: "main-card mb-3 card" }, [
      _c("div", { staticClass: "card-body" }, [
        _c(
          "form",
          {
            on: {
              submit: function ($event) {
                $event.preventDefault()
                return _vm.onPaySubmit.apply(null, arguments)
              },
            },
          },
          [
            _c(
              "div",
              { staticClass: "form-row" },
              [
                _c("div", { staticClass: "form-group col-md-6" }, [
                  _c("label", { attrs: { for: "inputEmail4" } }, [
                    _vm._v("Date"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.invoice.date,
                        expression: "invoice.date",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "date",
                      id: "inputDate4",
                      placeholder: "dd-mm-yyyy",
                    },
                    domProps: { value: _vm.invoice.date },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.invoice, "date", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group col-md-6" },
                  [
                    _c("label", { attrs: { for: "inputEmail4" } }, [
                      _vm._v(" Supplier"),
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        options: _vm.supplierList,
                        reduce: function (supplier) {
                          return supplier.id
                        },
                        label: "name",
                        placeholder: "Select Supplier",
                      },
                      model: {
                        value: _vm.invoice.supplier_id,
                        callback: function ($$v) {
                          _vm.$set(_vm.invoice, "supplier_id", $$v)
                        },
                        expression: "invoice.supplier_id",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("autocomplete", {
                  ref: "autocomplete",
                  attrs: {
                    search: _vm.search,
                    placeholder: "Search or Scan Product",
                    "aria-label": "Select Product",
                    "get-result-value": _vm.getResultValue,
                  },
                  on: { submit: _vm.handleSubmit },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal fade",
                attrs: {
                  id: "productEditModal",
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
                    _c("div", { staticClass: "modal-content" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-body" }, [
                        _c("div", { staticClass: "form-row" }, [
                          _c("div", { staticClass: "form-group col-md-6" }, [
                            _c("label", { attrs: { for: "inputEmail4" } }, [
                              _vm._v("Product Price"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.edit.net_price,
                                  expression: "edit.net_price",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", id: "inputProductPrice4" },
                              domProps: { value: _vm.edit.net_price },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.edit,
                                    "net_price",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                          ]),
                          _vm._v(" "),
                          _vm._m(2),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group col-md-6" }, [
                            _c("label", { attrs: { for: "inputEmail4" } }, [
                              _vm._v("Tax"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.edit.tax,
                                  expression: "edit.tax",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", id: "inputProductPrice4" },
                              domProps: { value: _vm.edit.tax },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(_vm.edit, "tax", $event.target.value)
                                },
                              },
                            }),
                          ]),
                          _vm._v(" "),
                          _vm._m(3),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group col-md-6" }, [
                            _c("label", { attrs: { for: "inputEmail4" } }, [
                              _vm._v("Discount"),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.edit.discount,
                                  expression: "edit.discount",
                                },
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", id: "inputProductPrice4" },
                              domProps: { value: _vm.edit.discount },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.edit,
                                    "discount",
                                    $event.target.value
                                  )
                                },
                              },
                            }),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-footer" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-secondary",
                            attrs: { type: "button", "data-dismiss": "modal" },
                          },
                          [_vm._v("Close")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "button" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.updateProduct()
                              },
                            },
                          },
                          [_vm._v("Save changes")]
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-3" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("h5", { staticClass: "font-weight-bold" }, [
                  _vm._v("Order Item"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table table-hover table-md" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.invoice.details, function (product, index) {
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
                            _c("div", { staticClass: "quantity" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "input-group",
                                  attrs: { role: "group" },
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "input-group-prepend" },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "btn btn-primary btn-sm",
                                          on: {
                                            click: function ($event) {
                                              return _vm.decrement(product)
                                            },
                                          },
                                        },
                                        [_vm._v("-")]
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticClass: "form-control",
                                    domProps: { value: product.quentity },
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "input-group-append" },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass: "btn btn-primary btn-sm",
                                          on: {
                                            click: function ($event) {
                                              return _vm.increment(product)
                                            },
                                          },
                                        },
                                        [_vm._v("+")]
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("$ " + _vm._s(product.discount))]),
                          _vm._v(" "),
                          _c("td", [_vm._v("$ " + _vm._s(product.tax))]),
                          _vm._v(" "),
                          _c("td", [_vm._v("$ " + _vm._s(product.total))]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "mb-2 mr-2 btn-transition btn btn-outline-danger",
                                  on: {
                                    click: function ($event) {
                                      return _vm.removeCart(index)
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
                                  attrs: {
                                    "data-toggle": "modal",
                                    "data-target": "#productEditModal",
                                  },
                                  on: {
                                    click: function ($event) {
                                      return _vm.editProducts(_vm.cart.id)
                                    },
                                  },
                                },
                                [
                                  _c("i", {
                                    staticClass: "pe-7s-pen btn-icon-wrapper",
                                  }),
                                ]
                              ),
                            ]),
                          ]),
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
                      _vm._m(5),
                      _vm._v(" "),
                      _c("td", [
                        _c("span", { staticClass: "font-weight-bold" }, [
                          _vm._v("$ " + _vm._s(_vm.grandTotal)),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-row" }, [
              _c("div", { staticClass: "form-group col-md-4" }, [
                _c("label", { attrs: { for: "inputCity" } }, [
                  _vm._v("Order Tax"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group  mb-3" }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      "aria-label": "Order Tax",
                      autocomplete: "off",
                      "aria-describedby": "basic-addon2",
                    },
                    domProps: { value: _vm.invoice.tax_net },
                    on: {
                      input: function (e) {
                        return (_vm.invoice.tax_net = e.target.value)
                      },
                      keyup: function ($event) {
                        $event.preventDefault()
                        return _vm.taxCalculate(_vm.invoice.tax_net)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm._m(6),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group col-md-4" }, [
                _c("label", { attrs: { for: "inputState" } }, [
                  _vm._v("Discount"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group  mb-3" }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      autocomplete: "off",
                      "aria-describedby": "Discount-feedback",
                      label: "Discount",
                      id: "__BVID__591",
                    },
                    domProps: { value: _vm.invoice.discount },
                    on: {
                      input: function (e) {
                        return (_vm.invoice.discount = e.target.value)
                      },
                      keyup: function ($event) {
                        $event.preventDefault()
                        return _vm.discountCalculate(_vm.invoice.discount)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm._m(7),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group col-md-4" }, [
                _c("label", { attrs: { for: "inputZip" } }, [
                  _vm._v("Shipping"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "input-group  mb-3" }, [
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      autocomplete: "off",
                      "aria-describedby": "Shipping-feedback",
                      label: "Shipping",
                      id: "__BVID__594",
                    },
                    domProps: { value: _vm.invoice.shipping },
                    on: {
                      input: function (e) {
                        return (_vm.invoice.shipping = e.target.value)
                      },
                      keyup: function ($event) {
                        $event.preventDefault()
                        return _vm.shippingCalculate(_vm.invoice.shipping)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _vm._m(8),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _vm._m(9),
            _vm._v(" "),
            _vm._m(10),
          ]
        ),
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
            _vm._v(" Edit Purchase "),
            _c("div", { staticClass: "page-title-subheading" }, [
              _vm._v("Purchase List | Edit Purchase"),
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
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Modal title")]
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
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group col-md-6" }, [
      _c("label", { attrs: { for: "inputPassword4" } }, [_vm._v("Password")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "password",
          id: "inputPassword4",
          placeholder: "Password",
        },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group col-md-6" }, [
      _c("label", { attrs: { for: "inputPassword4" } }, [
        _vm._v("Discount Type"),
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "password",
          id: "inputPassword4",
          placeholder: "Password",
        },
      }),
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
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Discount")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Tax")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Subtotal")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")]),
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
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "span",
        { staticClass: "input-group-text", attrs: { id: "basic-addon2" } },
        [_vm._v("$")]
      ),
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
        [_vm._v("$")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: "exampleFormControlTextarea1" } }, [
        _vm._v("Note"),
      ]),
      _vm._v(" "),
      _c("textarea", {
        staticClass: "form-control",
        attrs: { id: "exampleFormControlTextarea1", rows: "3" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-3 col-md-12" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Submit")]
      ),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
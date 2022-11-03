"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_products_ProductList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
var _name$data$computed$c;

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_name$data$computed$c = {
  name: "my-component",
  data: function data() {
    return {
      isLoading: false,
      columns: [{
        label: "Image",
        field: "imageShow"
      }, {
        label: "Name",
        field: "name"
      }, {
        label: "Code",
        field: "product_code"
      }, {
        label: "Category",
        field: "category_name.category_name"
      }, {
        label: "Brand",
        field: "brand_name.brand_name"
      }, {
        label: "Price",
        field: "product_price"
      }, {
        label: "Unit",
        field: "unit_name.short_name"
      }, {
        label: "Actions",
        field: "actions",
        sortable: false
      }],
      rows: [],
      // productList:[],
      totalRecords: 0,
      serverParams: {
        columnFilters: {},
        searchItem: '',
        sort: [{
          field: '',
          type: 'desc'
        }],
        page: 1,
        perPage: 10
      }
    };
  },
  // mounted() {
  //   this.viewPost();
  // },
  //      components: {
  //     'barcode': VueBarcode
  //   },
  computed: {// ...mapGetters(["productList"])
  },
  created: function created() {
    // this.fetchProducts();
    this.loadItems();
  }
}, _defineProperty(_name$data$computed$c, "computed", _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["productList"]))), _defineProperty(_name$data$computed$c, "methods", _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["deleteProduct", "fetchProducts"])), {}, {
  updateParams: function updateParams(newProps) {
    this.serverParams = Object.assign({}, this.serverParams, newProps);
  },
  onPageChange: function onPageChange(params) {
    this.updateParams({
      page: params.currentPage
    });
    this.loadItems();
    console.log(this.serverParams);
  },
  onSearch: function onSearch(params) {
    this.updateParams({
      searchItem: params.searchTerm
    });
    this.loadItems();
    console.log(this.serverParams);
  },
  onPerPageChange: function onPerPageChange(params) {
    this.updateParams({
      perPage: params.currentPerPage
    });
    this.loadItems();
  },
  onSortChange: function onSortChange(params) {
    this.updateParams({
      sort: [{
        type: params[0].type,
        field: params[0].field
      }]
    });
    this.loadItems();
    console.log(this.serverParams);
  },
  onColumnFilter: function onColumnFilter(params) {
    this.updateParams(params);
    this.loadItems();
  },
  // load items is what brings back the rows from server
  loadItems: function loadItems() {
    // axios.get("api/product?page="+this.serverParams.page+"&limit="+this.serverParams.perPage+"&sort="+this.serverParams.sort[0]["type"]+"&search="+this.serverParams.searchItem).then(response => {
    //    this.totalRecords = response.data.rowCount;
    //    this.productList = response.data.data;
    // });
    this.fetchProducts({
      page: this.serverParams.page,
      limit: this.serverParams.perPage,
      sort: this.serverParams.sort[0]["type"],
      search: this.serverParams.searchItem
    });
  }
})), _name$data$computed$c);

/***/ }),

/***/ "./resources/js/components/products/ProductList.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/products/ProductList.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductList_vue_vue_type_template_id_821f64a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductList.vue?vue&type=template&id=821f64a6& */ "./resources/js/components/products/ProductList.vue?vue&type=template&id=821f64a6&");
/* harmony import */ var _ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductList.vue?vue&type=script&lang=js& */ "./resources/js/components/products/ProductList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductList_vue_vue_type_template_id_821f64a6___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductList_vue_vue_type_template_id_821f64a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/products/ProductList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/products/ProductList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/products/ProductList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/products/ProductList.vue?vue&type=template&id=821f64a6&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/products/ProductList.vue?vue&type=template&id=821f64a6& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_821f64a6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_821f64a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_821f64a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductList.vue?vue&type=template&id=821f64a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductList.vue?vue&type=template&id=821f64a6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductList.vue?vue&type=template&id=821f64a6&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/products/ProductList.vue?vue&type=template&id=821f64a6& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                  "data-target": "#brandModal",
                },
                on: {
                  click: function ($event) {
                    return _vm.createModal()
                  },
                },
              },
              [_vm._m(1), _vm._v(" Create ")]
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
              rows: _vm.productList,
              "pagination-options": {
                enabled: true,
                perPage: 10,
              },
              "search-options": {
                enabled: true,
              },
              mode: "remote",
              totalRows: _vm.totalRecords,
              isLoading: _vm.isLoading,
            },
            on: {
              "on-page-change": _vm.onPageChange,
              "on-sort-change": _vm.onSortChange,
              "on-search": _vm.onSearch,
              "on-per-page-change": _vm.onPerPageChange,
              "update:isLoading": function ($event) {
                _vm.isLoading = $event
              },
              "update:is-loading": function ($event) {
                _vm.isLoading = $event
              },
            },
            scopedSlots: _vm._u([
              {
                key: "table-row",
                fn: function (props) {
                  return [
                    props.column.field == "brand_name.brand_name"
                      ? _c("span", [
                          props.row.brand_id == null
                            ? _c("span", [
                                _vm._v(
                                  "\n                            N/D   \n                  "
                                ),
                              ])
                            : _c("span"),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    props.column.field == "imageShow"
                      ? _c("span", [
                          props.row.images == null
                            ? _c("span", [
                                _c("img", {
                                  staticClass: "img-responsive",
                                  attrs: {
                                    src: "images/emptyImage.jpg",
                                    height: "70",
                                    width: "90",
                                  },
                                }),
                              ])
                            : _c("span", [
                                _c("img", {
                                  staticClass: "img-responsive",
                                  attrs: {
                                    src: "productImages/" + props.row.images,
                                    height: "70",
                                    width: "90",
                                  },
                                }),
                              ]),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    props.column.field == "actions"
                      ? _c(
                          "span",
                          [
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
                              "router-link",
                              {
                                staticClass:
                                  "mb-2 mr-2 btn-transition btn btn-outline-success",
                                attrs: {
                                  to: {
                                    name: "product-edit",
                                    params: { id: props.row.id },
                                  },
                                },
                              },
                              [
                                _c("i", {
                                  staticClass: "nav-link-icon lnr-pencil",
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass:
                                  "mb-2 mr-2 btn-transition btn btn-outline-info",
                                attrs: {
                                  to: {
                                    name: "product-details",
                                    params: { id: props.row.id },
                                  },
                                },
                              },
                              [_c("i", { staticClass: "lnr-eye" })]
                            ),
                          ],
                          1
                        )
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
          staticClass: "pe-7s-ribbon icon-gradient bg-tempting-azure",
        }),
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._v(" All Products "),
        _c("div", { staticClass: "page-title-subheading" }, [
          _vm._v("Products | All Products"),
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
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_people_Customer_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/people/Customer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/people/Customer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      isLoading: false,
      someModal: "",
      form: {
        name: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        address: ''
      },
      edit: {
        id: '',
        name: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        address: ''
      },
      columns: [{
        label: "Name",
        field: "name"
      }, {
        label: "Phone",
        field: "phone"
      }, {
        label: "Email",
        field: "email"
      }, {
        label: "Country",
        field: "country"
      }, {
        label: "City",
        field: "city"
      }, {
        label: "Address",
        field: "address"
      }, {
        label: "Actions",
        field: "actions",
        sortable: false
      }],
      rows: [],
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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["customerList", "loading"])),
  created: function created() {
    this.fetchCustomer();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(["addCustomer", "fetchCustomers", "deleteCustomer", "updateCustomer"])), {}, {
    onCustomerSubmit: function onCustomerSubmit() {
      this.addCustomer({
        name: this.form.name,
        email: this.form.email,
        phone: this.form.phone,
        country: this.form.country,
        city: this.form.city,
        address: this.form.address
      });
      this.fetchCustomer();
    },
    fetchCustomer: function fetchCustomer() {
      this.fetchCustomers({
        page: this.serverParams.page,
        limit: this.serverParams.perPage,
        sort: this.serverParams.sort[0]["type"],
        search: this.serverParams.searchItem
      });
    },
    update: function update() {
      this.updateCustomer({
        id: this.edit.id,
        name: this.edit.name,
        email: this.edit.email,
        phone: this.edit.phone,
        country: this.edit.country,
        city: this.edit.city,
        address: this.edit.address
      });
      this.fetchCustomer();
    },
    editCustomer: function editCustomer(id) {
      var _this = this;

      this.createdModal = false;
      $("#customerModal").modal("show");
      axios.get("api/customer/".concat(id, "/edit")).then(function (res) {
        _this.edit.id = res.data.id, _this.edit.name = res.data.name, _this.edit.email = res.data.email, _this.edit.phone = res.data.phone, _this.edit.country = res.data.country, _this.edit.address = res.data.address, _this.edit.city = res.data.city;
      });
    },
    close: function close() {
      $("#customerModal").modal("hide");
    },
    createModal: function createModal() {
      this.form.name = '', this.form.email = '', this.form.phone = '', this.form.country = '', this.form.city = '', this.form.address = '', this.createdModal = true;
    },
    updateParams: function updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    onPageChange: function onPageChange(params) {
      this.updateParams({
        page: params.currentPage
      });
      this.fetchCustomer();
      console.log(this.serverParams);
    },
    onSearch: function onSearch(params) {
      this.updateParams({
        searchItem: params.searchTerm
      });
      this.fetchCustomer();
      console.log(this.serverParams);
    },
    onPerPageChange: function onPerPageChange(params) {
      this.updateParams({
        perPage: params.currentPerPage
      });
      this.fetchCustomer();
    },
    onSortChange: function onSortChange(params) {
      this.updateParams({
        sort: [{
          type: params[0].type,
          field: params[0].field
        }]
      });
      this.fetchCustomer();
      console.log(this.serverParams);
    },
    onColumnFilter: function onColumnFilter(params) {
      this.updateParams(params);
      this.fetchCustomer();
    }
  })
});

/***/ }),

/***/ "./resources/js/components/people/Customer.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/people/Customer.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Customer_vue_vue_type_template_id_b6324dfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Customer.vue?vue&type=template&id=b6324dfa& */ "./resources/js/components/people/Customer.vue?vue&type=template&id=b6324dfa&");
/* harmony import */ var _Customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customer.vue?vue&type=script&lang=js& */ "./resources/js/components/people/Customer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Customer_vue_vue_type_template_id_b6324dfa___WEBPACK_IMPORTED_MODULE_0__.render,
  _Customer_vue_vue_type_template_id_b6324dfa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/people/Customer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/people/Customer.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/people/Customer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Customer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/people/Customer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/people/Customer.vue?vue&type=template&id=b6324dfa&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/people/Customer.vue?vue&type=template&id=b6324dfa& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customer_vue_vue_type_template_id_b6324dfa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customer_vue_vue_type_template_id_b6324dfa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customer_vue_vue_type_template_id_b6324dfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Customer.vue?vue&type=template&id=b6324dfa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/people/Customer.vue?vue&type=template&id=b6324dfa&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/people/Customer.vue?vue&type=template&id=b6324dfa&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/people/Customer.vue?vue&type=template&id=b6324dfa& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
                  "data-target": "#customerModal",
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
                  id: "customerModal",
                  tabindex: "-1",
                  role: "dialog",
                  "aria-labelledby": "brandModalLabel",
                  "aria-hidden": "true",
                },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "modal-dialog modal-lg",
                    attrs: { role: "document" },
                  },
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
                                    return _vm.onCustomerSubmit.apply(
                                      null,
                                      arguments
                                    )
                                  },
                                },
                              },
                              [
                                _c("div", { staticClass: "form-row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-6" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "inputName4" } },
                                        [_vm._v("Name *")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.name,
                                            expression: "form.name",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "inputNAme4",
                                          placeholder: "Name",
                                          required: "",
                                        },
                                        domProps: { value: _vm.form.name },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
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
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-6" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "inputEmail4" } },
                                        [_vm._v("Email")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.email,
                                            expression: "form.email",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "email",
                                          id: "inputEmail4",
                                          placeholder: "Email",
                                        },
                                        domProps: { value: _vm.form.email },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "email",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-6" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "inputPhone4" } },
                                        [_vm._v("Phone *")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.phone,
                                            expression: "form.phone",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "inputPhone4",
                                          placeholder: "Phone",
                                          required: "",
                                        },
                                        domProps: { value: _vm.form.phone },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "phone",
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
                                    { staticClass: "form-group col-md-6" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "inputCountry4" } },
                                        [_vm._v("Country ")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.country,
                                            expression: "form.country",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "inputCountry4",
                                          placeholder: "Country",
                                        },
                                        domProps: { value: _vm.form.country },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "country",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-6" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "inputCity4" } },
                                        [_vm._v("City ")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.city,
                                            expression: "form.city",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "inputCity4",
                                          placeholder: "City",
                                        },
                                        domProps: { value: _vm.form.city },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "city",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-6" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "inputAddress4" } },
                                        [_vm._v("Address ")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.address,
                                            expression: "form.address",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "inputAddress4",
                                          placeholder: "Address",
                                        },
                                        domProps: { value: _vm.form.address },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.form,
                                              "address",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]
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
                                _c("div", { staticClass: "form-row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-6" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "inputName4" } },
                                        [_vm._v("Name *")]
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
                                          id: "inputNAme4",
                                          placeholder: "Name",
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
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-6" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "inputEmail4" } },
                                        [_vm._v("Email")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.edit.email,
                                            expression: "edit.email",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "email",
                                          id: "inputEmail4",
                                          placeholder: "Email",
                                        },
                                        domProps: { value: _vm.edit.email },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.edit,
                                              "email",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-6" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "inputPhone4" } },
                                        [_vm._v("Phone *")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.edit.phone,
                                            expression: "edit.phone",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "inputPhone4",
                                          placeholder: "Phone",
                                          required: "",
                                        },
                                        domProps: { value: _vm.edit.phone },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.edit,
                                              "phone",
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
                                    { staticClass: "form-group col-md-6" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "inputCountry4" } },
                                        [_vm._v("Country ")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.edit.country,
                                            expression: "edit.country",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "inputCountry4",
                                          placeholder: "Country",
                                        },
                                        domProps: { value: _vm.edit.country },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.edit,
                                              "country",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-6" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "inputCity4" } },
                                        [_vm._v("City ")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.edit.city,
                                            expression: "edit.city",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "inputCity4",
                                          placeholder: "City",
                                        },
                                        domProps: { value: _vm.edit.city },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.edit,
                                              "city",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group col-md-6" },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "inputAddress4" } },
                                        [_vm._v("Address ")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.edit.address,
                                            expression: "edit.address",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          id: "inputAddress4",
                                          placeholder: "Address",
                                        },
                                        domProps: { value: _vm.edit.address },
                                        on: {
                                          input: function ($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.edit,
                                              "address",
                                              $event.target.value
                                            )
                                          },
                                        },
                                      }),
                                    ]
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
              rows: _vm.customerList,
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
                              staticClass:
                                "mb-2 mr-2 btn-transition btn btn-outline-danger",
                              on: {
                                click: function ($event) {
                                  return _vm.deleteCustomer(props.row.id)
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
                                  return _vm.editCustomer(props.row.id)
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
        _c("i", { staticClass: "pe-7s-users icon-gradient bg-tempting-azure" }),
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._v(" Customer "),
        _c("div", { staticClass: "page-title-subheading" }, [
          _vm._v("People | Customer"),
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
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pos_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pos.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pos.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      customer_id: "",
      product_id: "",
      category: "",
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
      carts: [],
      customerList: [],
      productList: [],
      page: 1,
      catPage: 1,
      totalpage: 7268,
      cartadd: {
        id: "",
        name: "",
        image: "",
        price: "",
        net_price: "",
        product_price: "",
        qun: 1,
        unit_sale: '',
        product_code: '',
        tax: '',
        discount: '',
        unit: '',
        tax_type: '',
        discount_type: '' // salesPrice: "",
        // stock: "",
        // pname: "",
        // discount: "",
        // offerPrice: "",

      },
      edit: {
        price: '',
        net_price: '',
        sale_unit: '',
        tax: 0,
        discount: 0
      },
      badge: "0",
      totalprice: "0",
      tax: 0,
      discount: 0,
      grandTotal: '',
      taxCal: 0
    }, _defineProperty(_ref, "discount", 0), _defineProperty(_ref, "discountCal", ''), _defineProperty(_ref, "shipping", 0), _defineProperty(_ref, "shippingCal", ''), _defineProperty(_ref, "change_amount", 0), _defineProperty(_ref, "qun", 1), _defineProperty(_ref, "paymentChoice", ["cash", "credit card", "cheque", "bank transfer", "other"]), _defineProperty(_ref, "taxChoice", ["Exclusive", "Inclusive"]), _defineProperty(_ref, "discountChoice", ["Percent %", "Fixed"]), _defineProperty(_ref, "chooseUnits", []), _defineProperty(_ref, "received_amount", ''), _defineProperty(_ref, "paying_amount", ''), _defineProperty(_ref, "payment_type", 'cash'), _defineProperty(_ref, "tax_type", 'Exclusive'), _defineProperty(_ref, "discount_type", 'Fixed'), _defineProperty(_ref, "selected", undefined), _defineProperty(_ref, "invoice", ''), _defineProperty(_ref, "note", ''), _defineProperty(_ref, "page", 1), _defineProperty(_ref, "productId", ''), _ref;
  },
  // mounted() {
  //   this.viewPost();
  // },
  //      components: {
  //     'barcode': VueBarcode
  //   },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["categoryList"])),
  created: function created() {
    this.fetchProduct();
    this.fetchCategories();
    this.fetchCustomers();
    this.viewCart();
    this.totalPriceCal(); // this.handleLoadMore();
  },
  mounted: function mounted() {//      const listElm = document.querySelector('#infinite-list');
    //       listElm.addEventListener('scroll', e => {
    //     if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    //       this.page++;
    //       this.loadMoreData(this.page);
    //       this.categoryGet(this.page);
    //     }
    //   });
    //  this.loadMoreData(this.page);
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["fetchProducts", "fetchCategories"])), {}, {
    fetchCustomers: function fetchCustomers() {
      var _this = this;

      axios.get('/api/customer/create').then(function (res) {
        _this.customerList = res.data.data;
        _this.customer_id = res.data.data[0]['id'];
      });
    },
    closeModal: function closeModal() {
      $("#invoiceModal").modal('hide');
    },
    onPaySubmit: function onPaySubmit() {
      var _this2 = this;

      axios.post('api/sales', {
        customer_id: this.customer_id,
        tax_rate: this.taxCal,
        tax_net: this.tax,
        discount: this.discount,
        shipping: this.shipping,
        paid_amount: this.paying_amount,
        change: this.change_amount,
        payment_type: this.payment_type,
        grand_total: this.grandTotal,
        note: this.note,
        cart: JSON.stringify(this.carts)
      }).then(function (res) {
        $("#paymentModal .close").click();
        axios.get('api/sales/' + res.data.sale_id).then(function (res) {
          _this2.resetCart();

          $("#invoiceModal").modal('show');
          $('#invoiceModal').css('overflow-y', 'auto');
          _this2.invoice = res.data.data;
        });
      });
    },
    setSelected: function setSelected(id) {
      var _this3 = this;

      axios.get("api/unit/".concat(id)).then(function (res) {
        _this3.chooseUnits = res.data;
      });
    },
    print: function print() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this4.$htmlToPaper('printMe');

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    audio: function audio() {
      var audioFile = new Audio("/Barcode-scanner-beep-sound.mp3");
      audioFile.play();
    },
    addCart: function addCart(product, stock) {
      var _this5 = this;

      stock.map(function (entryObj) {
        _this5.current_qt = entryObj.total_stock;

        if (_this5.current_qt > 1) {
          var findProduct = _this5.carts.find(function (o) {
            return o.id === product.id;
          });

          if (findProduct) {
            _this5.audio();

            findProduct.qun++;
            findProduct.product_price = findProduct.qun * findProduct.price;

            _this5.storeCart();

            _this5.totalPriceCal();
          } else {
            _this5.audio();

            _this5.cartadd.id = product.id;
            _this5.cartadd.name = product.name;
            _this5.cartadd.qun = 1;
            _this5.cartadd.image = product.images;
            _this5.cartadd.price = product.product_price;
            _this5.cartadd.product_price = product.product_price;
            _this5.cartadd.unit_sale = product.unit_name.name;
            _this5.cartadd.product_code = product.product_code;
            _this5.cartadd.net_price = product.product_price;
            _this5.cartadd.tax = _this5.edit.tax;
            _this5.cartadd.discount = _this5.edit.discount;
            _this5.cartadd.tax_type = _this5.tax_type;
            _this5.cartadd.discount_type = _this5.discount_type;
            _this5.cartadd.unit = product.unit_id;

            _this5.carts.push(_this5.cartadd);

            _this5.cartadd = {};

            _this5.storeCart();

            _this5.totalPriceCal();
          }
        } else {
          alert('Stock out!!!');
        }
      });
    },
    storeCart: function storeCart(product) {
      var parsed = JSON.stringify(this.carts);
      localStorage.setItem("carts", parsed);
      this.viewCart();
    },
    viewCart: function viewCart() {
      var _this6 = this;

      if (localStorage.getItem("carts")) {
        this.carts = JSON.parse(localStorage.getItem("carts"));
        this.badge = this.carts.length;
        this.totalprice = this.carts.reduce(function (total, item) {
          return total + _this6.qun * item.product_price;
        }, 0);
      }
    },
    removeCart: function removeCart(index) {
      this.carts.splice(index, 1);
      this.storeCart();
    },
    increment: function increment(pro) {
      var findProduct = this.carts.find(function (o) {
        return o.id === pro.id;
      });
      findProduct.qun++;
      findProduct.product_price = findProduct.qun * findProduct.price; // findProduct.discount = findProduct.qun * findProduct.offerPrice;

      this.storeCart();
      this.totalPriceCal();
      this.animated = true;
    },
    decrement: function decrement(pro) {
      var findProduct = this.carts.find(function (o) {
        return o.id === pro.id;
      });

      if (findProduct.qun === 1) {
        alert("Negative quantity not allowed");
      } else {
        findProduct.qun--;
        findProduct.product_price = findProduct.qun * findProduct.price; // findProduct.discount = findProduct.qun * findProduct.offerPrice;

        this.storeCart();
        this.totalPriceCal();
        this.animated = true;
      }
    },
    resetCart: function resetCart() {
      localStorage.removeItem("carts");
      this.carts = [];
      this.grandTotal = '', this.tax = 0, this.shipping = 0, this.discount = 0, this.fetchCustomers();
      this.$refs.autocomplete.value = '';
    },
    taxCalculate: function taxCalculate(tax) {
      this.taxCal = this.totalprice * tax / 100;
      this.totalPriceCal();
    },
    discountCalculate: function discountCalculate(discount) {
      this.discountCal = discount;
      this.totalPriceCal();
    },
    shippingCalculate: function shippingCalculate(shipping) {
      this.shippingCal = shipping;
      this.totalPriceCal();
    },
    payingAmountCalculate: function payingAmountCalculate(amount) {
      this.paying_amount = amount;
      this.changeAmount();
    },
    receiveAmountCalculate: function receiveAmountCalculate(amount) {
      this.received_amount = amount;
      this.changeAmount();
    },
    changeAmount: function changeAmount() {
      this.change_amount = this.received_amount - this.paying_amount;
    },
    totalPriceCal: function totalPriceCal() {
      this.grandTotal = this.totalprice + this.taxCal - this.discountCal + +this.shippingCal;
      this.received_amount = this.grandTotal;
      this.paying_amount = this.grandTotal;
    },
    categoryGet: function categoryGet(id) {
      var _this7 = this;

      var catPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      $('.invisible-text').addClass('d-none');
      $('.invisible-loading').addClass('d-none');
      $('#load-more').show();
      this.catPage = catPage;
      this.category = id, axios.get("api/product/".concat(id, "/edit?") + this.catPage + '&limit=5&sort=desc').then(function (res) {
        _this7.productList = res.data.data;
      });
    },
    fetchProduct: function fetchProduct() {
      var _this8 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      $('.invisible-text').addClass('d-none');
      $('.invisible-loading').addClass('d-none');
      $('#load-more').show();
      this.page = page;
      this.category = '';
      axios.get('api/product?page=' + this.page + '&limit=7&sort=desc').then(function (res) {
        _this8.productList = res.data.data;
      });
    },
    loadMore: function loadMore() {
      var _this9 = this;

      $('.invisible-loading').removeClass('d-none');
      $('#load-more').hide();

      if (this.category != '') {
        setTimeout(function () {
          _this9.catPage++;
          axios.get("api/product/".concat(_this9.category, "/edit") + '?page=' + _this9.catPage + '&limit=5&sort=desc').then(function (_ref2) {
            var data = _ref2.data;
            console.log("My page data", data);

            if (data.data.length > 0) {
              var _this9$productList;

              (_this9$productList = _this9.productList).push.apply(_this9$productList, _toConsumableArray(data.data));

              $('.invisible-loading').addClass('d-none');
              $('.invisible-text').addClass('d-none');
              $('#load-more').show();
              _this9.catPage++;
            } else {
              console.log('no more data');
              $('.invisible-loading').addClass('d-none');
              $('.invisible-text').removeClass('d-none');
              $('#load-more').hide();
            }
          });
        }, 1000);
      } else {
        setTimeout(function () {
          _this9.page++;
          axios.get('api/product?page=' + _this9.page + '&limit=7&sort=desc').then(function (_ref3) {
            var data = _ref3.data;
            console.log("My page data", data);

            if (data.data.length > 0) {
              var _this9$productList2;

              (_this9$productList2 = _this9.productList).push.apply(_this9$productList2, _toConsumableArray(data.data));

              $('.invisible-loading').addClass('d-none');
              $('.invisible-text').addClass('d-none');
              $('#load-more').show();
              _this9.page++;
            } else {
              console.log('no more data');
              $('.invisible-loading').addClass('d-none');
              $('.invisible-text').removeClass('d-none');
              $('#load-more').hide();
            }
          });
        }, 1000);
      }
    },
    // loadMore(e) {
    //   let { scrollTop, clientHeight, scrollHeight } = e.target;
    // if ( scrollTop + clientHeight >= scrollHeight*4/5) {
    // if(this.category!=''){
    //   setTimeout(() => {
    //     this.catPage++;
    //     axios.get(`api/product/${this.category}/edit`+'?page=' + this.catPage+'&limit=5&sort=desc').then(({ data }) => {
    //     console.log("My page data", data);
    //     if (data.data.length > 0) {         
    //       this.productList.push(...data.data);
    //     this.catPage++;          
    //     } else {
    //      console.log('no more data')
    //     }
    //   });
    // 	}, 1000); 
    // }else{
    // 	setTimeout(() => {
    //     this.page++;
    //     axios.get('api/product?page=' + this.page+'&limit=7&sort=desc').then(({ data }) => {
    //     console.log("My page data", data);
    //     if (data.data.length > 0) {         
    //     this.productList.push(...data.data);
    //     this.page++;
    //     } else {
    //      console.log('no more data')
    //     }
    //   });
    // 	}, 1000);   
    // }             
    //       }
    //       },
    search: function search(input) {
      var _this10 = this;

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
            _this10.addCart(data.data[0]);

            _this10.$refs.autocomplete.value = '';
            $("#autocomplete-result-list-1").css("display", "none");
          }
        });
      });
    },
    getResultValue: function getResultValue(result) {
      return result.name;
    },
    handleSubmit: function handleSubmit(result) {
      var _this11 = this;

      this.$refs.autocomplete.value = result.name;
      this.product_id = result.id;
      this.$refs.autocomplete.value = '';
      this.current_qt = result.stock;
      result.stock.map(function (entryObj) {
        _this11.current_qt = entryObj.total_stock;

        if (_this11.current_qt > 3) {
          _this11.addCart(result);
        } else {
          alert('Stock out!!!');
        }
      });
    },
    editProducts: function editProducts(id) {
      var findProduct = this.carts.find(function (o) {
        return o.id === id;
      });
      this.edit.net_price = findProduct.net_price;
      this.edit.tax = findProduct.tax;
      this.edit.discount = findProduct.discount; //  this.edit.tax=findProduct.price
      //  this.edit.price=findProduct.price

      this.edit.sale_unit = findProduct.unit_sale;
      this.tax_type = findProduct.tax_type;
      this.discount_type = findProduct.discount_type;
      this.productId = id;
      this.setSelected(findProduct.unit);
      console.log(findProduct);
    },
    updateProduct: function updateProduct() {
      var _this12 = this;

      var findProduct = this.carts.find(function (o) {
        return o.id === _this12.productId;
      });
      var tax;
      var discount;

      if (this.tax_type == "Inclusive") {
        tax = 0;
      } else {
        var cal = this.edit.net_price * this.edit.tax / 100;
        tax = parseFloat(cal);
      }

      if (this.discount_type == "Fixed") {
        discount = this.edit.discount;
      } else {
        discount = this.edit.net_price * this.edit.discount / 100;
      }

      var price = parseFloat(this.edit.net_price) + parseFloat(tax) - parseFloat(discount);
      findProduct.net_price = this.edit.net_price;
      findProduct.price = price;
      findProduct.tax = this.edit.tax;
      findProduct.discount = this.edit.discount;
      findProduct.unit_sale = this.edit.sale_unit;
      findProduct.tax_type = this.tax_type;
      findProduct.discount_type = this.discount_type;
      findProduct.product_price = findProduct.qun * price;
      this.storeCart();
      this.totalPriceCal();
      $("#productEditModal .close").click();
      this.edit.net_price = '';
      this.edit.tax = 0;
      this.edit.discount = 0;
    }
  })
});

/***/ }),

/***/ "./resources/js/components/Pos.vue":
/*!*****************************************!*\
  !*** ./resources/js/components/Pos.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pos_vue_vue_type_template_id_0349ff8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pos.vue?vue&type=template&id=0349ff8e& */ "./resources/js/components/Pos.vue?vue&type=template&id=0349ff8e&");
/* harmony import */ var _Pos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pos.vue?vue&type=script&lang=js& */ "./resources/js/components/Pos.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pos_vue_vue_type_template_id_0349ff8e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Pos_vue_vue_type_template_id_0349ff8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pos.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pos.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/components/Pos.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pos.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pos.vue?vue&type=template&id=0349ff8e&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Pos.vue?vue&type=template&id=0349ff8e& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pos_vue_vue_type_template_id_0349ff8e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pos_vue_vue_type_template_id_0349ff8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pos_vue_vue_type_template_id_0349ff8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pos.vue?vue&type=template&id=0349ff8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pos.vue?vue&type=template&id=0349ff8e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pos.vue?vue&type=template&id=0349ff8e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pos.vue?vue&type=template&id=0349ff8e& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-5" }, [
        _c("div", { staticClass: "main-card mb-3 card" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c("v-select", {
                attrs: {
                  options: _vm.customerList,
                  reduce: function (customer) {
                    return customer.id
                  },
                  label: "name",
                  placeholder: "Select Customer",
                },
                model: {
                  value: _vm.customer_id,
                  callback: function ($$v) {
                    _vm.customer_id = $$v
                  },
                  expression: "customer_id",
                },
              }),
              _vm._v(" "),
              _c("br"),
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
              _vm._v(" "),
              _c("div", { staticClass: "pos-detail mt-4" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c("table", { staticClass: "table table-striped" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.carts, function (cart, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [
                            _c("span", [_vm._v(_vm._s(cart.name))]),
                            _vm._v(" "),
                            _c("br"),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v("$ " + _vm._s(cart.price))]),
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
                                              return _vm.decrement(cart)
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
                                    domProps: { value: cart.qun },
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
                                              return _vm.increment(cart)
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
                          _c("td", { staticClass: "text-center " }, [
                            _vm._v("$ " + _vm._s(cart.product_price)),
                          ]),
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
                                      return _vm.editProducts(cart.id)
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
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "footer_panel p-3" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "grandtotal" }, [
                  _c("span", [
                    _vm._v("Grand Total : $ " + _vm._s(_vm.grandTotal)),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12 col-md-4 col-lg-4" }, [
                _c("span", [
                  _c(
                    "fieldset",
                    {
                      staticClass: "form-group",
                      attrs: { append: "%", id: "__BVID__587" },
                    },
                    [
                      _c(
                        "legend",
                        {
                          staticClass: "bv-no-focus-ring col-form-label pt-0",
                          attrs: {
                            tabindex: "-1",
                            id: "__BVID__587__BV_label_",
                          },
                        },
                        [_vm._v("Tax")]
                      ),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "div",
                          {
                            staticClass: "input-group",
                            attrs: { role: "group" },
                          },
                          [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                "aria-describedby": "OrderTax-feedback",
                                autocomplete: "off",
                                label: "Order Tax",
                                id: "__BVID__588",
                              },
                              domProps: { value: _vm.tax },
                              on: {
                                input: function (e) {
                                  return (_vm.tax = e.target.value)
                                },
                                keyup: function ($event) {
                                  $event.preventDefault()
                                  return _vm.taxCalculate(_vm.tax)
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm._m(1),
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "invalid-feedback",
                          attrs: { id: "OrderTax-feedback" },
                        }),
                      ]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12 col-md-4 col-lg-4" }, [
                _c("span", [
                  _c(
                    "fieldset",
                    {
                      staticClass: "form-group",
                      attrs: { append: "%", id: "__BVID__590" },
                    },
                    [
                      _c(
                        "legend",
                        {
                          staticClass: "bv-no-focus-ring col-form-label pt-0",
                          attrs: {
                            tabindex: "-1",
                            id: "__BVID__590__BV_label_",
                          },
                        },
                        [_vm._v("Discount")]
                      ),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "div",
                          {
                            staticClass: "input-group",
                            attrs: { role: "group" },
                          },
                          [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                autocomplete: "off",
                                "aria-describedby": "Discount-feedback",
                                label: "Discount",
                                id: "__BVID__591",
                              },
                              domProps: { value: _vm.discount },
                              on: {
                                input: function (e) {
                                  return (_vm.discount = e.target.value)
                                },
                                keyup: function ($event) {
                                  $event.preventDefault()
                                  return _vm.discountCalculate(_vm.discount)
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm._m(2),
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "invalid-feedback",
                          attrs: { id: "Discount-feedback" },
                        }),
                      ]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12 col-md-4 col-lg-4" }, [
                _c("span", [
                  _c(
                    "fieldset",
                    { staticClass: "form-group", attrs: { id: "__BVID__593" } },
                    [
                      _c(
                        "legend",
                        {
                          staticClass: "bv-no-focus-ring col-form-label pt-0",
                          attrs: {
                            tabindex: "-1",
                            id: "__BVID__593__BV_label_",
                          },
                        },
                        [_vm._v("Shipping")]
                      ),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "div",
                          {
                            staticClass: "input-group",
                            attrs: { role: "group" },
                          },
                          [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                autocomplete: "off",
                                "aria-describedby": "Shipping-feedback",
                                label: "Shipping",
                                id: "__BVID__594",
                              },
                              domProps: { value: _vm.shipping },
                              on: {
                                input: function (e) {
                                  return (_vm.shipping = e.target.value)
                                },
                                keyup: function ($event) {
                                  $event.preventDefault()
                                  return _vm.shippingCalculate(_vm.shipping)
                                },
                              },
                            }),
                            _vm._v(" "),
                            _vm._m(3),
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", {
                          staticClass: "invalid-feedback",
                          attrs: { id: "Shipping-feedback" },
                        }),
                      ]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12 col-md-6" }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-danger ripple btn-rounded btn-block mt-1",
                    attrs: { type: "button" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.resetCart()
                      },
                    },
                  },
                  [_c("i", { staticClass: "i-Power-2" }), _vm._v(" Reset ")]
                ),
              ]),
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
                    {
                      staticClass: "modal-dialog",
                      attrs: { role: "document" },
                    },
                    [
                      _c("div", { staticClass: "modal-content" }, [
                        _vm._m(4),
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
                                attrs: {
                                  type: "text",
                                  id: "inputProductPrice4",
                                },
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
                            _c(
                              "div",
                              { staticClass: "form-group col-md-6" },
                              [
                                _c(
                                  "label",
                                  { attrs: { for: "inputPassword4" } },
                                  [_vm._v("Tax Type")]
                                ),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    options: _vm.taxChoice,
                                    label: "Tax Type",
                                    placeholder: "Choose Tax Type",
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
                                                          expression:
                                                            "tax_type",
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
                                                          ? _vm._i(
                                                              _vm.tax_type,
                                                              null
                                                            ) > -1
                                                          : _vm.tax_type,
                                                      },
                                                      on: {
                                                        change: function (
                                                          $event
                                                        ) {
                                                          var $$a =
                                                              _vm.tax_type,
                                                            $$el =
                                                              $event.target,
                                                            $$c = $$el.checked
                                                              ? true
                                                              : false
                                                          if (
                                                            Array.isArray($$a)
                                                          ) {
                                                            var $$v = null,
                                                              $$i = _vm._i(
                                                                $$a,
                                                                $$v
                                                              )
                                                            if ($$el.checked) {
                                                              $$i < 0 &&
                                                                (_vm.tax_type =
                                                                  $$a.concat([
                                                                    $$v,
                                                                  ]))
                                                            } else {
                                                              $$i > -1 &&
                                                                (_vm.tax_type =
                                                                  $$a
                                                                    .slice(
                                                                      0,
                                                                      $$i
                                                                    )
                                                                    .concat(
                                                                      $$a.slice(
                                                                        $$i + 1
                                                                      )
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
                                                          expression:
                                                            "tax_type",
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
                                                        change: function (
                                                          $event
                                                        ) {
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
                                                          expression:
                                                            "tax_type",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "vs__search form-control vs__search_z-index",
                                                      attrs: {
                                                        required: !_vm.selected,
                                                        type: attributes.type,
                                                      },
                                                      domProps: {
                                                        value: _vm.tax_type,
                                                      },
                                                      on: {
                                                        input: function (
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
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
                                attrs: {
                                  type: "text",
                                  id: "inputProductPrice4",
                                },
                                domProps: { value: _vm.edit.tax },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.edit,
                                      "tax",
                                      $event.target.value
                                    )
                                  },
                                },
                              }),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-group col-md-6" },
                              [
                                _c(
                                  "label",
                                  { attrs: { for: "inputPassword4" } },
                                  [_vm._v("Discount Type")]
                                ),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    options: _vm.discountChoice,
                                    label: "Discount Type",
                                    placeholder: "Choose Discount Type",
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
                                                          value:
                                                            _vm.discount_type,
                                                          expression:
                                                            "discount_type",
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
                                                          _vm.discount_type
                                                        )
                                                          ? _vm._i(
                                                              _vm.discount_type,
                                                              null
                                                            ) > -1
                                                          : _vm.discount_type,
                                                      },
                                                      on: {
                                                        change: function (
                                                          $event
                                                        ) {
                                                          var $$a =
                                                              _vm.discount_type,
                                                            $$el =
                                                              $event.target,
                                                            $$c = $$el.checked
                                                              ? true
                                                              : false
                                                          if (
                                                            Array.isArray($$a)
                                                          ) {
                                                            var $$v = null,
                                                              $$i = _vm._i(
                                                                $$a,
                                                                $$v
                                                              )
                                                            if ($$el.checked) {
                                                              $$i < 0 &&
                                                                (_vm.discount_type =
                                                                  $$a.concat([
                                                                    $$v,
                                                                  ]))
                                                            } else {
                                                              $$i > -1 &&
                                                                (_vm.discount_type =
                                                                  $$a
                                                                    .slice(
                                                                      0,
                                                                      $$i
                                                                    )
                                                                    .concat(
                                                                      $$a.slice(
                                                                        $$i + 1
                                                                      )
                                                                    ))
                                                            }
                                                          } else {
                                                            _vm.discount_type =
                                                              $$c
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
                                                          value:
                                                            _vm.discount_type,
                                                          expression:
                                                            "discount_type",
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
                                                          _vm.discount_type,
                                                          null
                                                        ),
                                                      },
                                                      on: {
                                                        change: function (
                                                          $event
                                                        ) {
                                                          _vm.discount_type =
                                                            null
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
                                                          value:
                                                            _vm.discount_type,
                                                          expression:
                                                            "discount_type",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "vs__search form-control vs__search_z-index",
                                                      attrs: {
                                                        required: !_vm.selected,
                                                        type: attributes.type,
                                                      },
                                                      domProps: {
                                                        value:
                                                          _vm.discount_type,
                                                      },
                                                      on: {
                                                        input: function (
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.discount_type =
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
                                        ]
                                      },
                                    },
                                  ]),
                                  model: {
                                    value: _vm.discount_type,
                                    callback: function ($$v) {
                                      _vm.discount_type = $$v
                                    },
                                    expression: "discount_type",
                                  },
                                }),
                              ],
                              1
                            ),
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
                                attrs: {
                                  type: "text",
                                  id: "inputProductPrice4",
                                },
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
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-group col-md-6" },
                              [
                                _c(
                                  "label",
                                  { attrs: { for: "inputPassword4" } },
                                  [_vm._v("Sale Type")]
                                ),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    options: _vm.chooseUnits,
                                    reduce: function (saleunit) {
                                      return saleunit.name
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
                                                          value:
                                                            _vm.edit.sale_unit,
                                                          expression:
                                                            "edit.sale_unit",
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
                                                          _vm.edit.sale_unit
                                                        )
                                                          ? _vm._i(
                                                              _vm.edit
                                                                .sale_unit,
                                                              null
                                                            ) > -1
                                                          : _vm.edit.sale_unit,
                                                      },
                                                      on: {
                                                        change: function (
                                                          $event
                                                        ) {
                                                          var $$a =
                                                              _vm.edit
                                                                .sale_unit,
                                                            $$el =
                                                              $event.target,
                                                            $$c = $$el.checked
                                                              ? true
                                                              : false
                                                          if (
                                                            Array.isArray($$a)
                                                          ) {
                                                            var $$v = null,
                                                              $$i = _vm._i(
                                                                $$a,
                                                                $$v
                                                              )
                                                            if ($$el.checked) {
                                                              $$i < 0 &&
                                                                _vm.$set(
                                                                  _vm.edit,
                                                                  "sale_unit",
                                                                  $$a.concat([
                                                                    $$v,
                                                                  ])
                                                                )
                                                            } else {
                                                              $$i > -1 &&
                                                                _vm.$set(
                                                                  _vm.edit,
                                                                  "sale_unit",
                                                                  $$a
                                                                    .slice(
                                                                      0,
                                                                      $$i
                                                                    )
                                                                    .concat(
                                                                      $$a.slice(
                                                                        $$i + 1
                                                                      )
                                                                    )
                                                                )
                                                            }
                                                          } else {
                                                            _vm.$set(
                                                              _vm.edit,
                                                              "sale_unit",
                                                              $$c
                                                            )
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
                                                          value:
                                                            _vm.edit.sale_unit,
                                                          expression:
                                                            "edit.sale_unit",
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
                                                          _vm.edit.sale_unit,
                                                          null
                                                        ),
                                                      },
                                                      on: {
                                                        change: function (
                                                          $event
                                                        ) {
                                                          return _vm.$set(
                                                            _vm.edit,
                                                            "sale_unit",
                                                            null
                                                          )
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
                                                          value:
                                                            _vm.edit.sale_unit,
                                                          expression:
                                                            "edit.sale_unit",
                                                        },
                                                      ],
                                                      staticClass:
                                                        "vs__search form-control vs__search_z-index",
                                                      attrs: {
                                                        required: !_vm.selected,
                                                        type: attributes.type,
                                                      },
                                                      domProps: {
                                                        value:
                                                          _vm.edit.sale_unit,
                                                      },
                                                      on: {
                                                        input: function (
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.edit,
                                                            "sale_unit",
                                                            $event.target.value
                                                          )
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
                                          _c(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [_vm._v(" This field is required ")]
                                          ),
                                        ]
                                      },
                                    },
                                  ]),
                                  model: {
                                    value: _vm.edit.sale_unit,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.edit, "sale_unit", $$v)
                                    },
                                    expression: "edit.sale_unit",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-footer" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-secondary",
                              attrs: {
                                type: "button",
                                "data-dismiss": "modal",
                              },
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
              _c(
                "div",
                {
                  staticClass: "modal fade",
                  attrs: {
                    id: "invoiceModal",
                    tabindex: "-1",
                    role: "dialog",
                    "aria-labelledby": "invoiceModalLabel",
                    "aria-hidden": "true",
                  },
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "modal-dialog modal-sm",
                      attrs: { role: "document" },
                    },
                    [
                      _c("div", { staticClass: "modal-content" }, [
                        _c("div", { staticClass: "modal-header" }, [
                          _c(
                            "h5",
                            {
                              staticClass: "modal-title",
                              attrs: { id: "exampleModalLabel" },
                            },
                            [_vm._v("Invoice POS")]
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
                                  $event.preventDefault()
                                  return _vm.closeModal()
                                },
                              },
                            },
                            [
                              _c("span", { attrs: { "aria-hidden": "true" } }, [
                                _vm._v("×"),
                              ]),
                            ]
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "modal-body",
                            attrs: { id: "printMe" },
                          },
                          [
                            _c("div", { staticClass: "invoice-POS" }, [
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    "max-width": "400px",
                                    margin: "0px auto",
                                  },
                                },
                                [
                                  _c("div", { staticClass: "info" }, [
                                    _c("h2", { staticClass: "text-center" }, [
                                      _vm._v("Stocky"),
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _c("span", [
                                        _vm._v(
                                          "Date : " +
                                            _vm._s(_vm.invoice.date) +
                                            "\n                                "
                                        ),
                                        _c("br"),
                                      ]),
                                      _vm._v(" "),
                                      _vm.invoice.customer
                                        ? _c("span", [
                                            _vm._v(
                                              "Address : " +
                                                _vm._s(
                                                  _vm.invoice.customer.address
                                                ) +
                                                "\n                                "
                                            ),
                                            _c("br"),
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.invoice.customer
                                        ? _c("span", [
                                            _vm._v(
                                              "Email : " +
                                                _vm._s(
                                                  _vm.invoice.customer.email
                                                ) +
                                                "\n                                "
                                            ),
                                            _c("br"),
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.invoice.customer
                                        ? _c("span", [
                                            _vm._v(
                                              "Phone : " +
                                                _vm._s(
                                                  _vm.invoice.customer.phone
                                                ) +
                                                "\n                                "
                                            ),
                                            _c("br"),
                                          ])
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.invoice.customer
                                        ? _c("span", [
                                            _vm._v(
                                              "Customer : " +
                                                _vm._s(
                                                  _vm.invoice.customer.name
                                                ) +
                                                "\n                                "
                                            ),
                                            _c("br"),
                                          ])
                                        : _vm._e(),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "table",
                                    { staticClass: "table_data w-100" },
                                    [
                                      _c(
                                        "tbody",
                                        [
                                          _vm._l(
                                            _vm.invoice.details,
                                            function (product) {
                                              return _c(
                                                "tr",
                                                { key: product.id },
                                                [
                                                  _c(
                                                    "td",
                                                    { attrs: { colspan: "3" } },
                                                    [
                                                      _vm._v(
                                                        " " +
                                                          _vm._s(product.name) +
                                                          "\n                                  "
                                                      ),
                                                      _c("br", {
                                                        staticStyle: {
                                                          display: "none",
                                                        },
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "span",
                                                        {
                                                          staticStyle: {
                                                            display: "none",
                                                          },
                                                        },
                                                        [_vm._v("IMEI/SN : ")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("br"),
                                                      _vm._v(" "),
                                                      _c("span", [
                                                        _vm._v(
                                                          _vm._s(
                                                            product.quentity
                                                          ) +
                                                            " " +
                                                            _vm._s(
                                                              product.unit_sale
                                                            ) +
                                                            " x " +
                                                            _vm._s(
                                                              product.net_price
                                                            )
                                                        ),
                                                      ]),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    {
                                                      staticStyle: {
                                                        "text-align": "right",
                                                        "vertical-align":
                                                          "bottom",
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(product.total)
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            }
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "tr",
                                            {
                                              staticStyle: {
                                                "margin-top": "10px",
                                              },
                                            },
                                            [
                                              _c(
                                                "td",
                                                {
                                                  staticClass: "total",
                                                  attrs: { colspan: "3" },
                                                },
                                                [_vm._v("Order Tax")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                {
                                                  staticClass: "total",
                                                  staticStyle: {
                                                    "text-align": "right",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "USD " +
                                                      _vm._s(
                                                        _vm.invoice.tax_rate
                                                      ) +
                                                      " (" +
                                                      _vm._s(
                                                        _vm.invoice.tax_net
                                                      ) +
                                                      " %)"
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "tr",
                                            {
                                              staticStyle: {
                                                "margin-top": "10px",
                                              },
                                            },
                                            [
                                              _c(
                                                "td",
                                                {
                                                  staticClass: "total",
                                                  attrs: { colspan: "3" },
                                                },
                                                [_vm._v("Discount")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                {
                                                  staticClass: "total",
                                                  staticStyle: {
                                                    "text-align": "right",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "USD " +
                                                      _vm._s(
                                                        _vm.invoice.discount
                                                      )
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "tr",
                                            {
                                              staticStyle: {
                                                "margin-top": "10px",
                                              },
                                            },
                                            [
                                              _c(
                                                "td",
                                                {
                                                  staticClass: "total",
                                                  attrs: { colspan: "3" },
                                                },
                                                [_vm._v("Grand Total")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                {
                                                  staticClass: "total",
                                                  staticStyle: {
                                                    "text-align": "right",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "USD " +
                                                      _vm._s(
                                                        _vm.invoice.grand_total
                                                      )
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.invoice.paid_amount <
                                          _vm.invoice.grand_total
                                            ? _c("tr", [
                                                _c(
                                                  "td",
                                                  {
                                                    staticClass: "total",
                                                    attrs: { colspan: "3" },
                                                  },
                                                  [_vm._v("Paid")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  {
                                                    staticClass: "total",
                                                    staticStyle: {
                                                      "text-align": "right",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "USD " +
                                                        _vm._s(
                                                          _vm.invoice
                                                            .paid_amount
                                                        )
                                                    ),
                                                  ]
                                                ),
                                              ])
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm.invoice.paid_amount <
                                          _vm.invoice.grand_total
                                            ? _c("tr", [
                                                _c(
                                                  "td",
                                                  {
                                                    staticClass: "total",
                                                    attrs: { colspan: "3" },
                                                  },
                                                  [_vm._v("Due")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  {
                                                    staticClass: "total",
                                                    staticStyle: {
                                                      "text-align": "right",
                                                    },
                                                  },
                                                  [
                                                    _vm._v(
                                                      "USD " +
                                                        _vm._s(
                                                          _vm.invoice
                                                            .grand_total -
                                                            _vm.invoice
                                                              .paid_amount
                                                        )
                                                    ),
                                                  ]
                                                ),
                                              ])
                                            : _vm._e(),
                                        ],
                                        2
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "table",
                                    {
                                      staticClass: "change mt-3 w-100",
                                      staticStyle: { "font-size": "10px" },
                                    },
                                    [
                                      _vm._m(5),
                                      _vm._v(" "),
                                      _c("tbody", [
                                        _c("tr", [
                                          _vm.invoice.payment_details
                                            ? _c(
                                                "td",
                                                {
                                                  staticStyle: {
                                                    "text-align": "left",
                                                  },
                                                  attrs: { colspan: "1" },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.invoice
                                                        .payment_details
                                                        .payment_type
                                                    )
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticStyle: {
                                                "text-align": "center",
                                              },
                                              attrs: { colspan: "2" },
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.invoice.grand_total)
                                              ),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.invoice.payment_details
                                            ? _c(
                                                "td",
                                                {
                                                  staticStyle: {
                                                    "text-align": "right",
                                                  },
                                                  attrs: { colspan: "1" },
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.invoice
                                                        .payment_details.change
                                                    )
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                        ]),
                                      ]),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "ml-2",
                                      attrs: { id: "legalcopy" },
                                    },
                                    [
                                      _vm._m(6),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { attrs: { id: "bar" } },
                                        [
                                          _c(
                                            "barcode",
                                            {
                                              attrs: {
                                                width: "2",
                                                height: "50",
                                                value: "SL_" + _vm.invoice.Ref,
                                              },
                                            },
                                            [
                                              _vm._v(
                                                " Show this if the rendering fails. "
                                              ),
                                            ]
                                          ),
                                        ],
                                        1
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "modal-footer justify-content-start" },
                          [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "float-left btn-transition btn btn-outline-success",
                                on: { click: _vm.print },
                              },
                              [
                                _c("i", {
                                  staticClass: "pe-7s-print btn-icon-wrapper",
                                }),
                                _vm._v("  Print "),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal fade",
                  attrs: {
                    id: "paymentModal",
                    tabindex: "-1",
                    role: "dialog",
                    "aria-labelledby": "exampleModalLabel",
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
                      _c("div", { staticClass: "modal-content" }, [
                        _vm._m(7),
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
                                  return _vm.onPaySubmit.apply(null, arguments)
                                },
                              },
                            },
                            [
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-md-6" }, [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "label",
                                      { attrs: { for: "exampleInputEmail1" } },
                                      [_vm._v("Received Amount *")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        id: "exampleInputEmail1",
                                        autocomplete: "off",
                                        v: "",
                                        "aria-describedby": "emailHelp",
                                        required: "",
                                      },
                                      domProps: { value: _vm.received_amount },
                                      on: {
                                        input: function (e) {
                                          return (_vm.received_amount =
                                            e.target.value)
                                        },
                                        keyup: function ($event) {
                                          $event.preventDefault()
                                          return _vm.receiveAmountCalculate(
                                            _vm.received_amount
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
                                      { attrs: { for: "exampleInputEmail1" } },
                                      [_vm._v("Paying Amount *")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        id: "exampleInputEmail1",
                                        autocomplete: "off",
                                        "aria-describedby": "emailHelp",
                                        required: "",
                                      },
                                      domProps: { value: _vm.paying_amount },
                                      on: {
                                        input: function (e) {
                                          return (_vm.paying_amount =
                                            e.target.value)
                                        },
                                        keyup: function ($event) {
                                          $event.preventDefault()
                                          return _vm.payingAmountCalculate(
                                            _vm.paying_amount
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
                                      { attrs: { for: "exampleInputEmail1" } },
                                      [_vm._v("Change")]
                                    ),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "change_amount" }, [
                                      _vm._v(_vm._s(_vm.change_amount)),
                                    ]),
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
                                        [_vm._v("Payment Choice *")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          options: _vm.paymentChoice,
                                          label: "Base Unit",
                                          placeholder: "Choose Payment",
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.payment_type,
                                                                expression:
                                                                  "payment_type",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "vs__search form-control vs__search_z-index",
                                                            attrs: {
                                                              required:
                                                                !_vm.selected,
                                                              type: "checkbox",
                                                            },
                                                            domProps: {
                                                              checked:
                                                                Array.isArray(
                                                                  _vm.payment_type
                                                                )
                                                                  ? _vm._i(
                                                                      _vm.payment_type,
                                                                      null
                                                                    ) > -1
                                                                  : _vm.payment_type,
                                                            },
                                                            on: {
                                                              change: function (
                                                                $event
                                                              ) {
                                                                var $$a =
                                                                    _vm.payment_type,
                                                                  $$el =
                                                                    $event.target,
                                                                  $$c =
                                                                    $$el.checked
                                                                      ? true
                                                                      : false
                                                                if (
                                                                  Array.isArray(
                                                                    $$a
                                                                  )
                                                                ) {
                                                                  var $$v =
                                                                      null,
                                                                    $$i =
                                                                      _vm._i(
                                                                        $$a,
                                                                        $$v
                                                                      )
                                                                  if (
                                                                    $$el.checked
                                                                  ) {
                                                                    $$i < 0 &&
                                                                      (_vm.payment_type =
                                                                        $$a.concat(
                                                                          [$$v]
                                                                        ))
                                                                  } else {
                                                                    $$i > -1 &&
                                                                      (_vm.payment_type =
                                                                        $$a
                                                                          .slice(
                                                                            0,
                                                                            $$i
                                                                          )
                                                                          .concat(
                                                                            $$a.slice(
                                                                              $$i +
                                                                                1
                                                                            )
                                                                          ))
                                                                  }
                                                                } else {
                                                                  _vm.payment_type =
                                                                    $$c
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.payment_type,
                                                                expression:
                                                                  "payment_type",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "vs__search form-control vs__search_z-index",
                                                            attrs: {
                                                              required:
                                                                !_vm.selected,
                                                              type: "radio",
                                                            },
                                                            domProps: {
                                                              checked: _vm._q(
                                                                _vm.payment_type,
                                                                null
                                                              ),
                                                            },
                                                            on: {
                                                              change: function (
                                                                $event
                                                              ) {
                                                                _vm.payment_type =
                                                                  null
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.payment_type,
                                                                expression:
                                                                  "payment_type",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "vs__search form-control vs__search_z-index",
                                                            attrs: {
                                                              required:
                                                                !_vm.selected,
                                                              type: attributes.type,
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.payment_type,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.payment_type =
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
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback",
                                                  },
                                                  [
                                                    _vm._v(
                                                      " This field is required "
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            },
                                          },
                                        ]),
                                        model: {
                                          value: _vm.payment_type,
                                          callback: function ($$v) {
                                            _vm.payment_type = $$v
                                          },
                                          expression: "payment_type",
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
                                        attrs: {
                                          for: "exampleFormControlTextarea1",
                                        },
                                      },
                                      [_vm._v("Note")]
                                    ),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.note,
                                          expression: "note",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        id: "exampleFormControlTextarea1",
                                        rows: "3",
                                      },
                                      domProps: { value: _vm.note },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.note = $event.target.value
                                        },
                                      },
                                    }),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-6" }, [
                                  _c("div", { staticClass: "card" }, [
                                    _c("div", { staticClass: "card-body" }, [
                                      _c("div", { staticClass: "list-group" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "list-group-item d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            _vm._v(" Total Products "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-primary badge-pill",
                                              },
                                              [_vm._v(_vm._s(_vm.badge))]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "list-group-item d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            _vm._v(" Order Tax "),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "font-weight-bold",
                                              },
                                              [
                                                _vm._v(
                                                  "$ " +
                                                    _vm._s(_vm.taxCal) +
                                                    " (" +
                                                    _vm._s(_vm.tax) +
                                                    " %)"
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "list-group-item d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            _vm._v(" Discount "),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "font-weight-bold",
                                              },
                                              [
                                                _vm._v(
                                                  "$ " + _vm._s(_vm.discount)
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "list-group-item d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            _vm._v(" Shipping "),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "font-weight-bold",
                                              },
                                              [
                                                _vm._v(
                                                  "$ " + _vm._s(_vm.shipping)
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "list-group-item d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            _vm._v(" Grand Total "),
                                            _c(
                                              "span",
                                              {
                                                staticClass: "font-weight-bold",
                                              },
                                              [
                                                _vm._v(
                                                  "$ " + _vm._s(_vm.grandTotal)
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _vm._m(8),
                              ]),
                            ]
                          ),
                        ]),
                      ]),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm._m(9),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-7" }, [
        _c(
          "div",
          { staticClass: "main-card mb-3 card list-grid productListCard" },
          [
            _c("div", { staticClass: "card-body" }, [
              _c(
                "div",
                {
                  staticClass: "d-flex flex-row flex-nowrap overflow-auto mb-2",
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "card card-block mx-2 category",
                      staticStyle: { "min-width": "80px" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.fetchProduct((_vm.page = 1))
                        },
                      },
                    },
                    [
                      _c("img", {
                        staticClass: "img-responsive p-3",
                        attrs: {
                          src: "images/categories/select-all.png",
                          height: "auto",
                          width: "80",
                        },
                      }),
                      _vm._v(" "),
                      _vm._m(10),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.categoryList, function (category) {
                    return _c(
                      "div",
                      {
                        key: category.id,
                        staticClass: "card card-block mx-2  category ",
                        staticStyle: { "min-width": "80px" },
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.categoryGet(
                              category.id,
                              (_vm.catPage = 1)
                            )
                          },
                        },
                      },
                      [
                        _c("img", {
                          staticClass: "img-responsive p-3",
                          attrs: {
                            src: "images/categories/" + category.image,
                            height: "auto",
                            width: "80",
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "card-body p-0 text-center" },
                          [
                            _c(
                              "span",
                              { staticClass: "text-center font-weight-bold" },
                              [_vm._v(_vm._s(category.category_name))]
                            ),
                          ]
                        ),
                      ]
                    )
                  }),
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "productList" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "col-md-12 d-flex flex-row flex-wrap bd-highlight list-item mt-2 ",
                    },
                    _vm._l(_vm.productList, function (product, index) {
                      return _c(
                        "div",
                        {
                          key: index,
                          staticClass: "card o-hidden bd-highlight m-1",
                          on: {
                            click: function ($event) {
                              return _vm.addCart(product, product.stock)
                            },
                          },
                        },
                        [
                          _c("div", { staticClass: "list-thumb d-flex" }, [
                            _c("img", {
                              attrs: {
                                alt: "",
                                src: "productImages/" + product.images,
                              },
                            }),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "flex-grow-1 d-bock" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center\n                    ",
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "w-40 w-sm-100 item-title" },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(product.name) +
                                        "\n                      "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-muted text-small w-15 w-sm-100 mb-2",
                                  },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(product.product_code) +
                                        "\n                      "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "badge badge-primary w-15 w-sm-100 mb-2",
                                  },
                                  [_vm._v("$ " + _vm._s(product.product_price))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges ",
                                  },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(product.total_stock) +
                                        "\n                        "
                                    ),
                                    _vm._l(
                                      product.stock,
                                      function (totalStock) {
                                        return _c(
                                          "span",
                                          {
                                            key: totalStock.id,
                                            staticClass: "badge badge-info",
                                          },
                                          [
                                            _vm._v(
                                              " " +
                                                _vm._s(totalStock.total_stock) +
                                                " kg"
                                            ),
                                          ]
                                        )
                                      }
                                    ),
                                  ],
                                  2
                                ),
                              ]
                            ),
                          ]),
                        ]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("center", [
                    _c(
                      "div",
                      { staticClass: "loader d-none invisible-loading" },
                      [_c("div", { staticClass: "ball-scale" }, [_c("div")])]
                    ),
                  ]),
                  _vm._v(" "),
                  _c("center", [
                    _c(
                      "p",
                      {
                        staticClass: "font-weight-bold  invisible-text d-none",
                      },
                      [
                        _vm._v(
                          "You have reached the end.Do a search to keep exploring!"
                        ),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "mb-2 mr-2 btn btn-outline-primary btn-lg btn-block mt-3 ",
                      attrs: { id: "load-more" },
                      on: { click: _vm.loadMore },
                    },
                    [_vm._v("Load More")]
                  ),
                ],
                1
              ),
            ]),
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
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Qty")]),
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
    return _c("div", { staticClass: "input-group-append" }, [
      _c("div", { staticClass: "input-group-text" }, [_vm._v("%")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("div", { staticClass: "input-group-text" }, [_vm._v("$")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("div", { staticClass: "input-group-text" }, [_vm._v("$")]),
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
    return _c("thead", [
      _c(
        "tr",
        {
          staticStyle: {
            background: "rgb(238, 238, 238) none repeat scroll 0% 0%",
          },
        },
        [
          _c(
            "th",
            { staticStyle: { "text-align": "left" }, attrs: { colspan: "1" } },
            [_vm._v("Paid By:")]
          ),
          _vm._v(" "),
          _c(
            "th",
            {
              staticStyle: { "text-align": "center" },
              attrs: { colspan: "2" },
            },
            [_vm._v("Amount:")]
          ),
          _vm._v(" "),
          _c(
            "th",
            { staticStyle: { "text-align": "right" }, attrs: { colspan: "1" } },
            [_vm._v("Change:")]
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "legal" }, [
      _c("strong", [
        _vm._v("Thank You For Shopping With Us . Please Come Again"),
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
        [_vm._v("Create Payment")]
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
    return _c("div", { staticClass: "mt-3 col-md-12" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Submit")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-12 col-md-6" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-primary ripple mt-1 btn-rounded btn-block",
          attrs: {
            type: "submit",
            "data-toggle": "modal",
            "data-target": "#paymentModal",
          },
        },
        [_c("i", { staticClass: "i-Checkout" }), _vm._v(" Pay Now ")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body p-0 text-center" }, [
      _c("span", { staticClass: "text-center font-weight-bold" }, [
        _vm._v("All"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);
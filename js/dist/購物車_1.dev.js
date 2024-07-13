"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var cart_list = document.querySelector('.cart_list');
var show_buy_list = [];
var show_buy_list_json;
var judge = 1;
var counter = document.querySelector('.counter');
var total = document.querySelector('.total');
var qty_2 = document.querySelector('.qty_2');
var total_price = 0;
var qty_all = 0;
var item_price;
var freight = document.querySelector('.freight');
var amount = document.querySelector('.amount');
var amount_price = 0;
var href2 = document.querySelector('.href2');

if (localStorage.getItem('test_4')) {
  show_buy_list = JSON.parse(localStorage.getItem('test_4'));
}

console.log(show_buy_list);
show_cart_list();
shoplist_null();
addbtn();
minusbtn();
list_empty();

function show_cart_list() {
  for (i = 0; i < show_buy_list.length; i++) {
    cart_list.innerHTML += "\n        <hr>\n    <div class=\"row align-items-center my-4\">\n                <div class=\"col-6  me-auto \">\n                    <div class=\"row gx-0\">\n                        <div class=\"col-auto mx-2\">\n                            <img src=".concat(show_buy_list[i]['img'], "\n                            alt=\"\" class=\"rounded-circle\">\n                        </div>\n\n                        <div class=\"col-2 col-sm d-flex align-items-center\">\n                            <div class=\"user-t t-1 col col-md-7\">").concat(show_buy_list[i]['name'], "\n                                <div class=\"user-t t-2 col\">#41552\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-auto \">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <ul class=\"counter p-0 \">\n                                <li id=\"minus_").concat(i + 1, "\"class=\"minus_btn\"><input type=\"button\" value=\"-\" class=\"minus_btn minus_c_").concat(i + 1, "\"()\"/></li>\n                                <li id=\"countnum_").concat(i + 1, "\"class=\"item-quantity\">").concat(show_buy_list[i]['quanity'], "</li>\n                                <li id=\"plus_").concat(i + 1, "\"class=\"plus_btn\"><input  type=\"button\" value=\"+\" class=\"plus_btn plus_c_").concat(i + 1, "\"()\"/></li>\n                            </ul>\n                        </div>\n                        <div class=\"price_").concat(i + 1, " col-auto align-content-center price t-1 p-0 pe-3 \">$").concat(show_buy_list[i]['quanity'] * show_buy_list[i]['price'], "</div>\n                    </div>\n                </div>\n            </div>\n            ");
  }
}

;

function reset() {
  show_buy_list_json = JSON.stringify(show_buy_list);
  localStorage.setItem('test_4', show_buy_list_json);
  clear_item();
  show_item();
  cart_list.innerHTML = '';
  show_cart_list();
}

;

function clear_item() {
  for (i = 0; i < show_buy_list.length; i++) {
    console.log(show_buy_list[i]);
    total_price = 0;
    freight.innerHTML = '';
    amount_price = 0;
    total.innerHTML = '';
    qty_2.innerHTML = '';
    console.log(_typeof(total_price));
    qty_all = 0;
    console.log(qty_all);
    amount.innerHTML = '';
  }
}

;

function shoplist_null() {
  show_buy_list_json = JSON.stringify(show_buy_list);
  localStorage.setItem('test_4', show_buy_list_json);

  if (show_buy_list.length == 0) {
    clear_item();
  } else {
    show_item();
  }
}

;

function show_item() {
  for (i = 0; i < show_buy_list.length; i++) {
    freight.innerHTML = '$' + 0;
    console.log(show_buy_list[i]);
    total_price += parseInt(show_buy_list[i]['quanity']).toFixed(2) * parseFloat(show_buy_list[i]['price'].toFixed(2));
    amount_price += parseInt(show_buy_list[i]['quanity']).toFixed(2) * parseFloat(show_buy_list[i]['price'].toFixed(2));
    amount.innerHTML = '$' + amount_price.toFixed(2);
    console.log(_typeof(total_price));
    qty_all += parseInt(show_buy_list[i]['quanity']);
    console.log(qty_all);
    qty_2.innerHTML = qty_all;
  }

  total.innerHTML = '$' + total_price.toFixed(2);
}

;

function addbtn() {
  cart_list.addEventListener('click', function (e) {
    if (e.target.classList.contains('plus_btn')) {
      for (i = 0; i < show_buy_list.length; i++) {
        if (e.target.classList.contains("plus_c_".concat(i + 1)) == true) {
          console.log(i);
          console.log(show_buy_list[i]['quanity']);
          show_buy_list[i]['quanity'] = show_buy_list[i]['quanity'] + 1;
          document.getElementById("countnum_".concat(i + 1)).innerHTML = show_buy_list[i]['quanity'];
          show_buy_list_json = JSON.stringify(show_buy_list);
          localStorage.setItem('test_4', show_buy_list_json);
          reset();
        }
      }

      ;
    }
  });
}

function minusbtn() {
  cart_list.addEventListener('click', function (e) {
    if (e.target.classList.contains('minus_btn')) {
      for (i = 0; i < show_buy_list.length; i++) {
        if (e.target.classList.contains("minus_c_".concat(i + 1)) == true) {
          show_buy_list[i]['quanity'] = show_buy_list[i]['quanity'] - 1;

          if (show_buy_list[i]['quanity'] <= 0) {
            show_buy_list.splice(i, 1);
            reset();
            show_buy_list_json = JSON.stringify(show_buy_list);
            localStorage.setItem('test_4', show_buy_list_json);
            console.log(show_buy_list);
            console.log(qty_all);
          } else {
            console.log(i);
            console.log(show_buy_list[i]['quanity']);
            document.getElementById("countnum_".concat(i + 1)).innerHTML = show_buy_list[i]['quanity'];
            show_buy_list_json = JSON.stringify(show_buy_list);
            localStorage.setItem('test_4', show_buy_list_json);
            reset();
          }
        }
      }

      ;

      if (show_buy_list.length == 0) {
        console.log('true');
        total_price = 0;
        total.innerHTML = '';
        qty_2.innerHTML = '';
        console.log(_typeof(total_price));
        qty_all = 0;
        freight.innerHTML = '';
        console.log(qty_all);
        amount.innerHTML = '';
      }
    }
  });
}

;

function list_empty() {
  href2.addEventListener('click', function () {
    if (show_buy_list.length == 0) {
      window.alert('購物車是空的請返回首頁購物');
    } else {
      href2.href = "./第二頁.html";
    }
  });
} // localStorage.clear();
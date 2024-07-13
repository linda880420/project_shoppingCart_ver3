"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var buylist = document.querySelector('.buylist');

if (localStorage.getItem('test_4')) {
  show_buy_list = JSON.parse(localStorage.getItem('test_4'));
  show_buy_list = show_buy_list; // console.log(show_buy_list[1]['img']);
}

;

if (localStorage.getItem('user_info')) {
  form_data = JSON.parse(localStorage.getItem('user_info')); // form_data = form_data_json;

  console.log(form_data['username']);
}

var p4_username = document.querySelector('.p4_username');
var p4_usertel = document.querySelector('.p4_usertel');
var p4_usertemail = document.querySelector('.p4_useremail');
var p4_useraddress = document.querySelector('.p4_address');
var p4_useraddress2 = document.querySelector('.p4_address2');
var p4_useraddress3 = document.querySelector('.p4_address3');
var total_price = 0;
var qty_all = 0;
var total = document.querySelector('.total');
var qty_2 = document.querySelector('.qty_2');
var amount = document.querySelector('.amount');
var freight = document.querySelector('.freight');
var amount_price = 0;
show_buylist();
user_sure();
show_item();

function show_buylist() {
  buylist.innerHTML = '';

  for (i = 0; i < show_buy_list.length; i++) {
    buylist.innerHTML += "\n    <hr>\n    <div class=\"row align-items-center my-4\">\n    <div class=\"col-6  me-auto \">\n        <div class=\"row gx-0\">\n            <div class=\"col-auto mx-2\">\n                <img src=".concat(show_buy_list[i]['img'], " alt=\"\" class=\"rounded-circle\">\n            </div>\n\n            <div class=\"col-2 col-sm d-flex align-items-center\">\n                <div class=\"user-t t-1 col\">").concat(show_buy_list[i]['name'], "\n                    <div class=\"user-t t-2 col\">#41552\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-auto \">\n        <div class=\"row\">\n            <div class=\"col\">\n                <ul class=\"counter p-0 \">\n                    <li id=\"countnum\">X").concat(show_buy_list[i]['quanity'], "</li>\n                </ul>\n            </div>\n            <div class=\"col-auto align-content-center price t-1 p-0 pe-3\">$").concat(show_buy_list[i]['quanity'] * show_buy_list[i]['price'], "</div>\n        </div>\n    </div>\n</div>");
  }
}

;

function user_sure() {
  p4_username.innerHTML = form_data['username'];
  p4_usertel.innerHTML = form_data['usertel'];
  p4_usertemail.innerHTML = form_data['useremail'];
  p4_useraddress.innerHTML = form_data['useraddress1'];
  p4_useraddress2.innerHTML = form_data['useraddress2'];
  p4_useraddress3.innerHTML = form_data['useraddress3'];
}

;

function show_item() {
  for (i = 0; i < show_buy_list.length; i++) {
    freight.innerHTML = '$' + parseInt(show_buy_list[i]['freight']).toFixed(2);
    console.log(show_buy_list[i]);
    total_price += parseInt(show_buy_list[i]['quanity']).toFixed(2) * parseFloat(show_buy_list[i]['price'].toFixed(2));
    amount_price += parseInt(show_buy_list[i]['quanity']).toFixed(2) * parseFloat(show_buy_list[i]['price'].toFixed(2));
    amount.innerHTML = '$' + amount_price.toFixed(2);
    console.log(_typeof(total_price));
    qty_all += parseInt(show_buy_list[i]['quanity']);
    console.log(qty_all);
    qty_2.innerHTML = qty_all;
  }

  total_price = total_price + parseFloat(show_buy_list[0]['freight']);
  total.innerHTML = '$' + total_price.toFixed(2);
}

; // localStorage.clear();
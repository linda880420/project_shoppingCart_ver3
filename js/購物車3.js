var show_buy_list = [];
var show_buy_list_json;
if (localStorage.getItem('test_4')) {
    show_buy_list = JSON.parse(localStorage.getItem('test_4'));
}
let total_price = 0;
let qty_all = 0;
let total = document.querySelector('.total');
let qty_2 = document.querySelector('.qty_2');
let amount = document.querySelector('.amount');
let name1 = document.querySelector('#name');
let email1 = document.querySelector('#email');
let tel = document.querySelector('#tel');
let address = document.querySelector('#address');
let address2 = document.querySelector('#address2');
let address3 = document.querySelector('#address3');
let gotopay = document.querySelector('.gotopay');
let href1 = document.querySelector('.href1');
let freight=document.querySelector('.freight');
let freight_price;
let amount_price;
let form_data = {};
let form_data_json = [];
show_item();
info_data_input();
if (localStorage.getItem('user_info')) {
    form_data = eval(`(${localStorage.getItem('user_info')})`)
    console.log(form_data['username']);
}
show_info();
info();
function show_item() {
    for (i = 0; i < show_buy_list.length; i++) {
        freight.innerHTML = '$' + (parseInt(show_buy_list[i]['freight']).toFixed(2));
        console.log(show_buy_list[i]);
        total_price += (parseInt(show_buy_list[i]['quanity']).toFixed(2)) * (parseFloat(show_buy_list[i]['price'].toFixed(2)));
        amount_price =total_price;
        amount.innerHTML = '$' + amount_price.toFixed(2);
        console.log(typeof (total_price));
        qty_all += parseInt(show_buy_list[i]['quanity']);
        console.log(qty_all);
        qty_2.innerHTML = qty_all;
    }
    total_price = total_price + (parseFloat(show_buy_list[0]['freight']));
    total.innerHTML = '$' + total_price.toFixed(2);
};
function info() {
    gotopay.addEventListener('click', function () {
        console.log('有有');
        if (name1.value == '' || email1.value == '' || tel.value == '' || address.value == '' || address2.value == '' || address3.value == '') {
            window.alert("尚有資訊未填寫")
        } else {
            href1.href="./第四頁.html";
            info_data_input();
            console.log(form_data);
            form_data_json = JSON.stringify(form_data);
            localStorage.setItem('user_info',(form_data_json));
        }
    })
}
function show_info(){
    name1.value=form_data['username'];
    email1.value=form_data['useremail'];
    tel.value=form_data['usertel'];
    address.value=form_data['useraddress1'];
    address2.value=form_data['useraddress2'];
     address3.value=form_data['useraddress3'];
};
function info_data_input() {
    form_data['username'] = name1.value;
    form_data['useremail'] = email1.value;
    form_data['usertel'] = tel.value;
    form_data['useraddress1'] = address.value;
    form_data['useraddress2'] = address2.value;
    form_data['useraddress3'] = address3.value;
}
// localStorage.clear();
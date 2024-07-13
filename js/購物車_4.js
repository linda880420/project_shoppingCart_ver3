let buylist = document.querySelector('.buylist');
if (localStorage.getItem('test_4')) {
    show_buy_list = JSON.parse(localStorage.getItem('test_4'))
    show_buy_list = show_buy_list;
    // console.log(show_buy_list[1]['img']);
};
if (localStorage.getItem('user_info')) {
    form_data = JSON.parse(localStorage.getItem('user_info'))
    // form_data = form_data_json;
    console.log(form_data['username']);
}
let p4_username = document.querySelector('.p4_username');
let p4_usertel = document.querySelector('.p4_usertel');
let p4_usertemail = document.querySelector('.p4_useremail');
let p4_useraddress = document.querySelector('.p4_address');
let p4_useraddress2 = document.querySelector('.p4_address2');
let p4_useraddress3 = document.querySelector('.p4_address3');
let total_price = 0;
let qty_all = 0;
let total = document.querySelector('.total');
let qty_2 = document.querySelector('.qty_2');
let amount = document.querySelector('.amount');
let freight = document.querySelector('.freight');
let amount_price = 0;
show_buylist();
user_sure();
show_item();

function show_buylist() {
    buylist.innerHTML = '';
    for (i = 0; i < show_buy_list.length; i++) {
        buylist.innerHTML += `
    <hr>
    <div class="row align-items-center my-4">
    <div class="col-6  me-auto ">
        <div class="row gx-0">
            <div class="col-auto mx-2">
                <img src=${show_buy_list[i]['img']} alt="" class="rounded-circle">
            </div>

            <div class="col-2 col-sm d-flex align-items-center">
                <div class="user-t t-1 col">${show_buy_list[i]['name']}
                    <div class="user-t t-2 col">#41552
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-auto ">
        <div class="row">
            <div class="col">
                <ul class="counter p-0 ">
                    <li id="countnum">X${show_buy_list[i]['quanity']}</li>
                </ul>
            </div>
            <div class="col-auto align-content-center price t-1 p-0 pe-3">$${show_buy_list[i]['quanity']*show_buy_list[i]['price']}</div>
        </div>
    </div>
</div>`
    }
};

function user_sure() {
    p4_username.innerHTML = form_data['username'];
    p4_usertel.innerHTML = form_data['usertel'];
    p4_usertemail.innerHTML = form_data['useremail'];
    p4_useraddress.innerHTML = form_data['useraddress1'];
    p4_useraddress2.innerHTML = form_data['useraddress2'];
    p4_useraddress3.innerHTML = form_data['useraddress3'];
};

function show_item() {
    for (i = 0; i < show_buy_list.length; i++) {
        freight.innerHTML = '$' + (parseInt(show_buy_list[i]['freight']).toFixed(2));
        console.log(show_buy_list[i]);
        total_price += (parseInt(show_buy_list[i]['quanity']).toFixed(2)) * (parseFloat(show_buy_list[i]['price'].toFixed(2)));
        amount_price += (parseInt(show_buy_list[i]['quanity']).toFixed(2)) * (parseFloat(show_buy_list[i]['price'].toFixed(2)));
        amount.innerHTML = '$' + amount_price.toFixed(2);
        console.log(typeof (total_price));
        qty_all += parseInt(show_buy_list[i]['quanity']);
        console.log(qty_all);
        qty_2.innerHTML = qty_all;
    }
    total_price = total_price + (parseFloat(show_buy_list[0]['freight']));
    total.innerHTML = '$' + total_price.toFixed(2);
};
// localStorage.clear();
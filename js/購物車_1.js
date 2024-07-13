let cart_list = document.querySelector('.cart_list')
var show_buy_list = [];
var show_buy_list_json;
let judge = 1;
let counter = document.querySelector('.counter')
let total = document.querySelector('.total');
let qty_2 = document.querySelector('.qty_2');
let total_price = 0;
let qty_all = 0;
let item_price;
let freight = document.querySelector('.freight');
let amount = document.querySelector('.amount');
let amount_price = 0;
let href2=document.querySelector('.href2')
if (localStorage.getItem('test_4')) {
    show_buy_list = JSON.parse(localStorage.getItem('test_4'));
}
console.log(show_buy_list)
show_cart_list();
shoplist_null();
addbtn();
minusbtn();
list_empty();
function show_cart_list() {
    for (i = 0; i < show_buy_list.length; i++) {
        cart_list.innerHTML += `
        <hr>
    <div class="row align-items-center my-4">
                <div class="col-6  me-auto ">
                    <div class="row gx-0">
                        <div class="col-auto mx-2">
                            <img src=${show_buy_list[i]['img']}
                            alt="" class="rounded-circle">
                        </div>

                        <div class="col-2 col-sm d-flex align-items-center">
                            <div class="user-t t-1 col col-md-7">${show_buy_list[i]['name']}
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
                                <li id="minus_${i+1}"class="minus_btn"><input type="button" value="-" class="minus_btn minus_c_${i+1}"()"/></li>
                                <li id="countnum_${i+1}"class="item-quantity">${show_buy_list[i]['quanity']}</li>
                                <li id="plus_${i+1}"class="plus_btn"><input  type="button" value="+" class="plus_btn plus_c_${i+1}"()"/></li>
                            </ul>
                        </div>
                        <div class="price_${i+1} col-auto align-content-center price t-1 p-0 pe-3 ">$${show_buy_list[i]['quanity']*show_buy_list[i]['price']}</div>
                    </div>
                </div>
            </div>
            `;
    }

};

function reset() {
    show_buy_list_json = JSON.stringify(show_buy_list);
    localStorage.setItem('test_4', show_buy_list_json);
    clear_item();
    show_item();
    cart_list.innerHTML = '';
    show_cart_list();
};

function clear_item() {
    for (i = 0; i < show_buy_list.length; i++) {
        console.log(show_buy_list[i]);
        total_price = 0;
        freight.innerHTML='';
        amount_price = 0;
        total.innerHTML = '';
        qty_2.innerHTML = '';
        console.log(typeof (total_price));
        qty_all = 0;
        console.log(qty_all);
        amount.innerHTML = '';
    }
};

function shoplist_null() {
    show_buy_list_json = JSON.stringify(show_buy_list);
    localStorage.setItem('test_4', show_buy_list_json);
    if (show_buy_list.length == 0) {
        clear_item();
    } else {
        show_item();
    }
};

function show_item() {
    for (i = 0; i < show_buy_list.length; i++) {
            freight.innerHTML = '$' + 0;
            console.log(show_buy_list[i]);
            total_price += (parseInt(show_buy_list[i]['quanity']).toFixed(2)) * (parseFloat(show_buy_list[i]['price'].toFixed(2)));
            amount_price += (parseInt(show_buy_list[i]['quanity']).toFixed(2)) * (parseFloat(show_buy_list[i]['price'].toFixed(2)));
            amount.innerHTML = '$' + amount_price.toFixed(2);
            console.log(typeof (total_price));
            qty_all += parseInt(show_buy_list[i]['quanity']);
            console.log(qty_all);
            qty_2.innerHTML = qty_all;
        }
        total.innerHTML = '$' + total_price.toFixed(2);
};

function addbtn() {
    cart_list.addEventListener('click', function (e) {
        if (e.target.classList.contains('plus_btn')) {
            for (i = 0; i < show_buy_list.length; i++) {
                if ((e.target.classList.contains(`plus_c_${i+1}`)) == true) {
                    console.log(i);
                    console.log(show_buy_list[i]['quanity']);
                    show_buy_list[i]['quanity'] = show_buy_list[i]['quanity'] + 1;
                    document.getElementById(`countnum_${i+1}`).innerHTML = show_buy_list[i]['quanity'];
                    show_buy_list_json = JSON.stringify(show_buy_list);
                    localStorage.setItem('test_4', show_buy_list_json);
                    reset();
                }
            };
        }

    })
}

function minusbtn() {
    cart_list.addEventListener('click', function (e) {
        if (e.target.classList.contains('minus_btn')) {
            for (i = 0; i < show_buy_list.length; i++) {
                if ((e.target.classList.contains(`minus_c_${i+1}`)) == true) {
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
                        document.getElementById(`countnum_${i+1}`).innerHTML = show_buy_list[i]['quanity'];
                        show_buy_list_json = JSON.stringify(show_buy_list);
                        localStorage.setItem('test_4', show_buy_list_json);
                        reset();
                    }
                }
            };
            if (show_buy_list.length == 0) {
                console.log('true');
                total_price = 0;
                total.innerHTML = '';
                qty_2.innerHTML = '';
                console.log(typeof (total_price));
                qty_all = 0;
                freight.innerHTML='';
                console.log(qty_all);
                amount.innerHTML = '';
                
            }

        }

    })
};
function list_empty(){
    href2.addEventListener('click',function(){
        if(show_buy_list.length==0){
            window.alert('購物車是空的請返回首頁購物')
        }else{
            href2.href="./第二頁.html";
        }
        
    })
    
}
// localStorage.clear();
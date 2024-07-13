let total_price = 0;
let qty_all = 0;
let total = document.querySelector('.total');
let qty_2 = document.querySelector('.qty_2');
let amount = document.querySelector('.amount');
var show_buy_list = [];
var show_buy_list_json;
let amount_price = 0;
let freight_p;
let check_list = [];
let freight = document.querySelector('.freight');
let delivery_method_all = document.querySelectorAll('.delivery_method');
if (localStorage.getItem('test_4')) {
    show_buy_list = JSON.parse(localStorage.getItem('test_4'));
};
console.log(('freight',show_buy_list[0]['freight']));
show_item();
frieghter_switch();

console.log();
checked();

function checked() {
    if (show_buy_list[0]['freight'] == 60) {
        document.querySelector('.delivery').checked = true
    } else if (show_buy_list[0]['freight'] == 30) {
        document.querySelector('.convenient').checked = true
    }
}

function frieghter_switch() {
    if(show_buy_list[0]['freight']==0){
        show_buy_list.forEach((item) => {
            console.log(item['freight']);
            item['freight'] = 30;
            show_buy_list_json = JSON.stringify(show_buy_list);
            localStorage.setItem('test_4', show_buy_list_json);
            clear_item();
            show_item();
        })
    }
    delivery_method_all.forEach((item, index) => {
        console.log('index', index);
        // console.log(show_buy_list[index]);
        // show_buy_list[index]['freight']=freight_p;
        item.addEventListener('click', function () {

            if (item.value == '黑貓宅配') {
                console.log('黑貓宅配');
                console.log('index', index);
                freight_p = parseFloat(60.00)
                console.log('freight_p', freight_p);
                console.log('freight_p_type', typeof (freight_p));
                show_buy_list.forEach((item) => {
                    console.log(item['freight']);
                    item['freight'] = 60;
                    show_buy_list_json = JSON.stringify(show_buy_list);
                    localStorage.setItem('test_4', show_buy_list_json);
                    clear_item();
                    show_item();
                })
            }
            if (item.value == '超商店到店') {
                console.log('超商店到店');
                console.log('index', index);
                freight_p = parseFloat(30.00)
                console.log('freight_p', freight_p);
                console.log('freight_p_type', typeof (freight_p));
                show_buy_list.forEach((item) => {
                    console.log(item['freight']);
                    item['freight'] = 30;
                    show_buy_list_json = JSON.stringify(show_buy_list);
                    localStorage.setItem('test_4', show_buy_list_json);
                    clear_item();
                    show_item();
                })
                // show_buy_list[item]['freight']= 30;
                // show_buy_list_json = JSON.stringify(show_buy_list);
                // localStorage.setItem('test_4', show_buy_list_json);
                // clear_item();
                // show_item();
            }
            // show_buy_list_json = JSON.stringify(show_buy_list);
            // localStorage.setItem('test_4', show_buy_list_json);

        })

    });



}

function show_item() {
    for (i = 0; i < show_buy_list.length; i++) {
        freight.innerHTML = '$' + (parseInt(show_buy_list[0]['freight']).toFixed(2));
        console.log(show_buy_list[i]);
        total_price += (parseInt(show_buy_list[i]['quanity']).toFixed(2)) * (parseFloat(show_buy_list[i]['price'].toFixed(2)));
        amount_price = total_price;
        amount.innerHTML = '$' + amount_price.toFixed(2);
        console.log(typeof (total_price));
        qty_all += parseInt(show_buy_list[i]['quanity']);
        console.log(qty_all);
        qty_2.innerHTML = qty_all;
    }
    total_price = total_price + (parseFloat(show_buy_list[0]['freight']));
    total.innerHTML = '$' + total_price.toFixed(2);
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
// localStorage.clear();
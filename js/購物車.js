let items_card = document.querySelector('.items_card');
let item_card_all = document.querySelector('.item_card_all');
let item_num = 0; //用來切商品品項編號！！之後有時間想做！！;
let main_items_card = document.querySelector('.main_items_card');
let main_items_card_area = document.querySelector('.main_items_card_area');
let jump_window = document.querySelector('.jump_window')
let body = document.querySelector('.body')
var show_buy_list = [];
var show_buy_list_json;
let item_list = [{
        name: "Butter Caramel Mille-Feuille – Japan",
        img: './img_購物車首頁/drinks/2.jpeg',
        item: "Starbucks holiday drinks ",
        viewer: 14,
        price: 20.00,
        quanity: 1,
        freight: 0,
    },
    {
        name: "Aurora Chamomile Tea Relaxer – South Korea",
        img: "./img_購物車首頁/drinks/1.jpeg",
        item: "Beverages",
        viewer: 4,
        price: 13.00,
        quanity: 1,
        freight: 0,
    },
    {
        name: "Caramel Brulée Latte – U.S.andCanada ",
        img: "./img_購物車首頁/drinks/3.jpeg",
        item: "Beverages",
        viewer: 5,
        price: 16.00,
        quanity: 1,
        freight: 0,
    },
    {
        name: "Dolce Strawberry Milk – South Korea ",
        img: "./img_購物車首頁/drinks/8.webp",
        item: "Beverages",
        viewer: 10,
        price: 17.00,
        quanity: 1,
        freight: 0,
    },
    {
        name: "Caramel Waffle Latte – Europe, Middle East and Africa ",
        img: "./img_購物車首頁/drinks/4.jpeg",
        item: "Beverages",
        viewer: 12,
        price: 10.00,
        quanity: 1,
        freight: 0,
    },
    {
        name: "Chestnut Praline Latte – U.S., Canada",
        img: "./img_購物車首頁/drinks/8.jpeg",
        item: "Beverages",
        viewer: 10,
        price: 12.00,
        quanity: 1,
        freight: 0,
    },
    {
        name: "Gingerbread Latte – Asia, Japan, Europe, Middle East and Africa",
        img: "./img_購物車首頁/drinks/6.jpeg",
        item: "Beverages",
        viewer: 10,
        price: 10.00,
        quanity: 1,
        freight: 0,
    },
    {
        name: "Cranberry White Mocha – Latin America and Caribbean",
        img: "./img_購物車首頁/drinks/7.jpeg",
        item: "Beverages",
        viewer: 11,
        price: 17.00,
        quanity: 1,
        freight: 0,
    },
    {
        name: "Creme Brulée Latte – Japan",
        img: "./img_購物車首頁/drinks/9.jpeg",
        item: "Beverages",
        viewer: 19,
        price: 15.00,
        quanity: 1,
        freight: 0,
    },
];
console.log(item_list.length);
if (localStorage.getItem('test_4')) {
    show_buy_list = JSON.parse(localStorage.getItem('test_4'));
}
showitem();
show_buy();

function showitem() {
    for (i = 0; i < item_list.length; i++) {
        if (i == 0) {
            main_items_card.innerHTML = `
        <div class="col-12 p-0 mb-4">
        <div class="row m-0 p-0 ">
            <div class="col-12 col-lg-6 img mb-3">
                <div class="row justify-content-center justify-content-lg-start">
                    <div class="col-9 col-xs-10 col-sm-9 col-lg-8 p-0">

                        <img src=${item_list[i]['img']} class="w-100 rounded shadow" alt="">
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 content m-0 p-0">
                <div class="row justify-content-center justify-content-lg-start">
                    <div class="col-9 col-xs-10 col-sm-9 col-lg-12 p-0 m-0">
                        <p class="text-start text-lg-start t-c-primary mb-2"> ${item_list[i]['item']}</p>
                        <h3 class="text-start text-lg-start text-wrap w-100">${item_list[i]['name']}</h3>
                        <div class="middle-area d-flex justify-content-start mb-2">
                            <div class="star-area d-flex align-items-center  pe-1 pe-xs-3">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <div class="sub-t  d-flex ">
                                <p class="  t-3 m-0 d-flex align-items-center"> ${item_list[i]['viewer']} viewers</p>
                                <div class="social d-flex align-items-center">
                                    <p class="  p-1 m-0 d-flex align-items-center">|</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor"
                                        class="bi bi-twitter d-flex align-items-center ms-1"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" class="bi bi-facebook ms-1"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" class="bi bi-chat-fill ms-1"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                        <div class="text-area mb-3">
                            The new Butter Caramel Mille-Feuille is inspired by the buttery
                            layers
                            of the French mille-feuille pastry. The drink combines the
                            crispy,
                            crunchy texture of pie crust with rich, sweet custard sauce and
                            butter
                            caramel sauce, topped with whipped cream and a drizzle of butter
                            caramel. Available hot and blended.
                        </div>
                        <div class="middle-area-2 ">
                            <div class="row align-items-center">
                                <div
                                    class="col-sm-8  col-12   temp-area pe-1 d-flex align-items-center">
                                    <div class="temp-area d-flex my-2">
                                        <div class="form-check-2">
                                            <input class="form-check-input ms-0" type="radio"
                                                name="flexRadioDefault-2" id="hot">
                                            <label class="form-check-label t-3" for="hot">
                                                Hot
                                            </label>
                                        </div>
                                        <div class="form-check-2">
                                            <input class="form-check-input ms-1" type="radio"
                                                name="flexRadioDefault-2" id="warm">
                                            <label class="form-check-label t-3" for="warm">
                                                Warm
                                            </label>
                                        </div>
                                        <div class="form-check-2">
                                            <input class="form-check-input ms-1" type="radio"
                                                name="flexRadioDefault-2" id="cold" checked>
                                            <label class="form-check-label t-3" for="cold">
                                                Cold
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-0 m-0 col-sm-4  col-12  size-area m-sm-0 ">
                                    <div class="row m-0 p-0">
                                        <div class="col-12 p-0 m-0 ">
                                            <div
                                                class="row m-0 p-0 justify-content-sm-end justify-content-start ">
                                                <div
                                                    class="col-sm-4 col-md-5 col-lg-7 col-3  d-flex align-items-center justify-content-start justify-content-sm-end">
                                                    <p class="  m-0  p-0 t-1  d-inline text-lg-end">
                                                        size
                                                    </p>
                                                </div>
                                                <div class="col-sm-8 col-md-7 col-lg-5 col-3 p-0  ">
                                                    <select class="form-select"
                                                        aria-label="Default select example"
                                                        style="width: fit-content;">
                                                        <option selected>size</option>
                                                        <option value="1">大</option>
                                                        <option value="2">中</option>
                                                        <option value="3">小</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="my-2">
                        <div class="col-12 but-area d-flex align-items-center justify-content-between">
                             <h3 class="col-4 mb-0">$ ${parseFloat(item_list[i]['price']).toFixed(2)}</h3>
                            <div class="col-8 d-flex justify-content-end">
                                <button type="button"
                                    class="cart_btn btn btn_${i+1} btn-success btn-bg-c-primary border-0">+</button>
                                <div class="form-check3 d-flex align-items-center p-3">
                                    <input class="form-check-input3" type="checkbox" value="" id="like" hidden>
                                    <label class="form-check-label" for="like">
                                        <span
                                            class="p-3 bg-secondary bg-opacity-10 rounded-circle border"
                                            style="cursor: pointer;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" fill="currentColor"
                                                class="bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                            </svg>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
        } else {
            items_card.innerHTML += `
        <div  class="col-12 col-lg-3 card-3 mb-3 item p-0 pe-2">
                            <div class="row justify-content-center m-0 p-0">
                                <div class="col-9 col-xs-10 col-sm-9 col-lg-12 p-0">
                                    <div class="card border-0 w-100 p-0  ">
                                        <img src=${item_list[i]['img']} class="card-img-top " alt="...">
                                        <div class="card-body p-3 t-3 ">
                                            <p class="card-text my-1 t-c-primary">
                                            ${item_list[i]['item']}
                                            <h3 class="my-3 text-wrap text-area text-area-4 "> ${item_list[i]['name']}</h3>
                                            <div class="col-12">
                                                <div class="row">
                                                    <span class="col-5 d-flex align-items-center price">$ ${parseFloat(item_list[i]['price']).toFixed(2)}</span>
                                                    <div class="col-7 d-flex justify-content-end">
                                                        <button type="button"
                                                            class="cart_btn  btn_${i+1}  btn btn-success btn-bg-c-primary border-0">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
        }
    }
}

function judge_same() {
    for (k = 0; k < show_buy_list.length; k++) {
        for (j = k + 1; j < show_buy_list.length; j++) {
            if (show_buy_list[k]['name'] == show_buy_list[j]['name']) {
                if (show_buy_list[0]['quanity'] == 0) {
                    show_buy_list[0]['quanity'] = 1;
                }
                show_buy_list.splice(show_buy_list.length - 1, 1)
                console.log('有一樣');
                console.log('new', show_buy_list);
                console.log(show_buy_list_json);
                jump_window.style.display = 'block';
                close_window();
            }
        }
        show_buy_list_json = JSON.stringify(show_buy_list);
        localStorage.setItem('test_4', show_buy_list_json);
    }

};

function show_buy() {
    main_items_card_area.addEventListener('click', function (event) {
        if (event.target.classList.contains('cart_btn')) {
            console.log('買買有點到');
            for (i = 0; i < item_list.length; i++) {
                if ((event.target.classList.contains(`btn_${i+1}`)) == true) {
                    console.log('買買有點到2');
                    console.log(i);
                    show_buy_list.push(item_list[i]);
                    console.log(show_buy_list);
                    judge_same();

                }
            };
        }

    })
}

function close_window() {
    jump_window.addEventListener('click', function (e) {
        if (e.target.classList.contains('false')) {
            jump_window.style.display = 'none'
        }
    })
};
// localStorage.clear();
// FIREBASE
var config = {
    apiKey: "AIzaSyDwQzCo64urWz_7FJ6XX6WCRl16QkQ0CKQ",
    authDomain: "maboutique-b5f84.firebaseapp.com",
    databaseURL: "https://maboutique-b5f84.firebaseio.com",
    projectId: "maboutique-b5f84",
    storageBucket: "maboutique-b5f84.appspot.com",
    messagingSenderId: "389731096141"
};
firebase.initializeApp(config);

// GLOBAL
var products=[];
var cartItems=[];
var cart_n = document.getElementById('cart_n');

//DIVS
var crchienDIV= document.getElementById("crchienDIV");
var frchienDIV= document.getElementById("frchienDIV");
var crchatDIV= document.getElementById("crchatDIV");
var frchatDIV= document.getElementById("frchatDIV");

//INFORMATION
var CROQUETTE_CHIEN=[
    {name:'biofood' ,price:5},
    {name:'nutdoglamb' ,price:7},
    {name:'friskies' ,price:10},
    {name:'pedigree' ,price:12},
    {name:'ultima' ,price:20},
    {name:'mixcarne' ,price:15}
];
var FRIANDISES_CHIEN=[
    {name:'biscrok' ,price:10},
    {name:'delibakie' ,price:13},
    {name:'dibo' ,price:11},
    {name:'entenbrust' ,price:9},
    {name:'figo' ,price:7},
    {name:'goodie' ,price:12}
];
var CROQUETTE_CHAT=[
    {name:'cat_chow' ,price:25},
    {name:'one' ,price:10},
    {name:'felix' ,price:5},
    {name:'nutrivia' ,price:13},
    {name:'ultma' ,price:30},
    {name:'perfect_fit' ,price:7}
];
var FRIANDISES_CHAT=[
    {name:'catifaction1' ,price:15},
    {name:'crossiers' ,price:31},
    {name:'pla_wiskas' ,price:16},
    {name:'plaisir' ,price:20},
    {name:'felix_crispies' ,price:7},
    {name:'dreamies' ,price:5}
];

//HTML
function HTMLchienProduct(con) {
    let URL = `img/crchien/chien${con}.jpg`;
    let btn = `btnchien${con}`;
    return `
          <div class="col-md-4">
                <div class="card md-4 shadow-sm">
                        <img class="card-image-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                        <div class="card-body"> 
                             <i style="color: orange;" class="fa fa-star"></i>   
                            <i style="color: orange;" class="fa fa-star"></i>
                            <i style="color: orange;" class="fa fa-star"></i>
                            <i style="color: orange;" class="fa fa-star"></i>
                            <i style="color: orange;" class="fa fa-star"></i>
                            <p class="card-text">${CROQUETTE_CHIEN[con-1].name}</p>
                            <p class="card-text">Price: ${CROQUETTE_CHIEN[con-1].price}.00</p>
                            <div class="d-flex justy-content-between align-item-center">
                                <div class="btn-group">
                                    <button type="button" onclick="cart2('${CROQUETTE_CHIEN[con-1].name}',
                                    '${CROQUETTE_CHIEN[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                                       <a style="color: inherit;" href="cart.html">Buy</a>
                                    </button>
                                    <button  id="${btn}" type="button" onclick="cart('${CROQUETTE_CHIEN[con-1].name}',
                                           '${CROQUETTE_CHIEN[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                                           And to cart
                                    </button>
                                    
                               </div>
                                     <small class="text-muted">&nbsp;&nbsp;&nbsp;&nbsp;  Free shipping</small>
                            </div>
                        </div>
                </div>
          </div>
`
}
function HTMLchienneProduct(con) {
    let URL = `img/frchien/chienne${con}.jpg`;
    let btn = `btnchienne${con}`;
    return `
          <div class="col-md-4">
                <div class="card md-4 shadow-sm">
                        <img class="card-image-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                        <div class="card-body"> 
                             <i style="color: orange;" class="fa fa-star"></i>   
                            <i style="color: orange;" class="fa fa-star"></i>
                            <i style="color: orange;" class="fa fa-star"></i>
                            <i style="color: orange;" class="fa fa-star"></i>
                            <i style="color: orange;" class="fa fa-star"></i>
                            <p class="card-text">${FRIANDISES_CHIEN[con-1].name}</p>
                            <p class="card-text">Price: ${FRIANDISES_CHIEN[con-1].price}.00</p>
                            <div class="d-flex justy-content-between align-item-center">
                                <div class="btn-group">
                                    <button type="button" onclick="cart2('${FRIANDISES_CHIEN[con-1].name}',
                                    '${FRIANDISES_CHIEN[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                                        <a style="color: inherit;" href="cart.html">Buy</a>
                                    </button>
                                    <button  id="${btn}" type="button" onclick="cart('${FRIANDISES_CHIEN[con-1].name}',
                                           '${FRIANDISES_CHIEN[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                                           And to cart
                                    </button>
                                    
                               </div>
                                     <small class="text-muted">&nbsp;&nbsp;&nbsp;&nbsp;  Free shipping</small>
                            </div>
                        </div>
                </div>
          </div>
`
}

function HTMLchatProduct(con) {
    let URL = `img/crchat/chat${con}.jpg`;
    let btn = `btnchat${con}`;
    return `
          <div class="col-md-4">
                <div class="card md-4 shadow-sm">
                        <img class="card-image-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                        <div class="card-body"> 
                             <i style="color: orange;" class="fa fa-star"></i>   
                            <i style="color: orange;" class="fa fa-star"></i>
                            <i style="color: orange;" class="fa fa-star"></i>
                            <i style="color: orange;" class="fa fa-star"></i>
                            <i style="color: orange;" class="fa fa-star"></i>
                            <p class="card-text">${CROQUETTE_CHAT[con-1].name}</p>
                            <p class="card-text">Price: ${CROQUETTE_CHAT[con-1].price}.00</p>
                            <div class="d-flex justy-content-between align-item-center">
                                <div class="btn-group">
                                    <button type="button" onclick="cart2('${CROQUETTE_CHAT[con-1].name}',
                                    '${CROQUETTE_CHAT[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                                        <a style="color: inherit;" href="cart.html">Buy</a> 
                                    </button>
                                    <button  id="${btn}" type="button" onclick="cart('${CROQUETTE_CHAT[con-1].name}',
                                           '${CROQUETTE_CHAT[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                                           And to cart
                                    </button>
                                    
                               </div>
                                     <small class="text-muted">&nbsp;&nbsp;&nbsp;&nbsp;  Free shipping</small>
                            </div>
                        </div>
                </div>
          </div>
`
}


function HTMLchateProduct(con) {
    let URL = `img/frchat/chate${con}.jpg`;
    let btn = `btnchate${con}`;
    return `
          <div class="col-md-4">
                <div class="card md-4 shadow-sm">
                        <img class="card-image-top" style="height:16rem;" src="${URL}" alt="Card image cap">
                        <div class="card-body"> 
                             <i style="color: orange;" class="fa fa-star"></i>   
                            <i style="color: orange;" class="fa fa-star"></i>
                            <i style="color: orange;" class="fa fa-star"></i>
                            <i style="color: orange;" class="fa fa-star"></i>
                            <p class="card-text">${FRIANDISES_CHAT[con-1].name}</p>
                            <p class="card-text">Price: ${FRIANDISES_CHAT[con-1].price}.00</p>
                            <div class="d-flex justy-content-between align-item-center">
                                <div class="btn-group">
                                    <button type="button" onclick="cart2('${FRIANDISES_CHAT[con-1].name}',
                                    '${FRIANDISES_CHAT[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                                       <a style="color: inherit;" href="cart.html">Buy</a> 
                                    </button>
                                    <button  id="${btn}" type="button" onclick="cart('${FRIANDISES_CHAT[con-1].name}',
                                           '${FRIANDISES_CHAT[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                                           And to cart
                                    </button>
                                    
                               </div>
                                     <small class="tex-muted">&nbsp;&nbsp;&nbsp;&nbsp;  Free shipping</small>
                            </div>
                        </div>
                </div>
          </div>
`
}
//  ANIMATION FUNCTION

function animation(){
    const toast=swal.mixin({
        toast:true,
        position:'top-end',
        showConfirmButtom:false,
        time:1000
    });
    toast({
        type:'success',
        title: 'Added to shopping cart'
    });
}

// CART FUNCTON
function cart(name,price,url,com,btncart) {
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage= JSON.parse(localStorage.getItem("cart"));
    if (storage==null){
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products= JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
        }
    products= JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
}
function cart2(name,price,url,con,btncart) {
    var item={
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage= JSON.parse(localStorage.getItem("cart"));
    if (storage==null){
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products= JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    }
    products= JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display="none";
    animation();
}

// RENDER
function render() {
    for (let index = 1; index <= 6; index++) {
        crchienDIV.innerHTML+=`${HTMLchienProduct(index)}`;

    }
        for (let index = 1; index <= 6; index++) {
            frchienDIV.innerHTML+=`${HTMLchienneProduct(index)}`;

        }
    for (let index = 1; index <= 6; index++) {
        crchatDIV.innerHTML+=`${HTMLchatProduct(index)}`;
        frchatDIV.innerHTML+=`${HTMLchateProduct(index)}`;
        }
    if (localStorage.getItem("cart")==null) {

    } else {
        products=JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML=`[${products.length}`;
    }
};









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
var d = new Date();
var t= d.getTime();
var counter=t;

//FORM
document.getElementById("form").addEventListener("submit",(e)=>{
    var order= document.getElementById("order").value;
    var total= document.getElementById("total").value;
    e.preventDefault();
    createOrder(order,total);
    form.reset();
});
// CREATE NEW ORDER
function createOrder(order,total) {
    console.log(counter);
    counter+=1;
    console.log(counter);
    var newOrder={
        id:counter,
        order:order,
        total:total
    };
    let db= firebase.database().ref("order/"+counter);
    db.set(newOrder);
    document.getElementById("cardSection").innerHTML='';
    readOrder();
}      

function readOrder() {
    var order = firebase.database().ref("order/");
    order.on("child_added",function (data) {
       var orderValue= data.val();
       document.getElementById("cardSection").innerHTML+=`
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">Order: ${orderValue.order}</h5>
                        <p class="card-text">Total: ${orderValue.total}</p>
                        <button type="submit" style="color: white;" class="btn btn-warning" 
                        onclick="updateOrder(${orderValue.id},'${orderValue.order}','${orderValue.total}')">
                            <i class="fas fa-edit"></i>  Edit Order
                        </button>
                        <button type="submit"  class="btn btn-danger" onclick="updateOrder(${orderValue.id})">
                            <i class="fas fa-trash"></i>  Delete Order
                        </button>
                </div>
            </div>            
       `
    });
 };
function reset() {
    document.getElementById("firstSection").innerHTML=`
        <form class="border p-4 mb-4" id="form">
                        <div class="form-group">
                            <label>Order</label>
                            <input type="text" class="form-control" id="order" placeholder="order">
                        </div>
                        <div class="form-group">
                            <label>Total</label>
                            <input type="text" class="form-control" id="total" placeholder="total">
                        </div>
                        <button type="submit" id="button1" class="btn btn-primary">
                            <i class="fas fa-plus"></i> Add Order
                        </button>
                        <button style="display: none" id="button2" class="btn btn-success">
                            Update Order
                        </button>
                        <button style="display: none" id="button3" class="btn btn-success">
                            Cancel
                        </button>
                    </form>
      `;


     document.getElementById("form").addEventListener("submit",(e)=>{
    var order= document.getElementById("order").value;
    var total= document.getElementById("total").value;
    e.preventDefault();
    createOrder(order,total);
    form.reset();
});
}
function updateOrder(id,order,total) {
    document.getElementById("firstSection").innerHTML=`
                <form class="border p-4 mb-4" id="form">
                        <div class="form-group">
                            <label>Order</label>
                            <input type="text" class="form-control" id="order" placeholder="order">
                        </div>
                        <div class="form-group">
                            <label>Total</label>
                            <input type="text" class="form-control" id="total" placeholder="total">
                        </div>
                       
                        <button style="display: none" id="button1" class="btn btn-primary" type="submit">
                            <i class="fas fa-plus"></i> Add Order
                        </button>
                        <button  id="button2" class="btn btn-success">
                            Update Order
                        </button>
                        <button id="button3" class="btn btn-success">
                            Cancel
                        </button>
                    </form>
    `;
    document.getElementById("form").addEventListener("submit",(e)=>{
        e.preventDefault();
        });
    document.getElementById("button1").addEventListener("click",(e)=>{
        reset();
    });
    document.getElementById("button2").addEventListener("click",(e)=>{
        updateOrder2(id,document.getElementById("order").value,document.getElementById("total").value);
    });
    document.getElementById("order").value=order;
    document.getElementById("total").value=total;

}
function updateOrder2(id,order,total) {
    var orderUpdared={
        id:id,
        order:order,
        total:total
    }
    let db=firebase.database().ref("order/"+id);
    db.set(orderUpdared);
    document.getElementById("cardSection").innerHTML="";
    readOrder();
    reset();
}

function deleteOrder(id) {
    console.log(id);
    var order=firebase.database().ref("order/"+id);
    order.remove();
    reset();
    document.getElementById("cardSection").innerHTML="";
    readOrder();
}


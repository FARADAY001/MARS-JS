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
function renderTable() {
    var order= firebase.database().ref("order/");
    order.on("child_added",function (data) {
        var orderValue =data.val();
        document.getElementById("table").innerHTML+=`
           <tr>
               <td> ${orderValue.id}</td>
               <td> ${orderValue.order}</td>
               <td> ${orderValue.total}</td>
           </tr> 
        `;
    });
};
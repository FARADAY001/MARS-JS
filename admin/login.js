 var x = document.getElementById("email");
var p = document.getElementById("password");

document.getElementById("form").addEventListener("submit",(ee)=>{
    ee.preventDefault();
    console.log(x.value);
    console.log(p.value);
    if (x.value== "jeanmichael2909@gmail.com" && p.value=="nan"){
        swal({
            title:'welcome',
            html:'Accesss granted',
            type:'success'
        });
        setTimeout(() =>{
            loadPage();
        }, 3000);
    }else {
        swal({
            title: 'ERRor',
            html: 'Accesss denied',
            type: 'error'
        });
    }
    function loadPage() {
        window.location.href="./admin.html";
    }
});
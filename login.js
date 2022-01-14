const arr = [];

document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("btnUser").addEventListener("click", aceptUser);

});

function aceptUser(){
    let user = document.getElementById("u_ser").value;
    
    if(user){
        arr.push({
            "name" :  user,
            "score" : 0,
            }); 

        localStorage.setItem("Data", JSON.stringify(arr));
        window.location = "index.html";
    }else{
        alert("Debes ingresar un usuario")
    }

    
}


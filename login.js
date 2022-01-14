const arr = [];

document.addEventListener("DOMContentLoaded", function(e){
    //Agrego evento click al botón de aceptar
    document.getElementById("btnUser").addEventListener("click", aceptUser);
});
//Función que toma el nombre de usuario y lo guarda en un localStorage con un score definido en 0 al principio
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


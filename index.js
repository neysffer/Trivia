import { data } from "./data_questions/data.js";

const data_quest = data;
const arr = [];

let controlLevel = 0;
let actualLevel = 1;
let id;
let theRandom;
let puntaje = 0;
let data_user = localStorage.getItem("Data")
let theUser = JSON.parse(data_user);

console.log(data_user)

document.addEventListener("DOMContentLoaded", function (e) {
    if(data_user == null){
        alert("Ingrese un usuario");
        window.location = "login.html"
    } 

    if(controlLevel <= 5){
        random();
    }

    if(theUser.score !== 0){
        document.getElementById("theBestScore").innerHTML = theUser[0].name + "-" + theUser[0].score;
    }
        
        let cont = 0; 
        console.log(theUser)

        document.getElementById("preguntas").innerHTML = theRandom.quest;
        document.getElementById("category").innerHTML = "Categoría:" + " "  + theRandom.category;
        document.getElementById("level").innerHTML = "Nivel:" + " "  + actualLevel;
        document.getElementById("score").innerHTML = "Puntaje:" + " "  + puntaje;
        document.getElementById("localUser").innerHTML = "Usuario:" + " "  + theUser[0].name;

            for(let i = 0; i <= theRandom.options.length; i++){
                if(cont == 0){
                    document.getElementById("btn1").innerHTML = theRandom.options[cont];
                    cont ++
                }else if(cont == 1){
                    document.getElementById("btn2").innerHTML = theRandom.options[cont];
                    cont ++
                }else if(cont == 2){
                    document.getElementById("btn3").innerHTML = theRandom.options[cont];
                    cont++
                }else if(cont == 3){
                    document.getElementById("btn4").innerHTML = theRandom.options[cont];
                }       
            }

    document.getElementById("btn1").addEventListener("click", function(){
        id = "btn1"
        selecCorrectQuest(id);
    });
    document.getElementById("btn2").addEventListener("click", function(){
        id = "btn2"
        selecCorrectQuest(id);
    });
    document.getElementById("btn3").addEventListener("click", function(){
        id = "btn3"
        selecCorrectQuest(id);
    });
    document.getElementById("btn4").addEventListener("click", function(){
        id = "btn4"
        selecCorrectQuest(id);
    });

    document.getElementById("close").addEventListener("click", closeSession);
 
});

function selecCorrectQuest(id){
    let contentBtn = document.getElementById(id).textContent;
    console.log(contentBtn)

    if(controlLevel == 0){
        if(contentBtn == theRandom.quest_true){
             puntaje += 50;
             controlLevel ++
             actualLevel ++
             addOtherLevels()
         }else{
             confirm("Esa no es la respuesta, vuelve a intentarlo");
             if(confirm){
                 window.location = "index.html"
             }
             
         }
    }else{
        if(contentBtn == theRandom.quest_true){
             puntaje += 50;
             controlLevel ++
             actualLevel ++
             addOtherLevels(id)
         }else{
             arr.push({
                "name" : theUser[0].name,
                "score" : puntaje,
                }); 
                confirm("Esa no es la respuesta, vuelve a intentarlo");
             if(confirm){
                 window.location = "index.html"
             }
            localStorage.setItem("Data", JSON.stringify(arr));
         }
    }
  
}

function random(){
    let aleatorio = Math.floor(Math.random()*(data_quest[controlLevel].length));
    let seleccion = data_quest[controlLevel][aleatorio];
    theRandom = seleccion;
}

function addOtherLevels(){
    if(controlLevel == 5){
        confirm("Felicidades, superaste esta trivia");
        arr.push({
            "name" : theUser[0].name,
            "score" : puntaje,
            }); 
        localStorage.setItem("Data", JSON.stringify(arr));
        window.location = "index.html"
    }else{
        random();
    }
    
    let cont = 0;

    document.getElementById("preguntas").innerHTML = theRandom.quest;
    document.getElementById("category").innerHTML = "Categoría:" + " "  + theRandom.category;
    document.getElementById("level").innerHTML = "Nivel:" + " "  + actualLevel;
    document.getElementById("score").innerHTML = "Puntaje:" + " "  + puntaje;

    for(let i = 0; i <= theRandom.options.length; i++){
        if(cont == 0){
            document.getElementById("btn1").innerHTML = theRandom.options[cont];
            cont ++
        }else if(cont == 1){
            document.getElementById("btn2").innerHTML = theRandom.options[cont];
            cont ++
        }else if(cont == 2){
            document.getElementById("btn3").innerHTML = theRandom.options[cont];
            cont++
        }else if(cont == 3){
            document.getElementById("btn4").innerHTML = theRandom.options[cont];
        }       
    }
}

function closeSession(){
    localStorage.removeItem("Data");
    window.location = "login.html"
}

import dico from './dico.js'

//Inversion des langues de depart

const reverse = document.querySelector(".language h2");
const lOne = document.querySelector("#lOne");
const lTwo = document.querySelector("#lTwo");

reverse.addEventListener("click", () => 
{
    if (lOne.textContent === "Français"){
        lOne.textContent = "Flavienien/Evrestien";
        lTwo.textContent = "Français";
    }else{
        lOne.textContent = "Français";
        lTwo.textContent = "Flavienien/Evrestien";
    }
});

//Traduction

const usrinput = document.querySelector("#translationboxin");
let usroutput = document.querySelector("#translationboxout");

usrinput.addEventListener("input", () => {
    let userinput = usrinput.value.toLowerCase().trim();
    let tr = []

    if (lOne.textContent === "Français"){
        for(let word in dico){
            let translation = dico[word];
    
            if(userinput === word){
                tr.push(translation + "\n");
            }
        }
    }else{
        for(let word in dico){
            let translation = word;
            let start = dico[word];
    
            if(userinput === start){
                tr.push(translation + "\n");
            }
        }
    }
    usroutput.value = tr.toString().replace(",","");
})
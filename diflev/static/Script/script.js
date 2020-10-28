
import dico from './dico.js'

//Inversion des langues de depart

const reverse = document.querySelector(".language h2");
const lOne = document.querySelector("#lOne");
const lTwo = document.querySelector("#lTwo");

function translation() {
    let userinput = usrinput.value.toLowerCase().trim();
    let userinputflev = userinput.replace('i', 'í').replace('â', 'ă').replace('ê', 'ĕ').replace('íí', 'ĭ').replace('ô', 'ŏ').replace('ä', 'ā').replace('ë', 'ē').replace('ï', 'ī').replace('ö', 'ō');
    let tr = []

    if (lOne.textContent === "Français"){
        for(let word in dico){
            let translation = dico[word];
    
            if(userinput === word){
                tr.push(translation + "\n");
            }
        }
    }else{
        usrinput.value = userinputflev;
        usrinput.setAttribute("spellcheck", "false");
        for(let word in dico){
            let translation = word;
            let start = dico[word];
    
            if(userinputflev === start){
                tr.push(translation + "\n");
            }
        }
    }
    usroutput.value = tr.toString().replace(",","");
}

reverse.addEventListener("click", () => 
{
    if (lOne.textContent === "Français"){
        lOne.textContent = "Flavienien/Evrestien";
        lTwo.textContent = "Français";
    }else{
        lOne.textContent = "Français";
        lTwo.textContent = "Flavienien/Evrestien";
    }
    translation();
});

//Traduction

const usrinput = document.querySelector("#translationboxin");
let usroutput = document.querySelector("#translationboxout");

usrinput.addEventListener("input", () => {translation()})
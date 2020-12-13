
import dico from './dico.js'

//Inversion des langues de depart

const reverse = document.querySelector(".language h2");
const lOne = document.querySelector("#lOne");
const lTwo = document.querySelector("#lTwo");

function translation() {
    let userinput = usrinput.value.toLowerCase();
    let tr = [];

    if (lOne.textContent === "Français"){
        userinput = userinput.replace(",", "");
        userinput = userinput.split(" ");
        for(let wordIndex in userinput){
            let word = userinput[wordIndex];
            if (dico.hasOwnProperty(word) === true){
                tr.push(dico[word] + "\n");
            }else{
                tr.push(word + "\n");
            }

        }
    }else{
        usrinput.value = userinput.replace('i', 'í').replace('au', 'ă').replace('eu', 'ĕ').replace('íu', 'ĭ').replace('ou', 'ŏ').replace('aw', 'ā').replace('ew', 'ē').replace('íw', 'ī').replace('ow', 'ō');
        userinput = usrinput.value;
        userinput = userinput.replace(",", "");
        userinput = userinput.split(" ");
        for(let wordIndex in userinput){
            let word = userinput[wordIndex];
            let translations = [];
            if (Object.values(dico).includes(word) === true){
                for (let i in Object.values(dico)){
                    if (Object.values(dico)[i] === word){
                        translations.push(Object.keys(dico)[i])
                    } 
                }
                translations = translations.join(" | ")
                tr.push(translations + "\n")
            }else{
                tr.push(word + "\n");
            }
        }
    }
    usroutput.value = tr.join("");

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
    //usrinput.value = "";
    translation();
});

//Traduction

const usrinput = document.querySelector("#translationboxin");
let usroutput = document.querySelector("#translationboxout");

usrinput.addEventListener("input", () => {translation()})
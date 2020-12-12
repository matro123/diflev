
import dico from './dico.js'

//Inversion des langues de depart

const reverse = document.querySelector(".language h2");
const lOne = document.querySelector("#lOne");
const lTwo = document.querySelector("#lTwo");

function translation() {
    let userinput = usrinput.value.toLowerCase();
    let tr = []

    if (lOne.textContent === "Français"){
        for(let word in dico){
            let translation = dico[word];
            let userinputfr = " " + usrinput.value + " ";
    
            if(userinputfr.includes(" " + word + " ") === true || userinputfr.includes(" " + word + ",") === true || userinputfr.includes(" " + word + ".") === true){
                tr.push(translation + "\n");
            }
        }
    }else{
        usrinput.value = userinput.replace('i', 'í').replace('au', 'ă').replace('eu', 'ĕ').replace('íu', 'ĭ').replace('ou', 'ŏ').replace('aw', 'ā').replace('ew', 'ē').replace('íw', 'ī').replace('ow', 'ō');
        let userinputflev = " " + usrinput.value + " ";
        usrinput.setAttribute("spellcheck", "false");
        for(let word in dico){
            let translation = word;
            let start = dico[word];

            if(userinputflev.includes(" " + start + " ") === true || userinputflev.includes(" " + start + ",") === true || userinputflev.includes(" " + start + ".") === true){
                let t = [translation];
                console.log(t);
                tr.push(translation + "\n");
            }
        }
    }
    usroutput.value = tr.join("")

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
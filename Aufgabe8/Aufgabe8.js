/*
Aufgabe: 8, DynHTML: RandomBoxes
Name: Laura Bongard
Matrikel: 256028
Datum: 08.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", inputWork);
    function inputWork() {
        let input = prompt("Gib eine Zahl zwischen 10 und 100 ein."); //input Variable ruft prompt Box auf
        if (isNaN(parseInt(input)) || parseInt(input) < 10 || parseInt(input) > 100) {
            alert("Deine Eingabe ist falsch.");
            inputWork(); //Rekursion
        }
        else {
            for (let i = 0; i < parseInt(input); i++) {
                initBox(Math.random() * window.innerWidth - 40, Math.random() * window.innerHeight - 40, Math.random() * 360);
            }
        }
    }
    function initBox(_x, _y, _color) {
        let box = document.createElement("div"); //box Variable kreiert div Element
        box.style.width = "40px";
        box.style.height = "40px";
        box.style.backgroundColor = "hsl(" + _color + ", 100%, 50%)";
        box.style.left = _x + "px"; //_x & _y Parameter werden erst bei Funktionsaufruf in input Funktion festgelegt
        box.style.top = _y + "px";
        document.body.appendChild(box); //gezeichnete Box(Child) wird an das Body Element rangeh�ngt
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=Aufgabe8.js.map
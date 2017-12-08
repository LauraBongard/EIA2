/*
Aufgabe: 8, DynHTML: RandomBoxes
Name: Laura Bongard
Matrikel: 256028
Datum: 08.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe8 {

    window.addEventListener("load", inputWork);

    function inputWork(): void {
        let input: string = prompt("Gib eine Zahl zwischen 10 und 100 ein."); //input Variable ruft prompt Box auf

        if (isNaN(parseInt(input)) || parseInt(input) < 10 || parseInt(input) > 100) { //wenn input keine Zahl ist ODER input kleiner 10 ODER input größer 100, dann alert box
            alert("Deine Eingabe ist falsch.");
            inputWork(); //Rekursion
        }
        else { //wenn Zahl zwischen 10 und 100 dann for schleife
            for (let i: number = 0; i < parseInt(input); i++) { //solange i kleiner input Zahl, dann...
                initBox(Math.random() * window.innerWidth - 40, Math.random() * window.innerHeight - 40, Math.random() * 360);
                //ruft initBox Funktion mit folgenden Parametern auf
            }
        }
    }

    function initBox(_x: number, _y: number, _color: number): void { //Unterstrich bezeichnet funktionsinterne Parameter: kommt aus oberer Funktion

        let box: HTMLDivElement = document.createElement("div"); //box Variable kreiert div Element

        box.style.width = "40px";
        box.style.height = "40px";
        box.style.backgroundColor = "hsl(" + _color + ", 100%, 50%)";
        box.style.left = _x + "px"; //_x & _y Parameter werden erst bei Funktionsaufruf in input Funktion festgelegt
        box.style.top = _y + "px";

        document.body.appendChild(box); //gezeichnete Box(Child) wird an das Body Element rangehängt
    }


}
/*
Aufgabe: 9, DynHTML: Erpresserbrief
Name: Laura Bongard
Matrikel: 256028
Datum: 15.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init); // wenn geladen, f�hre init aus
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let currentLetter; //Variable speichert aktuellen Buchstaben
    let writingSection;
    document.addEventListener("keydown", keyboardInput); //Eventlistener wenn Buchstabe gedr�ckt wurde: keydown = event, keyboardinput = eventhandler
    function init() {
        for (let i = 0; i < letters.length; i++) {
            let d = document.createElement("div");
            d.style.width = "2%";
            d.style.padding = "0.3em";
            d.style.border = "1px solid grey";
            d.style.height = "4%";
            d.innerText = letters[i]; //mit innerText = Buchstabe
            d.id = letters[i]; //IDs vergeben um sp�ter ids als currentletter speichern zuk�nnen
            d.className = "letters"; //Klasse "letters" um alle Divs in NodeList speichern zu k�nnen
            d.addEventListener("click", handleMouseClick); //Wenn Buchstabendiv angeklickt dann handleMouseClick
            document.body.appendChild(d); //erstellte Box an Body anh�ngen
        }
        drawWritingSection();
    }
    function handleMouseClick(_event) {
        let s = _event.target;
        s.style.backgroundColor = "lightblue"; //optische Hervorhebung bei angeklicktem Buchstaben
        currentLetter = s.id; //ID des angeklickten Buchstabens in currentLetter speichern
        let listOfDivs = document.getElementsByClassName("letters"); //Jedes Div der Klasse letters in listOfDivs speichern
        for (let i = 0; i < listOfDivs.length; i++) {
            if (currentLetter != listOfDivs[i].id) {
                listOfDivs[i].style.backgroundColor = "white"; //optische Hervorhebung entfernen
            }
        }
    }
    function keyboardInput(event) {
        // PRESS a/A
        if (event.key == "a" || event.key == "A") {
            currentLetter = event.key; //speichere a/A als currentLetter
            setLetter; //setLetter wird ausgef�hrt wenn man auf Mailfeld klickt nachdem Tastendruck
        }
        else if (event.key == "b" || event.key == "B") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "c" || event.key == "C") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "d" || event.key == "D") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "e" || event.key == "E") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "f" || event.key == "F") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "g" || event.key == "G") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "h" || event.key == "H") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "i" || event.key == "I") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "j" || event.key == "J") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "k" || event.key == "K") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "l" || event.key == "L") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "m" || event.key == "M") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "n" || event.key == "N") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "o" || event.key == "O") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "p" || event.key == "P") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "q" || event.key == "Q") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "r" || event.key == "R") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "s" || event.key == "S") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "t" || event.key == "T") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "u" || event.key == "U") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "v" || event.key == "V") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "w" || event.key == "W") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "x" || event.key == "X") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "y" || event.key == "Y") {
            currentLetter = event.key;
            setLetter;
        }
        else if (event.key == "z" || event.key == "Z") {
            currentLetter = event.key;
            setLetter;
        }
    }
    function drawWritingSection() {
        let l = document.createElement("div"); //Div erstellen f�r writing Section
        l.style.width = "855px";
        l.style.height = "300px";
        l.style.border = "2px solid black";
        l.style.marginLeft = "3px";
        l.style.marginTop = "10px";
        l.addEventListener("click", setLetter); //wenn auf writing Section geklickt wird f�hre setLetter aus
        document.body.appendChild(l); //writingSection an body anh�ngen
    }
    function setLetter(_event) {
        let box = document.createElement("div"); //BuchstabenDiv in writingSection erstellen
        box.style.width = "2%";
        box.style.padding = "0.3em";
        box.style.border = "1px solid grey";
        box.style.height = "4%";
        box.style.position = "absolute";
        box.style.backgroundColor = "white";
        box.innerText = currentLetter;
        box.style.left = _event.pageX + "px"; // X-/Y- Koordinaten des Cursors �bernehmen
        box.style.top = _event.pageY + "px";
        box.addEventListener("click", deleteLetter); //wenn auf BuchstabenDiv geklickt wird f�hre deleteLetter aus
        document.body.appendChild(box);
    }
    function deleteLetter(_event) {
        if (_event.altKey == false) {
            return;
        }
        if (_event.altKey == true) {
            let h = _event.target; //dann ist h event target
            document.body.removeChild(h); // h div entfernen
        }
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=Aufgabe9.js.map
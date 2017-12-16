/*
Aufgabe: 9, DynHTML: Erpresserbrief
Name: Laura Bongard
Matrikel: 256028
Datum: 15.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let currentLetter;
    let writingSection;
    document.addEventListener("keydown", keyboardInput);
    document.addEventListener("keypressed", handleAlt);
    function init() {
        for (let i = 0; i < letters.length; i++) {
            let d = document.createElement("div");
            d.style.width = "2%";
            d.style.padding = "0.3em";
            d.style.border = "1px solid grey";
            d.style.height = "4%";
            d.innerText = letters[i];
            d.id = letters[i];
            d.className = "letters";
            d.addEventListener("click", handleMouseClick);
            document.body.appendChild(d);
        }
        drawWritingSection();
    }
    function handleMouseClick(_event) {
        let s = _event.target;
        s.style.backgroundColor = "lightblue";
        currentLetter = s.id;
        let listOfDivs = document.getElementsByClassName("letters");
        for (let i = 0; i < listOfDivs.length; i++) {
            if (currentLetter != listOfDivs[i].id) {
                listOfDivs[i].style.backgroundColor = "white";
            }
        }
    }
    function keyboardInput(event) {
        // PRESS a/A
        if (event.key == "a" || event.key == "A") {
            currentLetter = event.key;
            setLetter;
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
    function handleAlt(event) {
        // PRESS SPACE BAR
        if (event.keyCode == 18) {
            deleteLetter;
        }
    }
    function drawWritingSection() {
        let l = document.createElement("div");
        l.style.width = "855px";
        l.style.height = "300px";
        l.style.border = "2px solid black";
        l.style.marginLeft = "3px";
        l.style.marginTop = "10px";
        l.addEventListener("click", setLetter);
        document.body.appendChild(l);
    }
    function setLetter(_event) {
        let box = document.createElement("div");
        box.style.width = "2%";
        box.style.padding = "0.3em";
        box.style.border = "1px solid grey";
        box.style.height = "4%";
        box.style.position = "absolute";
        box.style.backgroundColor = "white";
        box.innerText = currentLetter;
        box.style.left = _event.pageX + "px";
        box.style.top = _event.pageY + "px";
        box.addEventListener("click", deleteLetter);
        document.body.appendChild(box);
        writingSection = _event.target;
    }
    function deleteLetter(_event) {
        delete "div";
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=Aufgabe9.js.map
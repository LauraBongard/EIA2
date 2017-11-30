/*
Aufgabe: 7, StudiVZ
Name: Laura Bongard
Matrikel: 256028
Datum: 01.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe7;
(function (Aufgabe7) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let dataArray = _input.split(",");
        let studentData = {
            matrikel: parseInt(dataArray[0]),
            lastname: dataArray[1],
            firstname: dataArray[2],
            age: parseInt(dataArray[3]),
            gender: parseInt(dataArray[4]) == 0,
            comment: dataArray[5]
        };
        students.push(studentData);
        let gender;
        if (parseInt(dataArray[4]) == 0) {
            gender = "weiblich";
        }
        else {
            gender = "m�nnlich";
        }
        return "Deine Daten lauten:\n" + "\nMatrikelnummer: " + studentData.matrikel + "\nName: " + studentData.firstname + studentData.lastname + "\nAlter: " + studentData.age + "\nGeschlecht: " + gender + "\nKommentar: " + studentData.comment;
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikel == _matrikel) {
                let gender = students[i].gender ? "weiblich" : "m�nnlich";
                return "Gefundene Daten zur Matrikelnummer: " + students[i].matrikel + "\n\nName: " + students[i].firstname + students[i].lastname + "\nAlter: " + students[i].age + "\nGeschlecht: " + gender + "\nKommentar: " + students[i].comment;
            }
            else {
                return "Die eingegebene Matrikelnummer wurde noch nicht registriert";
            }
        }
    }
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=Aufgabe7.js.map
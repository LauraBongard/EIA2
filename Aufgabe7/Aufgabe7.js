/*
Aufgabe: 7, StudiVZ
Name: Laura Bongard
Matrikel: 256028
Datum: 01.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe7;
(function (Aufgabe7) {
    var students = []; //Variable students vom Typ StudentData Array
    var stop = false; //Stop Variable = false
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        // action-Variable vom Typ string gibt prompt aus
        switch (action) {
            case "n": //wenn n/N eingegeben wird, gib prompt aus
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a": //wenn a/A eingegeben, erstell matrikel Variable
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer")); //parseInt: liest ein String-Argument ein und gibt eine ganze Zahl im angegebenen Zahlensystem zur�ck: Matrikel wird als String eingegeben, in Number umgewandelt
                alert(queryData(matrikel)); //danach kommt alert Box mit Funktion queryData(matrikelnummer)
                break;
            case "s": //wenn s/S eingegeben dann ist stop Variable true = while schleife stoppt
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let dataArray = _input.split(","); //Variable um data zu speichern in Array, input wird gesplitted durch Kommas
        let studentData = {
            matrikel: parseInt(dataArray[0]),
            lastname: dataArray[1],
            firstname: dataArray[2],
            age: parseInt(dataArray[3]),
            gender: parseInt(dataArray[4]) == 0,
            comment: dataArray[5] //comment an 6.Stelle eingegeben
        };
        if (Number.isNaN(studentData.matrikel)) {
            return "Matrikelnummer ist Falsch!";
        }
        students.push(studentData); //students Array wird erweitert durch Variable studentData also den input
        let gender;
        if (parseInt(dataArray[4]) == 0) {
            gender = "weiblich";
        }
        else {
            gender = "m�nnlich";
        }
        //return "Deine Daten lauten:\n" + "\nMatrikelnummer: " + studentData.matrikel + "\nName: " + studentData.firstname + studentData.lastname + "\nAlter: " + studentData.age + "\nGeschlecht: " + gender + "\nKommentar: " + studentData.comment;
        //string wird ausgegeben
        return "Erfolgreich gespeichert";
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikel == _matrikel) {
                let gender = students[i].gender ? "weiblich" : "m�nnlich"; //gender Variable wird als interface-Gender Parameter gespeichert, pr�ft, ob m�nnlich/weiblich
                return "Gefundene Daten zur Matrikelnummer: " + students[i].matrikel + "\nName: " + students[i].firstname + students[i].lastname + "\nAlter: " + students[i].age + "\nGeschlecht: " + gender + "\nKommentar: " + students[i].comment;
            }
            else {
                continue;
            }
        }
        return "Die eingegebene Matrikelnummer wurde noch nicht registriert";
    }
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=Aufgabe7.js.map
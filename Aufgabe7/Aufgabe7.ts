/*
Aufgabe: 7, StudiVZ
Name: Laura Bongard
Matrikel: 256028
Datum: 02.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe7 {

    interface StudentData { //Interface StudentData
        matrikel: number;
        lastname: string;
        firstname: string;
        age: number;
        gender: boolean;
        comment: string;
    }
    var students: StudentData[] = []; //Variable students vom Typ StudentData Array
    var stop: boolean = false; //Stop Variable = false

    while (!stop) { //Solange stop = false, führe Codeblock aus
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\n n,a oder s eingeben");
        // action-Variable vom Typ string gibt prompt aus
        switch (action) { //switch: perform different actions based on different conditions
            case "n": //wenn n/N eingegeben wird, gib prompt aus
            case "N": //dann alert Box mit Funktion saveData(input)
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 = weiblich oder 1 = maennlich) und Kommentar");
                alert(saveData(input));
                break;
            case "a": //wenn a/A eingegeben, erstell matrikel Variable
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer")); //parseInt: liest ein String-Argument ein und gibt eine ganze Zahl im angegebenen Zahlensystem zurück: Matrikel wird als String eingegeben, in Number umgewandelt
                alert(queryData(matrikel)); //danach kommt alert Box mit Funktion queryData(matrikelnummer)
                break;
            case "s": //wenn s/S eingegeben dann ist stop Variable true = while schleife stoppt
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string { //Fkt gibt string zurück

        let dataArray: string[] = _input.split(","); //Variable um data zu speichern in Array, input wird gesplitted durch Kommas

        let studentData: StudentData = { // Objekt vom Interface machen: Substrings werden in Interface gespeichert
            matrikel: parseInt(dataArray[0]), //Substring der Matrikel wird durch parseInt in Zahl umgewandelt, die man verarbeiten kann
            lastname: dataArray[1], //lastname steht an der Stelle 2 in dataArray        
            firstname: dataArray[2], //firstname steht an der Stelle 3 in dataArray        
            age: parseInt(dataArray[3]), // Substring des Alters steht an 4.Stelle im dataArray, wird in Nummer umgewandelt
            gender: parseInt(dataArray[4]) == 0, //wenn bei gender 0 eingegeben
            comment: dataArray[5] //comment an 6.Stelle eingegeben
        };
        
        if (Number.isNaN(studentData.matrikel)) {
            return "Matrikelnummer ist falsch!";
        }

        students.push(studentData); //students Array wird erweitert durch Variable studentData also den input

        let gender: string;

        if (parseInt(dataArray[4]) == 0) { //wenn bei gender 0 eingegeben wurde, wird 0 in string "weiblich" umgewandelt

            gender = "weiblich";

        }

        else {

            gender = "maennlich";

        }

        //return "Deine Daten lauten:\n" + "\nMatrikelnummer: " + studentData.matrikel + "\nName: " + studentData.firstname + studentData.lastname + "\nAlter: " + studentData.age + "\nGeschlecht: " + gender + "\nKommentar: " + studentData.comment;
        //string wird ausgegeben
        
        return "Erfolgreich gespeichert";

    }

    function queryData(_matrikel: number): string { //Fkt gibt string zurück

        for (let i: number = 0; i < students.length; i++) { //prüft ob eingegebene Matrikel mit irgendeiner gespeicherten Matikel übereinstimmt

            if (students[i].matrikel == _matrikel) { //wenn eingegebene Matrikel mit irgendeiner gespeicherten Matrikel übereinstimmt

                let gender: string = students[i].gender ? "weiblich" : "maennlich"; //gender Variable wird als interface-Gender Parameter gespeichert, prüft, ob männlich/weiblich
                //?-Operator ist verkürzte Form einer if-else-Anweisung: fragt ab, ob gender als weiblich/männlich gespeichert wurde
                return "Student: " + students[i].matrikel + "\nName: " + students[i].firstname + students[i].lastname + "\nAlter: " + students[i].age + "\nGeschlecht: " + gender + "\nKommentar: " + students[i].comment;
                // string wird ausgegeben
            }

            else {
                
                continue;
                //forschleife wird weitergemacht
                
            }
        }
        return "Die eingegebene Matrikelnummer wurde noch nicht registriert";
    }
}
    

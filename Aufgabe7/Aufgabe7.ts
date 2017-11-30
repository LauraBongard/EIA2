/*
Aufgabe: 7, StudiVZ
Name: Laura Bongard
Matrikel: 256028
Datum: 01.12.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe7 {
    
    interface StudentData {
        matrikel: number;
        lastname: string;
        firstname: string;
        age: number;
        gender: boolean;
        comment: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        
        let dataArray: string[] = _input.split(",");   
        
        let studentData: StudentData = {
            matrikel: parseInt(dataArray[0]),          
            lastname: dataArray[1],                    
            firstname: dataArray[2],
            age: parseInt(dataArray[3]),
            gender: parseInt(dataArray[4]) == 0,
            comment: dataArray[5]
        };

        students.push(studentData);

        let gender: string;
        
        if (parseInt(dataArray[4]) == 0) {
            
            gender = "weiblich";
            
        }
        
        else {
            
            gender = "männlich";
            
        }

        return "Deine Daten lauten:\n" + "\nMatrikelnummer: " + studentData.matrikel + "\nName: " + studentData.firstname + studentData.lastname + "\nAlter: " + studentData.age + "\nGeschlecht: " + gender + "\nKommentar: " + studentData.comment;
    

    }
    
    function queryData(_matrikel: number): string {
        
        for (let i: number = 0; i < students.length; i++) {
            
            if (students[i].matrikel == _matrikel) {
                
                let gender: string = students[i].gender ? "weiblich" : "männlich";
                
                return "Gefundene Daten zur Matrikelnummer: " + students[i].matrikel + "\n\nName: " + students[i].firstname + students[i].lastname + "\nAlter: " + students[i].age + "\nGeschlecht: " + gender + "\nKommentar: " + students[i].comment;
            
            }

            else {
                
                return "Die eingegebene Matrikelnummer wurde noch nicht registriert";
            }
        }
    }
}
    

/*namespace Aufgabe0 {*/
function begruessung(): void {
    var input: string ;
    input = prompt("Bitte Namen eingeben:", "");
    if (input != null) {
        document.getElementById("hallo").innerHTML =
            "Hallo " + input + "! Das ist eine persoenliche Begruessung...";
    }
}
   /* }*/
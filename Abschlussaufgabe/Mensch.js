/*
Aufgabe: Abschlussaufgabe
Name: Laura Bongard
Matrikel: 256028
Datum: 20.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Mensch extends Abschlussaufgabe.StaticObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            //K�rper zeichnen
            Abschlussaufgabe.crc2.fillStyle = "hsl(" + Math.random() * 360 + ", 100%, 65%)";
            Abschlussaufgabe.crc2.fillRect(this.x, this.y - 10, 16, 20);
            Abschlussaufgabe.crc2.fillStyle = "#17202A";
            Abschlussaufgabe.crc2.fillRect(this.x, this.y + 10, 7, 20);
            Abschlussaufgabe.crc2.fillRect(this.x + 8, this.y + 10, 7, 20);
            //Kopf zeichnen
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 7, this.y - 15, 7, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#F0B27A";
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Mensch = Mensch;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Mensch.js.map
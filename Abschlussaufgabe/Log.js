/*
Aufgabe: Abschlussaufgabe
Name: Laura Bongard
Matrikel: 256028
Datum: 20.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Log extends Abschlussaufgabe.StaticObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 13, this.y + 8, 7, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#935116";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.fillStyle = "#935116";
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x + 8, this.y + 15);
            Abschlussaufgabe.crc2.lineTo(this.x + 15, this.y + 1);
            Abschlussaufgabe.crc2.lineTo(this.x + 70, this.y + 10);
            Abschlussaufgabe.crc2.lineTo(this.x + 65, this.y + 22);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 63, this.y + 15, 7, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#935116";
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Log = Log;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Log.js.map
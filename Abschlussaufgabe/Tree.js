/*
Aufgabe: Abschlussaufgabe
Name: Laura Bongard
Matrikel: 256028
Datum: 20.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Tree extends Abschlussaufgabe.StaticObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            //Baum
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#088A4B";
            Abschlussaufgabe.crc2.fill();
            //Stamm zeichnen
            Abschlussaufgabe.crc2.fillStyle = "#935116";
            Abschlussaufgabe.crc2.fillRect(this.x + 8, this.y + 15, 15, 30);
            //Baum
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 20, this.y + 10, 20, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#0B6138";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 40, this.y, 20, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#088A4B";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 20, this.y - 10, 20, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = "#04B45F";
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Tree = Tree;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Tree.js.map
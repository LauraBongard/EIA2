/*
Aufgabe: 6, Polymorphe Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    class Tree {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            //Stamm zeichnen
            Aufgabe6.crc2.fillStyle = "#3B170B";
            Aufgabe6.crc2.fillRect(this.x - 5, this.y + 60, 15, 20);
            //Nadeln zeichnen
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x, this.y);
            Aufgabe6.crc2.lineTo(this.x + 25, this.y + 40);
            Aufgabe6.crc2.lineTo(this.x - 25, this.y + 40);
            Aufgabe6.crc2.closePath();
            Aufgabe6.crc2.fillStyle = "#0B6138";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x, this.y + 10);
            Aufgabe6.crc2.lineTo(this.x + 25, this.y + 60);
            Aufgabe6.crc2.lineTo(this.x - 25, this.y + 60);
            Aufgabe6.crc2.closePath();
            Aufgabe6.crc2.fillStyle = "#0B6138";
            Aufgabe6.crc2.fill();
        }
    }
    Aufgabe6.Tree = Tree;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Tree.js.map
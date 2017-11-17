/*
Aufgabe: 5, Objektorientierte Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 17.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    class Tree {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() {
            //Stamm zeichnen
            Aufgabe5.crc2.fillStyle = "#3B170B";
            Aufgabe5.crc2.fillRect(this.x - 5, this.y + 60, 15, 20);
            //Nadeln zeichnen
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x, this.y);
            Aufgabe5.crc2.lineTo(this.x + 25, this.y + 40);
            Aufgabe5.crc2.lineTo(this.x - 25, this.y + 40);
            Aufgabe5.crc2.closePath();
            Aufgabe5.crc2.fillStyle = "#0B6138";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x, this.y + 10);
            Aufgabe5.crc2.lineTo(this.x + 25, this.y + 60);
            Aufgabe5.crc2.lineTo(this.x - 25, this.y + 60);
            Aufgabe5.crc2.closePath();
            Aufgabe5.crc2.fillStyle = "#0B6138";
            Aufgabe5.crc2.fill();
        }
    }
    Aufgabe5.Tree = Tree;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Tree.js.map
/*
Aufgabe: 6, Polymorphe Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    class Snow extends Aufgabe6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += Math.random();
            this.draw();
        }
        draw() {
            Aufgabe6.crc2.fillStyle = "#ffffff";
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            Aufgabe6.crc2.fill();
        }
    }
    Aufgabe6.Snow = Snow;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Snow.js.map
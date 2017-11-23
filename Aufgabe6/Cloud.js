/*
Aufgabe: 6, Polymorphe Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    class Cloud extends Aufgabe6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.x > 850) {
                this.x = 0;
            }
            this.x += Math.random();
            this.draw();
        }
        draw() {
            Aufgabe6.crc2.fillStyle = "#FAFAFA";
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 20, this.y - 10, 20, 0, 2 * Math.PI);
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 40, this.y, 20, 0, 2 * Math.PI);
            Aufgabe6.crc2.fill();
        }
    }
    Aufgabe6.Cloud = Cloud;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Cloud.js.map
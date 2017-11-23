/*
Aufgabe: 6, Polymorphe Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    class Skier extends Aufgabe6.MovingObjects {
        constructor(_x, _y, _dx, _dy, _color) {
            super(_x, _y);
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }
        move() {
            if (this.y > 700) {
                this.x = 800;
                this.y = 230;
                this.color = "hsl(" + Math.random() * 360 + ", 45%, 65%)";
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
        draw() {
            //Ski zeichnen
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x, this.y + 6);
            Aufgabe6.crc2.lineTo(this.x - 20, this.y + 15);
            Aufgabe6.crc2.strokeStyle = "#400000";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x, this.y + 6);
            Aufgabe6.crc2.lineTo(this.x - 15, this.y + 20);
            Aufgabe6.crc2.strokeStyle = "#400000";
            Aufgabe6.crc2.stroke();
            //K�rper zeichnen
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fillRect(this.x, this.y - 10, 10, 15);
            //Kopf zeichnen
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 5, this.y - 15, 7, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#ff9f9f";
            Aufgabe6.crc2.fill();
        }
    }
    Aufgabe6.Skier = Skier;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Skier.js.map
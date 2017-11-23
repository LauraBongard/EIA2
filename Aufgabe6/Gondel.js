/*
Aufgabe: 6, Polymorphe Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    class Gondel extends Aufgabe6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.x > 900) {
                this.x = 470;
                this.y = 600;
            }
            this.x += 1;
            this.y -= 0.85;
            this.draw();
        }
        draw() {
            //Linien f�r Ger�st der Gondel zeichnen
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x, this.y);
            Aufgabe6.crc2.lineTo(this.x + 50, this.y);
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.closePath();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x + 25, this.y);
            Aufgabe6.crc2.lineTo(this.x + 25, this.y + 20);
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.closePath();
            //Personenraum der Gondel zeichnen
            Aufgabe6.crc2.fillStyle = "#CEECF5";
            Aufgabe6.crc2.fillRect(this.x - 5, this.y + 20, 60, 50);
            Aufgabe6.crc2.stroke();
        }
    }
    Aufgabe6.Gondel = Gondel;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Gondel.js.map
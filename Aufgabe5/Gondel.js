/*
Aufgabe: 5, Objektorientierte Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 17.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    class Gondel {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
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
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x, this.y);
            Aufgabe5.crc2.lineTo(this.x + 50, this.y);
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.closePath();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x + 25, this.y);
            Aufgabe5.crc2.lineTo(this.x + 25, this.y + 20);
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.closePath();
            //Personenraum der Gondel zeichnen
            Aufgabe5.crc2.fillStyle = "#CEECF5";
            Aufgabe5.crc2.fillRect(this.x - 5, this.y + 20, 60, 50);
            Aufgabe5.crc2.stroke();
        }
    }
    Aufgabe5.Gondel = Gondel;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Gondel.js.map
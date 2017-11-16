/*
Aufgabe: 5, Objektorientierte Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 17.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    class Skier {
        constructor(_x, _y, _dx, _dy, _color) {
            this.x = _x;
            this.y = _y;
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
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x, this.y + 6);
            Aufgabe5.crc2.lineTo(this.x - 20, this.y + 15);
            Aufgabe5.crc2.strokeStyle = "#400000";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x, this.y + 6);
            Aufgabe5.crc2.lineTo(this.x - 15, this.y + 20);
            Aufgabe5.crc2.strokeStyle = "#400000";
            Aufgabe5.crc2.stroke();
            //K�rper zeichnen
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fillRect(this.x, this.y - 10, 10, 15);
            //Kopf zeichnen
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 5, this.y - 15, 7, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#ff9f9f";
            Aufgabe5.crc2.fill();
        }
    }
    Aufgabe5.Skier = Skier;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Skier.js.map
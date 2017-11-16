/*
Aufgabe: 5, Objektorientierte Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 17.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    class Cloud {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (this.x > 850) {
                this.x = 0;
            }
            this.x += Math.random();
            this.draw();
        }
        draw() {
            Aufgabe5.crc2.fillStyle = "#FAFAFA";
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 20, this.y - 10, 20, 0, 2 * Math.PI);
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 40, this.y, 20, 0, 2 * Math.PI);
            Aufgabe5.crc2.fill();
        }
    }
    Aufgabe5.Cloud = Cloud;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Cloud.js.map
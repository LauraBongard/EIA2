/*
Aufgabe: 5, Objektorientierte Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 17.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    class Snow {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += Math.random();
            this.draw();
        }
        draw() {
            Aufgabe5.crc2.fillStyle = "#ffffff";
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            Aufgabe5.crc2.fill();
        }
    }
    Aufgabe5.Snow = Snow;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Snow.js.map
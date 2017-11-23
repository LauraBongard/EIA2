/*
Aufgabe: 6, Polymorphe Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    class MovingObjects {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        draw() { }
        move() { }
    }
    Aufgabe6.MovingObjects = MovingObjects;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Objects.js.map
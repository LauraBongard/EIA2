/*
Aufgabe: 6, Polymorphe Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe6 {

    export class Snow extends MovingObjects {
     
        constructor (_x: number, _y: number) {
            super(_x, _y);
        }
        
        move(): void {

            if (this.y > 600) {
                this.y = 0;
            }

            this.y += Math.random();

            this.draw();
        }

        draw(): void {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            crc2.fill();
        }

    }
}
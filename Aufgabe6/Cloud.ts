/*
Aufgabe: 6, Polymorphe Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe6 {

    export class Cloud extends MovingObjects {
      
        constructor (_x: number, _y: number) {
            super(_x, _y);
        }

        move(): void {

            if (this.x > 850) {
                this.x = 0;
            }

            this.x += Math.random();

            this.draw();
        }

        draw(): void {
            crc2.fillStyle = "#FAFAFA";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 20, this.y - 10, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 40, this.y, 20, 0, 2 * Math.PI);
            crc2.fill();
        }

    }
}
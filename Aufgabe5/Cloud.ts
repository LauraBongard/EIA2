/*
Aufgabe: 5, Objektorientierte Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 17.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe5 {

    export class Cloud {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
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
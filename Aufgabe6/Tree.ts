/*
Aufgabe: 6, Polymorphe Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe6 {

    export class Tree {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            //Stamm zeichnen
            crc2.fillStyle = "#3B170B";
            crc2.fillRect(this.x - 5, this.y + 60, 15, 20);
            //Nadeln zeichnen
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 25, this.y + 40);
            crc2.lineTo(this.x - 25, this.y + 40);
            crc2.closePath();
            crc2.fillStyle = "#0B6138";
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 10);
            crc2.lineTo(this.x + 25, this.y + 60);
            crc2.lineTo(this.x - 25, this.y + 60);
            crc2.closePath();
            crc2.fillStyle = "#0B6138";
            crc2.fill();
        }
    }
}
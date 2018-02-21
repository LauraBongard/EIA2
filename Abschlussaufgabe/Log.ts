/*
Aufgabe: Abschlussaufgabe
Name: Laura Bongard
Matrikel: 256028
Datum: 20.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Abschlussaufgabe {

    export class Log extends StaticObjects {

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        draw(): void {

            crc2.beginPath();
            crc2.arc(this.x + 13, this.y + 8, 7, 0, 2 * Math.PI);
            crc2.fillStyle = "#935116";
            crc2.fill();

            crc2.fillStyle = "#935116";
            crc2.beginPath();
            crc2.moveTo(this.x + 8, this.y + 15);
            crc2.lineTo(this.x + 15, this.y + 1);
            crc2.lineTo(this.x + 70, this.y + 10);
            crc2.lineTo(this.x + 65, this.y + 22);
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(this.x + 63, this.y + 15, 7, 0, 2 * Math.PI);
            crc2.fillStyle = "#935116";
            crc2.fill();

        }
    }
}
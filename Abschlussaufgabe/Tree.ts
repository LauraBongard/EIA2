/*
Aufgabe: Abschlussaufgabe
Name: Laura Bongard
Matrikel: 256028
Datum: 20.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Abschlussaufgabe {

    export class Tree extends StaticObjects {

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        draw(): void {
            //Baum
            crc2.beginPath();
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#088A4B";
            crc2.fill();

            //Stamm zeichnen
            crc2.fillStyle = "#935116";
            crc2.fillRect(this.x + 8, this.y + 15, 15, 30);

            //Baum
            crc2.beginPath();
            crc2.arc(this.x + 20, this.y + 10, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#0B6138";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 40, this.y, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#088A4B";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 20, this.y - 10, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#04B45F";
            crc2.fill();

        }
    }
}
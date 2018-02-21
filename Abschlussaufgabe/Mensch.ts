/*
Aufgabe: Abschlussaufgabe
Name: Laura Bongard
Matrikel: 256028
Datum: 20.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Abschlussaufgabe {

    export class Mensch extends StaticObjects {

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        draw(): void {

            //Körper zeichnen
            crc2.fillStyle = "hsl(" + Math.random() * 360 + ", 100%, 65%)";
            crc2.fillRect(this.x, this.y - 10, 16, 20);

            crc2.fillStyle = "#17202A";
            crc2.fillRect(this.x, this.y + 10, 7, 20);
            crc2.fillRect(this.x + 8, this.y + 10, 7, 20);


            //Kopf zeichnen
            crc2.beginPath();
            crc2.arc(this.x + 7, this.y - 15, 7, 0, 2 * Math.PI);
            crc2.fillStyle = "#F0B27A";
            crc2.fill();

        }
    }
}

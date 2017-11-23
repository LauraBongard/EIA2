/*
Aufgabe: 6, Polymorphe Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe6 {

    export class Gondel extends MovingObjects {
       
        constructor (_x: number, _y: number) {
            super(_x, _y);
        }

        move(): void {

            if (this.x > 900) {
                this.x = 470;
                this.y = 600;
            }

            this.x += 1;
            this.y -= 0.85;

            this.draw();
        }

        draw(): void {

            //Linien für Gerüst der Gondel zeichnen
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 50, this.y);
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(this.x + 25, this.y);
            crc2.lineTo(this.x + 25, this.y + 20);
            crc2.stroke();
            crc2.closePath();

            //Personenraum der Gondel zeichnen
            crc2.fillStyle = "#CEECF5";
            crc2.fillRect(this.x - 5, this.y + 20, 60, 50);
            crc2.stroke();
        }

    }
}
/*
Aufgabe: 6, Polymorphe Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe6 {

    export class Skier extends MovingObjects {
        
        dx: number;
        dy: number;
        color: string;

        constructor(_x: number, _y: number, _dx: number, _dy: number, _color: string) {
            super(_x, _y);
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
            
        }

        move(): void {

            if (this.y > 700) {
                this.x = 800;
                this.y = 230;

                this.color = "hsl(" + Math.random() * 360 + ", 45%, 65%)";
            }

            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        }

        draw(): void {

            //Ski zeichnen
            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 6);
            crc2.lineTo(this.x - 20, this.y + 15);
            crc2.strokeStyle = "#400000";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 6);
            crc2.lineTo(this.x - 15, this.y + 20);
            crc2.strokeStyle = "#400000";
            crc2.stroke();

            //Körper zeichnen
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, this.y - 10, 10, 15);

            //Kopf zeichnen
            crc2.beginPath();
            crc2.arc(this.x + 5, this.y - 15, 7, 0, 2 * Math.PI);
            crc2.fillStyle = "#ff9f9f";
            crc2.fill();
        }

    }
}

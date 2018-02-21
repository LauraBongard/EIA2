/*
Aufgabe: Abschlussaufgabe
Name: Laura Bongard
Matrikel: 256028
Datum: 20.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Abschlussaufgabe {

    export class Car extends MovingObjects {

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        move(): void { //right key

            if (this.x > 1200) {
                alert("Du hast das Ziel erreicht! Glueckwunsch!");
                this.x = 0;
                this.y = 180;
            }

            this.x += 10;

            this.draw();
        }

        moveBack(): void { //right key

            if (this.x < 0) {
                alert("Game Over");
                this.x = 0;
                this.y = 180;
            }

            this.x += -10;

            this.draw();
        }

        moveUp(): void { //up key

            if (this.y > 480 || this.y < 120) {
                alert("Game Over");
                this.x = 0;
                this.y = 180;
            }

            this.y += -25;

            this.draw();
        }

        moveDown(): void { //up key

            if (this.y > 480 || this.y < 120) {
                alert("Game Over");
                this.x = 0;
                this.y = 180;
            }

            this.y += 25;

            this.draw();
        }


        draw(): void {

            // Körper
            crc2.beginPath();
            crc2.moveTo(this.x, this.y); //25, 150);
            crc2.bezierCurveTo(this.x + 25, this.y - 20, this.x + 35, this.y - 30, this.x + 45, this.y - 30); //50, 130, 60, 120, 70, 120);
            crc2.moveTo(this.x + 45, this.y - 30); //70, 120);
            crc2.lineTo(this.x + 95, this.y - 30); //120, 120);
            crc2.bezierCurveTo(this.x + 115, this.y - 20, this.x + 105, this.y - 25, this.x + 135, this.y); //140, 130, 130, 125, 160, 150);
            crc2.quadraticCurveTo(this.x + 165, this.y + 10, this.x + 165, this.y + 30); //190, 160, 190, 180);
            crc2.lineTo(this.x - 20, this.y + 30); //5, 180);
            crc2.quadraticCurveTo(this.x - 20, this.y, this.x, this.y); //5, 150, 25, 150);
            crc2.closePath();

            crc2.fillStyle = "#EC7063";
            crc2.fill();
            crc2.beginPath();
            crc2.rect(this.x - 20, this.y + 30, 185, 7); //5, 180, 185, 7);
            crc2.fillStyle = "#4B4B4B";
            crc2.fill();

            // Fenster
            crc2.beginPath();
            crc2.moveTo(this.x + 45, this.y - 25); //70, 125);
            crc2.lineTo(this.x + 85, this.y - 25); //110, 125);
            crc2.lineTo(this.x + 100, this.y); //125, 150);
            crc2.lineTo(this.x + 30, this.y); //55, 150);
            crc2.closePath(); // x = 25, y = 150

            crc2.fillStyle = "#EAECEE";
            crc2.fill();

            crc2.moveTo(this.x + 90, this.y - 25); //115, 125);
            crc2.lineTo(this.x + 105, this.y - 25); //130, 125);
            crc2.lineTo(this.x + 135, this.y); //160, 150);
            crc2.lineTo(this.x + 105, this.y); //130, 150);
            crc2.closePath();
            crc2.fillStyle = "#E5E8E8";
            crc2.fill(); // x = 25, y = 150

            // Räder
            crc2.beginPath();
            crc2.arc(this.x + 25, this.y + 30, 15, 0, 2 * Math.PI, true); //50, 180, 15, 0, 2 * Math.PI, true);
            crc2.fillStyle = "#17202A";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 25, this.y + 30, 10, 0, 2 * Math.PI, true); //50, 180, 10, 0, 2 * Math.PI, true);
            crc2.fillStyle = "silver";
            crc2.fill();


            crc2.beginPath();
            crc2.arc(this.x + 105, this.y + 30, 15, 0, 2 * Math.PI, true); //130, 180, 15, 0, 2 * Math.PI, true);
            crc2.fillStyle = "#17202A";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 105, this.y + 30, 10, 0, 2 * Math.PI, true); //130, 180, 10, 0, 2 * Math.PI, true);
            crc2.fillStyle = "silver";
            crc2.fill();

        }
    }
}
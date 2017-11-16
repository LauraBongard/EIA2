/*
Aufgabe: 5, Objektorientierte Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 17.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe5    {
    
    export class Snow {
        x: number;
        y: number;
    
        constructor (_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
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
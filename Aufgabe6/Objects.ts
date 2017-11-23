/*
Aufgabe: 6, Polymorphe Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe6    {
    
    export class MovingObjects {
        x: number;
        y: number;
        
        constructor (_x: number, _y: number)  {
            this.x = _x;
            this.y = _y;
            
        }
        
        draw(): void {}
        
        move(): void {}
        
    }
}
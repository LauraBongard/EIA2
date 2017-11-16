/*
Aufgabe: 5, Objektorientierte Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 17.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe5 {
    
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let i: number;
    let image: ImageData;
    
    let skier: Skier[] = [];
    let snow: Snow[] = [];
    let cloud: Cloud[] = [];
    let gondel: Gondel[] = [];


    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");

        //Hintergrundbild
        //Himmel
        crc2.fillStyle = "#A9E2F3";
        crc2.fillRect(0, 0, 800, 600);

        //Sonne
        crc2.beginPath();
        crc2.arc(50, 50, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#F4FA58";
        crc2.fill();

        //1.Berg
        crc2.beginPath();
        crc2.moveTo(0, 600);
        crc2.lineTo(150, 50);
        crc2.lineTo(250, 600);
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();
        crc2.closePath();
        //2.Berg
        crc2.beginPath();
        crc2.moveTo(200, 600);
        crc2.lineTo(500, 100);
        crc2.lineTo(700, 600);
        crc2.fillStyle = "#D8D8D8";
        crc2.fill();
        crc2.closePath();
        //3.Berg
        crc2.beginPath();
        crc2.moveTo(450, 600);
        crc2.lineTo(650, 50);
        crc2.lineTo(750, 600);
        crc2.fillStyle = "#D8D8D8";
        crc2.fill();
        crc2.closePath();

        //Skiberg
        crc2.beginPath();
        crc2.moveTo(800, 150);
        crc2.lineTo(100, 600);
        crc2.lineTo(800, 600);
        crc2.closePath();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.stroke();

        //Skilift für Gondel
        crc2.beginPath();
        crc2.moveTo(500, 600);
        crc2.lineTo(800, 350);
        crc2.stroke();
        crc2.closePath();

        
        //Hellere Bäume zufällig platzieren
        for (let i: number = 0; i < 5; i++) {
            let x: number = 260 + Math.random() * 600;
            let y: number = 400 + Math.random() * 100;
            drawTrees(x, y, "#0B6138");
        }

        //Dunklere Bäume zufällig platzieren
        for (let i: number = 0; i < 8; i++) {
            let x: number = 260 + Math.random() * 600;
            let y: number = 400 + Math.random() * 100;
            drawTrees(x, y, "#0B3B24");
        }

        //Schleife für Skifahrer
        for ( i = 0; i < 5; i++) {
            skier[i] = new Skier (800, 250, Math.random() * 3 - 10, Math.random() * 3 + 5, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
             
        }
        
        //Schleife für Schneeflocken
        for (i = 0; i < 140; i++)  {
            snow[i] = new Snow (Math.random() * 800, Math.random() * 600);
        }
        
        //Schleife für Wolken
        for (i = 0; i < 3; i++)  {
            cloud[i] = new Cloud (0 + Math.random() * 800, 0 + Math.random() * 100 + 20);
        }
        
        //Schleife für Gondel
        for (i = 0; i < 1; i++)  {
            gondel[i] = new Gondel (650, 450);
        }
        
        //Bild als Hintergrund speichern
        image = crc2.getImageData(0, 0, 800, 600);

        animate();

    }

    function animate(): void {
        crc2.clearRect(0, 0, 800, 600);  // Hintergrund restaurieren
        crc2.putImageData(image, 0, 0);

        //Skifahrer bewegen 
        for (i = 0; i < skier.length; i++) {
            let s: Skier = skier[i];
            s.move();
        }
        
       
        //Schneeflocken bewegen
        for (i = 0; i < snow.length; i++) {
            let s: Snow = snow[i];
            s.move();
        }

        //Wolken bewegen
        for (i = 0; i < cloud.length; i++) {
            let s: Cloud = cloud[i];
            s.move();
        }

        //Gondel bewegen
        for (i = 0; i < gondel.length; i++) {
            let s: Gondel = gondel[i];
            s.move();
        }

        window.setTimeout(animate, 20); // alle 20 ms wird animate aufgerufen
     
        // feststehende Baeume    
        drawTrees(120, 530, "#0B3B24");
        drawTrees(240, 510, "#0B6138");
        drawTrees(750, 540, "#0B3B24");
}

    //Funktion zum Baeume zeichnen
    function drawTrees(x: number, y: number, color: string): void {
        //Stamm zeichnen
        crc2.fillStyle = "#3B170B";
        crc2.fillRect(x - 5, y + 60, 15, 20);
        //Nadeln zeichnen
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 25, y + 40);
        crc2.lineTo(x - 25, y + 40);
        crc2.closePath();
        crc2.fillStyle = color;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(x, y + 10);
        crc2.lineTo(x + 25, y + 60);
        crc2.lineTo(x - 25, y + 60);
        crc2.closePath();
        crc2.fillStyle = color;
        crc2.fill();
    }


}
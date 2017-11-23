/*
Aufgabe: 6, Polymorphe Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe6 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let i: number;
    let image: ImageData;
    
    let objects: MovingObjects[] = [];
    
    let nSkiers: number = 5;
    let nClouds: number = 3;
    let nSnow: number = 140;
    let nGondel: number = 1;
    
    let tree: Tree[] = [];

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

        //Schleife für Baeume
        for (i = 0; i < 10; i++) {
            tree[i] = new Tree(260 + Math.random() * 600, 400 + Math.random() * 100);

        }

        //Schleife für Skifahrer
        /*for (i = 0; i < n_skiers; i++) {
            skier[i] = new Skier(800, 250, Math.random() * 3 - 10, Math.random() * 3 + 5, "hsl(" + Math.random() * 360 + ", 100%, 50%)");

        }*/
        
        for (i = 0; i < nSkiers; i++)  {
            let s: Skier = new Skier (800, 250, Math.random() * 3 - 10, Math.random() * 3 + 5, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            objects.push(s);
        }

        //Schleife für Schneeflocken
        for (i = 0; i < nSnow; i++) {
            let s: Snow = new Snow(Math.random() * 800, Math.random() * 600);
            objects.push(s);
        }

        //Schleife für Wolken
        for (i = 0; i < nClouds; i++) {
            let s: Cloud = new Cloud(0 + Math.random() * 800, 0 + Math.random() * 100 + 20);
            objects.push(s);
        }

        //Schleife für Gondel
        for (i = 0; i < nGondel; i++) {
            let s: Gondel = new Gondel(650, 450);
            objects.push(s);
        }

        //Bild als Hintergrund speichern
        image = crc2.getImageData(0, 0, 800, 600);

        animate();

    }

    function animate(): void {
        crc2.clearRect(0, 0, 800, 600);  // Hintergrund restaurieren
        crc2.putImageData(image, 0, 0);

        for (i = 0; i < objects.length; i++) {
            let s: MovingObjects = objects[i];
            s.move();
        }

        //Baeume zeichnen
        for (i = 0; i < tree.length; i++) {
            let s: Tree = tree[i];
            s.draw();
        }
        
       
        window.setTimeout(animate, 20); // alle 20 ms wird animate aufgerufen

    }

}
/*
Aufgabe: 5, Objektorientierte Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 17.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5;
(function (Aufgabe5) {
    window.addEventListener("load", init);
    let i;
    let image;
    let skier = [];
    let snow = [];
    let cloud = [];
    let gondel = [];
    let tree = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe5.crc2 = canvas.getContext("2d");
        //Hintergrundbild
        //Himmel
        Aufgabe5.crc2.fillStyle = "#A9E2F3";
        Aufgabe5.crc2.fillRect(0, 0, 800, 600);
        //Sonne
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(50, 50, 40, 0, 2 * Math.PI);
        Aufgabe5.crc2.fillStyle = "#F4FA58";
        Aufgabe5.crc2.fill();
        //1.Berg
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 600);
        Aufgabe5.crc2.lineTo(150, 50);
        Aufgabe5.crc2.lineTo(250, 600);
        Aufgabe5.crc2.fillStyle = "#BDBDBD";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.closePath();
        //2.Berg
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(200, 600);
        Aufgabe5.crc2.lineTo(500, 100);
        Aufgabe5.crc2.lineTo(700, 600);
        Aufgabe5.crc2.fillStyle = "#D8D8D8";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.closePath();
        //3.Berg
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(450, 600);
        Aufgabe5.crc2.lineTo(650, 50);
        Aufgabe5.crc2.lineTo(750, 600);
        Aufgabe5.crc2.fillStyle = "#D8D8D8";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.closePath();
        //Skiberg
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(800, 150);
        Aufgabe5.crc2.lineTo(100, 600);
        Aufgabe5.crc2.lineTo(800, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.fillStyle = "#FFFFFF";
        Aufgabe5.crc2.fill();
        Aufgabe5.crc2.stroke();
        //Skilift f�r Gondel
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(500, 600);
        Aufgabe5.crc2.lineTo(800, 350);
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.closePath();
        //Schleife f�r Baeume
        for (i = 0; i < 10; i++) {
            tree[i] = new Aufgabe5.Tree(260 + Math.random() * 600, 400 + Math.random() * 100);
        }
        //Schleife f�r Skifahrer
        for (i = 0; i < 5; i++) {
            skier[i] = new Aufgabe5.Skier(800, 250, Math.random() * 3 - 10, Math.random() * 3 + 5, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
        }
        //Schleife f�r Schneeflocken
        for (i = 0; i < 140; i++) {
            snow[i] = new Aufgabe5.Snow(Math.random() * 800, Math.random() * 600);
        }
        //Schleife f�r Wolken
        for (i = 0; i < 3; i++) {
            cloud[i] = new Aufgabe5.Cloud(0 + Math.random() * 800, 0 + Math.random() * 100 + 20);
        }
        //Schleife f�r Gondel
        for (i = 0; i < 1; i++) {
            gondel[i] = new Aufgabe5.Gondel(650, 450);
        }
        //Bild als Hintergrund speichern
        image = Aufgabe5.crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    function animate() {
        Aufgabe5.crc2.clearRect(0, 0, 800, 600); // Hintergrund restaurieren
        Aufgabe5.crc2.putImageData(image, 0, 0);
        //Skifahrer bewegen 
        for (i = 0; i < skier.length; i++) {
            let s = skier[i];
            s.move();
        }
        //Schneeflocken bewegen
        for (i = 0; i < snow.length; i++) {
            let s = snow[i];
            s.move();
        }
        //Wolken bewegen
        for (i = 0; i < cloud.length; i++) {
            let s = cloud[i];
            s.move();
        }
        //Baeume zeichnen
        for (i = 0; i < tree.length; i++) {
            let s = tree[i];
            s.draw();
        }
        //Gondel bewegen
        for (i = 0; i < gondel.length; i++) {
            let s = gondel[i];
            s.move();
        }
        window.setTimeout(animate, 20); // alle 20 ms wird animate aufgerufen
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Aufgabe5.js.map
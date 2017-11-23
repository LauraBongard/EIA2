/*
Aufgabe: 6, Polymorphe Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 24.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe6;
(function (Aufgabe6) {
    window.addEventListener("load", init);
    let i;
    let image;
    let objects = [];
    let nSkiers = 5;
    let nClouds = 3;
    let nSnow = 140;
    let nGondel = 1;
    let tree = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe6.crc2 = canvas.getContext("2d");
        //Hintergrundbild
        //Himmel
        Aufgabe6.crc2.fillStyle = "#A9E2F3";
        Aufgabe6.crc2.fillRect(0, 0, 800, 600);
        //Sonne
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(50, 50, 40, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#F4FA58";
        Aufgabe6.crc2.fill();
        //1.Berg
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 600);
        Aufgabe6.crc2.lineTo(150, 50);
        Aufgabe6.crc2.lineTo(250, 600);
        Aufgabe6.crc2.fillStyle = "#BDBDBD";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //2.Berg
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(200, 600);
        Aufgabe6.crc2.lineTo(500, 100);
        Aufgabe6.crc2.lineTo(700, 600);
        Aufgabe6.crc2.fillStyle = "#D8D8D8";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //3.Berg
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(450, 600);
        Aufgabe6.crc2.lineTo(650, 50);
        Aufgabe6.crc2.lineTo(750, 600);
        Aufgabe6.crc2.fillStyle = "#D8D8D8";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Skiberg
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(800, 150);
        Aufgabe6.crc2.lineTo(100, 600);
        Aufgabe6.crc2.lineTo(800, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.fillStyle = "#FFFFFF";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.stroke();
        //Skilift f�r Gondel
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(500, 600);
        Aufgabe6.crc2.lineTo(800, 350);
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.closePath();
        //Schleife f�r Baeume
        for (i = 0; i < 10; i++) {
            tree[i] = new Aufgabe6.Tree(260 + Math.random() * 600, 400 + Math.random() * 100);
        }
        //Schleife f�r Skifahrer
        /*for (i = 0; i < n_skiers; i++) {
            skier[i] = new Skier(800, 250, Math.random() * 3 - 10, Math.random() * 3 + 5, "hsl(" + Math.random() * 360 + ", 100%, 50%)");

        }*/
        for (i = 0; i < nSkiers; i++) {
            let s = new Aufgabe6.Skier(800, 250, Math.random() * 3 - 10, Math.random() * 3 + 5, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            objects.push(s);
        }
        //Schleife f�r Schneeflocken
        for (i = 0; i < nSnow; i++) {
            let s = new Aufgabe6.Snow(Math.random() * 800, Math.random() * 600);
            objects.push(s);
        }
        //Schleife f�r Wolken
        for (i = 0; i < nClouds; i++) {
            let s = new Aufgabe6.Cloud(0 + Math.random() * 800, 0 + Math.random() * 100 + 20);
            objects.push(s);
        }
        //Schleife f�r Gondel
        for (i = 0; i < nGondel; i++) {
            let s = new Aufgabe6.Gondel(650, 450);
            objects.push(s);
        }
        //Bild als Hintergrund speichern
        image = Aufgabe6.crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    function animate() {
        Aufgabe6.crc2.clearRect(0, 0, 800, 600); // Hintergrund restaurieren
        Aufgabe6.crc2.putImageData(image, 0, 0);
        for (i = 0; i < objects.length; i++) {
            let s = objects[i];
            s.move();
        }
        //Baeume zeichnen
        for (i = 0; i < tree.length; i++) {
            let s = tree[i];
            s.draw();
        }
        window.setTimeout(animate, 20); // alle 20 ms wird animate aufgerufen
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Aufgabe6.js.map
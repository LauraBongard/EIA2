/*
Aufgabe: Abschlussaufgabe
Name: Laura Bongard
Matrikel: 256028
Datum: 20.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    let i;
    let image;
    let nMensch;
    let nLog;
    let nStaticCars;
    let objects = [];
    let humans = [];
    let tree = [];
    let cars = [];
    let collision = []; //Array f�r X/Y- Werte f�r Alert-Box bei Kollision: funktioniert nicht
    var stop = false; //Stop Variable = false
    document.addEventListener("keydown", keyboardInput);
    while (!stop) {
        var action = prompt("Willkommen beim Autobahnsimulator! Zu welcher Tageszeit faehrst du ueblicherweise Auto? \n 7 Uhr: a eingeben \n 13 Uhr: b eingeben \n 16 Uhr: c eingeben \n 20 Uhr: d eingeben \n Benutze die Pfeiltasten, um dein Auto zu steuern");
        // action-Variable vom Typ string gibt prompt aus
        switch (action) {
            case "a":
            case "A":
                nMensch = 3;
                nLog = 0;
                nStaticCars = 3;
                window.addEventListener("load", init);
                window.addEventListener("load", initCar);
                stop = true;
                break;
            case "b":
            case "B":
                nMensch = 5;
                nLog = 0;
                nStaticCars = 1;
                window.addEventListener("load", init);
                window.addEventListener("load", initCar);
                stop = true;
                break;
            case "c":
            case "C":
                nMensch = 2;
                nLog = 3;
                nStaticCars = 3;
                window.addEventListener("load", init);
                window.addEventListener("load", initCar);
                stop = true;
                break;
            case "d":
            case "D":
                nMensch = 1;
                nLog = 5;
                nStaticCars = 0;
                window.addEventListener("load", init);
                window.addEventListener("load", initCar);
                stop = true;
                break;
        }
    }
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        //console.log(canvas);
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        //Hintergrundbild
        Abschlussaufgabe.crc2.fillStyle = "#EAF2F8";
        Abschlussaufgabe.crc2.fillRect(0, 0, 1300, 600);
        //Asphalt
        Abschlussaufgabe.crc2.fillStyle = "#848484";
        Abschlussaufgabe.crc2.fillRect(0, 100, 1300, 400);
        //Markierungen
        Abschlussaufgabe.crc2.fillStyle = "#ffffff";
        Abschlussaufgabe.crc2.fillRect(0, 228, 50, 10);
        Abschlussaufgabe.crc2.fillRect(100, 228, 100, 10);
        Abschlussaufgabe.crc2.fillRect(250, 228, 100, 10);
        Abschlussaufgabe.crc2.fillRect(400, 228, 100, 10);
        Abschlussaufgabe.crc2.fillRect(550, 228, 100, 10);
        Abschlussaufgabe.crc2.fillRect(700, 228, 100, 10);
        Abschlussaufgabe.crc2.fillRect(850, 228, 100, 10);
        Abschlussaufgabe.crc2.fillRect(1000, 228, 100, 10);
        Abschlussaufgabe.crc2.fillRect(1150, 228, 100, 10);
        Abschlussaufgabe.crc2.fillStyle = "#ffffff";
        Abschlussaufgabe.crc2.fillRect(0, 371, 50, 10);
        Abschlussaufgabe.crc2.fillRect(100, 371, 100, 10);
        Abschlussaufgabe.crc2.fillRect(250, 371, 100, 10);
        Abschlussaufgabe.crc2.fillRect(400, 371, 100, 10);
        Abschlussaufgabe.crc2.fillRect(550, 371, 100, 10);
        Abschlussaufgabe.crc2.fillRect(700, 371, 100, 10);
        Abschlussaufgabe.crc2.fillRect(850, 371, 100, 10);
        Abschlussaufgabe.crc2.fillRect(1000, 371, 100, 10);
        Abschlussaufgabe.crc2.fillRect(1150, 371, 100, 10);
        //ZielFlagge
        //Stange
        Abschlussaufgabe.crc2.fillStyle = "#17202A";
        Abschlussaufgabe.crc2.fillRect(1280, 60, 5, 40);
        //Flagge
        Abschlussaufgabe.crc2.fillStyle = "#000000";
        Abschlussaufgabe.crc2.fillRect(1275, 50, 10, 10);
        Abschlussaufgabe.crc2.fillStyle = "#ffffff";
        Abschlussaufgabe.crc2.fillRect(1275, 40, 10, 10);
        Abschlussaufgabe.crc2.fillStyle = "#000000";
        Abschlussaufgabe.crc2.fillRect(1275, 30, 10, 10);
        Abschlussaufgabe.crc2.fillStyle = "#ffffff";
        Abschlussaufgabe.crc2.fillRect(1265, 30, 10, 10);
        Abschlussaufgabe.crc2.fillStyle = "#000000";
        Abschlussaufgabe.crc2.fillRect(1265, 40, 10, 10);
        Abschlussaufgabe.crc2.fillStyle = "#ffffff";
        Abschlussaufgabe.crc2.fillRect(1265, 50, 10, 10);
        Abschlussaufgabe.crc2.fillStyle = "#000000";
        Abschlussaufgabe.crc2.fillRect(1255, 50, 10, 10);
        Abschlussaufgabe.crc2.fillStyle = "#ffffff";
        Abschlussaufgabe.crc2.fillRect(1255, 40, 10, 10);
        Abschlussaufgabe.crc2.fillStyle = "#000000";
        Abschlussaufgabe.crc2.fillRect(1255, 30, 10, 10);
        Abschlussaufgabe.crc2.fillStyle = "#ffffff";
        Abschlussaufgabe.crc2.fillRect(1245, 30, 10, 10);
        Abschlussaufgabe.crc2.fillStyle = "#000000";
        Abschlussaufgabe.crc2.fillRect(1245, 40, 10, 10);
        Abschlussaufgabe.crc2.fillStyle = "#ffffff";
        Abschlussaufgabe.crc2.fillRect(1245, 50, 10, 10);
        //Schleife f�r Baeume oberhalb der Stra�e
        for (i = 0; i < 20; i++) {
            tree[i] = new Abschlussaufgabe.Tree(Math.random() * 800, 10 + Math.random() * 50);
        }
        //Schleife f�r Baeume unterhalb der Stra�e
        for (i = 0; i < 15; i++) {
            tree[i] = new Abschlussaufgabe.Tree(Math.random() * 800, 500 + Math.random() * 60);
        }
        //Baumst�mme erzeugen
        for (i = 0; i < nLog; i++) {
            let posx = 50 + Math.random() * 1050;
            let posy = 120 + Math.random() * 350;
            tree[i] = new Abschlussaufgabe.Log(posx, posy);
        }
        //Mensch erzeugen
        for (i = 0; i < nMensch; i++) {
            let posx = 200 + Math.random() * 800;
            let posy = 100 + Math.random() * 400;
            humans[i] = new Abschlussaufgabe.Mensch(posx, posy);
        }
        //StaticCars erzeugen
        for (i = 0; i < nStaticCars; i++) {
            var posx = 200 + Math.random() * 800;
            var posy = 100 + Math.random() * 400;
            cars[i] = new Abschlussaufgabe.StaticCar(posx, posy);
        }
        //Menschen zeichnen
        for (i = 0; i < humans.length; i++) {
            let s = humans[i];
            s.draw();
        }
        //Baeume zeichnen
        for (i = 0; i < tree.length; i++) {
            let s = tree[i];
            s.draw();
        }
        //StaticCars zeichnen
        for (i = 0; i < cars.length; i++) {
            let s = cars[i];
            s.draw();
        }
        //DynamicCar zeichnen
        for (i = 0; i < objects.length; i++) {
            let s = objects[i];
            s.move();
        }
        //Bild als Hintergrund speichern
        image = Abschlussaufgabe.crc2.getImageData(0, 0, 1300, 600);
    }
    function initCar() {
        //Schleife f�r Auto
        for (i = 0; i < 1; i++) {
            let s = new Abschlussaufgabe.Car(0, 150);
            s.draw();
            objects.push(s);
        }
    }
    function keyboardInput(event) {
        Abschlussaufgabe.crc2.clearRect(0, 0, 1300, 600); // Hintergrund restaurieren
        Abschlussaufgabe.crc2.putImageData(image, 0, 0);
        // PRESS LEFT ARROW
        if (event.keyCode == 37) {
            //car method moveBack aufrufen
            for (i = 0; i < objects.length; i++) {
                let s = objects[i];
                s.moveBack();
            }
        }
        else if (event.keyCode == 38) {
            //car method moveUp aufrufen
            for (i = 0; i < objects.length; i++) {
                let s = objects[i];
                s.moveUp();
            }
        }
        else if (event.keyCode == 39) {
            //car method move aufrufen
            for (i = 0; i < objects.length; i++) {
                let s = objects[i];
                s.move();
            }
        }
        else if (event.keyCode == 40) {
            //car method moveDown aufrufen
            for (i = 0; i < objects.length; i++) {
                let s = objects[i];
                s.moveDown();
            }
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Abschlussaufgabe.js.map
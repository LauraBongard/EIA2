/*
Aufgabe: Abschlussaufgabe
Name: Laura Bongard
Matrikel: 256028
Datum: 20.02.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Abschlussaufgabe {

    export let crc2: CanvasRenderingContext2D;

    let i: number;
    let image: ImageData;

    let nMensch: number;
    let nLog: number;
    let nStaticCars: number;

    let objects: MovingObjects[] = [];

    let humans: Mensch[] = [];
    let tree: Tree[] = [];
    let cars: StaticCar[] = [];
    
    let collision: number[] = []; //Array für X/Y- Werte für Alert-Box bei Kollision: funktioniert nicht


    var stop: boolean = false; //Stop Variable = false

    document.addEventListener("keydown", keyboardInput);

    while (!stop) { //Solange stop = false, führe Codeblock aus
        var action: string = prompt("Willkommen beim Autobahnsimulator! Zu welcher Tageszeit faehrst du ueblicherweise Auto? \n 7 Uhr: a eingeben \n 13 Uhr: b eingeben \n 16 Uhr: c eingeben \n 20 Uhr: d eingeben \n Benutze die Pfeiltasten, um dein Auto zu steuern");
        // action-Variable vom Typ string gibt prompt aus
        switch (action) { //switch: perform different actions based on different conditions
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

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        //console.log(canvas);

        crc2 = canvas.getContext("2d");

        //Hintergrundbild
        crc2.fillStyle = "#EAF2F8";
        crc2.fillRect(0, 0, 1300, 600);
        //Asphalt
        crc2.fillStyle = "#848484";
        crc2.fillRect(0, 100, 1300, 400);
        //Markierungen
        crc2.fillStyle = "#ffffff";
        crc2.fillRect(0, 228, 50, 10);
        crc2.fillRect(100, 228, 100, 10);
        crc2.fillRect(250, 228, 100, 10);
        crc2.fillRect(400, 228, 100, 10);
        crc2.fillRect(550, 228, 100, 10);
        crc2.fillRect(700, 228, 100, 10);
        crc2.fillRect(850, 228, 100, 10);
        crc2.fillRect(1000, 228, 100, 10);
        crc2.fillRect(1150, 228, 100, 10);


        crc2.fillStyle = "#ffffff";
        crc2.fillRect(0, 371, 50, 10);
        crc2.fillRect(100, 371, 100, 10);
        crc2.fillRect(250, 371, 100, 10);
        crc2.fillRect(400, 371, 100, 10);
        crc2.fillRect(550, 371, 100, 10);
        crc2.fillRect(700, 371, 100, 10);
        crc2.fillRect(850, 371, 100, 10);
        crc2.fillRect(1000, 371, 100, 10);
        crc2.fillRect(1150, 371, 100, 10);

        //ZielFlagge
        //Stange
        crc2.fillStyle = "#17202A";
        crc2.fillRect(1280, 60, 5, 40);

        //Flagge
        crc2.fillStyle = "#000000";
        crc2.fillRect(1275, 50, 10, 10);

        crc2.fillStyle = "#ffffff";
        crc2.fillRect(1275, 40, 10, 10);

        crc2.fillStyle = "#000000";
        crc2.fillRect(1275, 30, 10, 10);

        crc2.fillStyle = "#ffffff";
        crc2.fillRect(1265, 30, 10, 10);

        crc2.fillStyle = "#000000";
        crc2.fillRect(1265, 40, 10, 10);

        crc2.fillStyle = "#ffffff";
        crc2.fillRect(1265, 50, 10, 10);

        crc2.fillStyle = "#000000";
        crc2.fillRect(1255, 50, 10, 10);

        crc2.fillStyle = "#ffffff";
        crc2.fillRect(1255, 40, 10, 10);

        crc2.fillStyle = "#000000";
        crc2.fillRect(1255, 30, 10, 10);

        crc2.fillStyle = "#ffffff";
        crc2.fillRect(1245, 30, 10, 10);

        crc2.fillStyle = "#000000";
        crc2.fillRect(1245, 40, 10, 10);

        crc2.fillStyle = "#ffffff";
        crc2.fillRect(1245, 50, 10, 10);

        //Schleife für Baeume oberhalb der Straße
        for (i = 0; i < 20; i++) {
            tree[i] = new Tree(Math.random() * 800, 10 + Math.random() * 50);

        }

        //Schleife für Baeume unterhalb der Straße
        for (i = 0; i < 15; i++) {
            tree[i] = new Tree(Math.random() * 800, 500 + Math.random() * 60);

        }

        //Baumstämme erzeugen
        for (i = 0; i < nLog; i++) {
            let posx: number = 50 + Math.random() * 1050;
            let posy: number = 120 + Math.random() * 350;
            tree[i] = new Log(posx, posy);
            //collision.push(posx);
            //collision.push(posy);
            
        }

        //Mensch erzeugen
        for (i = 0; i < nMensch; i++) {
            let posx: number = 200 + Math.random() * 800;
            let posy: number = 100 + Math.random() * 400;
            humans[i] = new Mensch(posx, posy);
            //collision.push(posx);
            //collision.push(posy);

        }

        //StaticCars erzeugen
        for (i = 0; i < nStaticCars; i++) {
            var posx: number = 200 + Math.random() * 800;
            var posy: number = 100 + Math.random() * 400;
            cars[i] = new StaticCar(posx, posy);
            //collision.push(posx);
            //collision.push(posy);

        }

        //Menschen zeichnen
        for (i = 0; i < humans.length; i++) {
            let s: Mensch = humans[i];
            s.draw();
        }

        //Baeume zeichnen
        for (i = 0; i < tree.length; i++) {
            let s: Tree = tree[i];
            s.draw();
        }

        //StaticCars zeichnen
        for (i = 0; i < cars.length; i++) {
            let s: StaticCar = cars[i];
            s.draw();
        }

        //DynamicCar zeichnen
        for (i = 0; i < objects.length; i++) {
            let s: MovingObjects = objects[i];
            s.move();
        }

        //Bild als Hintergrund speichern
        image = crc2.getImageData(0, 0, 1300, 600);

    }

    function initCar(): void {

        //Schleife für Auto
        for (i = 0; i < 1; i++) {
            let s: Car = new Car(0, 150);
            s.draw();
            objects.push(s);
        }

    }

    function keyboardInput(event: KeyboardEvent): void {

        crc2.clearRect(0, 0, 1300, 600);  // Hintergrund restaurieren

        crc2.putImageData(image, 0, 0);

        // PRESS LEFT ARROW
        if (event.keyCode == 37) {// left key
            //car method moveBack aufrufen
            for (i = 0; i < objects.length; i++) {
                let s: MovingObjects = objects[i];
                s.moveBack();
                /*for (i = 0; i < collision.length; i++) {
                    if (s.x > collision[i]) {
                        alert("Game Over");
                        s.x = 0;
                        s.y = 180;
                    }
                }*/
            }
        }
        // PRESS UP ARROW
        else if (event.keyCode == 38) {//up key
            //car method moveUp aufrufen
            for (i = 0; i < objects.length; i++) {
                let s: MovingObjects = objects[i];
                s.moveUp();
                /*for (i = 0; i < collision.length; i++) {
                    if (s.x > collision[i]) {
                        alert("Game Over");
                        s.x = 0;
                        s.y = 180;
                    }
                }*/
            }
        }
        // PRESS RIGHT ARROW
        else if (event.keyCode == 39) {//right key
            //car method move aufrufen
            for (i = 0; i < objects.length; i++) {
                let s: MovingObjects = objects[i];
                s.move();
                /*for (i = 0; i < collision.length; i++) {
                    if (s.x > collision[i]) {
                        alert("Game Over");
                        s.x = 0;
                        s.y = 180;
                    }
                }*/
            }
        }
        // PRESS DOWN ARROW
        else if (event.keyCode == 40) {//down key
            //car method moveDown aufrufen
            for (i = 0; i < objects.length; i++) {
                let s: MovingObjects = objects[i];
                s.moveDown();
                /*for (i = 0; i < collision.length; i++) {
                    if (s.x > collision[i]) {
                        alert("Game Over");
                        s.x = 0;
                        s.y = 180;
                    }
                }*/
            }
        }

    }
}


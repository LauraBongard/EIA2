/*
Aufgabe: 3, Schneegestöber
Name: Laura Bongard
Matrikel: 256028
Datum: 27.10.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe3 {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let fahrerX: number[] = [];
    let fahrerY: number[] = [];
    let cloudX: number[] = [];
    let cloudY: number[] = [];
    let snowX: number[] = [];
    let snowY: number[] = [];
    let gondelX: number[] = [];
    let gondelY: number[] = [];
    let i: number;
    let image: ImageData;


    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

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

        // feststehende Baeume    
        drawTrees(120, 530, "#0B3B24");
        drawTrees(240, 510, "#0B6138");
        drawTrees(750, 540, "#0B3B24");

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
        for (let i: number = 0; i < 100; i++) {
            fahrerX[i] = 700;
            fahrerY[i] = 250;
        }

        //Schleife für Schneeflocken
        for (let i: number = 0; i < 140; i++) {
            snowX[i] = 0 + Math.random() * 800;
            snowY[i] = 0 + Math.random() * 600;
        }

        //Schleife für Wolken
        for (let i: number = 0; i < 3; i++) {
            cloudX[i] = 0 + Math.random() * 800;
            cloudY[i] = 0 + Math.random() * 100 + 20;
        }

        //Schleife für Gondel
        for (let i: number = 0; i < 1; i++) {
            gondelX[i] = 650;
            gondelY[i] = 450;

        }

        //Bild als Hintergrund speichern
        image = crc2.getImageData(0, 0, 800, 600);
        console.log("setTimeout");

        animate();

    }

    function animate(): void {
        crc2.clearRect(0, 0, 800, 600);  // Hintergrund restaurieren
        crc2.putImageData(image, 0, 0);

        //Skifahrer bewegen
        for (i = 0; i < fahrerX.length; i++) {
            fahrerX[i] -= 3;
            fahrerY[i] += 2;
            drawSkier(fahrerX[i], fahrerY[i], "#F781F3");
            if (fahrerY[i] > 600) {
                fahrerY[i] = 230;
                fahrerX[i] = 800;
            }

        }

        //Schneeflocken bewegen
        for (let i: number = 0; i < snowX.length; i++) {
            if (snowY[i] > 600) {
                snowY[i] = 0;
            }
            snowY[i] += Math.random();
            drawSnowflake(snowX[i], snowY[i]);
        }

        //Wolken bewegen
        for (let i: number = 0; i < cloudX.length; i++) {
            if (cloudX[i] > 800) {
                cloudX[i] = 0;
            }
            cloudX[i] += Math.random();
            drawCloud(cloudX[i], cloudY[i]);
        }

        //Gondel bewegen
        for (let i: number = 0; i < gondelX.length; i++) {
            gondelX[i] += 5;
            gondelY[i] -= 4;
            drawGondel(gondelX[i], gondelY[i]);
            if (gondelX[i] > 900) {
                gondelX[i] = 470;
                gondelY[i] = 600;
            }

        }

        window.setTimeout(animate, 20); // alle 20 ms wird animate aufgerufen
    }

    //Skifahrer zeichnen
    function drawSkier(_x: number, _y: number, _color: string): void {

        crc2.fillStyle = _color;
        crc2.fillRect(_x, _y, 10, - 20);
        crc2.fillStyle = "#F5DA81";
        crc2.beginPath();
        crc2.arc(_x + 3, _y - 20, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#00BFFF";
        crc2.beginPath();
        crc2.moveTo(_x + 20, _y - 4);
        crc2.lineTo(_x - 20, _y + 4);
        crc2.stroke();

    }

    //Schneeflocken zeichnen
    function drawSnowflake(_x: number, _y: number): void {
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
        crc2.fill();
    }

    //Wolken zeichnen
    function drawCloud(_x: number, _y: number): void {
        crc2.fillStyle = "#FAFAFA";
        crc2.beginPath();
        crc2.arc(_x, _y, 20, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 20, _y - 10, 20, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 40, _y, 20, 0, 2 * Math.PI);
        crc2.fill();
    }

    //Gondel zeichnen
    function drawGondel(_x: number, _y: number): void {

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 50, _y);
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(_x + 25, _y);
        crc2.lineTo(_x + 25, _y + 20);
        crc2.stroke();
        crc2.closePath();

        crc2.fillStyle = "#CEECF5";
        crc2.fillRect(_x - 5, _y + 20, 60, 50);
        crc2.stroke();

    }

    //Funktion zum Baeume zeichnen
    function drawTrees(x: number, y: number, color: string): void {
        crc2.fillStyle = "#61380B";
        crc2.fillRect(x - 5, y + 60, 15, 20);
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
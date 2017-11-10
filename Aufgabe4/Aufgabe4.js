/*
Aufgabe: 4, Assoziative Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 10.11.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", init);
    let crc2;
    let fahrer = []; //Interfacezugriff
    let fahrerX = [];
    let fahrerY = [];
    let cloudX = [];
    let cloudY = [];
    let snowX = [];
    let snowY = [];
    let gondelX = [];
    let gondelY = [];
    let i;
    let image;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
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
        //Skilift f�r Gondel
        crc2.beginPath();
        crc2.moveTo(500, 600);
        crc2.lineTo(800, 350);
        crc2.stroke();
        crc2.closePath();
        // feststehende Baeume    
        drawTrees(120, 530, "#0B3B24");
        drawTrees(240, 510, "#0B6138");
        drawTrees(750, 540, "#0B3B24");
        //Hellere B�ume zuf�llig platzieren
        for (let i = 0; i < 5; i++) {
            let x = 260 + Math.random() * 600;
            let y = 400 + Math.random() * 100;
            drawTrees(x, y, "#0B6138");
        }
        //Dunklere B�ume zuf�llig platzieren
        for (let i = 0; i < 8; i++) {
            let x = 260 + Math.random() * 600;
            let y = 400 + Math.random() * 100;
            drawTrees(x, y, "#0B3B24");
        }
        //Schleife f�r Skifahrer
        for (let i = 0; i < 5; i++) {
            //Zugriff auf Interface
            fahrer[i] = {
                x: 800,
                y: 250,
                dx: Math.random() * 3 - 10,
                dy: Math.random() * 3 + 5,
                color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"
            };
        }
        //Schleife f�r Schneeflocken
        for (let i = 0; i < 140; i++) {
            snowX[i] = 0 + Math.random() * 800;
            snowY[i] = 0 + Math.random() * 600;
        }
        //Schleife f�r Wolken
        for (let i = 0; i < 3; i++) {
            cloudX[i] = 0 + Math.random() * 800;
            cloudY[i] = 0 + Math.random() * 100 + 20;
        }
        //Schleife f�r Gondel
        for (let i = 0; i < 1; i++) {
            gondelX[i] = 650;
            gondelY[i] = 450;
        }
        //Bild als Hintergrund speichern
        image = crc2.getImageData(0, 0, 800, 600);
        console.log("setTimeout");
        animate();
    }
    function animate() {
        crc2.clearRect(0, 0, 800, 600); // Hintergrund restaurieren
        crc2.putImageData(image, 0, 0);
        //Skifahrer bewegen 
        for (i = 0; i < fahrer.length; i++) {
            drawAndMoveSkier(fahrer[i]);
            if (fahrer[i].y > 700) {
                fahrer[i].x = 800;
                fahrer[i].y = 230;
            }
        }
        //Schneeflocken bewegen
        for (let i = 0; i < snowX.length; i++) {
            if (snowY[i] > 600) {
                snowY[i] = 0;
            }
            snowY[i] += Math.random();
            drawSnowflake(snowX[i], snowY[i]);
        }
        //Wolken bewegen
        for (let i = 0; i < cloudX.length; i++) {
            if (cloudX[i] > 800) {
                cloudX[i] = 0;
            }
            cloudX[i] += Math.random();
            drawCloud(cloudX[i], cloudY[i]);
        }
        //Gondel bewegen
        for (let i = 0; i < gondelX.length; i++) {
            gondelX[i] += 1;
            gondelY[i] -= 0.85;
            drawGondel(gondelX[i], gondelY[i]);
            if (gondelX[i] > 900) {
                gondelX[i] = 470;
                gondelY[i] = 600;
            }
        }
        window.setTimeout(animate, 20); // alle 20 ms wird animate aufgerufen
    }
    //Skifahrer zeichnen und bewegen
    function drawAndMoveSkier(_fahrer) {
        //X-/Y-Werte werden um dx/dy erweitert
        _fahrer.x += _fahrer.dx;
        _fahrer.y += _fahrer.dy;
        //Ski zeichnen
        crc2.beginPath();
        crc2.moveTo(_fahrer.x, _fahrer.y + 6);
        crc2.lineTo(_fahrer.x - 20, _fahrer.y + 15);
        crc2.strokeStyle = "#400000";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_fahrer.x, _fahrer.y + 6);
        crc2.lineTo(_fahrer.x - 15, _fahrer.y + 20);
        crc2.strokeStyle = "#400000";
        crc2.stroke();
        //K�rper zeichnen
        crc2.fillStyle = _fahrer.color;
        crc2.fillRect(_fahrer.x, _fahrer.y - 10, 10, 15);
        //Kopf zeichnen
        crc2.beginPath();
        crc2.arc(_fahrer.x + 5, _fahrer.y - 15, 7, 0, 2 * Math.PI);
        crc2.fillStyle = "#ff9f9f";
        crc2.fill();
    }
    //Schneeflocken zeichnen
    function drawSnowflake(_x, _y) {
        crc2.fillStyle = "#ffffff";
        crc2.beginPath();
        crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
        crc2.fill();
    }
    //Wolken zeichnen
    function drawCloud(_x, _y) {
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
    function drawGondel(_x, _y) {
        //Linien f�r Ger�st der Gondel zeichnen
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
        //Personenraum der Gondel zeichnen
        crc2.fillStyle = "#CEECF5";
        crc2.fillRect(_x - 5, _y + 20, 60, 50);
        crc2.stroke();
    }
    //Funktion zum Baeume zeichnen
    function drawTrees(x, y, color) {
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
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Aufgabe4.js.map
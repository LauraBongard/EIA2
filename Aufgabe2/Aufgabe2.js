/*
Aufgabe: 2, Skipiste mit Funktionen
Name: Laura Bongard
Matrikel: 256028
Datum: 20.10.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe2;
(function (Aufgabe2) {
    window.addEventListener("load", init);
    let crc2;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //Hintergrund: Himmel
        crc2.fillStyle = "#A9E2F3";
        crc2.fillRect(0, 0, 800, 600);
        //Sonne
        crc2.beginPath();
        crc2.arc(50, 50, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#F4FA58";
        crc2.fill();
        //1.Wolke
        crc2.beginPath();
        crc2.arc(80, 70, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E6E6E6";
        crc2.fill();
        //2.Wolke
        crc2.beginPath();
        crc2.arc(100, 60, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E6E6E6";
        crc2.fill();
        //3.Wolke
        crc2.beginPath();
        crc2.arc(120, 70, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#E6E6E6";
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
        //Skilift
        crc2.beginPath();
        crc2.moveTo(500, 600);
        crc2.lineTo(800, 350);
        crc2.stroke();
        crc2.closePath();
        //Linien f�r Gondel
        crc2.beginPath();
        crc2.moveTo(650, 450);
        crc2.lineTo(700, 450);
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(675, 450);
        crc2.lineTo(675, 470);
        crc2.stroke();
        crc2.closePath();
        //Gondel
        crc2.fillStyle = "#151515";
        crc2.fillRect(665, 470, 25, 10);
        /*Gro�e B�ume ohne Funktion
        crc2.beginPath();
        crc2.moveTo(20, 600);
        crc2.lineTo(120, 400);
        crc2.lineTo(220, 600);
        crc2.fillStyle = "#0B3B24";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
        
        crc2.beginPath();
        crc2.moveTo(140, 600);
        crc2.lineTo(200, 280);
        crc2.lineTo(260, 600);
        crc2.fillStyle = "#0B6138";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
        
        crc2.beginPath();
        crc2.moveTo(700, 600);
        crc2.lineTo(740, 500);
        crc2.lineTo(780, 600);
        crc2.fillStyle = "#0A2A1B";
        crc2.fill();
        crc2.closePath();
        crc2.stroke(); */
        // feststehende Baeume    
        drawTrees(120, 530, "#0B3B24");
        drawTrees(240, 510, "#0B6138");
        drawTrees(750, 540, "#0B3B24");
        //Funktion hellere B�ume zuf�llig platzieren (zwischen 200 u 500 horizontal und 400 u 600 vertikal)
        for (let i = 0; i < 5; i++) {
            let x = 200 + Math.random() * 600;
            let y = 400 + Math.random() * 100;
            drawTrees(x, y, "#0B6138");
        }
        //Funktion dunklere B�ume zuf�llig platzieren (zwischen 230 u 500 horizontal und 400 u 600 vertikal)
        for (let i = 0; i < 3; i++) {
            let x = 230 + Math.random() * 600;
            let y = 400 + Math.random() * 100;
            drawTrees(x, y, "#0B3B24");
        }
        //Funktion Schneeflocken zuf�llig platzieren auf dem ganzen Canvas
        for (let i = 0; i < 200; i++) {
            let x = Math.random() * 800;
            let y = Math.random() * 600;
            drawSnowflakes(x, y);
        }
    }
    function drawTrees(x, y, color) {
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
    function drawSnowflakes(x, y) {
        crc2.fillStyle = "#FFFFFF";
        crc2.beginPath();
        crc2.arc(x, y, 5, 0, 6 * Math.PI);
        crc2.fill();
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map
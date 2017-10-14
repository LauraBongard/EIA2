/*
Aufgabe: 1, Skipiste
Name: Laura Bongard
Matrikel: 256028
Datum: 14.10.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
//namespace Aufgabe1 {
window.addEventListener("load", init);
function init() {
    let canvas = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    let crc2 = canvas.getContext("2d");
    console.log(crc2);
    //Hintergrund: Himmel
    crc2.fillStyle = "#A9E2F3";
    crc2.fillRect(0, 0, 800, 600);
    //Sonne
    crc2.beginPath();
    crc2.arc(70, 70, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#F4FA58";
    crc2.fill();
    crc2.stroke();
    //1.Wolke
    crc2.beginPath();
    crc2.arc(70, 70, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#F2F2F2";
    crc2.fill();
    crc2.stroke();
    //2.Wolke
    crc2.beginPath();
    crc2.arc(80, 70, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#F2F2F2";
    crc2.fill();
    crc2.stroke();
    //3.Wolke
    crc2.beginPath();
    crc2.arc(90, 70, 20, 0, 2 * Math.PI);
    crc2.fillStyle = "#F2F2F2";
    crc2.fill();
    crc2.stroke();
    //1.Berg
    crc2.beginPath();
    crc2.moveTo(0, 450);
    crc2.lineTo(150, 50);
    crc2.lineTo(250, 600);
    crc2.fillStyle = "#BDBDBD";
    crc2.fill();
    crc2.stroke();
    //2.Berg
    crc2.beginPath();
    crc2.moveTo(100, 500);
    crc2.lineTo(600, 70);
    crc2.lineTo(750, 500);
    crc2.fillStyle = "#D8D8D8";
    crc2.fill();
    crc2.closePath();
    crc2.stroke();
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
    crc2.beginPath();
    crc2.moveTo(700, 500);
    crc2.lineTo(700, 520);
    crc2.stroke();
    /*crc2.fillRect(600, 150, 50, 30);
    crc2.fillStyle = "#0101DF";
    crc2.fill();
    crc2.closePath();
    crc2.stroke();
    crc2.fillRect(350, 350, 50, 30);
    crc2.fillStyle = "#0101DF";
    crc2.fill();
    crc2.stroke();*/
    //B�ume
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
    crc2.moveTo(250, 600);
    crc2.lineTo(330, 350);
    crc2.lineTo(410, 600);
    crc2.fillStyle = "#0B3B24";
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
    crc2.stroke();
}
//} 
//# sourceMappingURL=Aufgabe1.js.map
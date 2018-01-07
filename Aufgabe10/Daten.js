/*
Aufgabe: 10, Weihnachtsbaumkonfigurator
Name: Laura Bongard
Matrikel: 256028
Datum: 06.01.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe10;
(function (Aufgabe10) {
    Aufgabe10.angebot = [
        { kind: "Baumart", name: "Baum klein", price: 10 },
        { kind: "Baumart", name: "Baum mittel", price: 25 },
        { kind: "Baumart", name: "Baum gross", price: 40 },
        { kind: "Baumart", name: "Baum riesig", price: 55 },
        { kind: "Halterung", name: "schwarz", price: 8.99 },
        { kind: "Halterung", name: "gold", price: 8.99 },
        { kind: "Halterung", name: "braun", price: 8.99 },
        { kind: "Halterung", name: "gruen", price: 8.99 },
        { kind: "Beleuchtung", name: "Kerze gold", price: 0.5 },
        { kind: "Beleuchtung", name: "Kerze rot", price: 0.5 },
        { kind: "Schmuck", name: "Kugel rot", price: 0.99 },
        { kind: "Schmuck", name: "Kugel transparent", price: 0.99 },
        { kind: "Schmuck", name: "Kugel silber", price: 0.99 },
        { kind: "Schmuck", name: "Kugel gold", price: 0.99 },
        { kind: "Schmuck", name: "Lametta rot", price: 0.50 },
        { kind: "Schmuck", name: "Lametta silber", price: 0.50 },
        { kind: "Schmuck", name: "Lametta gold", price: 0.50 },
        { kind: "Schmuck", name: "Strohanhaenger", price: 0.5 },
        { kind: "Lieferung", name: "Standard Lieferung", price: 4 },
        { kind: "Lieferung", name: "Morning Express Lieferung", price: 9 }
    ];
    Aufgabe10.baumArt = [];
    Aufgabe10.kerz = [];
    for (let i = 0; i < Aufgabe10.angebot.length; i++) {
        if (Aufgabe10.angebot[i].kind == "Baumart") {
            let temp = [Aufgabe10.angebot[i].name, Aufgabe10.angebot[i].price];
            Aufgabe10.baumArt.push(temp);
        }
        if (Aufgabe10.angebot[i].kind == "Beleuchtung") {
            let temp = [Aufgabe10.angebot[i].name, Aufgabe10.angebot[i].price];
            Aufgabe10.kerz.push(temp);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Daten.js.map
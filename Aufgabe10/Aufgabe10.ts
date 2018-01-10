/*
Aufgabe: 10, Weihnachtsbaumkonfigurator
Name: Laura Bongard
Matrikel: 256028
Datum: 06.01.18
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe10 {
    window.addEventListener("load", init);
    window.addEventListener("change", createWarenkorb);

    let name: HTMLInputElement;
    let strasse: HTMLInputElement;
    let hNr: HTMLInputElement;
    let ort: HTMLInputElement;
    let plz: HTMLInputElement;
    let mail: HTMLInputElement;
       
    let label: HTMLLabelElement;

    let cartBaum: string[] = [baumArt[0][0], "" + baumArt[0][1]]; //name + preis von baumklein etc. in cartBaum speichern
    let cartHalterung: string[] = ["keine Halterung gewaehlt", "0"]; 
    let cartKerzen: string[] = [kerz[0][0], "" + kerz[0][1]]; //name + preis von Kerzen in kerz speichern
    let cartSchmuck: string[][] = [];
    let cartLiefern: string[] = ["keine Lieferoption gewaehlt", "0"];

    function init(): void {
        
        initBaum();
        initHalterung();
        initKerzen();
        initSchmuck();
          
        initDaten();
        
        //Lieferoptionen:
        let lieferopt: HTMLDivElement = <HTMLDivElement>document.getElementById("lieferoptionen");
        for (let i: number = 0; i < angebot.length; i++) {
            if (angebot[i].kind == "Lieferung") {
                let radioB2: HTMLInputElement = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);

                let label3: HTMLLabelElement = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = angebot[i].name;
                lieferopt.appendChild(label3);
            }
        }

        //Button:
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button");
        let submit: HTMLButtonElement = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Bestellung pruefen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }
    
    function initBaum(): void {
        
        //Baumart:
        let baumart: HTMLDivElement = <HTMLDivElement>document.getElementById("baumart");
        let selectBaum: HTMLSelectElement = document.createElement("select");
        selectBaum.name = "SelectBaumart";
        selectBaum.id = "selectBaumart";
        baumart.appendChild(selectBaum);
        for (let i: number = 0; i < angebot.length; i++) {
            if (angebot[i].kind == "Baumart") {
                let opt: HTMLElement = document.createElement("option");
                opt.innerText = angebot[i].name;
                opt.id = "option" + i;
                selectBaum.appendChild(opt);
            }
        }
    }
    
    function initHalterung(): void {
        
        //Halterung:
        let halterung: HTMLDivElement = <HTMLDivElement>document.getElementById("halterung");
        for (let i: number = 0; i < angebot.length; i++) {
            if (angebot[i].kind == "Halterung") {
                let radioB: HTMLInputElement = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);

                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = angebot[i].name;
                halterung.appendChild(label);
            }
        }
    }
    
     function initKerzen(): void {
        
        let kerzen: HTMLDivElement = <HTMLDivElement>document.getElementById("kerzen");
        let selectBox2: HTMLSelectElement = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung";
        selectBox2.id = "selectBeleuchtung";
        kerzen.appendChild(selectBox2);
         
        for (let i: number = 0; i < angebot.length; i++) {

            if (angebot[i].kind == "Beleuchtung") {
                var opt2: HTMLElement = document.createElement("option");
                opt2.innerText = angebot[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }
    }
    
    function initSchmuck(): void {
         //Schmuckartikel:
        let schmuckartikel: HTMLDivElement = <HTMLDivElement>document.getElementById("schmuckartikel");
        for (let i: number = 0; i < angebot.length; i++) {
            if (angebot[i].kind == "Schmuck") {
                let checkB: HTMLInputElement = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxSchmuckartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);

                let label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = angebot[i].name;
                schmuckartikel.appendChild(label2);

                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "10";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
                let br: HTMLElement = document.createElement("br");
                schmuckartikel.appendChild(br);
            }
        }

    }
    
    function initDaten(): void {

        let daten: HTMLDivElement = <HTMLDivElement>document.getElementById("daten");
        name = document.createElement("input");
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true;
        daten.appendChild(name);

        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Strasse";
        strasse.pattern = "[a-zA-Z]{1,}";
        strasse.required = true;
        daten.appendChild(strasse);

        hNr = document.createElement("input");
        hNr.type = "text";
        hNr.name = "DatenHausnummer";
        hNr.placeholder = "Hausnummer";
        hNr.pattern = "[0-9]{1,}";
        hNr.required = true;
        daten.appendChild(hNr);

        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
        ort.pattern = "[a-zA-Z]{1,}";
        ort.required = true;
        daten.appendChild(ort);

        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        daten.appendChild(plz);

        mail = document.createElement("input");
        mail.type = "email";
        mail.name = "DatenMail";
        mail.placeholder = "E-Mail";
        mail.required = true;
        daten.appendChild(mail);
    }

    function createWarenkorb(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target; //Target sind alle input elemente
        let stepper: HTMLInputElement[] = [];
        let checkBoxes: HTMLInputElement[] = [];
        let gesamtpreis: number = 0;

        for (let i: number = 0; i < angebot.length; i++) { //Angebot nach Schmuck durchsuchen
            if (angebot[i].kind == "Schmuck") {
                stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i); //jedes Element, das als ID stepper hat wird in let stepper gespeichert
                checkBoxes[i] = <HTMLInputElement>document.getElementById("check" + i); //jedes Element, das als ID check hat wird in let checkboxes gespeichert   
            }
            if (target.value == angebot[i].name && target.id == "selectBaumart") {//wenn target value mit einem name in angebot übereinstimmt und die id des targets selectbaumart ist
                cartBaum[0] = angebot[i].name; //dann speichere jetzt an erster stelle in cartBaum den name des Artikels
                cartBaum[1] = "" + angebot[i].price; //an zweiter stelle den preis des artikels
            }
            if (target.id == "radio" + i) {
                cartHalterung[0] = angebot[i].name;
                cartHalterung[1] = "" + angebot[i].price;

            }
            if (target.id == "radio2." + i) {
                cartLiefern[0] = angebot[i].name;
                cartLiefern[1] = "" + angebot[i].price;

            }

            if (target.value == angebot[i].name && target.id == "selectBeleuchtung") {
                cartKerzen[0] = angebot[i].name;
                cartKerzen[1] = "" + angebot[i].price;

            }

            if (target.id == "check" + i || target.id == "stepper" + i) {//wenn die target id check i oder stepper i heisst
                cartSchmuck[i] = [angebot[i].name, "" + (angebot[i].price * parseInt(stepper[i].value))]; //dann speicher in cartSchmuck den name des artikels und den preis (Wert des steppers in zahl umwandeln)

            }
        }
        
        let korb: HTMLDivElement = <HTMLDivElement>document.getElementById("korb");
        korb.style.width = "25%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "#E9F7EF";
        korb.style.color = "grey";
        
        korb.innerHTML = "<div class='warenkorb'>Warenkorb</div><hr>";
        korb.innerHTML += "" + cartBaum[0] + " " + cartBaum[1] + " Euro <br>"; //Name + Preis des Artikels sind in cartBaum drin
        korb.innerHTML += "Weihnachtsbaumhalterung: " + cartHalterung[0] + " " + cartHalterung[1] + " Euro <br>"; 
        korb.innerHTML += "" + cartKerzen[0] + " " + cartKerzen[1] + "Euro <br>";
        korb.innerHTML += " " + cartLiefern[0] + " " + cartLiefern[1] + " Euro <br>";

        gesamtpreis = parseFloat(cartBaum[1]) + parseFloat(cartHalterung[1]) + parseFloat(cartLiefern[1]); //parseFloat convertiert string in Zahl: Preise als Zahlen umkodieren
        for (let i: number = 0; i < stepper.length; i++) { //alle Stepper durchgehen
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) { //wenn checkboxen angeklickt
              
                gesamtpreis += parseFloat(cartSchmuck[i][1]); // dann rechne zum gesamtpreis den preis des Schmuckobjekts als zahl dazu
               
                korb.innerHTML += "" + cartSchmuck[i][0] + " " + cartSchmuck[i][1] + " Euro <br>"; //erweitere den warenkorb durch name und preis des schmuckobjekts das angeklickt wurde
            }
        }
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + " Euro";
    }


    function handleMouseDown(_event: MouseEvent): void { //bei submit button
        let review: HTMLDivElement = document.createElement("div");
        
        review.style.paddingBottom = "0.5em";
        
        if (name.checkValidity() == false || strasse.checkValidity() == false ||  ort.checkValidity() == false  || mail.checkValidity() == false) {
            review.innerText = "Deine Daten sind leider nicht korrekt. Bitte ueberpruefe sie.";
            review.style.color = "#E74C3C";
            document.body.appendChild(review);
        }
        
        else {
            review.innerText = "Deine Daten sind korrekt, Danke.";
            review.style.color = "#2ECC71";
            document.body.appendChild(review);
        }
    }
}
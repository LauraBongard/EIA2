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
    let street: HTMLInputElement;
    let town: HTMLInputElement;
    let mail: HTMLInputElement;
    
    let label: HTMLLabelElement;

    let cartBaum: string[] = [baumArt[0][0], "" + baumArt[0][1]];
    let cartHalterung: string[] = ["keine Halterung gewaehlt", "0"];
    let cartKerzen: string[][] = [];
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
          //Beleuchtung:
        let kerzen: HTMLDivElement = <HTMLDivElement>document.getElementById("kerzen");
        for (let i: number = 0; i < angebot.length; i++) {
            if (angebot[i].kind == "Beleuchtung") {
                let checkB: HTMLInputElement = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxSchmuckartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                kerzen.appendChild(checkB);

                let label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = angebot[i].name;
                kerzen.appendChild(label2);

                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "10";
                stepper.step = "1";
                kerzen.appendChild(stepper);
                let br: HTMLElement = document.createElement("br");
                kerzen.appendChild(br);
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
       
        //Deine Daten:
        let data: HTMLDivElement = <HTMLDivElement>document.getElementById("daten");
        name = document.createElement("input");
        name.type = "text";
        name.placeholder = "Name";
        name.name = "DatenName";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true;
        data.appendChild(name);

        street = document.createElement("input");
        street.type = "text";
        street.placeholder = "Strasse, Hausnummer";
        street.name = "DatenStrasse";
        street.pattern = "[a-zA-Z][0-9]{1,}";
        street.required = true;
        data.appendChild(street);

        town = document.createElement("input");
        town.type = "text";
        town.placeholder = "Postleitzahl, Ort";
        town.name = "DatenOrt";
        town.pattern = "[a-zA-Z][0-9]{1,}";
        town.required = true;
        data.appendChild(town);

        mail = document.createElement("input");
        mail.type = "email";
        mail.placeholder = "E-Mail";
        mail.name = "DatenMail";
        mail.required = true;
        data.appendChild(mail);
    }

    function createWarenkorb(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let stepper: HTMLInputElement[] = [];
        let checkBoxes: HTMLInputElement[] = [];
        let gesamtpreis: number = 0;

        for (let i: number = 0; i < angebot.length; i++) {
            if (angebot[i].kind == "Schmuck") {
                stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
                checkBoxes[i] = <HTMLInputElement>document.getElementById("check" + i);
            }
            if (target.value == angebot[i].name && target.id == "selectBaumart") {
                cartBaum[0] = angebot[i].name;
                cartBaum[1] = "" + angebot[i].price;
            }
            if (target.id == "radio" + i) {
                cartHalterung[0] = angebot[i].name;
                cartHalterung[1] = "" + angebot[i].price;

            }
            if (target.id == "radio2." + i) {
                cartLiefern[0] = angebot[i].name;
                cartLiefern[1] = "" + angebot[i].price;

            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                cartKerzen[i] = [angebot[i].name, "" + (angebot[i].price * parseInt(stepper[i].value))];

            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                cartSchmuck[i] = [angebot[i].name, "" + (angebot[i].price * parseInt(stepper[i].value))];

            }
        }
        
        let korb: HTMLDivElement = <HTMLDivElement>document.getElementById("zusammenfassung");
        korb.style.width = "25%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "#E9F7EF";
        korb.style.color = "grey";
        
        korb.innerHTML = "<div class='warenkorb'>Warenkorb</div><hr>";
        korb.innerHTML += "" + cartBaum[0] + " " + cartBaum[1] + " Euro <br>";
        korb.innerHTML += "Weihnachtsbaumhalterung: " + cartHalterung[0] + " " + cartHalterung[1] + " Euro <br>";
        korb.innerHTML += " " + cartLiefern[0] + " " + cartLiefern[1] + " Euro <br>";

        gesamtpreis = parseFloat(cartBaum[1]) + parseFloat(cartHalterung[1]) + parseFloat(cartLiefern[1]);
        for (let i: number = 0; i < stepper.length; i++) {
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtpreis += parseFloat(cartKerzen[i][1]);
                gesamtpreis += parseFloat(cartSchmuck[i][1]);
                korb.innerHTML += "" + cartKerzen[i][0] + " " + cartKerzen[i][1] + " Euro <br>";
                korb.innerHTML += "" + cartSchmuck[i][0] + " " + cartSchmuck[i][1] + " Euro <br>";
            }
        }
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + " Euro";
    }


    function handleMouseDown(_event: MouseEvent): void {
        let review: HTMLDivElement = document.createElement("div");
        
        review.style.paddingBottom = "0.5em";
        
        if (name.checkValidity() == false || street.checkValidity() == false ||  town.checkValidity() == false  || mail.checkValidity() == false) {
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
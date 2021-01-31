const contPasajero = document.getElementById("descripcion");
let tipoBoleto = document.getElementById("contBoletos");
let combo = document.getElementById("tpasajero");

function agregarBoleto() {
    var datosPasaj = document.getElementsByClassName("datosPasajero").length;

    let contador = datosPasaj + 1;

    console.log("Hay " + contador + " elementos");

    let descNom = document.getElementById("descNombre").value;
    let descApPat = document.getElementById("apellidoPaterno").value;
    let descApMat = document.getElementById("apellidoMaterno").value;

    let tpb = combo.options[combo.selectedIndex].value;

    let tipBolNom = "";

    switch (tpb) {
        case "A":
            tipBolNom = "ADULTO";

            break;
        case "M":
            tipBolNom = "MENOR";
            break;
        case "I":
            tipBolNom = "INAPAM";
            break;
        case "E":
            tipBolNom = "ESTUDIANTE";
            break;

        case "P":
            tipBolNom = "PROFESOR";
            break;
    }

    tipoBoleto.innerHTML += `<img id="conPasaj_${contador}" class="mr-2 A tipoBol conPasaj_${contador}" src="img/${tpb}.svg" onclick="oculDescr(this);"/>`;

    contPasajero.innerHTML += `<div class="datosPasajero conPasaj_${contador}">

                                        <div style="position: relative;"><span id="numAsi_${contador}" class="numAsi"></span><img class="imgAsiento" style="width: 50px;" src="img/AsientoAzu.png"/></div>
                                        <p class="asiento">ASIENTO SELECCIONADO ${tipBolNom}</p>
                                        <h5>NOMBRE DEL PASAJERO</h5>
                                        <input class="nomPasajero text-uppercase" type="text" value="${descNom} ${descApPat} ${descApMat}" />
                                    </div>`;

    document.getElementById("miForm").reset();

    document.getElementById(`conPasaj_${contador}`).click();

    if (tpb == "A") {
        let ad = parseInt($("#adultoPas1").text());
        let sumAd = ad + 1;

        $("#adultoPas1").text(sumAd);
        //alert(sumAd)
    }
    if (tpb == "M") {
        let men = parseInt($("#menoresPas1").text());
        let sumMen = men + 1;

        $("#menoresPas1").text(sumMen);
    }
    if (tpb == "I") {
        let inapam = parseInt($("#senectudPas1").text());
        let sumInapam = inapam + 1;

        $("#senectudPas1").text(sumInapam);
    }
    if (tpb == "E") {
        let estud = parseInt($("#estudiantesPas1").text());
        let sumEstud = estud + 1;

        $("#estudiantesPas1").text(sumEstud);
    }
    if (tpb == "P") {
        let profe = parseInt($("#profesoresPas1").text());
        let sumProfe = profe + 1;

        $("#profesoresPas1").text(sumProfe);
    }

    masBoletos();

    //////////--------------------------------------------------------------------------------------------------
}

function oculDescr(e) {
    let miId = e.id;

    console.log("Valor que me sirve: " + miId);
    // Color Boleto activo

    let tpBol = document
        .getElementById("contBoletos")
        .getElementsByClassName("tipoBol");
    //let tpBolReg = document.getElementById('contBoletosReg').getElementsByClassName('tipoBol');

    ///// VIAJE SENCILLO ////
    for (item3 of tpBol) {
        var elementClasses2 = item3.classList;

        let claseTiene2 = elementClasses2[3];

        if (miId == claseTiene2) {
            console.log("Ms clases son: " + claseTiene2);
            document.querySelector("." + claseTiene2).classList.add("boletoActivo");
        } else {
            document
                .querySelector("." + claseTiene2)
                .classList.remove("boletoActivo");
        }
    }

    //document.getElementById(miId).classList.add('boletoActivo');

    let recDesc1 = document
        .getElementById("descripcion")
        .getElementsByClassName("datosPasajero");
    let recDescReg1 = document
        .getElementById("descripcionReg")
        .getElementsByClassName("datosPasajero");

    console.log(recDesc1);
    //////// VIAJE SENCILLO //////////

    for (item1 of recDesc1) {
        var elementClasses = item1.classList;

        let claseTiene = elementClasses[0] + " " + elementClasses[1];

        //console.log(claseTiene);

        item1.style.display = "none";

        if (claseTiene === `datosPasajero ${miId}`) {
            item1.style.display = "block";
            //document.querySelector('.tipoBol').classList.add('boletoActivo');
        }
    }

    //boletoActivo();
}

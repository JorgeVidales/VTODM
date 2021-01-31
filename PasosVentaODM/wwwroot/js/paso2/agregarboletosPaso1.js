function agregarboletosPaso1() {
    const contPasajero = document.getElementById("descripcion");
    let tipoBoleto = document.getElementById("contBoletos");

    let combo = document.getElementById("tpasajero");

    let adultoPas1 = document.getElementById("adultoPas1").innerHTML;
    let menoresPas1 = document.getElementById("menoresPas1").innerHTML;
    let senectudPas1 = document.getElementById("senectudPas1").innerHTML;
    let estudiantesPas1 = document.getElementById("estudiantesPas1").innerHTML;
    let profesoresPas1 = document.getElementById("profesoresPas1").innerHTML;

    let totBolPas1 =
        parseInt(adultoPas1, 10) +
        parseInt(menoresPas1, 10) +
        parseInt(senectudPas1, 10) +
        parseInt(estudiantesPas1, 10) +
        parseInt(profesoresPas1, 10);

    //---console.log('El total de Boletos paso1 es:' + totBolPas1)

    let arrayBolPas1 = [];

    /// Boleto A
    for (var i = 0; i < parseInt(adultoPas1, 10); i++) {
        arrayBolPas1.push("A");
    }
    /// Boleto M

    for (var i = 0; i < parseInt(menoresPas1, 10); i++) {
        arrayBolPas1.push("M");
    }
    /// Boleto I
    for (var i = 0; i < parseInt(senectudPas1, 10); i++) {
        arrayBolPas1.push("I");
    }
    /// Boleto E
    for (var i = 0; i < parseInt(estudiantesPas1, 10); i++) {
        arrayBolPas1.push("E");
    }
    /// Boleto P
    for (var i = 0; i < parseInt(profesoresPas1, 10); i++) {
        arrayBolPas1.push("P");
    }

    //---console.log(arrayBolPas1);
    ////////
    let incremento = 1;
    let descNom = "";
    let descApPat = "";
    let descApMat = "";
    for (item of arrayBolPas1) {
        console.log("Mi boleto: " + item);
        let tpb = item;
        let contador = incremento;

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

        //alert(tpb);
        // `<img id="conPasaj_${contador}" class="mr-2 A tipoBol conPasaj_${contador}" src="img/${tpb}.svg" onclick="oculDescr(this);"/>`;

        tipoBoleto.innerHTML += `<img id="conPasaj_${contador}" class="mr-2 A tipoBol conPasaj_${contador}" src="img/${tpb}.svg" onclick="oculDescr(this);"/>`;
        //tipoBoletoReg.innerHTML += `<img id="conPasajReg_${contador}" class="mr-2 A tipoBol conPasajReg_${contador}" src="img/${tpb}.svg" onclick="oculDescrReg(this);"/>`;

        contPasajero.innerHTML += `<div class="datosPasajero conPasaj_${incremento}">

                                        <div style="position: relative;"><span id="numAsi_${incremento}" class="numAsi"></span><img class="imgAsiento" style="width: 50px;" src="img/AsientoAzu.png"/></div>
                                        <p class="asiento">ASIENTO SELECCIONADO ${tipBolNom}</p>
                                        <h5>NOMBRE DEL PASAJERO</h5>
                                        <input class="nomPasajero text-uppercase" type="text" value="${descNom} ${descApPat} ${descApMat}" />
                                    </div>`;

        incremento++;
    }

    document.getElementById("conPasaj_1").click();
}

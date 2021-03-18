function miAsientoReg(imgAsiSelec, numAsie) {

    let idImg = document.getElementById(imgAsiSelec);
    let dato1 = idImg.getAttribute("src");
    let numDescripPasajero = document.querySelectorAll(".datosPasajeroReg").length;
    let recDesc1 = document.getElementById("descripcionReg").getElementsByClassName("datosPasajeroReg");
    let numAsi = document.getElementsByClassName("numAsiReg");

    //---console.log(numAsi);

    //---console.log('Mi imagen nueva: ' + dato1);

    var num = numDescripPasajero;

    //alert(numDescripPasajero);

    var ocupado = "img/AsientoRojo.png";
    var libre = "img/AsientoBco.png";
    var seleccionado = "img/AsientoVerde.png";

    //////////////////////////////////////////////

    if (ocupado == dato1) {
        //alert("Ocupado");
    }

    if (libre == dato1) {
        idImg.setAttribute("src", "img/AsientoVerde.png");

        /// PONE EL NUMERO EN EL ASIENTO VISIBLE - VIAJE SENCILLO ///

        for (item of recDesc1) {
            let classVisible = item.style.display;

            if (classVisible === "block") {
                console.log("1 pasajero visible");
                console.log(item);

                let spanId = item.querySelector(".numAsiReg").id;
                let spNum = document.getElementById(spanId);
                let span_Text = document.getElementById(spanId).innerText;

                if (span_Text == "") {
                    console.log("Tu asiento ya tiene numero");
                    document.getElementById(spanId).innerHTML = numAsie;
                } else {
                    let clickAsiBlanc = numAsi;

                    for (item of clickAsiBlanc) {
                        let spanId2 = item.id;
                        let spNum2 = document.getElementById(spanId2);
                        var span_Text2 = document.getElementById(spanId2).innerText;

                        console.log("Mi numero es: " + span_Text2);

                        if (span_Text2 == "") {
                            let num = spanId2;
                            let numAs = num.split("_");
                            let clickIdBol = "conPasajReg_" + numAs[1];
                            console.log("Mi click nuevo: " + clickIdBol);

                            document.getElementById(spanId2).innerHTML = numAsie; /// checar esta linea->
                            document.getElementById(clickIdBol).click();

                            return;
                        }
                    }
                }

            }

        }
        ///////////

        let lugares = document.querySelectorAll('#MapaOcupacionReg img[src="img/AsientoVerde.png"').length;
        let lugares2 = document.querySelectorAll('#MapaOcupacionReg2 img[src="img/AsientoVerde.png"').length;

        let sumLugar = lugares + lugares2;

        console.log("Mis elementos verde:" + lugares);

        if (sumLugar <= num) {
            // alert('El lugar es menor o igual');

            console.log(sumLugar);
        } else {
            idImg.setAttribute("src", "img/AsientoBco.png");
            /// QUITA EL NUMERO EN EL ASIENTO VISIBLE  ///
            for (item of numAsi) {
                let spanId = item.id;
                var span_Text = document.getElementById(spanId).innerText;

                if (numAsie === span_Text) {
                    document.getElementById(spanId).innerHTML = "";
                }
            }
            ///////////
        }
    }

    if (seleccionado == dato1) {
        idImg.setAttribute("src", "img/AsientoBco.png");
        /// QUITA EL NUMERO EN EL ASIENTO VISIBLE  ///

        for (item of numAsi) {
            let spanId = item.id;
            var span_Text = document.getElementById(spanId).innerText;

            if (numAsie === span_Text) {
                document.getElementById(spanId).innerHTML = "";
            }
        }
    }
}

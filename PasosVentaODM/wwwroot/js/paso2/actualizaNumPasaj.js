function masBoletos(tpb, num = '') {
    /// PARA AGREGAR BOLETOS BOTON Y DESCRIPCION

    const contPasajero = document.getElementById("descripcion");
    let tipoBoleto = document.getElementById("contBoletos");
    let combo = document.getElementById("tpasajero");

    var datosPasaj = document.getElementsByClassName("datosPasajero").length;

    let contador = num;

   
    if (num == '') {

      contador = datosPasaj + 1;
    }
    //alert(contador)
    //alert("Hay " + contador + " elementos");

    let descNom = document.getElementById("descNombre").value;
    let descApPat = document.getElementById("apellidoPaterno").value;
    let descApMat = document.getElementById("apellidoMaterno").value;

    ///// ----> PARA AGREGAR MAS BOLETOS TENEMOS QUE VALIDAR QUE EL AUTOBUS TENGA DISPONIBILIDAD DEL PERFIL DE BOLETO
    let claveCorridaSalida = $("#pE_nClaveCorrida2").text();
    let claveCorridaRegreso = $("#pE_nClaveCorridaRegreso2").text();
    ////////

    const loading2 = document.getElementById("cargando2");
    
    let org2 = $("#origencode2").text();

    let des2 = $("#destinocode2").text();

    let fechSal2 = $("#fechasalida2").text();

    let A2 = $("#adultoPas1").text();
    let M2 = $("#menoresPas1").text();
    let I2 = $("#senectudPas1").text();
    let E2 = $("#estudiantesPas1").text();
    let P2 = $("#profesoresPas1").text();

    let tipBolNom = "";


    switch (tpb) {
        case 'A':
            A2 = parseInt(A2) + 1;
            tipBolNom = "ADULTO";
            break;
        case 'M':
            M2 = parseInt(M2) + 1;
            tipBolNom = "MENOR";
            break;
        case 'I':
            I2 = parseInt(I2) + 1;
            tipBolNom = "INAPAM";
            break;
        case 'E':
            E2 = parseInt(E2) + 1;
            tipBolNom = "ESTUDIANTE";
            break;
        case 'P':
            P2 = parseInt(P2) + 1;
            tipBolNom = "PROFESOR";
            break;
    }

    let consecu2 = $("#pE_nConsecutivo2").text();

    console.log(consecu2);

     //A2 = 1;
     //M2 = 0;
     //I2 = 0;
     //E2 = 0;
     //P2 = 0;

    /// BORRA LAS VARIABLES DE TIPBOL

    $(".numAdultos").text("");
    $(".totalAdulto").text("");

    $(".numMenores").text("");
    $(".totalMenores").text("");

    $(".numInapam").text("");
    $(".totalInapam").text("");

    $(".numProfesores").text("");
    $(".totalProfesores").text("");

    $(".numEstudiantes").text("");
    $(".totalEstudiantes").text("");

    $(".totalAcumulado").text("");
    $(".ahorro").text("");
    ///// ACTUALIZA LA CORRIDA
    loading2.style.display = "block";
    loading2.style.margin = "0px auto";


    (async () => {
        var data = JSON.parse(`{  "pE_aOrigen": "${org2}",
                            "pE_aDestino": "${des2}",
                            "pE_aFecha": "${fechSal2}",
                            "pE_nAdultos": ${A2},
                            "pE_nInsen": ${I2},
                            "pE_nNinos": ${M2},
                            "pE_nEstudiantes": ${E2},
                            "pE_nMaestro": ${P2},
                            "pE_aViajeRedondo": "V1",
                            "pE_nModo": 1,
                            "pS_nConsecutivo":${consecu2},
                            "pS_nActualizaPasajeros":1}`);

        const rawResponse = await fetch(
            "http://webq.odm.com.mx/WSVentaWeb/api/RecuperaCorridas",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        const content = await rawResponse.json();
        //loading.style.display = "none";
        let existe = false;

        for (item of content.Corridas) {
            console.log(item.claveCorrida);
            let miCorrida = item.claveCorrida;

            if (claveCorridaSalida == miCorrida) {

                //alert('Es igual');
                existe = true;
            }

        }

        //alert('La corrida existe: ' + tpb);

        if (existe) {

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
            actPase();
        } else {

            document.getElementById("miForm").reset();

            actPase();
            alert('No tenemos asientos disponibles para este perfil')
        }

        // console.log(content);
        //actPase();
        
    })();

    /*
    var url = "http://webq.odm.com.mx/WSVentaWeb/api/RecuperaCorridas";
    //var data = { username: 'example' };

    var data = JSON.parse(`{  "pE_aOrigen": "${org2}",
                            "pE_aDestino": "${des2}",
                            "pE_aFecha": "${fechSal2}",
                            "pE_nAdultos": ${A2},
                            "pE_nInsen": ${I2},
                            "pE_nNinos": ${M2},
                            "pE_nEstudiantes": ${E2},
                            "pE_nMaestro": ${P2},
                            "pE_aViajeRedondo": "V2",
                            "pE_nModo": 1,
                            "pS_nConsecutivo":${consecu2},
                            "pS_nActualizaPasajeros":1}`);

    fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(function (result) {
            //if (result.ok) return result.json();

            //console.log(result.json());

            let datos = result.json();

            for (item of datos.Corridas) {

                console.log(item);
            }

        })
        .then(function (data) {

            //console.log(data);

            actPase();
        });
    */


}

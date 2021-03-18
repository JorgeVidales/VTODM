function masBoletos(tpb, num = '') {
    /// PARA AGREGAR BOLETOS BOTON Y DESCRIPCION



    const contPasajero = document.getElementById("descripcion");
    let tipoBoleto = document.getElementById("contBoletos");

    const contPasajeroReg = document.getElementById("descripcionReg");
    let tipoBoletoReg = document.getElementById("contBoletosReg");


    let combo = document.getElementById("tpasajero");

    var datosPasaj = document.getElementsByClassName("datosPasajero").length;

    let contador = num;

    let datosPasajero = document.querySelectorAll(".datosPasajero");
    
   
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
    let fechReg2 = $("#fecharegreso2").text();

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

    
    ///// ACTUALIZA LA CORRIDA
    loading2.style.display = "block";
    loading2.style.margin = "0px auto";


    (async () => {

        if (claveCorridaRegreso == '') {

            var data = JSON.parse(`{
                            "pE_aOrigen": "${org2}",
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
                            "pS_nActualizaPasajeros":1,
                            "pE_nCorridaBuscar": ${claveCorridaSalida}

                            }`);

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

            ///// ULTIMO PROCESO //////
            if (existe) {

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

                if (descNom == '' && descApPat == '' && descApMat == '') {

                    tipoBoleto.innerHTML += `<img id="conPasaj_${contador}" class="mr-2 A tipoBol conPasaj_${contador}" src="img/${tpb}.svg" onclick="oculDescr(this);"/>`;

                    contPasajero.innerHTML += `<div class="datosPasajero conPasaj_${contador}">

                                        <div style="position: relative;"><span id="numAsi_${contador}" class="numAsi"></span><img class="imgAsiento" style="width: 50px;" src="img/AsientoAzu.png"/></div>
                                        <p class="asiento">ASIENTO SELECCIONADO ${tipBolNom}</p>
                                        <h5>NOMBRE DEL PASAJERO</h5>
                                        <input id="textoSal_${contador}" class="nomPasajero text-uppercase" type="text" value="" oonkeyup="textoInputSalReg(this);" onkeypress="return soloLetras(event)" />
                                    </div>`;

                } else {

                    tipoBoleto.innerHTML += `<img id="conPasaj_${contador}" class="mr-2 A tipoBol conPasaj_${contador}" src="img/${tpb}.svg" onclick="oculDescr(this);"/>`;

                    contPasajero.innerHTML += `<div class="datosPasajero conPasaj_${contador}">

                                        <div style="position: relative;"><span id="numAsi_${contador}" class="numAsi"></span><img class="imgAsiento" style="width: 50px;" src="img/AsientoAzu.png"/></div>
                                        <p class="asiento">ASIENTO SELECCIONADO ${tipBolNom}</p>
                                        <h5>NOMBRE DEL PASAJERO</h5>
                                        <input id="textoSal_${contador}" class="nomPasajero text-uppercase" type="text" oonkeyup="textoInputSalReg(this);" onkeypress="return soloLetras(event)" value="${descNom} ${descApPat} ${descApMat}" />
                                    </div>`;

                }
                

                document.getElementById("miForm").reset();

                //// revisar /////

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
            }

            ////////// NO EXISTE //////////////

            else {

                document.getElementById("miForm").reset();

                let ARes2 = $("#adultoPas1").text();
                let MRes2 = $("#menoresPas1").text();
                let IRes2 = $("#senectudPas1").text();
                let ERes2 = $("#estudiantesPas1").text();
                let PRes2 = $("#profesoresPas1").text();

                (async () => {
                    var data = JSON.parse(`{  "pE_aOrigen": "${org2}",
                            "pE_aDestino": "${des2}",
                            "pE_aFecha": "${fechSal2}",
                            "pE_nAdultos": ${ARes2},
                            "pE_nInsen": ${IRes2},
                            "pE_nNinos": ${MRes2},
                            "pE_nEstudiantes": ${ERes2},
                            "pE_nMaestro": ${PRes2},
                            "pE_aViajeRedondo": "V2",
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

                    actPase();
                    alert('No tenemos asientos disponibles para este perfil')

                })();

            }
        }
        ////////////// CUANDO EL VIAJE ES REDONDO ///////////

        else {
            //alert('Estas en viaje redondo 1');

            var data = JSON.parse(`{
                            "pE_aOrigen": "${org2}",
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
                            "pS_nActualizaPasajeros":1,
                            "pE_nCorridaBuscar": ${claveCorridaSalida}

                            }`);

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

            //alert('Estas en viaje redondo 2');
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

            //alert(existe);

            if (existe) {

                //alert('Estas en viaje redondo 3');
                (async () => {

                    //alert(des2 + ' ' + org2 + ' ' + fechReg2 + ' ' + A2 + ' ' + claveCorridaRegreso)

                    var data = JSON.parse(`{
                            "pE_aOrigen": "${des2}",
                            "pE_aDestino": "${org2}",
                            "pE_aFecha": "${fechReg2}",
                            "pE_nAdultos": ${A2},
                            "pE_nInsen": ${I2},
                            "pE_nNinos": ${M2},
                            "pE_nEstudiantes": ${E2},
                            "pE_nMaestro": ${P2},
                            "pE_aViajeRedondo": "V2",
                            "pE_nModo": 1,
                            "pS_nConsecutivo":${consecu2},
                            "pS_nActualizaPasajeros":1,
                            "pE_nCorridaBuscar": ${claveCorridaRegreso}

                            }`);

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

                        //alert(item.claveCorrida);

                        let miCorrida = item.claveCorrida;

                        if (claveCorridaRegreso == miCorrida) {

                            //alert('Es igual');

                            existe = true;
                        }

                    }

                    //alert(existe);

                    if (existe) {

                        /// BORRA LAS VARIABLES SALIDA DE TIPBOL

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

                        /// BORRA LAS VARIABLES REGRESO DE TIPBOL

                        $(".numAdultosReg").text("");
                        $(".totalAdultoReg").text("");

                        $(".numMenoresReg").text("");
                        $(".totalMenoresReg").text("");

                        $(".numInapamReg").text("");
                        $(".totalInapamReg").text("");

                        $(".numProfesoresReg").text("");
                        $(".totalProfesoresReg").text("");

                        $(".numEstudiantesReg").text("");
                        $(".totalEstudiantesReg").text("");

                        $(".totalAcumuladoReg").text("");
                        $(".ahorroReg").text("");



                        //alert('TODO FUE CORRECTO');


                        //// ACTUALIZA NUM PASAJEROS SALIDA

                        if (descNom == '' && descApPat == '' && descApMat == '') {

                            tipoBoleto.innerHTML += `<img id="conPasaj_${contador}" class="mr-2 A tipoBol conPasaj_${contador}" src="img/${tpb}.svg" onclick="oculDescr(this);"/>`;

                            contPasajero.innerHTML += `<div class="datosPasajero conPasaj_${contador}">

                                        <div style="position: relative;"><span id="numAsi_${contador}" class="numAsi"></span><img class="imgAsiento" style="width: 50px;" src="img/AsientoAzu.png"/></div>
                                        <p class="asiento">ASIENTO SELECCIONADO ${tipBolNom}</p>
                                        <h5>NOMBRE DEL PASAJERO</h5>
                                        <input id="textoSal_${contador}" class="nomPasajero text-uppercase" onkeyup="textoInputSalReg(this);" onkeypress="return soloLetras(event)" type="text" value="" />
                                    </div>`;

                           document.getElementById(`conPasaj_${contador}`).click();

                        } else {

                            tipoBoleto.innerHTML += `<img id="conPasaj_${contador}" class="mr-2 A tipoBol conPasaj_${contador}" src="img/${tpb}.svg" onclick="oculDescr(this);"/>`;

                            contPasajero.innerHTML += `<div class="datosPasajero conPasaj_${contador}">

                                        <div style="position: relative;"><span id="numAsi_${contador}" class="numAsi"></span><img class="imgAsiento" style="width: 50px;" src="img/AsientoAzu.png"/></div>
                                        <p class="asiento">ASIENTO SELECCIONADO ${tipBolNom}</p>
                                        <h5>NOMBRE DEL PASAJERO</h5>
                                        <input id="textoSal_${contador}" class="nomPasajero text-uppercase" onkeyup="textoInputSalReg(this);" onkeypress="return soloLetras(event)"  type="text" value="${descNom} ${descApPat} ${descApMat}" />
                                    </div>`;

                            document.getElementById(`conPasaj_${contador}`).click();

                        }

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
                        //actPase();
                        ////////////
                        //// ACTUALIZA NUM PASAJEROS REGRESO


                        if (descNom == '' && descApPat == '' && descApMat == '') {

                            tipoBoletoReg.innerHTML += `<img id="conPasajReg_${contador}" class="mr-2 A tipoBol conPasajReg_${contador}" src="img/${tpb}.svg" onclick="oculDescrReg(this);"/>`;

                            contPasajeroReg.innerHTML += `<div class="datosPasajeroReg conPasajReg_${contador}">

                                                <div style="position: relative;"><span id="numAsiReg_${contador}" class="numAsiReg"></span><img class="imgAsiento" style="width: 50px;" src="img/AsientoAzu.png"/></div>
                                                <p class="asiento">ASIENTO SELECCIONADO ${tipBolNom}</p>
                                                <h5>NOMBRE DEL PASAJERO</h5>
                                                <input id="textoReg_${contador}" class="nomPasajero text-uppercase"  onkeyup="textoInputRegSal(this);" onkeypress="soloLetras(event)" type="text" value="" />
                                            </div>`;

                            document.getElementById(`conPasajReg_${contador}`).click();

                        } else {

                            tipoBoletoReg.innerHTML += `<img id="conPasajReg_${contador}" class="mr-2 A tipoBol conPasajReg_${contador}" src="img/${tpb}.svg" onclick="oculDescrReg(this);"/>`;

                            contPasajeroReg.innerHTML += `<div class="datosPasajeroReg conPasajReg_${contador}">

                                                <div style="position: relative;"><span id="numAsiReg_${contador}" class="numAsiReg"></span><img class="imgAsiento" style="width: 50px;" src="img/AsientoAzu.png"/></div>
                                                <p class="asiento">ASIENTO SELECCIONADO ${tipBolNom}</p>
                                                <h5>NOMBRE DEL PASAJERO</h5>
                                                <input id="textoReg_${contador}" class="nomPasajero text-uppercase" onkeyup="textoInputRegSal(this);" onkeypress="soloLetras(event)" type="text" value="${descNom} ${descApPat} ${descApMat}" />
                                            </div>`;

                            document.getElementById(`conPasajReg_${contador}`).click();

                        }


                       

                        actPase();

                    }

                    
                    else {

                        loading2.style.display = "none";
                        alert('El viaje de Regreso no tiene ese tipo de boleto');
                        actPase();
                    }


                })();

            }

            else {

                loading2.style.display = "none";
                alert('El viaje de salida no tiene ese tipo de boleto');

                actPase();
            }

            
        }

        



    })();


   

}

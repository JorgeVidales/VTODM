window.onload = function () {

    let org2 = $("#origencode2").text();

    let des2 = $("#destinocode2").text();

    let fechSal2 = $("#fechasalida2").text();

    let A2 = $("#adultoPas1").text();
    let M2 = $("#menoresPas1").text();
    let I2 = $("#senectudPas1").text();
    let E2 = $("#estudiantesPas1").text();
    let P2 = $("#profesoresPas1").text();

    let consecu2 = $("#pE_nConsecutivo2").text();

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

        /////////////////////////////////////////////////////////////////////////////////////

        regreso = document.getElementById("fecharegreso2").innerHTML;

        pE_nClaveCorrida = document.getElementById("pE_nClaveCorrida2").innerHTML.trim();
        pE_aFechaSalidaInicioCorrida = document.getElementById("pE_aFechaSalidaInicioCorrida2").innerHTML;
        pE_aFechaBoleto = document.getElementById("pE_aFechaBoleto2").innerHTML;
        pE_hHoraSalidaBoleto = document.getElementById("pE_hHoraSalidaBoleto2").innerHTML;

        pE_nCorridaEmpresa = document.getElementById("pE_nCorridaEmpresa2").innerHTML;
        pE_nCorridaEmpresa = parseInt(pE_nCorridaEmpresa, 10);

        pE_nConsecutivo = document.getElementById("ConsPas2").innerHTML;

        ////// VIAJE REDONDO

        pE_nClaveCorridaRegreso2 = document.getElementById("pE_nClaveCorridaRegreso2").innerHTML.trim();
        pE_aFechaSalidaInicioCorridaRegr2 = document.getElementById("pE_aFechaSalidaInicioCorridaRegr2").innerHTML;
        pE_aFechaBoletoRegreso2 = document.getElementById("pE_aFechaBoletoRegreso2").innerHTML;

        pE_hHoraSalidaBoletoRegreso2 = document.getElementById("pE_hHoraSalidaBoletoRegreso2").innerHTML;

        pE_nCorridaEmpresaRegreso2 = document.getElementById("pE_nCorridaEmpresaRegreso2").innerHTML;
        pE_nCorridaEmpresaRegreso2 = parseInt(pE_nCorridaEmpresaRegreso2, 10);

        //console.log('Viaje sencillo: ' + regreso);

        var loading = document.getElementById("cargando2");

        (async () => {
            /*
        
        
                */
            //loading.style.display = 'block';

            console.log("Clave pE_nConsecutivo: " + pE_nConsecutivo);
            console.log("Clave pE_nCorridaEmpresa: " + pE_nCorridaEmpresa);
            console.log("Clave pE_hHoraSalidaBoleto: " + pE_hHoraSalidaBoleto);
            console.log("Clave pE_aFechaBoleto: " + pE_aFechaBoleto);
            console.log(
                "Clave pE_aFechaSalidaInicioCorrida: " + pE_aFechaSalidaInicioCorrida
            );
            console.log("Clave pE_nClaveCorrida: " + pE_nClaveCorrida);

            console.log("Viaje sencillo: " + regreso);
            /// PARAMETROS VIAJE SENCILLO

            if (regreso == "_") {
                var data = JSON.parse(`{"pE_nClaveCorrida": ${pE_nClaveCorrida},
                                        "pE_aFechaSalidaInicioCorrida": "${pE_aFechaSalidaInicioCorrida}",
                                        "pE_aFechaBoleto": "${pE_aFechaBoleto}",
                                        "pE_hHoraSalidaBoleto": "${pE_hHoraSalidaBoleto}",
                                        "pE_nCorridaEmpresa": ${pE_nCorridaEmpresa},

                                        "pE_nConsecutivo":${pE_nConsecutivo},
                                            "pE_nControlCache":1
                                        }`);
            }
            else {
                /// PARAMETROS VIAJE REDONDO

                var data = JSON.parse(`{"pE_nClaveCorrida": "${pE_nClaveCorrida}",
                                            "pE_aFechaSalidaInicioCorrida": "${pE_aFechaSalidaInicioCorrida}",
                                            "pE_aFechaBoleto": "${pE_aFechaBoleto}",
                                            "pE_hHoraSalidaBoleto": "${pE_hHoraSalidaBoleto}",

                                            "pE_nClaveCorridaRegreso": ${pE_nClaveCorridaRegreso2},
                                            "pE_aFechaSalidaInicioCorridaRegr": "${pE_aFechaSalidaInicioCorridaRegr2}",
                                            "pE_aFechaBoletoRegreso": "${pE_aFechaBoletoRegreso2}",
                                            "pE_hHoraSalidaBoletoRegreso": "${pE_hHoraSalidaBoletoRegreso2}",

                                            "pE_nCorridaEmpresa": ${pE_nCorridaEmpresa},
                                            "pE_nCorridaEmpresaRegreso": ${pE_nCorridaEmpresaRegreso2},

                                            "pE_nConsecutivo":${pE_nConsecutivo},
                                            "pE_nControlCache":1
                                        }`);
            }

            const rawResponse = await fetch(
                "http://webq.odm.com.mx/WSVentaWeb/api/PersonalizaAsientos",
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

            console.log(content);

            const CostoTotal = content.Asientos.CostoTotal;
            const MoOpe = content.Asientos.MoOpe;
            let contador = 0;

            /////// FORMATO MONEDA /////

            const formatter = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
            });

            let A = "";
            let I = "";
            let M = "";
            let E = "";
            let P = "";

            let num = 0;
            for (item of content.PasajerosIda) {
                let tpBole = item.Leyenda;
                tpBole = tpBole.split(" ");

                console.log(tpBole[1]);
                let costoBol = item.Costo;
                console.log(costoBol);
                let ahorro = item.CostoOri;

                let tpb = '';

                ////

                if (tpBole[1] == "Adultos") {
                    costAdulto = item.Costo;
                    contador = tpBole[0];
                    ahorroAdulto = 0;
                    let totPreAdulto = formatter.format(contador * costAdulto);

                    //alert(totPreAdulto);
                    A = "ADULO";
                    tpb = 'A';

                    //ahorroAdulto = item.CostoOri;

                    //console.log(costAdulto);
                    //contador++
                }
                ////

                if (tpBole[1] == "Promocion") {
                    A = "ADULO";
                    tpb = 'A';
                    costAdulto = item.Costo;
                    ahorroAdulto = item.CostoOri;

                    console.log(costAdulto);
                    contador++;


                }
                /////

                if (tpBole[1] == "Menores") {
                    let totPreMenor = formatter.format(tpBole[0] * costoBol);
                    M = "MENOR";
                    tpb = 'M';


                    if (tpBole[0] > 1) {
                        M = "MENORES";
                        $(".numMenores").text(tpBole[0] + " " + M);
                        $(".totalMenores").text(totPreMenor);
                    } else {
                        $(".numMenores").text(tpBole[0] + " " + M);
                        $(".totalMenores").text(totPreMenor);
                    }
                }
                /////

                if (tpBole[1] == "Insen") {
                    let totPreInapm = formatter.format(tpBole[0] * costoBol);
                    I = "INAPAM";
                    tpb = 'I';



                    $(".numInapam").text(tpBole[0] + " " + I);
                    $(".totalInapam").text(totPreInapm);
                }

                /////
                if (tpBole[1] == "Maestros") {
                    let totPreMaestro = formatter.format(tpBole[0] * costoBol);
                    P = "PROFESOR";
                    tpb = 'P';



                    if (tpBole[0] > 1) {
                        P = "PROFESORES";
                        $(".numProfesores").text(tpBole[0] + " " + P);
                        $(".totalProfesores").text(totPreMaestro);
                    } else {
                        $(".numProfesores").text(tpBole[0] + " " + P);
                        $(".totalProfesores").text(totPreMaestro);
                    }
                }

                /////
                if (tpBole[1] == "Estudiantes") {
                    let totPreEstudiante = formatter.format(tpBole[0] * costoBol);
                    E = "ESTUDIANTE";
                    tpb = 'E';



                    if (tpBole[0] > 1) {
                        E = "ESTUDIANTES";
                        $(".numEstudiantes").text(tpBole[0] + " " + E);
                        $(".totalEstudiantes").text(totPreEstudiante);
                    } else {
                        $(".numEstudiantes").text(tpBole[0] + " " + E);
                        $(".totalEstudiantes").text(totPreEstudiante);
                    }
                }

                num++

                //masBoletos(tpb, num);
                //@*console.log('Mis pasajeros: ' + item.Leyenda + ' ' + item.Costo + ' ' + item.CostoOri);*@
                //console.log(item.CostoOri);
            }

            console.log(
                "Mi total de Promociones: " +
                contador +
                " Precio: " +
                costAdulto +
                " Ahorro: " +
                ahorroAdulto
            );

            let totPreAdulto = formatter.format(contador * costAdulto);
            console.log("Mi total Adulto en Moneda: " + totPreAdulto);

            let totAhorAdulto = formatter.format(contador * ahorroAdulto);

            /////////////

            if (A != "") {
                if (contador > 1) {
                    A = "ADULTOS";
                }
                $(".numAdultos").text(contador + " " + A);
                $(".totalAdulto").text(totPreAdulto);
                $(".ahorro").text(totAhorAdulto);
            }

            ////
            let sumAd = $(".totalAdulto").text();
            sumAd = sumAd.replace("$", "");
            sumAd = sumAd.replace(",", "");
            if (sumAd == "") {
                sumAd = 0;
            }

            /////
            let sumIn = $(".totalInapam").text();
            sumIn = sumIn.replace("$", "");
            sumIn = sumIn.replace(",", "");
            if (sumIn == "") {
                sumIn = 0;
            }

            ////
            let sumMe = $(".totalMenores").text();
            sumMe = sumMe.replace("$", "");
            sumMe = sumMe.replace(",", "");
            if (sumMe == "") {
                sumMe = 0;
            }

            ////
            let sumEs = $(".totalEstudiantes").text();
            sumEs = sumEs.replace("$", "");
            sumEs = sumEs.replace(",", "");
            if (sumEs == "") {
                sumEs = 0;
            }

            ////
            let sumPr = $(".totalProfesores").text();
            sumPr = sumPr.replace("$", "");
            sumPr = sumPr.replace(",", "");
            if (sumPr == "") {
                sumPr = 0;
            }

            let sumatoriBol =
                parseFloat(sumAd) +
                parseFloat(sumIn) +
                parseFloat(sumMe) +
                parseFloat(sumEs) +
                parseFloat(sumPr);

            //let sumatoriBol = sumAd + sumIn + sumMe + sumEs + sumPr;

            //sumatoriBol = formatter.format(sumatoriBol);

            $(".totalAcumulado").text(formatter.format(sumatoriBol));
            //console.log(content);---------checar

            cargarMapa(); /// ---- VIAJE SENCILLO
            cargarMapa2(); ///----- VIAJE REDONDO
            agregarboletosPaso1(); ////----- VIAJE SENCILLO

            loading.style.display = "none";
            //masBoletos(); /// VIAJE SENCILLO

        })();
        
        ////////////////////////////////////////////////////////////////////////////////////

    })();


    //alert("Hola");
    //masBoletos();
    //// VIAJE SENCILLO
    //window.location.reload(); 
    
};

function actPase() {
    //// VIAJE SENCILLO
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

    ////// ACTUALIZA EL PASE DE ABORDAR

    const loading2 = document.getElementById("cargando2");

    /*@*let clvCorrida = ($('#pE_nClaveCorrida2').text()).trim();
    let fechSalInCorrida = $('#pE_aFechaSalidaInicioCorrida2').text();
    let fechBol = $('#pE_aFechaBoleto2').text();
    let hrSalBol = $('#pE_hHoraSalidaBoleto2').text();
    let nCorriEmpre = parseInt($('#pE_nCorridaEmpresa2').text(), 10);
    let consecu2 = $('#pE_nConsecutivo2').text()*@*/

    if (regreso == "_") {
        var data2 = JSON.parse(`{"pE_nClaveCorrida": ${pE_nClaveCorrida},
                                  "pE_aFechaSalidaInicioCorrida": "${pE_aFechaSalidaInicioCorrida}",
                                  "pE_aFechaBoleto": "${pE_aFechaBoleto}",
                                  "pE_hHoraSalidaBoleto": "${pE_hHoraSalidaBoleto}",
                                  "pE_nCorridaEmpresa": ${pE_nCorridaEmpresa},

                                  "pE_nConsecutivo":${pE_nConsecutivo},
                                  "pE_nControlCache":1
                          }`);
    } else {
        /// PARAMETROS VIAJE REDONDO

        var data2 = JSON.parse(`{    "pE_nClaveCorrida": "${pE_nClaveCorrida}",
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

    var url2 = "http://webq.odm.com.mx/WSVentaWeb/api/PersonalizaAsientos";
    /*@*var data2 = JSON.parse(`{   "pE_nClaveCorrida": ${clvCorrida},
                                "pE_aFechaSalidaInicioCorrida": "${fechSalInCorrida}",
                                "pE_aFechaBoleto": "${fechBol}",
                                "pE_hHoraSalidaBoleto": "${hrSalBol}",
                                "pE_nCorridaEmpresa": ${nCorriEmpre},
                                "pE_nConsecutivo":${consecu2},
                                "pE_nControlCache":1}`);*@*/

    fetch(url2, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data2), // data can be `string` or {object}!
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (result) {
            if (result.ok) return result.json();
        })
        .then(function (data) {
            //console.log(data);

            loading2.style.display = "none";

            let content = data;
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

            for (item of content.PasajerosIda) {
                let tpBole = item.Leyenda;
                tpBole = tpBole.split(" ");

                console.log(tpBole[1]);
                let costoBol = item.Costo;
                console.log(costoBol);
                let ahorro = item.CostoOri;

                ////
                if (tpBole[1] == "Adultos") {
                    costAdulto = item.Costo;
                    contador = tpBole[0];
                    ahorroAdulto = 0;
                    let totPreAdulto = formatter.format(contador * costAdulto);

                    //alert(totPreAdulto);
                    A = "ADULO";

                    //ahorroAdulto = item.CostoOri;

                    //console.log(costAdulto);
                    //contador++
                }
                ////
                if (tpBole[1] == "Promocion") {
                    A = "ADULO";
                    costAdulto = item.Costo;
                    ahorroAdulto = item.CostoOri;

                    console.log(costAdulto);
                    contador++;
                }
                /////
                if (tpBole[1] == "Menores") {
                    let totPreMenor = formatter.format(tpBole[0] * costoBol);
                    M = "MENOR";

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

                    $(".numInapam").text(tpBole[0] + " " + I);
                    $(".totalInapam").text(totPreInapm);
                }

                /////
                if (tpBole[1] == "Maestros") {
                    let totPreMaestro = formatter.format(tpBole[0] * costoBol);
                    P = "PROFESOR";

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

                    if (tpBole[0] > 1) {
                        E = "ESTUDIANTES";
                        $(".numEstudiantes").text(tpBole[0] + " " + E);
                        $(".totalEstudiantes").text(totPreEstudiante);
                    } else {
                        $(".numEstudiantes").text(tpBole[0] + " " + E);
                        $(".totalEstudiantes").text(totPreEstudiante);
                    }
                }
                // @* console.log('Mis pasajeros: ' + item.Leyenda + ' ' + item.Costo + ' ' + item.CostoOri);*@
                //console.log(item.CostoOri);
            }

            console.log("Mi total de Promociones: " + contador + " Precio: " + costAdulto + " Ahorro: " + ahorroAdulto);

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
            console.log(content);

            //loading.style.display = 'none';
        });
}

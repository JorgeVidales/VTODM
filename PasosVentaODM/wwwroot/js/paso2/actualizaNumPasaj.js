function masBoletos() {
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

    let consecu2 = $("#pE_nConsecutivo2").text();

    console.log(consecu2);

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
        })
        .then(function (data) {
            //console.log(data);

            actPase();
        });
}

function wsConfirmacion() {

    //// CHECAMOS SI EL VIAJE ES REDONDO //////
    let datosRegreso = JSON.parse(localStorage.getItem('datosRegreso'));
    let regreso2 = datosRegreso[0].length;

    

    //console.log(datosRegreso[0].length);

    //let btnSolicita = $("#btnSolicita").text();

    let adulto = $(".adulto").text();

    if (adulto == '') {
        adulto = 0;
    } else {
        adulto = adulto.split(" ");
        adulto = parseInt(adulto[0]);
    }

    let menor = $(".menor").text();

    if (menor == '') {
        menor = 0;
    } else {
        menor = menor.split(" ");
        menor = parseInt(menor[0]);
    }

    let inapam = $(".inapam").text();

    if (inapam == '') {
        inapam = 0;
    } else {
        inapam = inapam.split(" ");
        inapam = parseInt(inapam[0]);
    }

    

    let estudiante = $(".estudiante").text();

    if (estudiante == '') {
        estudiante = 0;
    } else {
        estudiante = estudiante.split(" ");
        estudiante = parseInt(estudiante[0]);
    }
    

    let profesor = $(".profesor").text();

    if (profesor == '') {
        profesor = 0;
    } else {
        profesor = profesor.split(" ");
        profesor = parseInt(profesor[0]);
    }
    

    let totalPasajeros = adulto + menor + inapam + estudiante + profesor;

/////// STRING DE NOMBRES ////////////

    let miConsecutivo = localStorage.getItem('miConsecutivo');
    let datosSalida = JSON.parse(localStorage.getItem('datosSalida'));
    let regreso = datosSalida[0];

    let datosRegreso2 = JSON.parse(localStorage.getItem('datosRegreso'));
    let regresoRegreso = datosRegreso2[0];

    let nombre = [];
    let asientosSalida = [];
    let tpBoletoSalida = [];
    let tpBolLetraSalida = [];


    let asientosRegreso = [];

    for (item of regreso) {

        let tpBoleto = item.categoria;
        let tpBolLetra = '';
        switch (tpBoleto) {

            case 'ADULTO':
                tpBoleto = 'ADULTO';
                tpBolLetra = 'A';
                break;
            case 'MENOR':
                tpBoleto = 'NINO';
                tpBolLetra = 'N';
                break;
            case 'INAPAM':
                tpBoleto = 'INSEN';
                tpBolLetra = 'I';
                break;
            case 'ESTUDIANTE':
                tpBoleto = 'ESTUDIANTE';
                tpBolLetra = 'E';
                break;
            case 'PROFESOR':
                tpBoleto = 'MAESTRO';
                tpBolLetra = 'M';
                break;
        }

        nombre.push(item.nombre);
        asientosSalida.push(item.asiento);
        tpBoletoSalida.push(tpBoleto);
        tpBolLetraSalida.push(tpBolLetra);

    }

    for (item2 of regresoRegreso) {

        asientosRegreso.push(item2.asiento);
    }

    let nombresString = nombre.toString();
    let asientosString = asientosSalida.toString();
    let tpBoletoString = tpBoletoSalida.toString();
    let tpBolLetraString = tpBolLetraSalida.toString();

    let asientosRegresoString = asientosRegreso.toString();
    console.log(tpBolLetraString);

    //console.log('Mi todal de pasajeros: ' + totalPasajeros);


    (async () => {

            let data = JSON.parse(`
                                {
                                    "pE_nTotalPasajeros": ${totalPasajeros},
                                    "pE_aCadenaPasajeros": "${nombresString}",
                                    "pE_aCadenaAsientos":"${asientosString}",
                                    "pE_aCadenaTiposPasajeros":"${tpBoletoString}",
                                    "pE_aClaveTiposPasajeros":"${tpBolLetraString}",
                                    "pE_aCadenaAsientosRegreso":"${asientosRegresoString}",
                                    "pE_nConsecutivo":${miConsecutivo}
                                }
                                `);
        





        
        const rawResponse = await fetch(
            "http://webq.odm.com.mx/WSVentaWeb/api/Confirmacion",
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
       
    })();

}
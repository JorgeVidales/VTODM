document.addEventListener('DOMContentLoaded', () => {

    viajeSalida();
    viajeRegreso();
    pasajerosSalida();
    pasajerosRegreso();
    resumenMontoTotal();
    wsConfirmacion();

    let btnSolicita = localStorage.getItem('btnSolicita');

    if (btnSolicita == '1') {
        document.querySelector("#visamaster").click();
    } else {
        document.querySelector("#reservaciones").click();
    }

    //// CHECAMOS SI EL VIAJE ES REDONDO //////
    let datosRegreso = JSON.parse(localStorage.getItem('datosRegreso'));
    let regreso = datosRegreso[0].length;

    if (regreso == 0) {

        $("#verSalida").css('display', 'none');
        $("#verRegreso").css('display', 'none');

        $(".detallesRegreso").css('display', 'none');
        $("#viajeRegreso").css('display', 'none');
        
    } else {
        $("#verRegreso").css('display', 'block');
    }

    console.log(datosRegreso[0].length);

})

function viajeSalida() {

    let vjSalida = JSON.parse(localStorage.getItem('SalidaRegreso'));

    let origen = vjSalida[0].ViajeIda.origen;
    let destino = vjSalida[0].ViajeIda.destino;
    let salida = vjSalida[0].ViajeIda.salida;
    let llegada = vjSalida[0].ViajeIda.llegada;
    let hrSalida = vjSalida[0].ViajeIda.hrSalida;
    let hrLlegada = vjSalida[0].ViajeIda.hrLlegada;
    let logoEmpresa = vjSalida[0].ViajeIda.logoEmpresa;


    $("#imgSalida").attr("src", logoEmpresa);
    $("#origenSalida").text(origen);
    $("#destinoSalida").text(destino);
    $("#fechaSalida").text(salida);
    $("#hrSalida").text(hrSalida);
    $("#fechaLlegada").text(llegada);
    $("#hrLlegada").text(hrLlegada);

    //console.log(origen);
}

function viajeRegreso() {

    let vjSalida = JSON.parse(localStorage.getItem('SalidaRegreso'));

    let origen = vjSalida[0].ViajeRegreso.origen;
    let destino = vjSalida[0].ViajeRegreso.destino;
    let salida = vjSalida[0].ViajeRegreso.salida;
    let llegada = vjSalida[0].ViajeRegreso.llegada;
    let hrSalida = vjSalida[0].ViajeRegreso.hrSalida;
    let hrLlegada = vjSalida[0].ViajeRegreso.hrLlegada;
    let logoEmpresa = vjSalida[0].ViajeRegreso.logoEmpresa;


    $("#imgRegreso").attr("src", logoEmpresa);
    $("#origenSalidaRegreso").text(origen);
    $("#destinoSalidaRegreso").text(destino);
    $("#fechaSalidaRegreso").text(salida);
    $("#hrSalidaRegreso").text(hrSalida);
    $("#fechaLlegadaRegreso").text(llegada);
    $("#hrLlegadaRegreso").text(hrLlegada);

    //console.log(origen);
}

function pasajerosSalida() {

    let pasSalida = document.getElementById("pasajerosSalida"); 



    let pasajerosSalida = JSON.parse(localStorage.getItem('datosSalida'));


   
    let datosPasSalida = pasajerosSalida[0];

    pasSalida.innerHTML = '';

    for (item of datosPasSalida) {

        let nombre = item.nombre;
        let asiento = item.asiento;
        let categoria = item.categoria;
        let ahorro = item.ahorro;
        let precio = item.precio;

        
        pasSalida.innerHTML += `<tr>

                                <td>${nombre}</td>
                                <th scope="row">${asiento}</th>
                                <td>${categoria}</td>
                                <td>${ahorro}</td>
                                <td>${precio}</td>

                            </tr>`;
    }
    
}

function pasajerosRegreso() {

    let pasRegreso = document.getElementById("pasajerosSalidaRegreso"); 

    let pasajerosRegreso = JSON.parse(localStorage.getItem('datosRegreso'));

    let datosPasRegreso = pasajerosRegreso[0];

    pasRegreso.innerHTML = '';

    for (item of datosPasRegreso) {

        let nombre = item.nombre;
        let asiento = item.asiento;
        let categoria = item.categoria;
        let ahorro = item.ahorro;
        let precio = item.precio;


        pasRegreso.innerHTML += `<tr>

                                <td>${nombre}</td>
                                <th scope="row">${asiento}</th>
                                <td>${categoria}</td>
                                <td>${ahorro}</td>
                                <td>${precio}</td>

                            </tr>`;
    }

}

function resumenMontoTotal() {

    /// CARGA EL TOTAL FINAL /////
    
    let PersonalizaAsientos = JSON.parse(localStorage.getItem('PersonalizaAsientos'));

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })

    let total = parseFloat(PersonalizaAsientos[0].Asientos.CostoTotal).toFixed(2);
    //let total = parseFloat('1250.03').toFixed(2);

    if (total % 1 == 0) {
        //alert("Es un numero entero");

        total = formatter.format(total) + '.00'

    } else {

        total = formatter.format(total);
    }

    $('#totalFinal').text(total);

    //////////// AHORRO EN LA SALIDA //////////////// 

    let datosSalidaAhorro = JSON.parse(localStorage.getItem('datosSalida'));

    let ahorroSalida = datosSalidaAhorro[0];
    sumaSalida = 0;

    for (item of ahorroSalida) {

        ahorro = item.ahorro.replace('$', '');
        ahorro = ahorro.replace(',', '');
        ahorro = Number(ahorro);

        sumaSalida += ahorro;

        //console.log(suma)
    }

    //console.log(sumaSalida);

    //////////// AHORRO EN EL REGRESO //////////////// 

    let datosRegresoAhorro = JSON.parse(localStorage.getItem('datosRegreso'));

    let ahorroRegreso = datosRegresoAhorro[0];
    sumaRegreso = 0;

    for (item of ahorroRegreso) {

        ahorro = item.ahorro.replace('$', '');
        ahorro = ahorro.replace(',', '');
        ahorro = Number(ahorro);

        sumaRegreso += ahorro;

        //console.log(suma)
    }
    let ahorroTotal = sumaRegreso + sumaSalida;


    if (ahorroTotal % 1 == 0) {
        //alert("Es un numero entero");

        ahorroTotal = formatter.format(ahorroTotal) + '.00'

    } else {

        ahorroTotal = formatter.format(ahorroTotal);
    }

    $('#ahorroFinal').text(ahorroTotal);

    ////// CARGA EL NUMERO DE PASAJEROS ///////

    let numPasajeros = JSON.parse(localStorage.getItem('numPasajeros'));

    for (item of numPasajeros) {

        $('.adulto').text(item.numAdultos)
        $('.menor').text(item.numMenores)
        $('.inapam').text(item.numInapam)
        $('.estudiante').text(item.numEstudiantes)
        $('.profesor').text(item.numProfesores)
    }
   
}

function verViaje(e) {

    let id = e.id;

    //console.log(id);

    switch (id) {
        case 'verRegreso':

            $("#verSalida").css('display', 'block');
            $("#verRegreso").css('display', 'none');

            $(".detallesSalida").css('display', 'none');
            $("#viajeSalida").css('display', 'none');

            $(".detallesRegreso").css('display', 'block');
            $("#viajeRegreso").css('display', 'block');

            break;

        case 'verSalida':

            $("#verRegreso").css('display', 'block');
            $("#verSalida").css('display', 'none');

            $(".detallesRegreso").css('display', 'none');
            $("#viajeRegreso").css('display', 'none');

            $(".detallesSalida").css('display', 'block');
            $("#viajeSalida").css('display', 'block');

            break;
    }
    
}
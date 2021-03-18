document.addEventListener('DOMContentLoaded', () => {

    //viajeSalida();

    let SalidaRegreso = JSON.parse(localStorage.getItem('SalidaRegreso'));

    let logoEmpresa = document.querySelector("#logoEmpresa");
    let logo = '/' + SalidaRegreso[0].ViajeIda.logoEmpresa;

    logoEmpresa.setAttribute("src", logo);
    
    let coreoCel = JSON.parse(localStorage.getItem('coreoCel'));

    let correo = coreoCel.correo;
    
    $("#correo").text(correo);

    

    let origen = SalidaRegreso[0].ViajeIda.origen;
    $("#orig").text(origen);
    let destino = SalidaRegreso[0].ViajeIda.destino;
    $("#destino").text(destino);

    //////// FECHA SALIDA //////////

    let fechSalida = SalidaRegreso[0].ViajeIda.salida;
    let divFechSalida = fechSalida.split("/");

    let dia = parseInt(divFechSalida[0]);
    let mes = parseInt(divFechSalida[1])-1;
    let year = parseInt(divFechSalida[2]);

    let fecha = new Date(year, mes, dia);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let fechaFormat = fecha.toLocaleDateString("es-ES", options).toUpperCase()
    fechaFormat = fechaFormat.split(" ");

    let diaSal = fechaFormat[0].substr(0, 4);
    let mesSal = fechaFormat[3].substr(0, 3);

    let fechaSalidaFormato = diaSal + ' ' + dia + ' ' + mesSal + ' ' + year;
    $("#fechaSalida").text(fechaSalidaFormato);

    ///////// HORA SALIDA //////////

    let horaSalida = SalidaRegreso[0].ViajeIda.hrSalida;
    $("#horaSalida").text(horaSalida);

    /////// FECHA LLEGADA ////////////

    let fechLlegada = SalidaRegreso[0].ViajeIda.llegada;

    let divFechLlegada = fechLlegada.split("/");

    let dia2 = parseInt(divFechLlegada[0]);
    let mes2 = parseInt(divFechLlegada[1]) - 1;
    let year2 = parseInt(divFechLlegada[2]);

    let fecha2 = new Date(year2, mes2, dia2);
    let options2 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let fechaFormat2 = fecha2.toLocaleDateString("es-ES", options2).toUpperCase()
    fechaFormat2 = fechaFormat2.split(" ");

    let diaSal2 = fechaFormat2[0].substr(0, 4);
    let mesSal2 = fechaFormat2[3].substr(0, 3);

    let fechaLlegadaFormato = diaSal2 + ' ' + dia2 + ' ' + mesSal2 + ' ' + year2;



    $("#fechaLlegada").text(fechaLlegadaFormato);

    /////// HORA LLEGADA ////////////

    let horaLlegada = SalidaRegreso[0].ViajeIda.hrLlegada;
    $("#horaLlegada").text(horaLlegada);


    console.log(origen);
    //let regreso = datosRegreso[0].length;

    wsGuarda();
    //console.log(datosRegreso[0].length);

})


function wsGuarda() {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    })


    let miConsecutivo = localStorage.getItem('miConsecutivo');
    let correo = $("#correo").text();

    let wsGuarda = JSON.parse(localStorage.getItem('wsGuarda'));

    //alert(wsGuarda.Guarda.Operacion) servicio
    $("#servicio").text(wsGuarda.Guarda.ClaseServicio);
    let operacion = wsGuarda.Guarda.Operacion;
    let total = parseFloat(wsGuarda.Guarda.Total).toFixed(2);

    ///// PARA PONER EL TIEMPO LIMITE /////

    let fechaLimite = wsGuarda.Guarda.ViajeIda[0].Fechaexp;
    let horaLimite = wsGuarda.Guarda.ViajeIda[0].Horaexp;


    let divFechLlegada = fechaLimite.split("/");

    let dia2 = parseInt(divFechLlegada[0]);
    let mes2 = parseInt(divFechLlegada[1]) - 1;
    let year2 = parseInt(divFechLlegada[2]);

    let fecha2 = new Date(year2, mes2, dia2);
    let options2 = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let fechaFormat2 = fecha2.toLocaleDateString("es-ES", options2).toUpperCase()
    fechaFormat2 = fechaFormat2.split(" ");

    let diaSal2 = fechaFormat2[0].substr(0, 4);
    let mesSal2 = fechaFormat2[3].substr(0, 3);

    let fechLim = diaSal2 + ' ' + dia2 + ' ' + mesSal2 + ' ' + year2 + ' / ' + horaLimite + ' HRS.';



    $("#horaLimite").text(fechLim);



    //alert('Fecha limite: ' + fechaLimite + ' Hora limite: ' + horaLimite);

    if (total % 1 == 0) {
        //alert("Es un numero entero");

        total = formatter.format(total) + '.00'

    } else {

        total = formatter.format(total);
    }

    $('#total').text(total);
    $('#total2').text(total);

    ////// CODIGO DE TIENDAS ////////

    JsBarcode("#barcode", operacion);

    ////// CODIGO DE MEGA SORIANA ////////

    let SalidaRegreso = JSON.parse(localStorage.getItem('SalidaRegreso'));
    let orgdestIata = localStorage.getItem('orgdestIata');


    let fechSalida = SalidaRegreso[0].ViajeIda.salida;
    let divFechSalida = fechSalida.split("/");

    let dia = divFechSalida[0];
    let mes = divFechSalida[1];

    const parte1 = '777792';
    let operacion2 = operacion;
    let iatas = orgdestIata;
    let ddmm = '-' + dia + mes + '-';
    let hrSalida = SalidaRegreso[0].ViajeIda.hrSalida;
    hrSalida = hrSalida.substr(0, 5);

    let codigoMegaSor = parte1 + operacion2 + iatas + ddmm + hrSalida;

    JsBarcode("#barcode2", codigoMegaSor);

    //JsBarcode("#barcode2", "77792200691456MEX-GDL-1003-06:30");

    ////////////

    $("#barcode").css({ 'max-width': '100%', 'height': '100%' });
    $("#barcode2").css({ 'max-width': '100%', 'height': '100%' });

    wsPase(operacion2);
}

function wsPase(pE_nOperacion) {

    let miOperacion = pE_nOperacion;

    (async () => {

        let data = JSON.parse(`
                                {
                                    "pE_nOperacion": ${miOperacion},
                                    "pE_nGuardaoperacion": 1
                                }
                                `);



        const rawResponse = await fetch(
            "http://webq.odm.com.mx/WSVentaWeb/api/PasedeAbordar",
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

        let urlpdf = content.pS_aRuta;
            $('#pdf').attr('href', urlpdf);

       // console.log(content.pS_aRuta);

    })();
}

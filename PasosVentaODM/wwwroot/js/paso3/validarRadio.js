function radioCheck() {

    let terminos = $('input:radio[name=terminos]:checked').val();
    let promo = $('input:radio[name=promo]:checked').val(); 

    //console.log('Tu check 1: ' + terminos + ' Tu check 2: ' + promo);
    
    if ($("#terminos").is(':checked') && $("input:radio[name=promo]").is(':checked')) {
        //alert("Está activado");
        $('#divPagar').removeClass("btnPagar").addClass("btnPagarActivo");
    } else {
        //alert("No está activado");

        $('#divPagar').removeClass("btnPagarActivo").addClass("btnPagar");
    }  
}

function enviarPasoFinal() {

    //alert('Tu paso final esta casi listo');

    let terminos = $('input:radio[name=terminos]:checked').val();
    let promo = $('input:radio[name=promo]:checked').val();

    //console.log('Tu check 1: ' + terminos + ' Tu check 2: ' + promo);

    if ($("#terminos").is(':checked') && $("input:radio[name=promo]").is(':checked')) {
        //alert("Está activado");
        $('#divPagar').removeClass("btnPagar").addClass("btnPagarActivo");
    } else {

        alert("Para continuar debes indicar que estás de acuerdo con los términos y condiciones así como el aviso de privacidad");

       
        $('#divPagar').removeClass("btnPagarActivo").addClass("btnPagar");

        return
    }

    ////////////

   
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let correo = document.getElementById("correo1").value
    let correo2 = document.getElementById("correo2").value
    //alert(correo);
    /////////////

    let cel1 = document.getElementById("cel1").value;
    let cel2 = document.getElementById("cel2").value;

    if (er.test(correo)) {
        console.log('Email valido');

        $("#correo2").prop('disabled', false);
    } else {
        alert('Email no valido');
        $("#correo2").prop('disabled', true);
        return
    }

    if (correo2 != correo) {

        alert('los correos no son igales');
        return
    }


    if (cel1 != cel2) {

        alert('Tu teléfono no es igual');
        return
    }
    if (cel1 == '') {

        alert('Tu teléfono no puede estar vacio')
        return
    }


    let CoreoCelObj = { correo: correo, celular: cel1 }

    localStorage.setItem('coreoCel', JSON.stringify(CoreoCelObj));

    ///////////////////////

    let miConsecutivo = localStorage.getItem('miConsecutivo');


    let metodPagosActivo = $(".metodPagosActivo").text();

    //alert('Tu metodo de pago seleccionado es:' + metodPagosActivo);

    switch (metodPagosActivo) {
        case 'RESERVACIONES':

            ////////////// FECHA ACTUAL /////////////
            let miFecha = new Date();

            let dia = Number(miFecha.getDate());
            let mes = parseInt(miFecha.getMonth());
            let year = miFecha.getFullYear();
            let hh = miFecha.getHours() + 3;
            let mm = miFecha.getMinutes() + 30;



            var f1 = new Date(year, mes, dia, hh, mm);


            //console.log('mi fecha actual es: ' + f1);

            /// FECHA SELECIONADA ////

            let SalidaRegreso = JSON.parse(localStorage.getItem('SalidaRegreso'));

            let fechaSalida = SalidaRegreso[0].ViajeIda.salida;

            let divFecha = fechaSalida.split("/");
            let diaSal = Number(divFecha[0]);
            let mesSal = Number(divFecha[1] - 1);
            let yearSal = Number(divFecha[2]);

            let hhSalida = SalidaRegreso[0].ViajeIda.hrSalida;
            let divHoras = hhSalida.split(":");
            let hrSalida = Number(divHoras[0]);
            let mmSalida = divHoras[1].split(" HRS");
            mmSalida = Number(mmSalida[0]);



            var f2 = new Date(yearSal, mesSal, diaSal, hrSalida, mmSalida);

            //console.log('mi fecha Salida es: ' + f2);

            if (f1 > f2) {

                //console.log("La fecha actual es mayor");
                alert('Para este viaje ya no se puede reservar, esta opcion es valida solamente 3:30 horas antes del viaje.');

            }
            if (f1 < f2) {

                //console.log("La fecha actual es menor");
                $("#cargaCont").css('display', 'block');
                $("body").css('overflow', 'hidden');
                (async () => {

                    let data = JSON.parse(`
                                        {
                                            "pE_nConsecutivo":${miConsecutivo},
                                            "pE_aTarjetaServicio":"EF",
                                            "pE_aNumTarjeta":"",
                                            "pe_acorreotb":"${correo}",
                                            "pE_aNombreTB":"",
                                            "pE_nBanco":0
                                        }
                                        `);



                    const rawResponse = await fetch(
                        "http://webq.odm.com.mx/WSVentaWeb/api/Guarda",
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

                    $("#cargaCont").css('display', 'none');
                    $("body").css('overflow', 'auto');

                    localStorage.setItem('wsGuarda', JSON.stringify(content));



                    window.location.href = "PasoFinal/pasofinalReservacion";

                    //console.log(content);

                })();
            }


            break;
        case 'VISA MASTER CARD':

            alert(metodPagosActivo)

            break;

        case 'TODITO CASH':

            alert(metodPagosActivo)
            break;

        case 'COPPEL PAY':
            alert(metodPagosActivo)

            break;
    }






    ////////////////////////

   
    //alert("Mi correo es: " + correo);
}
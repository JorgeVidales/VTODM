let datosViaje = [];
let datosViajeRegreso = [];

let numPasajeros = [];
let corridaSalidaRegreso = [];

function enviaSalPas3() {

    let NumAsiento = document.querySelectorAll(".numAsi");
    let NombreAsiento = document.querySelectorAll(".datosPasajero .nomPasajero");
    let NumAsiSelecAll = false;
    let NomAsiSelecAll = false;
    let fecharegreso2 = $("#fecharegreso2").text();

    
    //let viajeSencillo = document.querySelector(".viajeSencillo");
    //let viajeRedondo = document.querySelector(".viajeRedondo"); 

    let contador = 1;
    let contador2 = 1;


    //alert(fecharegreso2);

    //console.log(NumAsiento);
    //console.log(NombreAsiento);

    for (item of NumAsiento) {

        console.log(item)
        let selectAsiento = item.textContent;
        //let asiId =
        //console.log(AsiId);
        if (selectAsiento == '') {
            alert('Te falta seleccionar un asiento');

            return document.getElementById(`conPasaj_${contador}`).click();


        } else {
            NumAsiSelecAll = true;
        }
        contador++
    }

    //alert(NumAsiSelecAll);

    for (item2 of NombreAsiento) {

        let selectNombre = item2.value;

        //let asiId =
        //console.log(selectNombre);

        if (selectNombre == '') {

            //alert(contador2);
            alert('Te falta poner el nombre de un pasajero');
            item2.focus();

            return document.getElementById(`conPasaj_${contador2}`).click();
        } else {
            NomAsiSelecAll = true;
        }
        contador2++
    }

    if ( NumAsiSelecAll && NomAsiSelecAll ) {

        //alert('PUEDES PASAR AL PASO 3')

        if (fecharegreso2 == '_') {
            //alert('Tu viaje es sencillo');
            window.location.href = "Paso3";

            //var URLactual = window.location;

            //let urlArray = URLactual.split("/");

            //console.log(urlArray[0]);

            
            cargarListaPasajeros();
        }
        else {
            alert('Favor de seleccionar todos los asientos de Regreso');

            $('.viajeSencillo').addClass("ocultarMapa");
            $('.viajeRedondo').removeClass("ocultarMapa");

            cargarListaPasajeros();

            
        }
    }
    
    //alert('Enviar datos al paso 3');

}

function cargarListaPasajeros() {

    ///////////// NUMERO DE PASAJEROS /////////////

    numPasajeros = [];
    let adultos = $(".numAdultos").text();
    let menores = $(".numMenores").text();
    let inapam = $(".numInapam").text();
    let estudiantes = $(".numEstudiantes").text();
    let profesores = $(".numProfesores").text();

    numPasajerosObj = {
                        numAdultos: adultos,
                        numMenores: menores,
                        numInapam: inapam,
                        numEstudiantes: estudiantes,
                        numProfesores: profesores
                      }

    numPasajeros = [...numPasajeros, numPasajerosObj]


    ///////////// PASAJEROS VIAJE SALIDA //////////////////////

    let datosPasajero = document.querySelectorAll(".datosPasajero");

    actPase();
    datosViaje = [];

    let datosViajeObj = [];

    /// TOTALES ADULTO
    let numAdultos = $(".numAdultos").text();
    numAdultos = numAdultos.split(" ");
    numAdultos = numAdultos[0];

    
    let precioAdultoSalida = $(".totalAdulto").text();
    precioAdultoSalida = precioAdultoSalida.replace(',', '');
    precioAdultoSalida = precioAdultoSalida.replace('$', '');
    precioAdultoSalida = parseFloat(precioAdultoSalida);
    //precioAdultoSalida = parseFloat("1200.00");

    //alert(precioAdultoSalida)

    let ahorroSalida = $(".ahorro").text(); 
    ahorroSalida = ahorroSalida.replace(',', '');
    ahorroSalida = ahorroSalida.replace('$', '');
    ahorroSalida = parseFloat(ahorroSalida);

    let precioPorBoletoAdulto = (precioAdultoSalida / numAdultos).toFixed(2);
    let ahorroPorBoletoAdulto = (ahorroSalida / numAdultos) 

    /// TOTALES MENOR
    let numMenor = $(".numMenores").text();
    numMenor = numMenor.split(" ");
    numMenor = numMenor[0];

    let precioMenorSalida = $(".totalMenores").text();
    precioMenorSalida = precioMenorSalida.replace(',', '');
    precioMenorSalida = precioMenorSalida.replace('$', '');
    precioMenorSalida = parseFloat(precioMenorSalida);

    let precioPorBoletoMenor = (precioMenorSalida / numMenor).toFixed(2);

    /// TOTALES INAPAM
    let numInapam = $(".numInapam").text();
    numInapam = numInapam.split(" ");
    numInapam = numInapam[0];

    let precioInapamSalida = $(".totalInapam").text();
    precioInapamSalida = precioInapamSalida.replace(',', '');
    precioInapamSalida = precioInapamSalida.replace('$', '');
    precioInapamSalida = parseFloat(precioInapamSalida);

    let precioPorBoletoInapam = (precioInapamSalida / numInapam).toFixed(2);

    /// TOTALES ESTUDIANTE

    let numEstudiante = $(".numEstudiantes").text();
    numEstudiante = numEstudiante.split(" ");
    numEstudiante = numEstudiante[0];

    let precioEstudianteSalida = $(".totalEstudiantes").text();
    precioEstudianteSalida = precioEstudianteSalida.replace(',', '');
    precioEstudianteSalida = precioEstudianteSalida.replace('$', '');
    precioEstudianteSalida = parseFloat(precioEstudianteSalida);

    let precioPorBoletoEstudiante = (precioEstudianteSalida / numEstudiante).toFixed(2);

    /// TOTALES PROFESOR

    let numProfesor = $(".numProfesores").text();
    numProfesor = numProfesor.split(" ");
    numProfesor = numProfesor[0];

    let precioProfesorSalida = $(".totalProfesores").text();
    precioProfesorSalida = precioProfesorSalida.replace(',', '');
    precioProfesorSalida = precioProfesorSalida.replace('$', '');
    precioProfesorSalida = parseFloat(precioProfesorSalida);

    let precioPorBoletoProfesor = (precioProfesorSalida / numProfesor).toFixed(2);

    ////////////////////

    //alert(numAdultos + ' ' + precioAdultoSalida);

    for (item of datosPasajero) {
        console.log(item.children);

        let NombrePasajero = item.children[3].value.toUpperCase();
        let AsientoNum = item.children[0].innerText;
        let CategoriaString = item.children[1].innerText;
        let Precio = '';

        let divCategoria = CategoriaString.split(" ");

        let Categoria = divCategoria[2];
        let ahorro = ''
        switch (Categoria) {
            case 'ADULTO':
                Precio = '$'+precioPorBoletoAdulto;
                ahorro = '$' + ahorroPorBoletoAdulto;
                break;
            case 'MENOR':
                Precio = '$'+precioPorBoletoMenor;
                ahorro = '$0.00';
                break;
            case 'INAPAM':
                Precio = '$'+precioPorBoletoInapam;
                ahorro = '$0.00';
                break;
            case 'ESTUDIANTE':
                Precio = '$'+precioPorBoletoEstudiante;
                ahorro = '$0.00';
                break;
            case 'PROFESOR':
                Precio = '$'+precioPorBoletoProfesor;
                ahorro = '$0.00';
                break;
        }

        console.log(NombrePasajero + ' ' + AsientoNum + ' ' + Categoria + ' ' + Precio);

        datosViajeObj = datosViajeObj.concat({
                                                nombre: NombrePasajero,
                                                asiento: AsientoNum,
                                                categoria: Categoria,
                                                ahorro: ahorro,
                                                precio: Precio
                                            });
        
    }

    datosViaje = [...datosViaje, datosViajeObj]

    console.log(datosViaje);

    ///////////// PASAJEROS VIAJE REGRESO //////////////////////

    let datosPasajeroReg = document.querySelectorAll(".datosPasajeroReg");

    
    datosViajeRegreso = [];

    let datosViajeObjReg = [];

    /// TOTALES ADULTO
    let numAdultosReg = $(".numAdultosReg").text();
    numAdultosReg = numAdultosReg.split(" ");
    numAdultosReg = numAdultosReg[0];


    let precioAdultoRegreso = $(".totalAcumuladoReg").text();
    precioAdultoRegreso = precioAdultoRegreso.replace(',', '');
    precioAdultoRegreso = precioAdultoRegreso.replace('$', '');
    precioAdultoRegreso = parseFloat(precioAdultoRegreso);
    //precioAdultoSalida = parseFloat("1200.00");

    //alert(precioAdultoSalida)

    let ahorroRegreso = $(".ahorroReg").text();
    ahorroRegreso = ahorroRegreso.replace(',', '');
    ahorroRegreso = ahorroRegreso.replace('$', '');
    ahorroRegreso = parseFloat(ahorroRegreso);

    let precioPorBoletoAdultoReg = (precioAdultoRegreso / numAdultosReg).toFixed(2);
    let ahorroPorBoletoAdultoReg = (ahorroRegreso / numAdultosReg)

    /// TOTALES MENOR
    let numMenorReg = $(".numMenoresReg").text();
    numMenorReg = numMenorReg.split(" ");
    numMenorReg = numMenorReg[0];

    let precioMenorReg = $(".totalMenoresReg").text();
    precioMenorReg = precioMenorReg.replace(',', '');
    precioMenorReg = precioMenorReg.replace('$', '');
    precioMenorReg = parseFloat(precioMenorReg);

    let precioPorBoletoMenorReg = (precioMenorReg / numMenorReg).toFixed(2);

    /// TOTALES INAPAM
    let numInapamReg = $(".numInapamReg").text();
    numInapamReg = numInapamReg.split(" ");
    numInapamReg = numInapamReg[0];

    let precioInapamReg = $(".totalInapamReg").text();
    precioInapamReg = precioInapamReg.replace(',', '');
    precioInapamReg = precioInapamReg.replace('$', '');
    precioInapamReg = parseFloat(precioInapamReg);

    let precioPorBoletoInapamReg = (precioInapamReg / numInapamReg).toFixed(2);

    /// TOTALES ESTUDIANTE

    let numEstudianteReg = $(".numEstudiantesReg").text();
    numEstudianteReg = numEstudianteReg.split(" ");
    numEstudianteReg = numEstudianteReg[0];

    let precioEstudianteReg = $(".totalEstudiantesReg").text();
    precioEstudianteReg = precioEstudianteReg.replace(',', '');
    precioEstudianteReg = precioEstudianteReg.replace('$', '');
    precioEstudianteReg = parseFloat(precioEstudianteReg);

    let precioPorBoletoEstudianteReg = (precioEstudianteReg / numEstudianteReg).toFixed(2);

    /// TOTALES PROFESOR

    let numProfesorReg = $(".numProfesoresReg").text();
    numProfesorReg = numProfesorReg.split(" ");
    numProfesorReg = numProfesorReg[0];

    let precioProfesorReg = $(".totalProfesoresReg").text();
    precioProfesorReg = precioProfesorReg.replace(',', '');
    precioProfesorReg = precioProfesorReg.replace('$', '');
    precioProfesorReg = parseFloat(precioProfesorReg);

    let precioPorBoletoProfesorReg = (precioProfesorReg / numProfesorReg).toFixed(2);

    ////////////////////

    //alert(numAdultos + ' ' + precioAdultoSalida);

    for (item of datosPasajeroReg) {
        console.log(item.children);

        let NombrePasajero = item.children[3].value.toUpperCase();
        let AsientoNum = item.children[0].innerText;
        let CategoriaString = item.children[1].innerText;
        let Precio = '';

        let divCategoria = CategoriaString.split(" ");

        let Categoria = divCategoria[2];
        let ahorro = ''
        switch (Categoria) {
            case 'ADULTO':
                Precio = '$' + precioPorBoletoAdultoReg;
                ahorro = '$' + ahorroPorBoletoAdultoReg;
                break;
            case 'MENOR':
                Precio = '$' + precioPorBoletoMenorReg;
                ahorro = '$0.00';
                break;
            case 'INAPAM':
                Precio = '$' + precioPorBoletoInapamReg;
                ahorro = '$0.00';
                break;
            case 'ESTUDIANTE':
                Precio = '$' + precioPorBoletoEstudianteReg;
                ahorro = '$0.00';
                break;
            case 'PROFESOR':
                Precio = '$' + precioPorBoletoProfesorReg;
                ahorro = '$0.00';
                break;
        }

        console.log(NombrePasajero + ' ' + AsientoNum + ' ' + Categoria + ' ' + Precio);

        datosViajeObjReg = datosViajeObjReg.concat({
            nombre: NombrePasajero,
            asiento: AsientoNum,
            categoria: Categoria,
            ahorro: ahorro,
            precio: Precio
        });

    }

    datosViajeRegreso = [...datosViajeRegreso, datosViajeObjReg]

    console.log(datosViajeRegreso);

    ///////////////// CORRIDA SALIDA - REGRESO: LOCALSTORAGE ///////////////////////////////

    let Origen = $("#OrigenCom").text();
    let Destino = $("#DestinoCom").text();
    let Salida = $("#pE_aFechaSalidaInicioCorrida2").text();
    let Llegada = $("#FechaLlegada").text();
    let HrSalida = $("#pE_hHoraSalidaBoleto2").text() + ' HRS';
    let HrLlegada = $("#HoraLlegada").text();

    let OrigenReg = $("#DestinoCom").text();
    let DestinoReg =  $("#OrigenCom").text();
    let SalidaReg = $("#pE_aFechaSalidaInicioCorridaRegr2").text();
    let LlegadaReg = $("#FechaLlegadaRegreso").text();
    let HrSalidaReg = $("#pE_hHoraSalidaBoletoRegreso2").text() + ' HRS';
    let HrLlegadaReg = $("#HoraLlegadaregreso").text() + ' HRS';

    let logoEmpresaSalida = $("#logoEmpresaSalida").text();
    let logoEmpresaRegreso = $("#logoEmpresaRegreso").text();

    let objSalReg = {
                        ViajeIda: {
                                        origen: Origen,
                                        destino: Destino,
                                        salida: Salida,
                                        llegada: Llegada,
                                        hrSalida: HrSalida,
                                        hrLlegada: HrLlegada,
                                        logoEmpresa: logoEmpresaSalida
                        },
                        ViajeRegreso: {
                                        origen: OrigenReg,
                                        destino: DestinoReg,
                                        salida: SalidaReg,
                                        llegada: LlegadaReg,
                                        hrSalida: HrSalidaReg,
                                        hrLlegada: HrLlegadaReg,
                                        logoEmpresa: logoEmpresaRegreso
                        }
    }


    corridaSalidaRegreso = [objSalReg];
     
    ///////////////////////////////

    sincronizarStorage();

}

function sincronizarStorage() {


    localStorage.setItem('datosSalida', JSON.stringify(datosViaje));
    localStorage.setItem('datosRegreso', JSON.stringify(datosViajeRegreso));
    localStorage.setItem('numPasajeros', JSON.stringify(numPasajeros));
    localStorage.setItem('SalidaRegreso', JSON.stringify(corridaSalidaRegreso));
}




function enviaRegPas3() {

    let NumAsiento = document.querySelectorAll(".numAsiReg");
    let NombreAsiento = document.querySelectorAll(".datosPasajeroReg .nomPasajero");

    let contador = 1;
    let contador2 = 1;

    console.log(NumAsiento);
    console.log(NombreAsiento);
    for (item of NumAsiento) {

        let selectAsiento = item.textContent;
        //let asiId =
        //console.log(AsiId);
        if (selectAsiento == '') {
            alert('Te falta seleccionar un asiento');

            return document.getElementById(`conPasajReg_${contador}`).click();
        }
        contador++
    }

    for (item2 of NombreAsiento) {

        let selectNombre = item2.value;

        //let asiId =
        //console.log(selectNombre);
        if (selectNombre == '') {

            //alert(contador2);
            alert('Te falta poner un nombre de pasajero');
            item2.focus();

            return document.getElementById(`conPasajReg_${contador2}`).click();
        }
        contador2++
    }

    cargarListaPasajeros();
    window.location.href = "Paso3";
    //alert('Enviar datos al paso 3');
}


function soloLetras(e) {

    var key = e.keyCode || e.which,
        tecla = String.fromCharCode(key).toLowerCase(),
        letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
        especiales = [8, 37, 39, 46],
        tecla_especial = false;

    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}
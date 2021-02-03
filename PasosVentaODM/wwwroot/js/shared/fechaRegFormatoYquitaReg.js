var $dates = $("#datepicker2").datepicker({
    minDate: new Date(),

    dateFormat: "dd M yy",
});
//@*/////////////////////////////*@
$("#datepicker2").change(function () {
    $("#quitar").css("display", "block");
});
//@*/////////////////////////////*@
$("#datepicker").change(function () {
    var yearHoy = new Date().getFullYear();
    var montHoy = new Date().getMonth();
    var dayHoy = new Date().getDate();

    let feSeleccion = $("#datepicker").val();
    var arrayDeCadenas = feSeleccion.split(" ");

    var yearSelec = arrayDeCadenas[0];
    var mesSelec = arrayDeCadenas[1];
    var diaSelec = arrayDeCadenas[2];

    var arrayMes = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
    ];
    var buscarMes = mesSelec;
    var result = arrayMes.indexOf(buscarMes);

    var mesNum = result + 1;
    if (mesNum < 10) {
        mesNum = "0" + mesNum;
    }
    feSelec = diaSelec + "-" + mesNum + "-" + yearSelec;

    formFechaSalApi = yearSelec + "/" + mesNum + "/" + diaSelec;

    console.log(feSelec);

    /*@*console.log(arrayDeCadenas);
    console.log(dayHoy + '/' + montHoy + '/' + yearHoy)*@*/

    //@*let fHoy = new Date(yearHoy, montHoy, dayHoy);*@
    let fHoy = new Date();
    let fEquis = new Date(2020, 11, 18);

    //@*console.info(feCompleta)*@

    if (fHoy > fEquis) {
        console.log("la fecha actual es mayor");
    }

    //@*console.log('Es la fecha de hoy: ' + fHoy);*@

    //@*$("#fechaSalOculta").val(fech)*@

    /*@* /////////////////
    FECHA 1
        a)si la fecha es la del dia actual, se queda como fecha1.
        b) Si la fecha seleccionada es mayor a la fecha de hoy, la fecha1 sera menor a la seleccionada
    *@*/

    var fecha1 = new Date(feSelec);
    var dias = 1; // el numero 1 es el dia original, 0 es el dia anterior, el numero 2 es el dia siguiente,
    fecha1.setDate(fecha1.getDate() + dias);
    var f1dia = fecha1.getDate();
    var f1mes = fecha1.getMonth() + 1;
    var f1year = fecha1.getFullYear();

    if (f1dia < 10) {
        f1dia = "0" + f1dia;
    }
    if (f1mes < 10) {
        f1mes = "0" + f1mes;
    }

    var fe1Completa = f1dia + "/" + f1mes + "/" + f1year;

    $("#fe1").text(fe1Completa);

    //@* FECHA 2 a) Si la fecha seleccionada es mayor a la fecha de hoy, la fecha2 sera la fecha seleccionada b)Si la fecha es la de  *@
    var fecha2 = new Date(feSelec);
    var dias2 = 2; // el numero 1 es el dia original, 0 es el dia anterior, el numero 2 es el dia siguiente,
    fecha2.setDate(fecha2.getDate() + dias2);
    var f2dia = fecha2.getDate();
    var f2mes = fecha2.getMonth() + 1;
    var f2year = fecha2.getFullYear();

    if (f2dia < 10) {
        f2dia = "0" + f2dia;
    }
    if (f2mes < 10) {
        f2mes = "0" + f2mes;
    }

    var fe2Completa = f2dia + "/" + f2mes + "/" + f2year;
    $("#fe2").text(fe2Completa);

    //@* FECHA 3 a) La fecha3 sera la fecha2 + 1 *@
    var fecha3 = new Date(feSelec);
    var dias3 = 3; // el numero 1 es el dia original, 0 es el dia anterior, el numero 2 es el dia siguiente,
    fecha3.setDate(fecha3.getDate() + dias3);
    var f3dia = fecha3.getDate();
    var f3mes = fecha3.getMonth() + 1;
    var f3year = fecha3.getFullYear();

    if (f3dia < 10) {
        f3dia = "0" + f3dia;
    }
    if (f3mes < 10) {
        f3mes = "0" + f3mes;
    }

    var fe3Completa = f3dia + "/" + f3mes + "/" + f3year;

    $("#fe3").text(fe3Completa);

    //@* FECHA 4 a) La fecha4 sera la fecha3 + 1 *@
    var fecha4 = new Date(feSelec);
    var dias4 = 4; // el numero 1 es el dia original, 0 es el dia anterior, el numero 2 es el dia siguiente,
    fecha4.setDate(fecha4.getDate() + dias4);
    var f4dia = fecha4.getDate();
    var f4mes = fecha4.getMonth() + 1;
    var f4year = fecha4.getFullYear();

    if (f4dia < 10) {
        f4dia = "0" + f4dia;
    }
    if (f4mes < 10) {
        f4mes = "0" + f4mes;
    }

    var fe4Completa = f4dia + "/" + f4mes + "/" + f4year;

    $("#fe4").text(fe4Completa);
    //@* FECHA 5 a) La fecha5 sera la fecha4 + 1 *@
    var fecha5 = new Date(feSelec);
    var dias5 = 5; // el numero 1 es el dia original, 0 es el dia anterior, el numero 2 es el dia siguiente,
    fecha5.setDate(fecha5.getDate() + dias5);
    var f5dia = fecha5.getDate();
    var f5mes = fecha5.getMonth() + 1;
    var f5year = fecha5.getFullYear();

    if (f5dia < 10) {
        f5dia = "0" + f5dia;
    }
    if (f5mes < 10) {
        f5mes = "0" + f5mes;
    }

    var fe5Completa = f5dia + "/" + f5mes + "/" + f5year;

    $("#fe5").text(fe5Completa);
});
//@*/////////////////////////////*@
$("#quitar").on("click", function () {
    $dates.datepicker("setDate", null);
    $("#quitar").css("display", "none");
    $("#tarjetas1").css("display", "block");
    $("#tarjetas2").css("display", "none");
});

/// SECCION PARA ASIGNAR LA FECHA QUE VIENE DEL FORMULARIO

$(function () {
    let dato3 = $("#idFechSalida").text();
    let dato4 = $("#idFechRegreso").text();

    let separaFecha = dato3.split("/");
    let diaSal = separaFecha[0];
    let mesSal = separaFecha[1] - 1;
    let yearSal = separaFecha[2];

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
    let mesLetraSal = arrayMes[mesSal];

    let fechSalLetra = diaSal + " " + mesLetraSal + " " + yearSal;

    $("#datepicker, #datepicker2").datepicker({
        minDate: new Date(),
        dateFormat: "dd M yy",
    });

    formFechaSalApi = dato3;

    $("#datepicker").datepicker("setDate", fechSalLetra);
    $("#datepicker2").datepicker("option", "minDate", fechSalLetra);
    //// PARA ASIGNAR FECHA DE REGRESO CON LOS DATOS DEL FORMULARIO

    console.log("Fecha de regreso" + dato4);

    if (dato4 == "_") {
        console.log("No tienes fecha de regreso");
    } else {
        let separaFecha2 = dato4.split("/");

        let diaReg = separaFecha2[0];
        let mesReg = separaFecha2[1] - 1;
        let yearReg = separaFecha2[2];

        let mesLetraReg = arrayMes[mesReg];

        formFechaRegApi = dato4;
        //alert('Mi fecha regreso'+formFechaRegApi);

        let fechRegLetra = diaReg + " " + mesLetraReg + " " + yearReg;
        $("#datepicker2").datepicker("setDate", fechRegLetra);
        $("#quitar").css("display", "block");
    }
});
////////////////////////

jQuery(document).on("change", "#datepicker", (event) => {
    const element = event.target;
    //@*console.log('Estoy checando:'+element.value);*@

    jQuery("#datepicker2").datepicker("option", "minDate", element.value);
});

$.datepicker.regional["es"] = {
    closeText: "Cerrar",
    prevText: "<Ant",
    nextText: "Sig>",
    currentText: "Hoy",
    monthNames: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ],
    monthNamesShort: [
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
    ],
    dayNames: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
    ],
    dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Juv", "Vie", "Sáb"],
    dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
    weekHeader: "Sm",
    dateFormat: "dd/mm/yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "",
};
$.datepicker.setDefaults($.datepicker.regional["es"]);

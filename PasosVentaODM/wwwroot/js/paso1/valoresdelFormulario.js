
document.addEventListener('DOMContentLoaded', () => {
    let dato1 = $("#idOrigenIata").text();
    let dato2 = $("#idDestinoIata").text();
    let dato3 = $("#idFechSalida").text();
    let dato4 = $("#idFechRegreso").text();
    //alert(dato4);
    let dato5 = $("#idAdulto").text();
    let dato6 = $("#idMenos").text();
    let dato7 = $("#idInapam").text();
    let dato8 = $("#idEstudiante").text();
    let dato9 = $("#idProfesor").text();

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

    orgdest(dato1, dato2);

    $("#org1 option[value=" + dato1 + "]").attr("selected", true);

    let miOrg = $("#org1 option:selected").text();

    $("#select2-org1-container").text(miOrg);
    $("#select2-org1-container").attr("title", miOrg);
    //@*alert('dia: ' + diaSal + ' mes: ' + mesLetraSal + ' año: ' + yearSal);*@
})
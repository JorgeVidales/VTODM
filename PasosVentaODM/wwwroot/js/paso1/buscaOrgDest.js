function orgdest(dato1, dato2) {
    console.log(dato1);
    console.log(dato2);
    $("#org1 option[value=" + dato1 + "]").attr("selected", true);

    cargarDestino(dato1); ///--> Envia la variable para cargar el Destino

    setTimeout(function () {
        $("#dest1 option[value=" + dato2 + "]").attr("selected", true);
        let miDesComp = $("#dest1 option:selected").text();

        $("#select2-dest1-container").text(miDesComp);

        $("#json_post").trigger("click");
    }, 500);
}

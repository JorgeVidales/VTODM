function enviarFormulario() {
    let fecharegreso = $("#datepicker2").val();

    console.log("Mi fecha de regreso: " + fecharegreso);
    if (fecharegreso == "") {
        //alert('Viaje sencillo');

        document.paso2.submit();
    } else {
        $("#tarjetas1").css("display", "none");
        $("#tarjetas2").css("display", "block");
        viajeRedondo();
        //alert('Tarjeta de regreso');
    }
}

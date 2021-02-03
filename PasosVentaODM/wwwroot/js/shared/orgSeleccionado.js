$(document).ready(function () {
    //@*alert('Diste un click')*@

    jQuery(document).on("change", "#org1", (event) => {
        const orgViaja = event.target.value;
        orgCompleto = $("#org1 option:selected").text();
        console.log(orgViaja);
        console.log(orgCompleto);
        $("#dest1").html(
            '<option selected="selected" disabled>¿A Dónde Viajas?</option>'
        );
        cargarDestino(orgViaja);
        //@*alert('algo');*@
    });
});

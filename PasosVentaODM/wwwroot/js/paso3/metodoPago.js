function metodoPago(e) {

    let miId = e.id;
    $("#visamaster").removeClass("metodPagosActivo").addClass("metodPagosInactivo");
    $("#reservaciones").removeClass("metodPagosActivo").addClass("metodPagosInactivo");
    $("#todito").removeClass("metodPagosActivo").addClass("metodPagosInactivo");
    $("#coppel").removeClass("metodPagosActivo").addClass("metodPagosInactivo");

    $(".visamasterPago").css('display', 'none');
    $(".reservacionesPago").css('display', 'none');
    $(".toditoPago").css('display', 'none');
    $(".coppelPago").css('display', 'none');


    //$("#" + miId).addClass("metodPagosActivo").removeClass("metodPagosInactivo");

    switch (miId) {

        case 'visamaster':
            $("#" + miId).addClass("metodPagosActivo").removeClass("metodPagosInactivo");
            $(".visamasterPago").css('display', 'block');
            break;


        case 'reservaciones':
            $("#" + miId).addClass("metodPagosActivo").removeClass("metodPagosInactivo");
            $(".reservacionesPago").css('display', 'block');
            $('input[name=optradio]').attr('checked', false);



            document.querySelectorAll('[name=Tipo]').forEach((x) => x.checked = false);
            logoVisaMast();
            break;

        case 'todito':
            $("#" + miId).addClass("metodPagosActivo").removeClass("metodPagosInactivo");
            $(".toditoPago").css('display', 'block');
            break;

        case 'coppel':
            $("#" + miId).addClass("metodPagosActivo").removeClass("metodPagosInactivo");
            $(".coppelPago").css('display', 'block');
            break;
    }
    

    //alert('Tu metodo de pago:  ' + miId)

}

function selecBanco() {
    let miBanco = $('input:radio[name=optradio]:checked').val();

    $("#logoBanco").attr('src', 'imgBancos/bancomer.png');

    switch (miBanco) {

        case 'Banamex':
            "datosTarjeta2"
           
            $("#logoBanco").css('display', 'block');
            $("#logoBanco").attr('src', 'imgBancos/banamex.png');

            $("#datosTarjeta2").css('display', 'block');
            break;
        case 'Bancomer':
            $("#logoBanco").css('display', 'block');
            $("#logoBanco").attr('src', 'imgBancos/bancomer.png');

            $("#datosTarjeta2").css('display', 'block');
            break;
        case 'Santander':
            $("#logoBanco").css('display', 'block');
            $("#logoBanco").attr('src', 'imgBancos/santander.png');

            $("#datosTarjeta2").css('display', 'block');
            break;
        case 'Coppel':
            $("#logoBanco").css('display', 'block');
            $("#logoBanco").attr('src', 'imgBancos/coppel.png');

            $("#datosTarjeta2").css('display', 'block');
            break;
        case 'Otros':
            $("#logoBanco").css('display', 'none');

            $("#datosTarjeta2").css('display', 'block');

            break;
    }

    $("#datosTarjeta1").css('display', 'none');

    //alert('Diste click en un metodo de pago' + miBanco);
}

function logoVisaMast() {

    $("#datosTarjeta1").css('display', 'block');
    $("#datosTarjeta2").css('display', 'none');
    //alert('Mostar metodos de pagos')
}
function correoValido() {

    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let correo = document.getElementById("correo1").value
    let correo2 = document.getElementById("correo2").value
    //alert(correo);

    if (er.test(correo)) {
        console.log('Email valido');

        $("#correo2").prop('disabled', false);
    } else {
        console.log('Email no valido');
        $("#correo2").prop('disabled', true);
    }

    


}

function correo2Valido() {

    let correo = document.getElementById("correo1").value
    let correo2 = document.getElementById("correo2").value
    
    if (correo2 == correo) {

        //alert('Tu correo es valido' );

    } else {
        alert('Tu correo no es igual');
    }


}

window.onload = function () {

    //$("#correo2").attr("disabled");
    $("#correo2").prop('disabled', true);


    $("#correo1, #correo2 ").on('paste', function (e) {
        e.preventDefault();
        console.log('Esta acción está prohibida');
    })

    $("#correo1, #correo2").on('copy', function (e) {
        e.preventDefault();
        console.log('Esta acción está prohibida');
    })
}
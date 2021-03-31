function blAbierto() {

    let abierto = $("#btnAbierto").text();
    

    if (abierto == 'SI') {
        quitaReg();
        $("#datepicker2").prop('disabled', true);
    }
    
}


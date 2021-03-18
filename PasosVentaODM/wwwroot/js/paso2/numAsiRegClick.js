function miclick2(e) {

    let datosPasaj = document.getElementsByClassName("datosPasajeroReg").length;
    let numAsiento = e.id;
    let numAs = numAsiento.split("_");

    //alert(datosPasaj);
    // Si no hay boletos
    if (datosPasaj === 0) {
        return alert("No tienes boletos selecionados");
    }
    //////

    let imgAsiSelec = "idImgAsientoReg_" + numAs[1];
    let numAsie = numAs[1];

    miAsientoReg(imgAsiSelec, numAsie);
}

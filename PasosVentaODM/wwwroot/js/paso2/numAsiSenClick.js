function miclick(e) {
    let datosPasaj = document.getElementsByClassName("datosPasajero").length;
    let numAsiento = e.id;
    let numAs = numAsiento.split("_");

    // Si no hay boletos
    if (datosPasaj === 0) {
        return alert("No tienes boletos selecionados");
    }
    //////

    let imgAsiSelec = "idImgAsiento_" + numAs[1];
    let numAsie = numAs[1];

    miAsiento(imgAsiSelec, numAsie);
}

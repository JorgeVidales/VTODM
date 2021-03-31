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

    //alert(numAsie)
    ///// SELECCION Y DESELECCION DE ASIENTOS //////
    let recDesc1 = document.getElementById("descripcion").getElementsByClassName("datosPasajero");
    let numAsi = document.getElementsByClassName("numAsi");

    let lugares = document.querySelectorAll('#MapaOcupacion img[src="img/AsientoVerde.png"').length;
    let lugares2 = document.querySelectorAll('#MapaOcupacion2 img[src="img/AsientoVerde.png"').length;

    let sumLugar = lugares + lugares2;

    let miImagen = $(`#${imgAsiSelec}`).attr('src');

    var seleccionado = "img/AsientoVerde.png";


    if (seleccionado == miImagen) {

        $(`#${imgAsiSelec}`).attr('src', 'img/AsientoBco.png');

        /// QUITA EL NUMERO EN EL ASIENTO VISIBLE  //

            for (item of numAsi) {
                let spanId = item.id;
                var span_Text = document.getElementById(spanId).innerText;

                if (numAsie === span_Text) {
                    document.getElementById(spanId).innerHTML = "";
                }
            }
        ///////////
        return;
    }


    if (sumLugar < datosPasaj && miImagen == 'img/AsientoBco.png') {

        $(`#${imgAsiSelec}`).attr('src', 'img/AsientoVerde.png');

        /// PONE EL NUMERO EN EL ASIENTO VISIBLE - VIAJE SENCILLO ///

        for (item of recDesc1) {

            let classVisible = item.style.display;

            if (classVisible === "block") {
                console.log("1 pasajero visible");
                //console.log(item);

                let spanId = item.querySelector(".numAsi").id;
                let spNum = document.getElementById(spanId);
                let span_Text = document.getElementById(spanId).innerText;

                if (span_Text == "") {
                    //console.log("Tu asiento ya tiene numero");
                    document.getElementById(spanId).innerHTML = numAsie;
                }

                else {

                    let clickAsiBlanc = numAsi;
                    
                    let miClick;
                    for (item of clickAsiBlanc) {

                        console.log('span texto: ' + item.id);

                        console.log('span texto: ' + item.innerText);

                        let texSpan = item.innerText;

                        if (texSpan == '') {
                            miClick = item.id;
                            let numAs = miClick.split("_");
                            let clickIdBol = "conPasaj_" + numAs[1];
                            let textAsiento = "numAsi_" + numAs[1];

                            $(`#${textAsiento}`).text(numAsie);
                            $(`#${clickIdBol}`).click();

                            selecAsiCompl(imgAsiSelec, numAsie);
                            return
                        }
                       
                    }

                    
                }

            }

        }
        ///////////

    }
    
    
    //miAsiento(imgAsiSelec, numAsie);
}

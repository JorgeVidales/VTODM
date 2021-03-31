function editarPasajero() {

    //let totPasajeros = document.querySelectorAll("#descripcion .datosPasajero").length;
    let totPasajeros = document.querySelectorAll("#descripcion .datosPasajero");

    let misNombres = document.getElementById("misNombres");

    misNombres.innerHTML = "";

    for (item of totPasajeros) {

        let numAsi = item.children[0].childNodes[0].innerText;
        let tpBoleto = item.children[1].innerText
        let divtpBoleto = tpBoleto.split(" ");
        tpBoleto = divtpBoleto[2];
        let textoSal = item.children[3].value;

        console.log('Mi numero: ' + numAsi + ' Tipo boleto: ' + tpBoleto + ' Nombre: ' + textoSal);

            misNombres.innerHTML += `<div class="form-group">

                                        <div style="position: relative;"><span  class="numAsiModal">${numAsi}</span><img class="imgAsiento" style="width: 50px;" src="img/AsientoAzu.png"></div>
                                        <p class="asiento">${tpBoleto}</p>
                                        <label style="color: #043262; font-weight:500;" for="nombres" class="col-form-label">NOMBRE COMPLETO*</label>
                                        <input type="text" class="form-control text-uppercase cajasModal" value="${textoSal}" required>


                                    </div>`;

        //console.log(item.children);
    }

}

function ponerNombres() {

    let formNombres = document.getElementById("misNombres");
    let viajeRedondo = $("#fecharegreso2").text();
    let autoInc = 1;

    if (viajeRedondo == '_') {

        for (item of formNombres) {

            console.log(item.value);
            if (item.value == '') {

                alert('Todos los campos son obligatorios');
                return
            }
            else {
                $(`#textoSal_${autoInc}`).val(item.value)
            }


            autoInc++
        }
    } else {

        for (item of formNombres) {

            console.log(item.value);
            if (item.value == '') {

                alert('Todos los campos son obligatorios');
                return
            }
            else {
                $(`#textoSal_${autoInc}`).val(item.value)
                $(`#textoReg_${autoInc}`).val(item.value)
            }


            autoInc++
        }
    }
    

    




    $(".close").click();
    
    //alert('Poner nombres');
}
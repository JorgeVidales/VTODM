let pasajerosSalida = [];

function datosPasajeros() {

    let datosPasajero = document.querySelectorAll(".datosPasajero");

    pasajerosSalida = [];

    let PasajeroViajeObj = [];

    for (item of datosPasajero) {

        let NombrePasajero = item.children[3].value.toUpperCase();
        let AsientoNum = item.children[0].innerText;

        console.log(item.children[3].value);

        PasajeroViajeObj = PasajeroViajeObj.concat({
            nombre: NombrePasajero,
            asiento: AsientoNum
            
        });
    }

    pasajerosSalida = [...pasajerosSalida, PasajeroViajeObj]

    sincronizarPasajerosSalidaStorage();

    //alert('Datos de pasajeros');
}

function sincronizarPasajerosSalidaStorage() {

    localStorage.setItem('pasajerosSalida', JSON.stringify(pasajerosSalida));
}
let destinos = document.getElementById("dest1");

function cargarDestino(org) {
    fetch(`enlistado/destinos48/${org}.json`)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            //@*console.log(datos);*@
            for (item of datos) {
                //@*console.log(item.id);*@
                destinos.innerHTML += `<option value="${item.id}">${item.value}</option>`;
            }
        });
}
//@*cargarDestino();*@

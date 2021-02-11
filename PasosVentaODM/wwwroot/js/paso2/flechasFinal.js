function esElFinal() {
    let element = document.getElementById("cmap");
    let flecha = document.getElementsByClassName('parpadea');

    if (element.offsetWidth + element.scrollLeft >= element.scrollWidth) {
        //alert("Llegamos al final del bloque");
        flecha[0].innerText = '<<<<';
        //console.log(flecha[0].innerText)
    }

    if (element.scrollLeft == 0) {
        //alert("Llegamos al inicio del bloque");
        flecha[0].innerText = '>>>>';
    }

    //console.log(element.scrollLeft )
}
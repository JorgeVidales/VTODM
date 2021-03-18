function textoInputSalReg(e) {

    let fechaReg = $("#fecharegreso2").text();

    let myIdSal = e.id;
    let cadenaSal = myIdSal.split("_");
    let numSal = cadenaSal[1];
    let myIdReg = "textoReg_" + numSal
    //alert('1111');

    if (fechaReg != '_') {
        document.getElementById(myIdReg).value = document.getElementById(myIdSal).value;

    }
    //document.getElementById(myIdReg).value = document.getElementById(myIdSal).value;
}

function textoInputRegSal(e) {

    let myIdReg = e.id;
    let cadenaReg = myIdReg.split("_");
    let numReg = cadenaReg[1];
    let myIdSal = "textoSal_" + numReg

    document.getElementById(myIdSal).value = document.getElementById(myIdReg).value;

}


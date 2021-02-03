function ocultarPisoReg2(e) {
    let piso = e.id;

    if (piso == "pisoReg1") {
        //alert('Mi piso es: ' + e.id);
        $("#MapaOcupacionReg").css({ display: "block", margin: "0px 0px 0px 50%" });
        $("#MapaOcupacionReg2").css("display", "none");

        $("#pisoReg1").css({ background: "#033765", color: "white" });
        $("#pisoReg2").css({ background: "white", color: "#033765" });
    }

    if (piso == "pisoReg2") {
        //alert('Mi piso es: ' + e.id);
        $("#MapaOcupacionReg").css("display", "none");
        $("#MapaOcupacionReg2").css("display", "block");

        $("#pisoReg2").css({ background: "#033765", color: "white" });
        $("#pisoReg1").css({ background: "white", color: "#033765" });
    }
    //alert('Mi piso es: '+ e.id);
}

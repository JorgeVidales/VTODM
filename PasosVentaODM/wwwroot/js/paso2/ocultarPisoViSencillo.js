function ocultarPiso(e) {
    let piso = e.id;

    if (piso == "piso1") {
        //alert('Mi piso es: ' + e.id);
        $("#MapaOcupacion").css({ display: "block", margin: "0px 0px 0px 50%" });
        $("#MapaOcupacion2").css("display", "none");

        $("#piso1").css({ background: "#033765", color: "white" });
        $("#piso2").css({ background: "white", color: "#033765" });
    }

    if (piso == "piso2") {
        //alert('Mi piso es: ' + e.id);
        $("#MapaOcupacion").css("display", "none");
        $("#MapaOcupacion2").css("display", "block");

        $("#piso2").css({ background: "#033765", color: "white" });
        $("#piso1").css({ background: "white", color: "#033765" });
    }
    //alert('Mi piso es: '+ e.id);
}

function enviarDatosSalida(b) {
    let valId = b.id;
    let id = valId.split("_");
    var valor = id[1];
    console.log("Mi Id para de tar: " + valor);

    origen = document.querySelector("#org1").value;
    origenCom = $("#org1 option:selected").text();
    destino = document.querySelector("#dest1").value;
    destinoCom = $("#dest1 option:selected").text();
    fechSalida = formFechaSalApi;

    fechRegreso = $("#datepicker2").val(); //formFechaRegApi;

    fechRegreso = fechRegreso.split(" ");

    fechdiaReg = fechRegreso[0];
    fechmesReg = fechRegreso[1];
    fechyearReg = fechRegreso[2];

    var arrayMes = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
    ];
    var buscarMes = fechmesReg;
    var result = arrayMes.indexOf(buscarMes);

    var mesNumReg = result + 1;

    if (mesNumReg < 10) {
        mesNumReg = "0" + mesNumReg;
    }

    var feSelecReg = fechdiaReg + "/" + mesNumReg + "/" + fechyearReg;

    if (feSelecReg == "/00/undefined") {
        feSelecReg = "_";
    }
    console.log(feSelecReg);

    /*
    <input id="origencode" name="origencode" type="hidden" value="">
    <input id="destinocode" name="destinocode" type="hidden" value="">
    <input id="fechasalida" name="fechasalida" type="hidden" value="">
    <input id="fecharegreso" name="fecharegreso" type="hidden" value="">
    <input id="logoEmpresaRegreso_${autoinc}" type="hidden" value="${logoEmpresa}">
    <input id="logoServImgRegreso_${autoinc}" type="hidden" value="${logoServImg}">
    */

    $("#origencode").val(origen);
    $("#destinocode").val(destino);
    $("#fechasalida").val(fechSalida);
    $("#fecharegreso").val(feSelecReg);

    let logoEmpresaSalida = "logoEmpresaSalida_" + valor;
    let logoServImgSalida = "logoServImgSalida_" + valor;

    let dato1 = "pE_nClaveCorrida_" + valor;
    let dato2 = "pE_aFechaSalidaInicioCorrida_" + valor;
    let dato3 = "pE_aFechaBoleto_" + valor;
    let dato4 = "pE_hHoraSalidaBoleto_" + valor;
    let dato5 = "pE_nClaveCorridaRegreso_" + valor;

    let dato9 = "pE_CorridaEmpresa_" + valor;

    let dato11 = "pE_nConsecutivo_" + valor;

    let dato13 = "FechaSalidaInicio_" + valor; ///////////---------------------------------------------
    let dato14 = "HoraSalida_" + valor;
    let dato15 = "FechaLlegada_" + valor;
    let dato16 = "HoraLlegada_" + valor;

    let dato17 = "origenCom_" + valor;
    let dato18 = "destinoCom_" + valor;

    // @*console.log(dato1);*@

    /*
    <input id="pE_nClaveCorrida" name="pE_nClaveCorrida" type="hidden" value="">
    <input id="pE_aFechaSalidaInicioCorrida" name="pE_aFechaSalidaInicioCorrida" type="hidden" value="">
    <input id="pE_aFechaBoleto" name="pE_aFechaBoleto" type="hidden" value="">
    <input id="pE_hHoraSalidaBoleto" name="pE_hHoraSalidaBoleto" type="hidden" value="">
    <input id="pE_CorridaEmpresa" name="pE_CorridaEmpresa" type="hidden" value="">
    <input id="consPas2" name="consPas2" type="hidden" value="">
    */
    let logoEmpresaSal = $(`#${logoEmpresaSalida}`).val();
    console.log(logoEmpresaSal);
    $("#logoEmpresaSalida").val(logoEmpresaSal);

    let logoServImgSal = $(`#${logoServImgSalida}`).val();
    console.log(logoServImgSal);
    $("#logoServImgSalida").val(logoServImgSal);

    let pE_nClaveCorrida = $(`#${dato1}`).val();
    console.log(pE_nClaveCorrida);
    $("#pE_nClaveCorrida").val(pE_nClaveCorrida);

    let pE_aFechaSalidaInicioCorrida = $(`#${dato2}`).val();
    console.log(pE_aFechaSalidaInicioCorrida);
    $("#pE_aFechaSalidaInicioCorrida").val(pE_aFechaSalidaInicioCorrida);

    let pE_aFechaBoleto = $(`#${dato3}`).val();
    console.log(pE_aFechaBoleto);
    $("#pE_aFechaBoleto").val(pE_aFechaBoleto);

    let pE_hHoraSalidaBoleto = $(`#${dato4}`).val();
    console.log(pE_hHoraSalidaBoleto);
    $("#pE_hHoraSalidaBoleto").val(pE_hHoraSalidaBoleto);

    let pE_CorridaEmpresa = $(`#${dato9}`).val();
    console.log(pE_CorridaEmpresa);
    $("#pE_CorridaEmpresa").val(pE_CorridaEmpresa);

    let pE_nConsecutivo = $(`#${dato11}`).val();
    console.log(pE_nConsecutivo);
    $("#consPas2").val(pE_nConsecutivo); ////--------->Consecutivo

    let FechaLlegadaSalida = $(`#${dato15}`).text();
    console.log(FechaLlegadaSalida);
    $("#FechaLlegadaSalida").val(FechaLlegadaSalida);

    let HoraLlegadaSalida = $(`#${dato16}`).text();
    console.log(HoraLlegadaSalida);
    $("#HoraLlegadaSalida").val(HoraLlegadaSalida);

    let origCompleto = $(`#${dato17}`).text();
    console.log(origCompleto);
    $("#origCompleto").val(origCompleto);

    let destCompleto = $(`#${dato18}`).text();
    console.log(destCompleto);
    $("#destCompleto").val(destCompleto);

    /*
    <input id="pE_nClaveCorridaRegreso" name="pE_nClaveCorridaRegreso" type="hidden" value="">
    <input id="pE_aFechaSalidaInicioCorridaRegr" name="pE_aFechaSalidaInicioCorridaRegr" type="hidden" value="">
  
    <input id="pE_aFechaBoletoRegreso" name="pE_aFechaBoletoRegreso" type="hidden" value="">
    <input id="pE_hHoraSalidaBoletoRegreso" name="pE_hHoraSalidaBoletoRegreso" type="hidden" value="">
  
    <input id="FechaLlegadaRegreso" name="FechaLlegadaRegreso" type="hidden" value="">
    <input id="HoraLlegadaRegreso" name="HoraLlegadaRegreso" type="hidden" value="">
  
    <input id="pE_CorridaEmpresaRegreso" name="pE_CorridaEmpresaRegreso" type="hidden" value="">
    <input id="logoEmpresaRegreso_${autoinc}" type="hidden" value="${logoEmpresa}">
    <input id="logoServImgRegreso_${autoinc}" type="hidden" value="${logoServImg}">
  
    */
    /// PARA LIMPIAR LAS VARIABLES DEL REGRESO

    $("#logoEmpresaRegreso").val("");
    $("#logoServImgRegreso").val("");

    $("#pE_nClaveCorridaRegreso").val("");
    $("#pE_aFechaSalidaInicioCorridaRegr").val("");

    $("#pE_aFechaBoletoRegreso").val("");
    $("#pE_hHoraSalidaBoletoRegreso").val("");

    $("#FechaLlegadaRegreso").val("");
    $("#HoraLlegadaRegreso").val("");

    $("#pE_CorridaEmpresaRegreso").val("");

    enviarFormulario();
}

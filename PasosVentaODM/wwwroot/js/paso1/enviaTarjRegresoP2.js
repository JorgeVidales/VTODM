function enviarDatosRegreso(b) {
    let valId = b.id;
    let id = valId.split("_");
    var valor = id[1];
    console.log("Mi Id para de tar: " + valor);

    /*@* origen = document.querySelector('#org1').value;
    origenCom = $("#org1 option:selected").text();
    destino = document.querySelector('#dest1').value;
    destinoCom = $("#dest1 option:selected").text();
    fechSalida = formFechaSalApi;*@*/

    //alert(fechSalida);

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

    /*
    <input id="pE_nClaveCorridaRegreso_${autoinc}" type="hidden" value="${item2.claveCorrida}">
    <input id="pE_aFechaSalidaInicioCorridaRegr_${autoinc}" type="hidden" value="${item2.FechaSalidaInicio}">
    <input id="pE_aFechaBoletoRegreso_${autoinc}" type="hidden" value="${item2.FechaSalidaBoleto}">
    <input id="pE_hHoraSalidaBoletoRegreso_${autoinc}" type="hidden" value="${item2.HoraSalida}">
    <input id="pE_CorridaEmpresaRegreso_${autoinc}" type="hidden" value="${item2.EmpresaCorrida}">
  
  
    <input id="pE_nConsecutivo_${autoinc}" type="hidden" value="${consApi2}">
     */
    let logoEmpresaRegreso = "logoEmpresaRegreso_" + valor;
    let logoServImgRegreso = "logoServImgRegreso_" + valor;

    let dato1 = "pE_aFechaSalidaInicioCorridaRegr_" + valor;
    let dato2 = "pE_hHoraSalidaBoletoRegreso_" + valor;

    let dato3 = "pE_aFechaBoletoRegreso_" + valor;
    let dato4 = "HoraLlegadaRegreso_" + valor;
    let dato7 = "FechaLlegadaRegreso_" + valor;

    let dato5 = "pE_CorridaEmpresaRegreso_" + valor;
    let dato6 = "pE_nClaveCorridaRegreso_" + valor;

    //alert(feSelecReg);

    //@* console.log(dato1);*@

    /*
    <input id="pE_nClaveCorridaRegreso" name="pE_nClaveCorridaRegreso" type="hidden" value="">
    <input id="pE_aFechaSalidaInicioCorridaRegr" name="pE_aFechaSalidaInicioCorridaRegr" type="hidden" value="">
  
    <input id="pE_aFechaBoletoRegreso" name="pE_aFechaBoletoRegreso" type="hidden" value="">
    <input id="pE_hHoraSalidaBoletoRegreso" name="pE_hHoraSalidaBoletoRegreso" type="hidden" value="">
    <input id="HoraLlegadaRegreso" name="HoraLlegadaRegreso" type="hidden" value="">
  
    <input id="pE_CorridaEmpresaRegreso" name="pE_CorridaEmpresaRegreso" type="hidden" value="">//----------------------------------------------------------------------------------
  
    */

    let logoEmReg = $(`#${logoEmpresaRegreso}`).val();
    console.log(logoEmReg);
    $("#logoEmpresaRegreso").val(logoEmReg);

    let logoServImgReg = $(`#${logoServImgRegreso}`).val();
    console.log(logoServImgReg);
    $("#logoServImgRegreso").val(logoServImgReg);

    let pE_aFechaSalidaInicioCorridaRegr = $(`#${dato1}`).val();
    console.log(pE_aFechaSalidaInicioCorridaRegr);
    $("#pE_aFechaSalidaInicioCorridaRegr").val(pE_aFechaSalidaInicioCorridaRegr);

    let pE_hHoraSalidaBoletoRegreso = $(`#${dato2}`).val();
    console.log(pE_hHoraSalidaBoletoRegreso);
    $("#pE_hHoraSalidaBoletoRegreso").val(pE_hHoraSalidaBoletoRegreso);

    let pE_aFechaBoletoRegreso = $(`#${dato3}`).val();
    console.log(pE_aFechaBoletoRegreso);
    $("#pE_aFechaBoletoRegreso").val(pE_aFechaBoletoRegreso);

    let FechaLlegadaRegreso = $(`#${dato7}`).val();
    console.log(FechaLlegadaRegreso);
    $("#FechaLlegadaRegreso").val(FechaLlegadaRegreso);

    let HoraLlegadaRegreso = $(`#${dato4}`).val();
    console.log(HoraLlegadaRegreso);
    $("#HoraLlegadaRegreso").val(HoraLlegadaRegreso);

    let pE_CorridaEmpresaRegreso = $(`#${dato5}`).val();
    console.log(pE_CorridaEmpresaRegreso);
    $("#pE_CorridaEmpresaRegreso").val(pE_CorridaEmpresaRegreso);

    let pE_nClaveCorridaRegreso = $(`#${dato6}`).val();
    console.log(pE_nClaveCorridaRegreso);
    $("#pE_nClaveCorridaRegreso").val(pE_nClaveCorridaRegreso);

    //return
    /*@* let pE_nConsecutivo = $(`#${dato11}`).val();
    console.log(pE_nConsecutivo);*@
  
        @* let pE_nControlCache = $(`#${dato12}`).val();
    console.log(pE_nControlCache);*@*/

    enviarFormularioRegreso();
}

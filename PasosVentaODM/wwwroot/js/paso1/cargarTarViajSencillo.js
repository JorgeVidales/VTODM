const resultado = document.querySelector("#tarjetas1");
const btnBuscar = document.querySelector("#json_post");
const esperando = document.getElementById("cargando");

let segPisoBtn = document.getElementById("segPisoBtn");



window.addEventListener("load", () => {
    btnBuscar.addEventListener("click", buscarCorrida);
});

/////////// IMPORTANTE ENVIO DE DATOS ///////////////////////

function buscarCorrida(e) {
    origen = document.querySelector("#org1").value;
    origenCom = $("#org1 option:selected").text();
    destino = document.querySelector("#dest1").value;
    destinoCom = $("#dest1 option:selected").text();
    fechSalida = formFechaSalApi;
    //fechRegreso = formFechaRegApi;
    //alert(fechRegreso);
    console.log("origen: " + origen);
    console.log("origenComleto: " + origenCom);
    console.log("destino: " + destino);
    console.log("destinoComleto: " + destinoCom);
    console.log("fechSalida: " + fechSalida);
    //console.log('fechRegreso: ' + fechRegreso);
    // Validar

    // Consultar API
    /////////// BORRA LOS ESTILOS DE LAS 5 FECHAS

    $('#fe1P').css({ 'background': '#023765', 'color': 'white' })
    $('#fe2P').css({ 'background': '#edeff0', 'color': '#023765' })
    $('#fe3P').css({ 'background': '#edeff0', 'color': '#023765' })
    $('#fe4P').css({ 'background': '#edeff0', 'color': '#023765' })
    $('#fe5P').css({ 'background': '#edeff0', 'color': '#023765' })


    console.log("Buscando corrida");
}
/////////////////////////////////////////////////////////////

let datos = document.getElementById("tarjetas1");
var loading = document.getElementById("cargando");
let tar2 = document.getElementById("tarjetas2");

var boton = document.getElementById("json_post");
boton.addEventListener("click", function () {
    loading.style.display = "block";
    tar2.style.display = "none";

    datos.style.display = "block";

    adultos = document.getElementById("idAdulto").innerHTML;
    menores = document.getElementById("idMenos").innerHTML;
    inapam = document.getElementById("idInapam").innerHTML;
    estudiantes = document.getElementById("idEstudiante").innerHTML;
    profesores = document.getElementById("idProfesor").innerHTML;

    consApi2 = $("#idConPas1").text();
    origen = document.querySelector("#org1").value;
    destino = document.querySelector("#dest1").value;
    fechSalida = formFechaSalApi;

    console.log("Mi A: " + adultos);
    console.log("Mi M: " + menores);
    console.log("Mi I: " + inapam);
    console.log("Mi E: " + estudiantes);
    console.log("Mi P: " + profesores);
    console.log("Mi Consecutivo: " + consApi2);
    console.log("Mi origen: " + origen);
    console.log("Mi destino: " + destino);
    console.log("Mi Fecha Salida: " + fechSalida);
    datos.innerHTML = ""; ///// LIMPIA EL HTML

    (async () => {
        var data = JSON.parse(`{  "pE_aOrigen": "${origen}",
                                  "pE_aDestino": "${destino}",
                                  "pE_aFecha": "${fechSalida}",
                                  "pE_nAdultos": ${adultos},
                                  "pE_nInsen": ${inapam},
                                  "pE_nNinos": ${menores},
                                  "pE_nEstudiantes": ${estudiantes},
                                  "pE_nMaestro": ${profesores},
                                  "pE_aViajeRedondo": "V2",
                                  "pE_nModo": 1,
                                  "pS_nConsecutivo":${consApi2},
                                  "pS_nActualizaPasajeros":1}`); ////---modifique V1 por V2

        const rawResponse = await fetch(
            "http://webq.odm.com.mx/WSVentaWeb/api/RecuperaCorridas",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );
        const content = await rawResponse.json();
        loading.style.display = "none";

        

        arrayHorarios = [];
        let arr = [1, 2, 3];
        let autoinc = 1;

        for (item2 of content.Corridas) {
            //// PARA CHECAR EL SERVICIO
            let empresa = item2.EmpresaCorrida;
            let logoEmpresa = "";
            let tipoBus = item2.TipoAutobus;

            let servicio = item2.ClaveServicio;
            let logoServImg = "";

            if (servicio == "SERVICIO PLUS" || servicio == "PLUS NORESTE" || tipoBus == "Doble") {
                logoServImg = "resources/servplus.svg";
            }

            if (servicio == "PRIMERA") {
                logoServImg = "resources/servprimclas.svg";
            }

            if (servicio == "PRIMERA EQUIPADO" || servicio == "PRIMERA NORESTE" || servicio == "ECONOMICO NORESTE") {
                logoServImg = "resources/servprimclasequip.svg";
            }
            if (servicio == "PRIMERA BASICO") {
                logoServImg = "resources/servbasic.png";
            }

            /// PARA PONER EL LOGO DE LA EMPRESA

            if (servicio == "SERVICIO PLUS" && empresa == "007") {
                logoEmpresa = "logos_servicios/logoODMplus.svg";
            }
            if (servicio == "SERVICIO PLUS" && empresa == "067") {
                logoEmpresa = "logos_servicios/tapPlus.svg";

                //@*alert(empresa);*@
            }
            if (servicio == "PRIMERA EQUIPADO") {
                logoEmpresa = "logos_servicios/odm1ce.svg";
            }
            if (servicio == "PRIMERA") {
                logoEmpresa = "logos_servicios/odm1c.svg";
            }
            if (servicio == "PLUS NORESTE" || servicio == "ECONOMICO NORESTE") {
                logoEmpresa = "logos_servicios/noreste.svg";
            }
            if (servicio == "PRIMERA BASICO") {
                logoEmpresa = "logos_servicios/odm1pb.svg";
            }
            if (tipoBus == "Doble") {
                logoEmpresa = "logos_servicios/odmDoblePiso.svg";

                //@*alert(tipoBus);*@
            }

            arrayHorarios.push(item2.HoraSalida);

            var hoursMinutes = item2.HoraSalida.split(/[.:]/);
            var hours = parseInt(hoursMinutes[0], 10);
            var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
            var fechaDec = hours + minutes / 60;
            var classHorario = "";
            if (fechaDec < 7) {
                console.log("Horarios en la madrugada: " + item2.HoraSalida);
                classHorario = "classmadru";
            }

            if (fechaDec >= 7 && fechaDec < 12) {
                console.log("Horarios en la mañana: " + item2.HoraSalida);
                classHorario = "classdia";
            }
            if (fechaDec >= 12 && fechaDec < 19) {
                console.log("Horarios en la tarde: " + item2.HoraSalida);
                classHorario = "classtarde";
            }
            if (fechaDec >= 19 && fechaDec <= 23.983333333333334) {
                console.log("Horarios en la noche: " + item2.HoraSalida);
                classHorario = "classnoche";
            }

            if (item2.FechaSalidaInicio == "0") {
                datos.innerHTML = `<h3>No se encontraron horarios para esa corrida.</h3>`;
            } else {
                const formatter = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                });

                let tarifaForMoneda = formatter.format(item2.Tarifa);
                let TarifaPromoMoneda = formatter.format(item2.TarifaPromo); //<span class="descuento">-10%</span>

                if (item2.TarifaPromo == 0) {
                    datos.innerHTML += `
                                    <div id="fichaSalida${autoinc}" class="fichas fichaFiltro ${classHorario} mt-3">
                                        <div class="col-lg-12"><img style="height: 23px; max-width: 80%;" src="${logoEmpresa}" />

                                        </div>
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-lg-5 col-md-6 col-sm-6">
                                                    <p style="margin: 0px;">ORIGEN</p>
                                                    <p id="origenCom_${autoinc}">${origenCom}</p>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <p style="margin: 0px;">DESTINO</p>
                                                    <p id="destinoCom_${autoinc}">${destinoCom}</p>
                                                </div>

                                                <div class="col-lg-5 col-md-6 col-sm-6">
                                                    <p style="margin: 0px;">SALIDA</p>
                                                    <p id="FechaSalidaInicio_${autoinc}" style="margin: 0px;">${item2.FechaSalidaInicio}</p>
                                                    <p id="HoraSalida_${autoinc}">${item2.HoraSalida} HRS</p>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <p style="margin: 0px;">LLEGADA</p>
                                                    <p id="FechaLlegada_${autoinc}" style="margin: 0px;">${item2.FechaLlegada}</p>
                                                    <p id="HoraLlegada_${autoinc}">${item2.HoraLlegada} HRS</p>
                                                </div>

                                                <div class="col-lg-5 col-md-6 col-sm-6 mb-3"><img style="height: 40.55px;" src="${logoServImg}" /></div>
                                                <div class="col-lg-7 col-md-6 col-sm-6 mb-3">
                                                    <span style="text-decoration: none;" class="taquilla">${TarifaPromoMoneda}</span>
                                                    <span class="internet">${tarifaForMoneda}</span>
                                                    <span id="enviarSalida_${autoinc}" class="elegir" onclick="enviarDatosSalida(this);">ELEGIR</span>
                                                </div>
                                            </div>

                                        </div>
                                              <input id="logoEmpresaSalida_${autoinc}" type="hidden" value="${logoEmpresa}">
                                              <input id="logoServImgSalida_${autoinc}" type="hidden" value="${logoServImg}">

                                              <input id="pE_nClaveCorrida_${autoinc}" type="hidden" value="${item2.claveCorrida}">
                                              <input id="pE_aFechaSalidaInicioCorrida_${autoinc}" type="hidden" value="${item2.FechaSalidaInicio}">
                                              <input id="pE_aFechaBoleto_${autoinc}" type="hidden" value="${item2.FechaSalidaBoleto}">
                                              <input id="pE_hHoraSalidaBoleto_${autoinc}" type="hidden" value="${item2.HoraSalida}">
                                              <input id="pE_CorridaEmpresa_${autoinc}" type="hidden" value="${item2.EmpresaCorrida}">
                                              <input id="pE_nConsecutivo_${autoinc}" type="hidden" value="${consApi2}">

                                    </div>`;
                } else {
                    datos.innerHTML += `
                                    <div id="fichaSalida${autoinc}" class="fichas fichaFiltro ${classHorario} mt-3">
                                        <div class="col-lg-12"><img style="width: 300px; max-width: 80%;" src="${logoEmpresa}" />
                                            <span class="descuento">-10%</span>
                                        </div>
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-lg-5 col-md-6 col-sm-6">
                                                    <p style="margin: 0px;">ORIGEN</p>
                                                    <p id="origenCom_${autoinc}">${origenCom}</p>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <p style="margin: 0px;">DESTINO</p>
                                                    <p id="destinoCom_${autoinc}">${destinoCom}</p>
                                                </div>

                                                <div class="col-lg-5 col-md-6 col-sm-6">
                                                    <p style="margin: 0px;">SALIDA</p>
                                                    <p id="FechaSalidaInicio_${autoinc}" style="margin: 0px;">${item2.FechaSalidaInicio}</p>
                                                    <p id="HoraSalida_${autoinc}">${item2.HoraSalida} HRS</p>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6">
                                                    <p style="margin: 0px;">LLEGADA</p>
                                                    <p id="FechaLlegada_${autoinc}" style="margin: 0px;">${item2.FechaLlegada}</p>
                                                    <p id="HoraLlegada_${autoinc}">${item2.HoraLlegada} HRS</p>
                                                </div>

                                                <div class="col-lg-5 col-md-6 col-sm-6 mb-3"><img style="height: 40.55px;" src="${logoServImg}" /></div>
                                                <div class="col-lg-7 col-md-6 col-sm-6 mb-3">
                                                    <span class="taquilla">${tarifaForMoneda}</span>
                                                    <span class="internet">${TarifaPromoMoneda}</span>
                                                    <span id="enviarSalida_${autoinc}" class="elegir" onclick="enviarDatosSalida(this);">ELEGIR</span>
                                                </div>
                                            </div>

                                        </div>
                                              <input id="logoEmpresaSalida_${autoinc}" type="hidden" value="${logoEmpresa}">
                                              <input id="logoServImgSalida_${autoinc}" type="hidden" value="${logoServImg}">

                                              <input id="pE_nClaveCorrida_${autoinc}" type="hidden" value="${item2.claveCorrida}">
                                              <input id="pE_aFechaSalidaInicioCorrida_${autoinc}" type="hidden" value="${item2.FechaSalidaInicio}">
                                              <input id="pE_aFechaBoleto_${autoinc}" type="hidden" value="${item2.FechaSalidaBoleto}">
                                              <input id="pE_hHoraSalidaBoleto_${autoinc}" type="hidden" value="${item2.HoraSalida}">
                                              <input id="pE_CorridaEmpresa_${autoinc}" type="hidden" value="${item2.EmpresaCorrida}">
                                              <input id="pE_nConsecutivo_${autoinc}" type="hidden" value="${consApi2}">

                                    </div>`;
                }
            }

            autoinc++;
            //@*console.log(autoinc);*@
        }

        //@*console.log(arrayHorarios);*@

        filtroHorarios(arrayHorarios);
        contHorarios();
        //let prueba1 = 'Hola';
        //classHorario(prueba1);
    })();
});

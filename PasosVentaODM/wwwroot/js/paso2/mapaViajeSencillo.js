function cargarMapa() {
    const loading = document.getElementById("cargando");


    alert('Favor de seleccionar los asientos y después colocar el nombre completo de los pasajeros.');


    ////////////// MAPA DE OCUPACION /////////////////////

    let MapaOcupacion = document.getElementById("MapaOcupacion");
    let fila5 = document.getElementById("fila5");
    let fila4 = document.getElementById("fila4");

    let fila2 = document.getElementById("fila2");
    let fila1 = document.getElementById("fila1");

    ////////////// MAPA DE OCUPACION SEGUNDO PISO /////////////////////

    let MapaOcupacion2 = document.getElementById("MapaOcupacion2");
    let pas2fila5 = document.getElementById("pas2fila5");
    let pas2fila4 = document.getElementById("pas2fila4");

    let pas2fila2 = document.getElementById("pas2fila2");
    let pas2fila1 = document.getElementById("pas2fila1");

    //@* ESTE CODIGO ES DE PRUEBA *@

    ////////////

    //loading.style.display = 'block';
    (async () => {
        consMap = document.getElementById("ConsPas2").innerHTML;

        //---console.log(consMap);

        let data2 = JSON.parse(`{   "pE_TipoTarjeta": "TB",
                                  "pE_nModoCorridas": "1",
                                  "pE_nConsecutivo":${consMap}}`);
        //@* let data = 'Diagrama/Mapa.json';*@

        let data = "http://webq.odm.com.mx/WSVentaWeb/api/DiagramaAsientos";
        const rawResponse = await fetch(data, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data2),
        });
        const content = await rawResponse.json();

        const datos = content;

        console.log("Viaje sencillo:");
        console.log(datos);
        loading.style.display = "none";
        //console.log(datos.Diagrama);
        //@* console.log(datos);*@
        let vuelta = 1;
        let idElementos = 1;
        let colorNume = "";

        for (ocupacion of datos.Diagrama) {
            if (ocupacion.Asientos != "") {
                //console.log('Tu asiento es: ' + ocupacion.Asientos + ' Estatus: ' + ocupacion.Estados + ' Piso: ' + ocupacion.piso.trim() + ' TV: ' + ocupacion.Imagenes);

                let numAsiento = Number(ocupacion.Asientos).toString();
                let tv = ocupacion.Imagenes.substr(-5, 1);

                /// CHECAMOS SI EL BUS ES DE 1 PISO

                if (ocupacion.piso == 1) {
                    //---console.log(tv);

                    if (tv === "T") {
                        tv = "TV";
                    } else {
                        tv = "";
                    }

                    //alert('Mi vuelta general:' + vuelta);

                    if (vuelta == 4) {
                        if (ocupacion.Estados === "1") {
                            imgAsiento = "img/AsientoBco.png";
                            colorNume = "clasNum";
                        } else {
                            imgAsiento = "img/AsientoRojo.png";
                            colorNume = "clasNumRojo";
                        }

                        fila5.innerHTML += `<td id="idElementos_${numAsiento}" onclick="miclick(this);" class="tablaclick" style="position:relative;">
                                      <span class="botones ${colorNume}">${numAsiento}</span>
                                      <span class="clasTV">${tv}</span>
                                      <img id="idImgAsiento_${numAsiento}" class="clasAsImg" src="${imgAsiento}" />

                                  </td>`;
                        //alert('Vuelta 4');

                        vuelta = 0;
                    }
                    if (vuelta == 3) {
                        if (ocupacion.Estados === "1") {
                            imgAsiento = "img/AsientoBco.png";
                            colorNume = "clasNum";
                        } else {
                            imgAsiento = "img/AsientoRojo.png";
                            colorNume = "clasNumRojo";
                        }

                        fila4.innerHTML += `<td id="idElementos_${numAsiento}" onclick="miclick(this);" style="position:relative;">
                                      <span class="botones ${colorNume}">${numAsiento}</span>
                                      <span class="clasTV">${tv}</span>
                                      <img id="idImgAsiento_${numAsiento}" class="clasAsImg" src="${imgAsiento}" />
                                  </td>`;

                        //alert('Vuelta 3');
                    }

                    /* @*if (vuelta === 3) {
                                fila3.innerHTML += `<td></td>`;
                            }*@ */

                    if (vuelta == 2) {
                        if (ocupacion.Estados === "1") {
                            imgAsiento = "img/AsientoBco.png";
                            colorNume = "clasNum";
                        } else {
                            imgAsiento = "img/AsientoRojo.png";
                            colorNume = "clasNumRojo";
                        }

                        fila2.innerHTML += `<td id="idElementos_${numAsiento}" onclick="miclick(this);" style="position:relative;">
                                      <span class="botones ${colorNume}">${numAsiento}</span>
                                      <span class="clasTV">${tv}</span>
                                      <img id="idImgAsiento_${numAsiento}" class="clasAsImg" src="${imgAsiento}" />
                                  </td>`;

                        //alert('Vuelta 2');
                    }
                    if (vuelta == 1) {
                        if (ocupacion.Estados === "1") {
                            imgAsiento = "img/AsientoBco.png";
                            colorNume = "clasNum";
                        } else {
                            imgAsiento = "img/AsientoRojo.png";
                            colorNume = "clasNumRojo";
                        }

                        fila1.innerHTML += `<td id="idElementos_${numAsiento}" onclick="miclick(this);" style="position:relative;">
                                      <span class="botones ${colorNume}">${numAsiento}</span>
                                      <span class="clasTV">${tv}</span>
                                      <img id="idImgAsiento_${numAsiento}" class="clasAsImg" src="${imgAsiento}" />
                                  </td>`;
                        //alert('Vuelta 1');
                    }
                }

                // CHECAMOS SI EL BUS ES DE 2 PISOS

                if (ocupacion.piso == 2) {
                    $(".segPisoBtn").css("display", "block");
                    let flecha = document.getElementById('flecha');

                    flecha.style.display = 'none';

                    //---console.log(tv);

                    if (tv === "T") {
                        tv = "TV";
                    } else {
                        tv = "";
                    }
                    ///////

                    if (numAsiento < 5) {
                        console.log("Mi numero de asiento es: " + numAsiento);
                        if (vuelta == 4) {
                            if (ocupacion.Estados === "1") {
                                imgAsiento = "img/AsientoBco.png";
                                colorNume = "clasNum";
                            } else {
                                imgAsiento = "img/AsientoRojo.png";
                                colorNume = "clasNumRojo";
                            }

                            pas2fila5.innerHTML += `<td id="idElementos_${numAsiento}" onclick="miclick(this);" style="position:relative;">
                                      <span class="botones ${colorNume}">${numAsiento}</span>
                                      <span class="clasTV">${tv}</span>
                                      <img id="idImgAsiento_${numAsiento}" class="clasAsImg" src="${imgAsiento}" />
                                  </td>`;
                            vuelta = 0;
                        }
                        if (vuelta == 3) {
                            if (ocupacion.Estados === "1") {
                                imgAsiento = "img/AsientoBco.png";
                                colorNume = "clasNum";
                            } else {
                                imgAsiento = "img/AsientoRojo.png";
                                colorNume = "clasNumRojo";
                            }

                            pas2fila4.innerHTML += `<td id="idElementos_${numAsiento}" onclick="miclick(this);" style="position:relative;">
                                      <span class="botones ${colorNume}">${numAsiento}</span>
                                      <span class="clasTV">${tv}</span>
                                      <img id="idImgAsiento_${numAsiento}" class="clasAsImg" src="${imgAsiento}" />
                                  </td>`;
                        }

                        if (vuelta == 2) {
                            if (ocupacion.Estados === "1") {
                                imgAsiento = "img/AsientoBco.png";
                                colorNume = "clasNum";
                            } else {
                                imgAsiento = "img/AsientoRojo.png";
                                colorNume = "clasNumRojo";
                            }

                            pas2fila2.innerHTML += `<td id="idElementos_${numAsiento}" onclick="miclick(this);" style="position:relative;">
                                      <span class="botones ${colorNume}">${numAsiento}</span>
                                      <span class="clasTV">${tv}</span>
                                      <img id="idImgAsiento_${numAsiento}" class="clasAsImg" src="${imgAsiento}" />
                                  </td>`;
                        }
                        if (vuelta == 1) {
                            if (ocupacion.Estados === "1") {
                                imgAsiento = "img/AsientoBco.png";
                                colorNume = "clasNum";
                            } else {
                                imgAsiento = "img/AsientoRojo.png";
                                colorNume = "clasNumRojo";
                            }

                            pas2fila1.innerHTML += `<td id="idElementos_${numAsiento}" onclick="miclick(this);" style="position:relative;">
                                      <span class="botones ${colorNume}">${numAsiento}</span>
                                      <span class="clasTV">${tv}</span>
                                      <img id="idImgAsiento_${numAsiento}" class="clasAsImg" src="${imgAsiento}" />
                                  </td>`;
                        }
                    }
                    ///////

                    if (
                        numAsiento == 5 ||
                        numAsiento == 6 ||
                        numAsiento == 7 ||
                        numAsiento == 8 ||
                        numAsiento == 9 ||
                        numAsiento == 10
                    ) {
                        if (vuelta == 2) {
                            if (ocupacion.Estados === "1") {
                                imgAsiento = "img/AsientoBco.png";
                                colorNume = "clasNum";
                            } else {
                                imgAsiento = "img/AsientoRojo.png";
                                colorNume = "clasNumRojo";
                            }

                            pas2fila2.innerHTML += `<td id="idElementos_${numAsiento}" onclick="miclick(this);" style="position:relative;">
                                      <span class="botones ${colorNume}">${numAsiento}</span>
                                      <span class="clasTV">${tv}</span>
                                      <img id="idImgAsiento_${numAsiento}" class="clasAsImg" src="${imgAsiento}" />
                                  </td>`;
                            pas2fila5.innerHTML += `<td id="idElementos_${numAsiento}" onclick="miclick(this);" style="position:relative;">

                                  </td>`;
                            vuelta = 0;
                        }
                        if (vuelta == 1) {
                            if (ocupacion.Estados === "1") {
                                imgAsiento = "img/AsientoBco.png";
                                colorNume = "clasNum";
                            } else {
                                imgAsiento = "img/AsientoRojo.png";
                                colorNume = "clasNumRojo";
                            }

                            pas2fila1.innerHTML += `<td id="idElementos_${numAsiento}" onclick="miclick(this);" style="position:relative;">
                                      <span class="botones ${colorNume}">${numAsiento}</span>
                                      <span class="clasTV">${tv}</span>
                                      <img id="idImgAsiento_${numAsiento}" class="clasAsImg" src="${imgAsiento}" />
                                  </td>`;

                            pas2fila4.innerHTML += `<td id="idElementos_${numAsiento}" onclick="miclick(this);" style="position:relative;">

                                  </td>`;
                        }
                    }
                    //////

                    if (numAsiento > 10) {
                        console.log("Mi numero de asiento es: " + numAsiento);
                        if (vuelta == 4) {
                            if (ocupacion.Estados === "1") {
                                imgAsiento = "img/AsientoBco.png";
                                colorNume = "clasNum";
                            } else {
                                imgAsiento = "img/AsientoRojo.png";
                                colorNume = "clasNumRojo";
                            }

                            pas2fila5.innerHTML += `<td id="idElementos_${numAsiento}" onclick="miclick(this);" style="position:relative;">
                                      <span class="botones ${colorNume}">${numAsiento}</span>
                                      <span class="clasTV">${tv}</span>
                                      <img id="idImgAsiento_${numAsiento}" class="clasAsImg" src="${imgAsiento}" />
                                  </td>`;
                            vuelta = 0;
                        }
                        if (vuelta == 3) {
                            if (ocupacion.Estados === "1") {
                                imgAsiento = "img/AsientoBco.png";
                                colorNume = "clasNum";
                            } else {
                                imgAsiento = "img/AsientoRojo.png";
                                colorNume = "clasNumRojo";
                            }

                            pas2fila4.innerHTML += `<td id="idElementos_${numAsiento}" onclick="miclick(this);" style="position:relative;">
                                      <span class="botones ${colorNume}">${numAsiento}</span>
                                      <span class="clasTV">${tv}</span>
                                      <img id="idImgAsiento_${numAsiento}" class="clasAsImg" src="${imgAsiento}" />
                                  </td>`;
                        }

                        if (vuelta == 2) {
                            if (ocupacion.Estados === "1") {
                                imgAsiento = "img/AsientoBco.png";
                                colorNume = "clasNum";
                            } else {
                                imgAsiento = "img/AsientoRojo.png";
                                colorNume = "clasNumRojo";
                            }

                            pas2fila2.innerHTML += `<td id="idElementos_${numAsiento}" onclick="miclick(this);" style="position:relative;">
                                      <span class="botones ${colorNume}">${numAsiento}</span>
                                      <span class="clasTV">${tv}</span>
                                      <img id="idImgAsiento_${numAsiento}" class="clasAsImg" src="${imgAsiento}" />
                                  </td>`;
                        }
                        if (vuelta == 1) {
                            if (ocupacion.Estados === "1") {
                                imgAsiento = "img/AsientoBco.png";
                                colorNume = "clasNum";
                            } else {
                                imgAsiento = "img/AsientoRojo.png";
                                colorNume = "clasNumRojo";
                            }

                            pas2fila1.innerHTML += `<td id="idElementos_${numAsiento}" onclick="miclick(this);" style="position:relative;">
                                      <span class="botones ${colorNume}">${numAsiento}</span>
                                      <span class="clasTV">${tv}</span>
                                      <img id="idImgAsiento_${numAsiento}" class="clasAsImg" src="${imgAsiento}" />
                                  </td>`;
                        }
                    }
                }
                vuelta++;
            }

            idElementos++;
        }
    })();
}

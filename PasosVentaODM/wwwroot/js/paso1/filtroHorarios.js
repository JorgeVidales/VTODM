window.addEventListener("click", function (e) {
    let todos = document.getElementById("todos");
    let madru = document.getElementById("madrugada");
    let dia = document.getElementById("dia");
    let tard = document.getElementById("tarde");
    let noch = document.getElementById("noche");

    //////// SI EL ARREGLO NO ESTA DEFINIDO ///////////
    arrayHorarios = [];

    if (typeof arrayHorarios === "undefined") {
        // se ejecutan estas instrucciones
        //@*return console.log('SELECCIONA UNA CORRIDA');*@
    }

    for (item of arrayHorarios) {
        // @*console.log('Mi arreglo: ' + item);*@

        if (item == "0") {
            // @*return console.log('SELECCIONA UNA CORRIDA 2');*@
        }
    }
    ///////////////////

    if (document.getElementById("todos").contains(e.target)) {
        console.log("Diste click en todos");

        if (todos.className === "active") {
            todos.className = "inactive";
            filtroHorarios(arrayHorarios);
            filtroHorariosReg(arrayHorarios);
        } else {
            todos.className = "active";
            madru.className = "inactive";
            dia.className = "inactive";
            tard.className = "inactive";
            noch.className = "inactive";
            filtroHorarios(arrayHorarios);
            filtroHorariosReg(arrayHorarios);
        }
    }
    ///////////////////

    if (document.getElementById("madrugada").contains(e.target)) {
        console.log("Diste click en madrugada");

        if (madru.className === "active") {
            madru.className = "inactive";
            filtroHorarios(arrayHorarios);
            filtroHorariosReg(arrayHorarios);
        } else {
            madru.className = "active";
            todos.className = "inactive";
            filtroHorarios(arrayHorarios);
            filtroHorariosReg(arrayHorarios);
        }
    }

    ///////////////////

    if (document.getElementById("dia").contains(e.target)) {
        console.log("Diste click en dia");

        if (dia.className === "active") {
            dia.className = "inactive";
            filtroHorarios(arrayHorarios);
            filtroHorariosReg(arrayHorarios);
        } else {
            dia.className = "active";
            todos.className = "inactive";
            filtroHorarios(arrayHorarios);
            filtroHorariosReg(arrayHorarios);
        }
    }

    ///////////////////

    if (document.getElementById("tarde").contains(e.target)) {
        console.log("Diste click en tarde");

        if (tard.className === "active") {
            tard.className = "inactive";
            filtroHorarios(arrayHorarios);
            filtroHorariosReg(arrayHorarios);
        } else {
            tard.className = "active";
            todos.className = "inactive";
            filtroHorarios(arrayHorarios);
            filtroHorariosReg(arrayHorarios);
        }
    }

    ///////////////////

    if (document.getElementById("noche").contains(e.target)) {
        console.log("Diste click en noche");

        if (noch.className === "active") {
            noch.className = "inactive";
            filtroHorarios(arrayHorarios);
            filtroHorariosReg(arrayHorarios);
        } else {
            noch.className = "active";
            todos.className = "inactive";
            filtroHorarios(arrayHorarios);
            filtroHorariosReg(arrayHorarios);
        }
    }

    ///////////////////
});

function filtroHorarios(arregloHorarios) {
    let todos = document.getElementById("todos");
    let madru = document.getElementById("madrugada");
    let dia = document.getElementById("dia");
    let tard = document.getElementById("tarde");
    let noch = document.getElementById("noche");

    let argHorarios = arregloHorarios;

    let todosActivo = true;
    let madruActivo = true;
    let diaActivo = true;
    let tardActivo = true;
    let nochActivo = true;

    var container = document.querySelector("#tarjetas1");
    var madrugadaClass = container.querySelectorAll("div.classmadru");
    var diaClass = container.querySelectorAll("div.classdia");
    var tardeClass = container.querySelectorAll("div.classtarde");
    var nocheClass = container.querySelectorAll("div.classnoche");

    ///////////////////

    if (todos.className === "active") {
        todosActivo = true;
    } else {
        todosActivo = false;
    }

    ///////////////////

    if (madru.className === "active") {
        madruActivo = true;

        madrugadaClass.forEach(function (userItem) {
            userItem.setAttribute("style", "display: block");
        });

        //@*console.log(madrugadaClass);*@
    } else {
        madruActivo = false;
        madrugadaClass.forEach(function (userItem) {
            userItem.setAttribute("style", "display: none");
        });
    }

    ///////////////////

    if (dia.className === "active") {
        diaActivo = true;
        diaClass.forEach(function (userItem) {
            userItem.setAttribute("style", "display: block");
        });
    } else {
        diaActivo = false;
        diaClass.forEach(function (userItem) {
            userItem.setAttribute("style", "display: none");
        });
    }

    ///////////////////

    if (tard.className === "active") {
        tardActivo = true;
        tardeClass.forEach(function (userItem) {
            userItem.setAttribute("style", "display: block");
        });
    } else {
        tardActivo = false;
        tardeClass.forEach(function (userItem) {
            userItem.setAttribute("style", "display: none");
        });
    }

    ///////////////////

    if (noch.className === "active") {
        nochActivo = true;
        nocheClass.forEach(function (userItem) {
            userItem.setAttribute("style", "display: block");
        });
    } else {
        nochActivo = false;
        nocheClass.forEach(function (userItem) {
            userItem.setAttribute("style", "display: none");
        });
    }

    ///////////////////

    if (
        todosActivo === false &&
        madruActivo === false &&
        diaActivo === false &&
        tardActivo === false &&
        nochActivo == false
    ) {
        console.log("todo es falso");
        madrugadaClass.forEach(function (userItem) {
            userItem.setAttribute("style", "display: block");
        });

        diaClass.forEach(function (userItem) {
            userItem.setAttribute("style", "display: block");
        });

        tardeClass.forEach(function (userItem) {
            userItem.setAttribute("style", "display: block");
        });

        nocheClass.forEach(function (userItem) {
            userItem.setAttribute("style", "display: block");
        });
    }

    if (todosActivo === true) {
        madrugadaClass.forEach(function (userItem) {
            userItem.setAttribute("style", "display: block");
        });

        diaClass.forEach(function (userItem) {
            userItem.setAttribute("style", "display: block");
        });

        tardeClass.forEach(function (userItem) {
            userItem.setAttribute("style", "display: block");
        });

        nocheClass.forEach(function (userItem) {
            userItem.setAttribute("style", "display: block");
        });
    }

    console.log(todosActivo);
    console.log(madruActivo);
    console.log(diaActivo);
    console.log(tardActivo);
    console.log(nochActivo);

    console.log(argHorarios);
}

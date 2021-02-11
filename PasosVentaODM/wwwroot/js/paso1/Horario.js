function contHorarios() {

    $("#todos span").text("0");
    $("#madrugada span").text("0");
    $("#dia span").text("0");
    $("#tarde span").text("0");
    $("#noche span").text("0");

    let tar1 = $('#tarjetas1').css('display');
    let tar2 = $('#tarjetas2').css('display');

    let madru = document.getElementById("madrugada");
    let dia = document.getElementById("dia");
    let tard = document.getElementById("tarde");
    let noch = document.getElementById("noche");

    let madrugada1 = document.getElementById('tarjetas1').getElementsByClassName('classmadru').length;
    let dia1 = document.getElementById('tarjetas1').getElementsByClassName('classdia').length;
    let tarde1 = document.getElementById('tarjetas1').getElementsByClassName('classtarde').length;
    let noche1 = document.getElementById('tarjetas1').getElementsByClassName('classnoche').length;

    let madrugada2 = document.getElementById('tarjetas2').getElementsByClassName('classmadru').length;
    let dia2 = document.getElementById('tarjetas2').getElementsByClassName('classdia').length;
    let tarde2 = document.getElementById('tarjetas2').getElementsByClassName('classtarde').length;
    let noche2 = document.getElementById('tarjetas2').getElementsByClassName('classnoche').length;

    let todos1 = madrugada1 + dia1 + tarde1 + noche1;
    let todos2 = madrugada2 + dia2 + tarde2 + noche2;

    if (tar1 == 'block') {

        $("#todos span").text(todos1);
        $("#madrugada span").text(madrugada1);
        $("#dia span").text(dia1);
        $("#tarde span").text(tarde1);
        $("#noche span").text(noche1);
    }

    if (tar2 == 'block') {

        $("#todos span").text(todos2);
        $("#madrugada span").text(madrugada2);
        $("#dia span").text(dia2);
        $("#tarde span").text(tarde2);
        $("#noche span").text(noche2);
    }
}
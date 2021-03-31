$(document).ready(function () {
    var tiempo = { minuto: 4, segundo: 59 };

    //@*var tiempo = {minuto: 0,segundo: 04};*@

    var tiempo_corriendo = null;

    tiempo_corriendo = setInterval(function () {
        // @*// Segundos*@

        tiempo.segundo--;
        if (tiempo.segundo === 0) {
            tiempo.segundo = 59;
            tiempo.minuto--;
        }

        //@*// Minutos*@

        $("#minute").text(tiempo.minuto < 10 ? "0" + tiempo.minuto : tiempo.minuto);
        $("#second").text(
            tiempo.segundo < 10 ? "0" + tiempo.segundo : tiempo.segundo
        );

        var minutos = $("#minute").text();
        var segundos = $("#second").text();

        //@*console.log('minutos: ' + minutos + ' ' + ' ' + 'segundos: ' + segundos);*@

        var pagina = "https://www.odm.com.mx/indexlocalv2.php";

        if (minutos == "0-1" && segundos == "59") {

            //alert("Tu sesión ha expirado. Por favor vuelve a intentarlo");

            //location.href = pagina;
            /* @*tiempo.segundo = 5;
                tiempo.minuto = 0;*@
      
                @*location.href = pagina*@ */
        }
    }, 1000);
});

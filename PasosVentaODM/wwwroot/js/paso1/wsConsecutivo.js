function wsConsecutivo() {
    let btnSolicita = $("#btnSolicita").text();

    //alert(btnSolicita);

    (async () => {
        let data = JSON.parse(`{"pE_aModo":"${btnSolicita}" }`);
        const rawResponse = await fetch(
            "http://webq.odm.com.mx/WSVentaWeb/api/CrearSesion",
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

        const consecutivo = content.sesion.pS_nConsecutivo;

        console.log(consecutivo);
        $("#idConPas1").text(consecutivo)

        $("#json_post").trigger("click");
    })();

}

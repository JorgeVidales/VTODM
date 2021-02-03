(async () => {
    let data = JSON.parse('{"pE_aModo":"1" }');
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

    const datos = content;
    let consApi = document.getElementById("idConPas1");
    miConsecutivo = datos.sesion.pS_nConsecutivo;
    consApi.innerHTML = datos.sesion.pS_nConsecutivo;
    //@* console.log(datos.sesion.pS_nConsecutivo);*@
})();

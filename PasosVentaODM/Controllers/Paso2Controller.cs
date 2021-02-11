using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PasosVentaODM.Controllers
{
    public class Paso2Controller : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            /// Datos del formulario
            ViewData["adulto"] = Request.Form["adulto"];
            ViewData["menores"] = Request.Form["menores"];
            ViewData["senectud"] = Request.Form["senectud"];
            ViewData["estudiantes"] = Request.Form["estudiantes"];
            ViewData["profesores"] = Request.Form["profesores"];

            ViewData["OrigenIATA"] = Request.Form["origencode"];
            ViewData["OrigenCom"] = Request.Form["origCompleto"];

            ViewData["DestinoIATA"] = Request.Form["destinocode"];
            ViewData["DestinoCom"] = Request.Form["destCompleto"];

            ViewData["FechaSalida"] = Request.Form["fechasalida"];
            ViewData["FechaRegreso"] = Request.Form["fecharegreso"];

            ViewData["ConsPas2"] = Request.Form["consPas2"];

            /// Datos de la corrida elegida

            ViewData["dato1"] = Request.Form["pE_nClaveCorrida"];
            ViewData["dato2"] = Request.Form["pE_aFechaSalidaInicioCorrida"];
            ViewData["dato3"] = Request.Form["pE_aFechaBoleto"];
            ViewData["dato4"] = Request.Form["pE_hHoraSalidaBoleto"];

            ViewData["dato5"] = Request.Form["pE_nClaveCorridaRegreso"];
            ViewData["dato6"] = Request.Form["pE_aFechaSalidaInicioCorridaRegr"];
            ViewData["dato7"] = Request.Form["pE_aFechaBoletoRegreso"];
            ViewData["dato8"] = Request.Form["pE_hHoraSalidaBoletoRegreso"];

            ViewData["dato9"] = Request.Form["pE_CorridaEmpresa"];
            ViewData["dato10"] = Request.Form["pE_CorridaEmpresaRegreso"];

            ViewData["dato11"] = Request.Form["consPas2"];
            ViewData["dato12"] = Request.Form["pE_nControlCache"];


            ViewData["dato13"] = Request.Form["FechaLlegadaSalida"];
            ViewData["dato14"] = Request.Form["HoraLlegadaSalida"];

            ViewData["dato15"] = Request.Form["FechaLlegadaRegreso"];
            ViewData["dato16"] = Request.Form["HoraLlegadaRegreso"];

            ViewData["dato17"] = Request.Form["logoEmpresaSalida"];
            ViewData["dato18"] = Request.Form["logoServImgSalida"];

            ViewData["dato19"] = Request.Form["logoEmpresaRegreso"];
            ViewData["dato20"] = Request.Form["logoServImgRegreso"];


            return View();
        }
    }
}

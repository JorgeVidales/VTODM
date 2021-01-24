using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using System.Web;
using System.Net;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using PasosVentaODM.Models;
using System.Text;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PasosVentaODM.Controllers
{

    public class Paso1Controller : Controller
    {
        public int consecutivo { get; set; }
        public const string EndPoint = "https://webq.odm.com.mx/WSVentaWeb/api/";
       

        // podemos simplemente crear una variable que lo almacene al nivel de la clase
       
        public async Task GetConsecutivo()
        {
            // este solo es necesario para hacer bypass ya que no estas usando una url https
            //normalmente solo se pone sobre https cuando es produccion.
            //asi que uno como dev debe de poner eso para que pueda chambear mientras.
            HttpClientHandler clientHandler = new HttpClientHandler();
            clientHandler.ServerCertificateCustomValidationCallback = (sender, cert, chain, sslPolicyErrors) => { return true; };

            // Hola amigo bueno vamos a darle

            // lo que pasa es que yo lo hacia con un paquete nuget de microsoft que es parte de netcore.
            //Hace lo mismo que el newtonsoftJson

            // Regularmente solo se usa HttpClient sin parametros
            //pero como no es https entonces los ponemos
            HttpClient client = new HttpClient(clientHandler);


            //Este es el modelo del objeto que quieres enviar (Objeto envio)
            Modo modo = new Modo
            {
                pE_aModo = "1"
                //como quieres enviar un string entonces la variable es tipo string
            };

            // ahora como quieres enviar un Json necesitas convertir ese objeto en un Json
            var objetoSerializado = JsonConvert.SerializeObject(modo);

            //ahora entonces ya convertimos a json pero necesitamos enviarlo
            // y como lo enviamos?
            //hay varias formas de hacerlo pero una de ellas es esta.
            // almacenamos el contenido y le decimos en que formato, en este caso podra contener caracteres que deben ser comprendidos con UTF8
            HttpContent contenido = new StringContent(objetoSerializado, Encoding.UTF8, "application/json");

            //ya creado el contenido que enviaremos ahora debemos saber que tipo de verbo es el servicio al que te conectaras o consumiras.
            //en este caso sabemos que es post
            //y por ello usamos PostAsync, pero existe GetAsync, PutAsync, DeleteAsync y existen mas pero estos son los comunes y con ellos podras hacer todo

            //esrtamos usando la instancia de HttpClient (client) con el metodo PostAsync que recibe URL y contenido
            //entonces ponemos la url del servici te recomiendo esto, ya que por lo regular el endpoint no cambia siempre estan los servicios en el mismo lugar,
            //solo cambia el controlador en este caso es (CrearSesion)
            var stringTask = await client.PostAsync(EndPoint+"CrearSesion", contenido);

            // ahora como este servicio te responde con otro objeto necesitas identificar los tipos de dato que te devuelve
            //es un objeto session que tiene un parametro llamado pS_nConsecutivo entonces toca crearlo

            //ahora hay que deserializar y esto es convertir un json a objeto

            //indicamos el tipo (SesionModel en este caso.) alli se guardara la respuesta
            //JsonConvert.DeserializeObject<SesionModel> hace que la respuesta json se convierta a objeto de tipo SesionModel
            string respuestaJson = await stringTask.Content.ReadAsStringAsync();
            SesionModel objetoRecibido = JsonConvert.DeserializeObject<SesionModel>(respuestaJson);
            // y listo, ya podrias hacer uso de los datos asi
            // por ejemplo

            consecutivo = objetoRecibido.sesion.pS_nConsecutivo;
            // no se porque no se ve pero bueno ya esta el valor, ahora si listo(dudas?)
            // como paso el valor a 
        }

                

        class Modo
        {
            //el nombre de la propiedad debe ser identico al que espera el servicio, al igual que el tipo
            public string pE_aModo { get; set; }
        }


        public class SesionModel
        {
            public Sesion sesion { get; set; }
        }

        public class Sesion
        {
            public int pS_nConsecutivo { get; set; }
        }

        /// //////////// video hdleon https://www.youtube.com/watch?v=Q12rpPdPcD8 /////////////////////


        public async Task GetConsecutivo2()
        {
            string url = "https://webq.odm.com.mx/WSVentaWeb/api/CrearSesion";
            HttpClientHandler clientHandler = new HttpClientHandler();
            clientHandler.ServerCertificateCustomValidationCallback = (sender, cert, chain, sslPolicyErrors) => { return true; };

            var client = new HttpClient(clientHandler);

            Post post = new Post()
            {
                pE_aModo = "1"
            };

            var data = JsonConvert.SerializeObject(post);

            HttpContent contenido = new StringContent(data, Encoding.UTF8, "application/json");

            var httpRespuesta = await client.PostAsync(url, contenido);

            if (httpRespuesta.IsSuccessStatusCode)
            {
                var resultado = await httpRespuesta.Content.ReadAsStringAsync();

                var postResultado = JsonConvert.DeserializeObject<SesionModel>(resultado);
            }
        }

        class Post
        {
            //el nombre de la propiedad debe ser identico al que espera el servicio, al igual que el tipo
            public string pE_aModo { get; set; }
        }
        /// /////////////////////////////////
        public  IActionResult Index()
        {
            GetConsecutivo();
            // esta parte
            //puedes hacer varias cosas lo quiere aqui no? Si 


            //y cuando quieras usarlo validar que sea diferente de 0
            // ejemplo
            //if(consecutivo != 0)
            //{
            //    // lo que quieras hacer con el
            //    //iba a intentar otra forma pero no se como en netcorepero bueno eso es lo basico para que consumas cualquier servicio.
            //    //dudas?
            //    // para consumir todos los datos del controlador tengo un modelo
            //    // en el caso del consecutivo lo tendria que declar de igual manera
            //    // cierto
            //    // te pongo el ejemplo completo 
            //}

            //string url = "https://webq.odm.com.mx/WSVentaWeb/api/CrearSesion";
            //var json = new WebClient().DownloadString(url);

            //dynamic m = JsonConvert.DeserializeObject(json);

            //Formulario formul = new Formulario();
            ViewBag.Consecutivo = consecutivo;
            ViewData["Consecutivo"] = consecutivo;

            var adulto = Request.Form["adultos"];
            var menores = Request.Form["menores"];
            var senectud = Request.Form["senectud"];
            var estudiantes = Request.Form["estudiantes"];
            var profesores = Request.Form["profesores"];

            if (adulto == "")
            {
                adulto = "0";
            }
            if (menores == "")
            {
                menores = "0";
            }
            if (senectud == "")
            {
                senectud = "0";
            }
            if (estudiantes == "")
            {
                estudiantes = "0";
            }
            if (profesores == "")
            {
                profesores = "0";
            }


            ViewData["OrigenIATA"] = Request.Form["origencode"];
            ViewData["DestinoIATA"] = Request.Form["destinocode"];
            ViewData["FechaSalida"] = Request.Form["fechasalida"];
            // ViewData["FeSalida"] = Request.Form["Fsalida"];
            ViewData["FechaRegreso"] = Request.Form["fecharegreso"];
            ViewData["Consecutivo"] = Request.Form["consecutivo"];

            ViewData["ConsPas2"] = Request.Form["consPas2"];

            ViewData["Adulto"] = adulto;
            ViewData["Menores"] = menores;
            ViewData["Inapam"] = senectud;
            ViewData["Estudiantes"] = estudiantes;
            ViewData["Profesores"] = profesores;


            //formul.Consecutivo = ViewData[]

            //formul.OrigenIATA = Request.Form["origencode"];
            //formul.DestinoIATA = Request.Form["destinocode"];
            //formul.FechaSalida = Request.Form["fechasalida"];
            //formul.FeSalida = Request.Form["Fsalida"];
            //formul.FechaRegreso = Request.Form["fecharegreso"];
            //formul.FeRegreso = Request.Form["Fregreso"];
            //formul.Adulto = Request.Form["adultos"];

            //return View(formul);

            return View();
        }
        
        

        


    }

}

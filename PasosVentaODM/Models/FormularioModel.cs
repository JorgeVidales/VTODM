using System;
namespace PasosVentaODM.Models
{
    public class Formulario
    {
        //public String Origen { get; set; }
        //public String Destino { get; set; }

        public String OrigenIATA { get; set; }
        public String DestinoIATA { get; set; }
        public String FechaSalida { get; set; }
        public String FeSalida { get; set; }
        public String FechaRegreso { get; set; }
        public String FeRegreso { get; set; }
        public String Adulto { get; set; }
        public int Consecutivo { get; set; }
        //es como se tendria que hacer amigo?
        //exactamente asi, ahora necesitas crear una instancia de tu formulario de modo que puedas acceder a el desde GEtConsecutivo

    }
}

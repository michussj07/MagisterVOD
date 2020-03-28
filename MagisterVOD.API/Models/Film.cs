using System;
using System.Collections.Generic;

namespace MagisterVOD.API.Models
{
    public class Film
    {
        public int Id { get; set; }
        public string FilmPhoto { get; set; }        
        public string Title { get; set; }  
        public float Price { get; set; }

        //Zakładka Więcej
        public int Year { get; set; }
        public string Country { get; set; }
        public string Genre { get; set; }
        public string LanguageVersion { get; set; }
        public string Rating { get; set; }
        public string Description { get; set; }
        public string Cast { get; set; }
        public DateTime Created { get; set; }
        public DateTime ToDelete { get; set; }
        
    }
}
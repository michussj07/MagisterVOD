using System;

namespace MagisterVOD.API.Dtos
{
    public class FilmForListDto
    {
        public int Id { get; set; }
        public string FilmPhoto { get; set; }        
        public string Title { get; set; }  
        public float Price { get; set; }

        //Zakładka Więcej
        public int Year { get; set; }
        public string Country { get; set; }
        public string Genre { get; set; }
        public string Rating { get; set; }
        public DateTime Created { get; set; }
        public DateTime ToDelete { get; set; }
    }
}
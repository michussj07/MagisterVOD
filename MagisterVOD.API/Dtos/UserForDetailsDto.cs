using System;
using System.Collections.Generic;

namespace MagisterVOD.API.Dtos
{
    public class UserForDetailsDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }

        //Podstawowe informacje użytkownika
        public string Gender { get; set; }
        public int Age { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string City { get; set; }
        public string Country { get; set; }

        //Dodatkowe informacje użytkownika (Zakładka info)

        public string Motto { get; set; }
        public string Interests { get; set; }
        public string Movies { get; set; }
        public string Music { get; set; }

        //Dodatkowe informacje użytkownika (Zakładka Zdjęcia)
        public ICollection<PhotosForDetailedDto> Photos { get; set; }
        public string PhotoUrl { get; set; }
    }
}
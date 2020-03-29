using System;
using System.Collections.Generic;

namespace MagisterVOD.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        //Podstawowe informacje użytkownika
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
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
        public ICollection<Photo> Photos { get; set; }
        public ICollection<Message> MessagesSent { get; set; } 
        public ICollection<Message> MessagesReceived { get; set; }
    }
}
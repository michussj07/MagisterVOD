using System;
using System.ComponentModel.DataAnnotations;

namespace MagisterVOD.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage="Nazwa użytkownika jest wymagana")]
        public string Username { get; set; }
        [Required(ErrorMessage="E-mail jest wymagany")]
        public string Email { get; set; }
        [Required(ErrorMessage="Hasło jest wymagane")]
        [StringLength(12,MinimumLength=4,ErrorMessage="Hasło musi się składać z 4 do 12 znaków")]
        public string Password { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }

        public UserForRegisterDto()
        {
            Created =  DateTime.Now;
            LastActive =  DateTime.Now;

        }
    }
}
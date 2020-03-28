using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using MagisterVOD.API.Data;
using MagisterVOD.API.Dtos;
using MagisterVOD.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace MagisterVOD.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repository;
        private readonly IConfiguration _config;
         private readonly IMapper _mapper;
        public AuthController(IAuthRepository repository,

        IConfiguration config, IMapper mapper)
        {
            _mapper = mapper;
            _config = config;
            _repository = repository;

        }

    [HttpPost("register")]
    public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
    {
        userForRegisterDto.Username = userForRegisterDto.Username.ToLower();
        if (await _repository.UserExist(userForRegisterDto.Username))
        {
            return BadRequest("Użytkownik nie istnieje!");
        }
        var userToCreate = _mapper.Map<User>(userForRegisterDto);

        var createdUser = await _repository.Register(userToCreate, userForRegisterDto.Password);
        
        var userToReturn = _mapper.Map<UserForDetailsDto>(createdUser);
        
        return CreatedAtRoute("GetUser", new { controller = "Users", Id = createdUser.Id},userToCreate);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
    {
        var userFromRepo = await _repository.Login(userForLoginDto.Username.ToLower(), userForLoginDto.Password);

        if (userFromRepo == null)
            return Unauthorized();

        // Token
        var claims = new[]
        {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Username)
            };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.Now.AddHours(12),
            SigningCredentials = creds
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);

        var user = _mapper.Map<UserForListDto>(userFromRepo);

            return Ok(new 
            { 
                token = tokenHandler.WriteToken(token),
                user
             });

    }
}
}
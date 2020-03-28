using System.Threading.Tasks;
using MagisterVOD.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MagisterVOD.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class FilmsController : ControllerBase
    {
        private readonly IFilmRepository _repo;
        public FilmsController(IFilmRepository repo)
        {
            _repo = repo;

        }

        [HttpGet]
        public async Task<IActionResult> GetFilms()
        {
            var films = await _repo.GetFilms();

            return Ok(films);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFilm(int id)
        {
            var film = await _repo.GetFilm(id);

            return Ok(film);
        }

    }
}
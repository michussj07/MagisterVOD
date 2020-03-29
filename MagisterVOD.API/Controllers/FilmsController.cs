using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using MagisterVOD.API.Data;
using MagisterVOD.API.Dtos;
using MagisterVOD.API.Helpers;
using MagisterVOD.API.Models;
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
        private readonly IMapper _mapper;
        public FilmsController(IFilmRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;

        }

        [HttpGet]
        public async Task<IActionResult> GetFilms([FromQuery] FilmParams filmParams)
        {
            var currentFilmId = int.Parse(Film.FindFirst(ClaimTypes.NameIdentifier).Value);
            var filmFromRepo = await _repo.GetFilm(currentFilmId);

            filmParams.FilmId = currentFilmId;
            
            var films = await _repo.GetFilms(filmParams);

            var filmsToReturn = _mapper.Map<IEnumerable<FilmForListDto>>(films);

            Response.AddPagination(films.CurrentPage, films.PageSize, films.TotalCount, films.TotalPages);

            return Ok(filmsToReturn);
        }

        [HttpGet("{id}", Name= "GetFilm")]
        public async Task<IActionResult> GetFilm(int id)
        {
            var film = await _repo.GetFilm(id);

             var filmToReturn = _mapper.Map<FilmForDetailsDto>(film);

            return Ok(filmToReturn);
        }

    }
}
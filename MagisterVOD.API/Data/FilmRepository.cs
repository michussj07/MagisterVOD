using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MagisterVOD.API.Helpers;
using MagisterVOD.API.Models;
using Microsoft.EntityFrameworkCore;
using PortalRandkowy.API.Helpers;

namespace MagisterVOD.API.Data
{
    public class FilmRepository : GenericRepository, IFilmRepository
    {
        private readonly DataContext _context;
        public FilmRepository(DataContext context) : base(context)
        {
            _context = context;
        }

        public async Task<Film> GetFilm(int id)
        {
            var film = await _context.Films.FirstOrDefaultAsync(f => f.Id == id);
            return film;
        }

        public async Task<PagedFilmList<Film>> GetFilms(FilmParams filmParams)
        {
            var films = _context.Films;

         return await PagedFilmList<Film>.CreateListAsync(films, filmParams.PageNumbers, filmParams.PageSizes);

            
        }
    }
}
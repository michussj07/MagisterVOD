using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MagisterVOD.API.Helpers;
using MagisterVOD.API.Models;
using Microsoft.EntityFrameworkCore;

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

        public async Task<PagedList<Film>> GetFilms(FilmParams filmParams)
        {
            var films = _context.Films.AsQueryable();

            films = films.Where(f => f.Id != filmParams.FilmId);
            films = films.Where(f => f.Genre == filmParams.Genre);

            if (filmParams.MinYear != 1918 || filmParams.MaxYear != 2020)
            {
                var minDate = DateTime.Today.AddYears(-filmParams.MaxYear -1);
                var maxDate = DateTime.Today.AddYears(-filmParams.MinYear);
                // films = films.Where(f => f.Year >= minDate && f.Year <= maxDate);
            }


            return await PagedList<Film>.CreateListAsync(films, filmParams.PageNumber, filmParams.PageSize);
        }
    }
}
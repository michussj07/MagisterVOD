using System.Collections.Generic;
using System.Threading.Tasks;
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

        public async Task<IEnumerable<Film>> GetFilms()
        {
            var films = await _context.Films.ToListAsync();
            return films;
        }
    }
}
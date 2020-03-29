using System.Collections.Generic;
using System.Threading.Tasks;
using MagisterVOD.API.Helpers;
using MagisterVOD.API.Models;

namespace MagisterVOD.API.Data
{
    public interface IFilmRepository : IGenericRepository
    {
        Task<PagedList<Film>> GetFilms(FilmParams filmParams);
        Task<Film> GetFilm(int id);
    }
}
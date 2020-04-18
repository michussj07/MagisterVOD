using System.Collections.Generic;
using System.Threading.Tasks;
using MagisterVOD.API.Helpers;
using MagisterVOD.API.Models;
using PortalRandkowy.API.Helpers;

namespace MagisterVOD.API.Data
{
    public interface IFilmRepository : IGenericRepository
    {
        Task<PagedFilmList<Film>> GetFilms(FilmParams filmParams);
        Task<Film> GetFilm(int id);
    }
}
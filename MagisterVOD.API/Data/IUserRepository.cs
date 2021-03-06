using System.Collections.Generic;
using System.Threading.Tasks;
using MagisterVOD.API.Helpers;
using MagisterVOD.API.Models;
using PortalRandkowy.API.Helpers;

namespace MagisterVOD.API.Data
{
    public interface IUserRepository : IGenericRepository
    {
         Task<PagedList<User>> GetUsers(UserParams userParams);

         Task<User> GetUser(int id);
         Task<Photo> GetPhoto(int id);
         Task<Photo> GetMainPhotoForUser(int userId);
        Task<Message> GetMessage(int id);
        Task<PagedList<Message>> GetMessagesForUser(MessageParams messageParams);
        Task<IEnumerable<Message>> GetMessageThread(int userId, int recipientId);
    }
}
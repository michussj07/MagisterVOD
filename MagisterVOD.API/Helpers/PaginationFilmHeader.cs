namespace MagisterVOD.API.Helpers
{
    public class PaginationFilmHeader
    {
        public int CurrentPages { get; set; }
        public int ItemsPerPages { get; set; }
        public int TotalItem { get; set; }
        public int TotalPage { get; set; }

        public PaginationFilmHeader(int currentPages, int itemsPerPages, int totalItem, int totalPage)
        {
            CurrentPages = currentPages;
            ItemsPerPages = itemsPerPages;
            TotalItem = totalItem;
            TotalPage = totalPage;
        }
    }
}
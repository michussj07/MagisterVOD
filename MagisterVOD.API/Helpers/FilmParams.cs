namespace MagisterVOD.API.Helpers
{
    public class FilmParams
    {
        public const int MaxPageSize = 48;
        public int PageNumber { get; set; } = 1;
        private int pageSize = 12;
        public int PageSize
        {
            get { return pageSize; }
            set { pageSize = (value > MaxPageSize) ? MaxPageSize : value; }
        }

        public int FilmId { get; set; }
        public string Genre { get; set; }
        public int MinYear { get; set; } = 1918;
        public int MaxYear { get; set; } = 2020;
        public double MinPrice { get; set; } = 3.90;
        public double MaxPrice { get; set; } = 19.90;
    }
}
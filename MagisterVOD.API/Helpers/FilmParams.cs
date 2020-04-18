namespace MagisterVOD.API.Helpers
{
    public class FilmParams
    {
        public const int MaxPageSizes = 48;
        public int PageNumbers { get; set; } = 1;
        private int pageSizes = 24;
        public int PageSizes
        {
            get { return pageSizes; }
            set { pageSizes = (value > MaxPageSizes) ? MaxPageSizes : value; }
        }

        // public int FilmId { get; set; }
        // public string Genre { get; set; }
        // public int Year { get; set; }
        // public double Price { get; set; }
        // public double OrderBy { get; set; }

    }
}
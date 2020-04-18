using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace PortalRandkowy.API.Helpers
{
    public class PagedFilmList<T> : List<T>
    {
        public int CurrentPages { get; set; }        
        public int PageSizes { get; set; }           
        public int TotalCounts { get; set; }         
        public int TotalPage { get; set; }         

        public PagedFilmList(List<T> items, int totalCounts, int pageNumbers, int pageSizes)
        {
            CurrentPages = pageNumbers;
            PageSizes = pageSizes;
            TotalCounts = totalCounts;
            TotalPage = (int)Math.Ceiling(totalCounts / (double)pageSizes);
            this.AddRange(items);
        }

        public static async Task<PagedFilmList<T>> CreateListAsync(IQueryable<T> source, int pageNumbers, int pageSizes)
        {
            var totalCounts = await source.CountAsync();
            var items = await source.Skip((pageNumbers - 1) * pageSizes).Take(pageSizes).ToListAsync();

            return new PagedFilmList<T>(items, totalCounts, pageNumbers, pageSizes);
        }
    }
} 
using DuckScience.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DuckScience.Data
{
    public class DuckContext : DbContext
    {
        public DuckContext(DbContextOptions options) : base(options)
        {
        }

        // create Ducks table
        public DbSet<Duck> Ducks { get; set; }
    }
}

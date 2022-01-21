using DuckScience.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DuckScience.Data
{
    public static class DbInitializer
    {
        public static void Initialize(DuckContext context)
        {
            // check if data already exists
            if (context.Ducks.Any()) return;
            if (context.Users.Any()) return;

            // create new User
            var user = new User
            {
                Name = "Dexter McPherson",
                Username = "demc",
                Password = "bestcartoon"
            };

            context.Users.Add(user);

            // create list of seeded ducks
            var ducks = new List<Duck>
            {
                new Duck
                {
                    TimeFed = TimeSpan.Parse("12:45:12"),
                    FoodType = "Bread",
                    LocationFed = "Holly Park",
                    QtyDucksFed = 17,
                    QtyFoodFed = 12.45
                },
                new Duck
                {
                    TimeFed = TimeSpan.Parse("02:15:52"),
                    FoodType = "Toast",
                    LocationFed = "Whisper Pass",
                    QtyDucksFed = 5,
                    QtyFoodFed = 1.11
                },
                new Duck
                {
                    TimeFed = TimeSpan.Parse("11:41:19"),
                    FoodType = "Corn",
                    LocationFed = "Strathy Park",
                    QtyDucksFed = 21,
                    QtyFoodFed = 22.45
                },
                new Duck
                {
                    TimeFed = TimeSpan.Parse("10:29:17"),
                    FoodType = "Bread",
                    LocationFed = "Auston Dog Park",
                    QtyDucksFed = 5,
                    QtyFoodFed = 19.45
                },
                new Duck
                {
                    TimeFed = TimeSpan.Parse("08:45:12"),
                    FoodType = "Seeds",
                    LocationFed = "Cinderella Fountain",
                    QtyDucksFed = 28,
                    QtyFoodFed = 32.51
                },
            };

            // add each duck to DB
            foreach (var duck in ducks)
            {
                context.Ducks.Add(duck);
            }

            context.SaveChanges();
        }
    }
}

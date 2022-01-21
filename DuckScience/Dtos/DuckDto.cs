using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DuckScience.Dtos
{
    public class DuckDto
    {
        //public int Id { get; set; }
        public TimeSpan TimeFed { get; set; }
        public string FoodType { get; set; }
        public string LocationFed { get; set; }
        public int QtyDucksFed { get; set; }
        public double QtyFoodFed { get; set; }
    }
}

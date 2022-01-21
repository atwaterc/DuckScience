using DuckScience.Data;
using DuckScience.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DuckScience.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DucksController : ControllerBase
    {
        private readonly DuckContext _context;

        public DucksController(DuckContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Duck>>> GetDucks()
        {
            var ducks = await _context.Ducks.ToListAsync();

            if (ducks.Count == 0)
                return NotFound("No ducks have been fed");

            return Ok(ducks);
        }
    }
}

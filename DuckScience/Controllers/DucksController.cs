using AutoMapper;
using DuckScience.Data;
using DuckScience.Dtos;
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
        private readonly IMapper _mapper;

        public DucksController(DuckContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<DuckDto>>> GetDucks()
        {
            var ducks = await _context.Ducks.ToListAsync();

            var ducksToReturn = _mapper.Map<List<DuckDto>>(ducks);

            if (ducks.Count == 0)
                return NotFound("No ducks have been fed");

            return Ok(ducksToReturn);
        }

        [HttpPost("add-duck")]
        public ActionResult<List<DuckDto>> AddDuck(DuckDto duckDto)
        {
            var duck = _mapper.Map<Duck>(duckDto);

            _context.Ducks.Add(duck);
            _context.SaveChanges();

            return NoContent();
        }
    }
}

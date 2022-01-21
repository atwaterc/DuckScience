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
    public class UserController : ControllerBase
    {
        private readonly DuckContext _context;
        private readonly IMapper _mapper;

        public UserController(DuckContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _context.Users.
                SingleOrDefaultAsync(x => x.Username == loginDto.Username.ToLower());

            if (user == null) 
                return Unauthorized("Please check Username/ Password combo again");

            if (user.Password != loginDto.Password)
                return Unauthorized("Please check Username/ Password combo again");

            var userToReturn = _mapper.Map<UserDto>(user);

            return Ok(userToReturn);
        }
    }
}

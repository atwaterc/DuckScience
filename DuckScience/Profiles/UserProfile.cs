using AutoMapper;
using DuckScience.Dtos;
using DuckScience.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DuckScience.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            // create mapping for User to UserDto
            CreateMap<User, UserDto>().ReverseMap();
        }
    }
}

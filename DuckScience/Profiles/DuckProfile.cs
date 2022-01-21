using AutoMapper;
using DuckScience.Dtos;
using DuckScience.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DuckScience.Profiles
{
    public class DuckProfile : Profile
    {
        public DuckProfile()
        {
            // create mapping for Duck and DuckDto
            CreateMap<Duck, DuckDto>().ReverseMap();
        }
    }
}

﻿// <auto-generated />
using System;
using DuckScience.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DuckScience.Data.Migrations
{
    [DbContext(typeof(DuckContext))]
    [Migration("20220121151523_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.8");

            modelBuilder.Entity("DuckScience.Models.Duck", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("FoodType")
                        .HasColumnType("TEXT");

                    b.Property<string>("LocationFed")
                        .HasColumnType("TEXT");

                    b.Property<int>("QtyDucksFed")
                        .HasColumnType("INTEGER");

                    b.Property<double>("QtyFoodFed")
                        .HasColumnType("REAL");

                    b.Property<TimeSpan>("TimeFed")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Ducks");
                });
#pragma warning restore 612, 618
        }
    }
}

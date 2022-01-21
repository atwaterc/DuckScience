using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DuckScience.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Ducks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TimeFed = table.Column<TimeSpan>(type: "TEXT", nullable: false),
                    FoodType = table.Column<string>(type: "TEXT", nullable: true),
                    LocationFed = table.Column<string>(type: "TEXT", nullable: true),
                    QtyDucksFed = table.Column<int>(type: "INTEGER", nullable: false),
                    QtyFoodFed = table.Column<double>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ducks", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ducks");
        }
    }
}

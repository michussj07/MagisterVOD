using Microsoft.EntityFrameworkCore.Migrations;

namespace MagisterVOD.API.Migrations
{
    public partial class DatabaseFilmAdd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Cast",
                table: "Films",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Films",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LanguageVersion",
                table: "Films",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Rating",
                table: "Films",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Cast",
                table: "Films");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "Films");

            migrationBuilder.DropColumn(
                name: "LanguageVersion",
                table: "Films");

            migrationBuilder.DropColumn(
                name: "Rating",
                table: "Films");
        }
    }
}

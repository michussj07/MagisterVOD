using Microsoft.EntityFrameworkCore.Migrations;

namespace MagisterVOD.API.Migrations
{
    public partial class testSql : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Price",
                table: "Films",
                nullable: true,
                oldClrType: typeof(float));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "Price",
                table: "Films",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}

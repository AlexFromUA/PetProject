using Corporation.Models;
using Microsoft.EntityFrameworkCore;

namespace Corporation;

public class ApplicationDbContext : DbContext
{
    private readonly IConfiguration _configuration;

    public readonly string connectionString ;
    
    public DbSet<EmployeeModel> Employees { get; set; }
    
    public DbSet<DepartmentModel> Departments { get; set; }

    public ApplicationDbContext(IConfiguration configuration)
    {
        _configuration = configuration;
        connectionString = _configuration.GetConnectionString("TestDB");
    }
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(connectionString);
    }
}
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.Build.Framework;
using Microsoft.EntityFrameworkCore;

namespace Corporation.Models;

[Table("Empoyee")]
[PrimaryKey("EmployeeID")]
public class EmployeeModel
{
	[Column("ID")] public decimal EmployeeID { get; set; }

	public Guid DepartmentId { get; set; }

	public string SurName { get; set; }

	public string FirstName { get; set; }

	public string? Patronymic { get; set; }

	public DateTime DateOfBirth { get; set; }

	public string? DocSeries { get; set; }

	public string? DocNumber { get; set; }

	public string Position { get; set; }
}
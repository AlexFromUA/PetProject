using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Corporation.Models;

[Table("Department")]
[PrimaryKey("DepartmentID")]
public class DepartmentModel
{
	[Column("ID")] public Guid DepartmentID { get; set; }

	public Guid? ParentDepartmentId { get; set; }

	public string? Code { get; set; }

	[Column("Name")] public string DepartmentName { get; set; }
}
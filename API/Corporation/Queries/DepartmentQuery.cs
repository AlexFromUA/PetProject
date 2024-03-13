using Corporation.Models;

namespace Corporation;

[ExtendObjectType("Query")]
public class DepartmentQuery
{
	public DepartmentModel GetDepartment(ApplicationDbContext dbContext, Guid id)
	{
		DepartmentModel Department;
		Department = dbContext.Departments.SingleOrDefault(e => e.DepartmentID == id);

		if (Department != null)
		{
			return Department;
		}

		return null;
	}

	public List<DepartmentModel> GetDepartments(ApplicationDbContext dbContext)
	{
		List<DepartmentModel> Department;
		Department = dbContext.Departments.ToList();

		if (Department != null)
		{
			return Department;
		}

		return null;
	}
}
using Corporation.Models;

namespace Corporation;

[ExtendObjectType("Query")]
public class EmployeeQuery
{
	public EmployeeModel GetEmployee(ApplicationDbContext dbContext, decimal id)
	{
		EmployeeModel employee;
		employee = dbContext.Employees.SingleOrDefault(e => e.EmployeeID == id);

		if (employee != null)
		{
			return employee;
		}

		return null;
	}

	public List<EmployeeModel> GetEmployees(ApplicationDbContext dbContext)
	{
		List<EmployeeModel> employees;
		employees = dbContext.Employees.ToList();

		if (employees != null)
		{
			return employees;
		}

		return null;
	}
}
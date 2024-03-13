using Corporation.Models;

namespace Corporation;

public class Query
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
		List<EmployeeModel> employee;
		employee = dbContext.Employees.ToList();

		if (employee != null)
		{
			return employee;
		}

		return null;
	}
}
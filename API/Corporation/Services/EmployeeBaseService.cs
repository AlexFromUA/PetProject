using Corporation.Interfaces;
using Corporation.Models;
using Microsoft.Data.SqlClient;

namespace Corporation.Services;

public class EmployeeBaseService : BaseService, IEmployeeService
{
	private List<EmployeeModel>? _employees;
	private bool _hasChanges = true;

	public EmployeeBaseService(IConfiguration configuration) : base(configuration)
	{
	}

	public async Task<List<EmployeeModel>> GetEmployees()
	{
		return null;
	}

	public async Task<EmployeeModel> GetEmployee(decimal employeeId)
	{
		return null;
	}

	public async void CreateEmployee(EmployeeModel model)
	{
		string queryString =
			"INSERT INTO dbo.Empoyee ([FirstName],[SurName],[Patronymic],[DateOfBirth],[DocSeries],[DocNumber],[Position],[DepartmentID]) VALUES (@FirstName, @SurName, @Patronymic, @DateOfBirth, @DocSeries, @DocNumber, @Position, @DepartmentID);";
		await using (SqlConnection connection = new SqlConnection(connectionString))
		{
			SqlCommand command = new SqlCommand(queryString, connection);
			command.Parameters.AddWithValue("@FirstName", model.FirstName);
			command.Parameters.AddWithValue("@SurName", model.SurName);
			command.Parameters.AddWithValue("@Patronymic", model.Patronymic ?? Convert.DBNull);
			command.Parameters.AddWithValue("@DocSeries", model.DocSeries ?? Convert.DBNull);
			command.Parameters.AddWithValue("@DocNumber", model.DocNumber ?? Convert.DBNull);
			command.Parameters.AddWithValue("@Position", model.Position);


			try
			{
				connection.Open();
				command.ExecuteNonQuery();
			}
			catch (Exception ex)
			{
				Console.WriteLine(ex.Message);
			}

			_hasChanges = true;
		}
	}

	public async void UpdateEmployee(EmployeeModel model)
	{
		string queryString =
			"UPDATE dbo.Empoyee SET [FirstName] = @FirstName,[SurName] = @SurName,[Patronymic] = @Patronymic,[DateOfBirth] = @DateOfBirth,[DocSeries] = @DocSeries,[DocNumber] = @DocNumber,[Position] = @Position,[DepartmentID]= @DepartmentID WHERE [ID] = @Id;";
		await using (SqlConnection connection = new SqlConnection(connectionString))
		{
			SqlCommand command = new SqlCommand(queryString, connection);
			command.Parameters.AddWithValue("@Id", model.EmployeeID);
			command.Parameters.AddWithValue("@FirstName", model.FirstName);
			command.Parameters.AddWithValue("@SurName", model.SurName);
			command.Parameters.AddWithValue("@Patronymic", model.Patronymic ?? Convert.DBNull);
			command.Parameters.AddWithValue("@DocSeries", model.DocSeries ?? Convert.DBNull);
			command.Parameters.AddWithValue("@DocNumber", model.DocNumber ?? Convert.DBNull);
			command.Parameters.AddWithValue("@Position", model.Position);


			try
			{
				connection.Open();
				command.ExecuteNonQuery();
			}
			catch (Exception ex)
			{
				Console.WriteLine(ex.Message);
			}

			_hasChanges = true;
		}
	}

	public async void DeleteEmployee(int employeeId)
	{
		string queryString = "DELETE from dbo.Empoyee WHERE ID = @employeeId;";
		await using (SqlConnection connection = new SqlConnection(connectionString))
		{
			SqlCommand command = new SqlCommand(queryString, connection);
			command.Parameters.AddWithValue("@employeeId", employeeId);

			try
			{
				connection.Open();
				command.ExecuteNonQuery();
			}
			catch (Exception ex)
			{
				Console.WriteLine(ex.Message);
			}

			_hasChanges = true;
		}
	}
}
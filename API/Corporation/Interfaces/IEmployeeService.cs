using Corporation.Models;

namespace Corporation.Interfaces;

public interface IEmployeeService
{
    Task<List<EmployeeModel>> GetEmployees();

    Task<EmployeeModel> GetEmployee(decimal employeeId);

    void CreateEmployee(EmployeeModel model);

    void UpdateEmployee(EmployeeModel model);

    void DeleteEmployee(int employeeId);
}
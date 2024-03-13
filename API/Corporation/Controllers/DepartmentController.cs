using Corporation.Interfaces;
using Corporation.Models;
using Microsoft.AspNetCore.Mvc;

namespace Corporation.Controllers;

[ApiController]
public class DepartmentController : ControllerBase
{
    private readonly IDepartmentService _departmentService;
    private readonly IEmployeeService _employeeService;

    public DepartmentController(IDepartmentService departmentService, IEmployeeService employeeService)
    {
        _departmentService = departmentService;
        _employeeService = employeeService;
    }

    [HttpGet]
    [Route("/GetDepartment")]
    public async Task<ActionResult<DepartmentDetailsModelView>> GetDepartment(Guid id)
    {

            var currentDepartment = await _departmentService.GetDepartment(id);
            var departments = await _departmentService.GetDepartments();
            var childDepartments = departments.Where(department => department.ParentDepartmentId == id).ToList();
            var employees = await _employeeService.GetEmployees();
            var workersOfDepartment = employees.Where(employee => employee.DepartmentId == id).ToList();
            var parentDepartment =
                departments.FirstOrDefault(department => department.Id == currentDepartment.ParentDepartmentId)?.Name;

            DepartmentDetailsModelView model = new DepartmentDetailsModelView
            {
                Department = currentDepartment,
                Workers = workersOfDepartment,
                ParentDepartmentName = parentDepartment,
                ChildDepartments = childDepartments
            };
            return model;
    }
}
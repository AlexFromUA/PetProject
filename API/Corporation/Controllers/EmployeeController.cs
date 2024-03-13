using Corporation.Interfaces;
using Corporation.Models;
using Microsoft.AspNetCore.Mvc;

namespace Corporation.Controllers;

[ApiController]
public class EmployeeController : ControllerBase
{
    private readonly IEmployeeService _employeeService;

    public EmployeeController(IEmployeeService employeeService)
    {
        _employeeService = employeeService;
    }

    [HttpGet]
    [Route("/Employees")]
    public async Task<ActionResult<EmployeeDetailsViewModel>> Employees()
    {
        var employee = await _employeeService.GetEmployees();


        return null;

    }

    [HttpGet]
    [Route("/GetEmployee/:id")]
    public async Task<ActionResult<EmployeeDetailsViewModel>> GetEmployee(int id)
    {
        var employee = await _employeeService.GetEmployee(id);
        /*var departments = await _departmentService.GetDepartments();
        var selectListItems = new List<SelectListItem>();
        departments.ForEach(department =>
            selectListItems.Add(new SelectListItem { Text = department.Name, Value = department.Id }));*/
        EmployeeDetailsViewModel model = new EmployeeDetailsViewModel
        {
            DateOfBirth = Convert.ToDateTime(employee.DateOfBirth),
            //IdDepartmentGrouping = selectListItems,
            EmployeeModel = employee
        };

        return model;

    }

    /*[HttpGet]
    public async Task<IActionResult> CreateEmployee(string Id)
    {
        try
        {
            var departments = await _departmentService.GetDepartments();
            var selectListItems = new List<SelectListItem>();
            departments.ForEach(department => selectListItems.Add(new SelectListItem
                { Text = department.Name, Value = department.Id, Selected = department.Id == Id }));

            EmployeeCreateViewModel model = new EmployeeCreateViewModel
            {
                IdDepartmentGrouping = selectListItems
            };
            return View("EmployeeCreate", model);
        }
        catch (Exception ex)
        {
            return RedirectToAction("ErrorOccured", "Error");
        }
    }

    [HttpPost]
    public async Task<IActionResult> CreateEmployee(EmployeeCreateViewModel model)
    {
        if ((int)((DateTime.Now - Convert.ToDateTime(model.EmployeeModel.DateOfBirth)).TotalDays / 365.242199) > 18)
        {
            try
            {
                _employeeService.CreateEmployee(model.EmployeeModel);
                return RedirectToAction("Index");
            }
            catch (Exception ex)
            {
                return RedirectToAction("ErrorOccured", "Error");
            }
        }
        return RedirectToAction("CreateEmployee", new { id = model.EmployeeModel.DepartmentId });
    }

    public async Task<IActionResult> UpdateEmployee(EmployeeDetailsViewModel model)
    {
        if ((int)((DateTime.Now - model.DateOfBirth).TotalDays / 365.242199) > 18)
        {
            try
            {
                var employeeToUpdate = model.EmployeeModel;
                employeeToUpdate.DateOfBirth = model.DateOfBirth.ToString();

                _employeeService.UpdateEmployee(employeeToUpdate);

                return RedirectToAction("Index");
            }
            catch(Exception ex)
            {
                return RedirectToAction("ErrorOccured", "Error");
            }
        }

        return RedirectToAction("GetEmployee", new { id = model.EmployeeModel.Id });
    }

    public ActionResult DeleteEmployee(int id)
    {
        try
        {
            _employeeService.DeleteEmployee(id);
            return RedirectToAction("Index");
        }
        catch (Exception ex)
        {
            return RedirectToAction("ErrorOccured", "Error");
        }
    }*/
}
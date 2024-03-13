namespace Corporation.Models;

public class DepartmentModel
{
    public Guid Id { get; set; }
    
    public Guid? ParentDepartmentId { get; set; }
    
    public string? Code { get; set; }
    
    public string Name { get; set; }
}
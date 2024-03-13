import { IEmployee } from "./EmployeeModel"

export class DepartmentViewModel{
    
    public DepartmentID: number;

    public DepartmentName: string;

    public EmployeesOfDepartment: IEmployee[];
    
    constructor(depId: number, depmName: string, empls: any[]) {
        this.DepartmentID = depId;
        this.DepartmentName = depmName;
        this.EmployeesOfDepartment = empls;
    }

}
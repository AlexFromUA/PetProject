import { useParams } from "react-router-dom";
import { useState } from "react";
import { GetDepartmentById, UpdateDepartment } from "../Services/DepartmentService";
import Employee from "../Employees/Employee";

export default function DepartmentDetails(){
    let { depId } = useParams();
    const[department, setDepartment] = useState(GetDepartmentById(parseInt(depId!)));
    return(
        <div className='departmentsDetails'>
            Department name: 
            <input value={department.DepartmentName} onChange={e => setDepartment({...department, DepartmentName: e.target.value})} /><br/>
            <h3>Employees of department:</h3>
            {department.EmployeesOfDepartment.map(e => {
                return Employee(e);
            })};
            
            <button onClick={e => UpdateDepartment(department)}>Update</button>
        </div>
        )
}
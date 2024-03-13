import {IEmployee} from "../Models/EmployeeModel";

export default function Employee(employee: IEmployee) {

	return (
		<div>
			Employee ID: {employee.employeeID}<br/>
			Name: {employee.firstName} {employee.surName}<br/>
			<p/>
		</div>
	)
}
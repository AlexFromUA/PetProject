import {IEmployee} from "../Models/EmployeeModel";
import {GetEmployees} from "../Queries/Employee/EmployeesList";
import Employee from "./Employee";
import {NavLink} from "react-router-dom";

export default function EmployeeList() {
	let employeesList = GetEmployees();
	let emps: any[] = [];
	employeesList.map(e => {
		emps.push(
			<div key={e.employeeID}>
				{Employee(e)}
				<button>
					<NavLink to={`/EmployeeDetails/${e.employeeID}`}>
						Employee details
					</NavLink>
				</button>
				<p/>
			</div>
		);
	})

	return (
		<div>
			<h1>Employees of enterprise</h1>
			{emps}
		</div>
	)
}
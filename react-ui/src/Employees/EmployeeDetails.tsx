import {useParams} from "react-router-dom";
import {GetEmployee} from "../Queries/Employee/EmployeeDetails";

export default function EmployeeDetails() {
	let {empId} = useParams();
	let employeeDetails = GetEmployee(parseInt(empId!));
	return <div>
		<h3>EmployeeDetails</h3>
		Employee ID: {employeeDetails.employeeID}<br/>
		Name: {employeeDetails.firstName} {employeeDetails.surName}<br/>
		<p/>
	</div>
}
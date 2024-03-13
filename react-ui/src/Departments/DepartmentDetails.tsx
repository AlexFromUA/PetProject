import {useParams} from "react-router-dom";
import {GetDepartment} from "../Queries/Department/DepartmentDetails";

export default function DepartmentDetails() {
	let {depId} = useParams();
	let depDetails = GetDepartment(depId!);
	return (
		<div className='departmentsDetails'>
			<h3>Department details</h3>
			Department ID: {depDetails.departmentID}<br/>
			Department name: {depDetails.departmentName}<br/>
		</div>
	)
}
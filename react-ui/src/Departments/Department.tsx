import {IDepartment} from "../Models/DepartmentModel";

export default function Department(dep: IDepartment) {
	return <div>
		Department ID: {dep.departmentID}<br/>
		Department name: {dep.departmentName}<br/>
	</div>
}
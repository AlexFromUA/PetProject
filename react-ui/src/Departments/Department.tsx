import {IDepartment} from "../Models/DepartmentModel";

export default function Department(dep: IDepartment) {
    return<div>
        Department ID: {dep.DepartmentId}<br/>
        Department name: {dep.DepartmentName}<br/>
    </div>
}
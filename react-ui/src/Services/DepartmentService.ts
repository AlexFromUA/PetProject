import {departmentsListMockedData, employeeListMockedData} from "../dbMock";
import {IDepartment} from "../Models/DepartmentModel";
import {DepartmentViewModel} from "../Models/DepartmentViewMode";


export function GetDepartments(): IDepartment[] {
	return departmentsListMockedData.map(d => {
			return {DepartmentId: d.DepartmentId, DepartmentName: d.DepartmentName} as IDepartment
		}
	);
}

export function GetDepartmentById(id: number): DepartmentViewModel {
	let dep: DepartmentViewModel;
	let filteredDep = departmentsListMockedData.find((d: any) => d.DepartmentId == id);
	//let filteredEmp = employeeListMockedData.filter(e => filteredDep?.Employees.includes(e.EmployeeId))
	if (filteredDep == undefined) {
		return {} as DepartmentViewModel;
	}
	dep = {
		DepartmentID: filteredDep.DepartmentId,
		DepartmentName: filteredDep.DepartmentName,
		EmployeesOfDepartment: [],
	}
	return dep;
}

export function UpdateDepartment(dep: DepartmentViewModel) {
	let depToUpdate = departmentsListMockedData.find(d => d.DepartmentId == dep.DepartmentID);

	if (depToUpdate == undefined) {
		return;
	}
	depToUpdate.DepartmentName = dep.DepartmentName;
}


import {graphql} from "babel-plugin-relay/macro";
import {useLazyLoadQuery} from "react-relay";
import {IEmployee} from "../../Models/EmployeeModel";
import {EmployeesListQuery as EmployeesListQueryType} from './__generated__/EmployeesListQuery.graphql'

export function GetEmployees(): IEmployee[] {
	const EmployeesListQuery = graphql`
	  query EmployeesListQuery {
	    employees{
			employeeID,
	      	firstName,
			surName
	    }
	  }`;

	let response = useLazyLoadQuery<EmployeesListQueryType>(EmployeesListQuery, {});
	return response.employees as IEmployee[];
}
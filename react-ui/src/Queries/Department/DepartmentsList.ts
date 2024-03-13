import {graphql} from "babel-plugin-relay/macro";
import {useLazyLoadQuery} from "react-relay";
import {IDepartment} from "../../Models/DepartmentModel";
import {DepartmentsListQuery as DepartmentsListQueryType} from './__generated__/DepartmentsListQuery.graphql'

export function GetDepartments(): IDepartment[] {
	const DepartmentsListQuery = graphql`
	  query DepartmentsListQuery {
	    departments {
			departmentID,
			departmentName
	    }
	  }`;

	let response = useLazyLoadQuery<DepartmentsListQueryType>(DepartmentsListQuery, {});
	return response.departments as IDepartment[];
}
import {useLazyLoadQuery} from "react-relay";
import {graphql} from "babel-plugin-relay/macro";
import {DepartmentDetailsQuery as DepartmentDetailsQueryType} from './__generated__/DepartmentDetailsQuery.graphql'
import {UUID} from "node:crypto";

export function GetDepartment(id: string) {
	const DepartmentDetailsQuery = graphql`
	  	query DepartmentDetailsQuery($id: UUID!) {
	    department(id: $id) {
			departmentID,
			departmentName
	    	}
	  	}`;

	return useLazyLoadQuery<DepartmentDetailsQueryType>(DepartmentDetailsQuery, {id: id}).department;
}
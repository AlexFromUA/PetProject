import {graphql} from 'babel-plugin-relay/macro';
import {useLazyLoadQuery} from 'react-relay';
import {EmployeeDetailsQuery as EmployeeDetailsQueryType} from './__generated__/EmployeeDetailsQuery.graphql'


export function GetEmployee(id: number) {
	const EmployeeDetailsQuery = graphql`
	  	query EmployeeDetailsQuery($id: Decimal!) {
	    employee(id: $id) {
			employeeID,
	      	firstName,
			surName
	    	}
	  	}`;

	return useLazyLoadQuery<EmployeeDetailsQueryType>(EmployeeDetailsQuery, {id: id}).employee;
}
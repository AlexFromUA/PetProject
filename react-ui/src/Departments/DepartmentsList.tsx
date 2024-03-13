import Department from "./Department";
import {useDispatch, useSelector} from "react-redux";
//import { addDepartment } from "../Slicers/DepartmentSlicer";
import {IDepartment} from "../Models/DepartmentModel";
import {useState} from "react";
import {Link, NavLink, useLoaderData} from "react-router-dom";
import {useAppDispatch} from "../Hooks/AppDispatchHook";
import {useAppSelector} from "../Hooks/AppSelectorHook";
import {GetDepartments} from "../Queries/Department/DepartmentsList";

export default function DepartmentsList() {
	//const [newDepName, setNewDepName] = useState('');
	//const dispatch = useAppDispatch();

	let departments = GetDepartments();

	return <div>
		<h1>Departments of the enterprise.</h1>
		{departments.map((d: IDepartment) => {
			return <div>
				{Department(d)}
				<button>
					<NavLink to={`/DepartmentDetails/${d.departmentID}`}>
						Department details
					</NavLink>
				</button>
				<p/>
			</div>
		})
		}
{/*		<input value={newDepName} onChange={(e) => {
			return setNewDepName(e.target.value);
		}}/>
		<button onClick={() => dispatch(addDepartment(newDepName))}>Add new department</button>*/}
	</div>;
}
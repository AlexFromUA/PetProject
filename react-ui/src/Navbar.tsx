import { NavLink } from "react-router-dom"
export default function Navbar(){
    return (
        <div className="navbar">
            <button><NavLink to='/'>Home page</NavLink></button>
            <button><NavLink to='/Departments'>Departments page</NavLink></button>
            <button><NavLink to='/Employees'>Employees page</NavLink></button>
        </div>
    )
}
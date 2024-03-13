import {createSlice} from "@reduxjs/toolkit";
import {GetDepartments} from "../Services/DepartmentService";
import {IDepartment} from "../Models/DepartmentModel";

const departmentSlice = createSlice({
    name:'departments',
    initialState: GetDepartments(),
    reducers:{
        addDepartment: (state, newdepName) => {
            let newId = 0;
            state.forEach((d: IDepartment) => {
                if(d.DepartmentId >= newId){
                    newId = d.DepartmentId  + 1; 
                }  })
            let depToAdd = {DepartmentId: newId, DepartmentName: newdepName.payload} as IDepartment;
            state.push(depToAdd);          
        },
        removeDepartment: (state, depToRemove) => {
            state.filter((d: IDepartment)  => d.DepartmentId == depToRemove.payload.DepartmentId)
        }
    }
})

export const { addDepartment, removeDepartment } = departmentSlice.actions;
export default departmentSlice.reducer;
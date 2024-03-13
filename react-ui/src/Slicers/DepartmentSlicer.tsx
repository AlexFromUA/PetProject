import {createSlice} from "@reduxjs/toolkit";
import {IDepartment} from "../Models/DepartmentModel";
/*

const departmentSlice = createSlice({
   /!* name:'departments',
    initialState: GetDepartments(),
    reducers:{
        addDepartment: (state, newdepName) => {
            let newId = 0;
            state.forEach((d: IDepartment) => {
                if(d.departmentId >= newId){
                    newId = d.departmentId  + 1;
                }  })
            let depToAdd = {departmentId: newId, departmentName: newdepName.payload} as IDepartment;
            state.push(depToAdd);          
        },
        removeDepartment: (state, depToRemove) => {
            state.filter((d: IDepartment)  => d.departmentId == depToRemove.payload.DepartmentId)
        }
    }*!/
})

export const { addDepartment, removeDepartment } = departmentSlice.actions;
export default departmentSlice.reducer;*/

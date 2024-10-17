import { createSlice } from "@reduxjs/toolkit";
const addtask = createSlice({
    name:'task',
    initialState:{
        showtask:false,
        addtask:[],
        showDetails:false
    },
    reducers:{
        shwotaskReducer:(state)=>{
          state.showtask=!state.showtask
        },
        showDetailsReducer:(state)=>{
            state.showDetails = !state.showDetails
        },
        addtaskReducer:(state, action)=>{
                state.addtask.push(action.payload)
        }
    }
})
export default addtask.reducer;
export const{shwotaskReducer, addtaskReducer,showDetailsReducer} =addtask.actions
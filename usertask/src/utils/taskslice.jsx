import { createSlice } from "@reduxjs/toolkit";
const addtask = createSlice({
    name:'task',
    initialState:{
        showtask:false,
        addtask:[]
    },
    reducers:{
        shwotaskReducer:(state)=>{
          state.showtask=!state.showtask
        },
        addtaskReducer:(state, action)=>{
                state.addtask.push(action.payload)
        }
    }
})
export default addtask.reducer;
export const{shwotaskReducer, addtaskReducer} =addtask.actions
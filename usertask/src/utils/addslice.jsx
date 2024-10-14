import { createSlice } from "@reduxjs/toolkit";
const addmore = createSlice({
    name:'add',
    initialState:{
        value:false
    },
    reducers:{
       changevalue:(state)=>{
        state.value=!state.value
       }
    }
})
export default addmore.reducer;
export const{changevalue}=addmore.actions
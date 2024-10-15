import { createSlice } from "@reduxjs/toolkit";
const addmore = createSlice({
    name:'add',
    initialState:{
        value:false,
        adddata:[], 
        count:0
    },
    reducers:{
       changevalue:(state)=>{
        state.value=!state.value
       },
       addReducer:(state,action)=>{
       const item = {
        ...action.payload,mb:`${(10*Math.random().toFixed(2))}mb`
       }
        state.count++
       state.count<=10&&state.adddata.push(item)
        

       }
    }
})
export default addmore.reducer;
export const{changevalue, addReducer}=addmore.actions
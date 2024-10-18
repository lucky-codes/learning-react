import { createSlice } from "@reduxjs/toolkit";
const addmore = createSlice({
    name:'add',
    initialState:{
        value:false,
        adddata:[], 
        count:0,
        apiToken:''
    },
    reducers:{
       changevalue:(state)=>{
        state.value=!state.value
       },
       addReducer:(state,action)=>{
       const item = {
        id:state.count,
        ...action.payload,mb:`${(10*Math.random().toFixed(2))}mb`
       }
        state.count++
            state.adddata.length<9&&state.adddata.push(item)
       
                

       },
       deleteReducer:(state,action)=>{
        state.adddata.shift(action.payload)
       },
       deleteSelectedReducer:(state,action)=>{
        const idToDelete = action.payload;

        const indexToDelete = state.adddata.findIndex(item => item.id === idToDelete);
        console.log("Index to delete:", indexToDelete); 
        if (indexToDelete !== -1) {
            state.adddata.splice(indexToDelete, 1); 
        }
     },
     ApiTokenReducer:(state, action)=>{
        state.apiToken =action.payload
        localStorage.setItem('accessToken',action.payload)
     }
    },
    editSelectedReducer:(state,action)=>{
     
    }
})
export default addmore.reducer;
export const{changevalue, addReducer, deleteReducer,deleteSelectedReducer, editSelectedReducer, ApiTokenReducer}=addmore.actions
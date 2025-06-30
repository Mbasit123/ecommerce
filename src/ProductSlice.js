import {createSlice} from "@reduxjs/toolkit"

const initialState={
products:[],
totalItems:0,
};

export const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
       addToCart:(state,action)=>{
const item=state.products.find((item)=>item.id===action.payload.id)
if(item){
    item.quantity+=1;
}
else{
    state.products.push({...action.payload,quantity:1})
    state.totalItems+=1;
}
       },
       removeFromCart:(state,action)=>{
        state.products=state.products.filter((item)=>item.id !==action.payload)
        state.totalItems-=1;
       }
    }

})
export const {addToCart,removeFromCart}=productSlice.actions
export default productSlice.reducer;
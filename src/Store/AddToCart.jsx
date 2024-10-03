import { createSlice } from "@reduxjs/toolkit";

export const addToCart = createSlice({
    name:"cart",
    initialState: [],
    reducers: {
        add(state, action){
            state.push(action.payload)
        },
        remove(state, action){
            return state.filter(item => item.id !== action.payload.id);
            // Filters out the item with the matching id 
        }
    }
})

export const {add, remove} = addToCart.actions
export default addToCart.reducer



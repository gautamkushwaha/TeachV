import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    username : "",
    useremail: "",
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        setUsermail : (state,action)=>{

            state.useremail = action.payload;

        },
    },
})

// console.log(userSlice);

export const {setUsermail} = userSlice.actions;

export default userSlice.reducer;




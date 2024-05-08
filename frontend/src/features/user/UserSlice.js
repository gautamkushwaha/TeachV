import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    username : "",
    useremail: "",
    isLogged : false , 
}

export const userSlice = createSlice({
    name : 'user',
    initialState,

    reducers : {
        setUsermail : (state,action)=>{
            state.useremail = action.payload;
            
        },

        setUsername : (state,action)=>{
            state.username = action.payload;
        },

        setIslogged : (state,action)=>{
            state.isLogged = action.payload;
        },



    },
})

// console.log(userSlice);

export const {setUsermail,setUsername,setIslogged} = userSlice.actions;

export default userSlice.reducer;




import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    username : "",
    useremail: "",

    userDetails : {
        
    },

    isLogged :  false,
    
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

        setUserDetails : (state,action) =>{
            console.log(action.payload);
            state.userDetails = action.payload;
            console.log("hello harsha");
        },

        setIslogged : (state,action)=>{
            state.isLogged = action.payload;
        },

       





    },
})

// console.log(userSlice);

export const {setUsermail,setUsername,setIslogged,setUserDetails} = userSlice.actions;

export default userSlice.reducer;




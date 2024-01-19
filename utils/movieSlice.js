import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState :{
        newMovies:null,
        trailerKey:null,
        mute:false
    },
    reducers:{
        addMovies:(state,action)=>{
            state.newMovies=action.payload
        },
        addTrailerKey:(state,action)=>{
            state.trailerKey = action.payload
        },
        toggleMute:(state)=>{
            state.mute = !state.mute
        }
    }

})

export const{addMovies ,addTrailerKey,toggleMute} = movieSlice.actions
export default movieSlice.reducer
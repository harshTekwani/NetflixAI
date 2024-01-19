import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    // eslint-disable-next-line no-undef
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMovies:null
    },
    reducers:{
        toggleSearch:(state)=>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovies:(state,action)=>{
            state.gptMovies = action.payload
        }
    }
})

export const {toggleSearch,addGptMovies} = gptSlice.actions
export default gptSlice.reducer
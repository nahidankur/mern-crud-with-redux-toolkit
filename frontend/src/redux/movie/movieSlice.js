import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieService from './movieService'
import axios from 'axios'

const initialState = {
    movies : [],
    isLoading : false,
    isError: false,
    isSuccess : false,
    message : ''
}

export const createMovie = createAsyncThunk('movies/create', async(movieData, thunkAPI)=> {
       try {
        const token = thunkAPI.getState().auth.user.token
        return await movieService.createMovie(movieData, token)
        
       } catch (error) {
        const message = (
            error.response &&
            error.response.data &&
            error.response.data.message
        ) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
        
       }
})

export const getMovies = createAsyncThunk('movies/getmovies', async(_, thunkAPI)=> {
    try {
     const token = thunkAPI.getState().auth.user.token
     return await movieService.getMovies(token)
     
    } catch (error) {
     const message = (
         error.response &&
         error.response.data &&
         error.response.data.message
     ) || error.message || error.toString()
     return thunkAPI.rejectWithValue(message)
     
    }
})


  // Update movie
  export const updateMovie = createAsyncThunk('movies/updatemovie', async(movieData, thunkAPI)=> {
    try {
     const token = thunkAPI.getState().auth.user.token
     return await movieService.updateMovie(movieData, token)
     
    } catch (error) {
     const message = (
         error.response &&
         error.response.data &&
         error.response.data.message
     ) || error.message || error.toString()
     return thunkAPI.rejectWithValue(message)
     
    }
})

// Delete Note
  // Update movie
  export const deleteMovie = createAsyncThunk('movies/deletemovie', async(id, thunkAPI)=> {
    try {
     const token = thunkAPI.getState().auth.user.token
     return await movieService.deleteMovie(id, token)
     
    } catch (error) {
     const message = (
         error.response &&
         error.response.data &&
         error.response.data.message
     ) || error.message || error.toString()
     return thunkAPI.rejectWithValue(message)
     
    }
})


export const movieSlice = createSlice({
    name : 'movie',
    initialState,
    reducers : {
        reset : (state) => initialState
    }, 
    extraReducers : (builder)=>{
        builder
        .addCase(createMovie.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(createMovie.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.movies.push(action.payload)
        })
        .addCase(createMovie.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getMovies.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(getMovies.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.movies = action.payload
        })
        .addCase(getMovies.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(updateMovie.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(updateMovie.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            const index = state.movies.findIndex((movie)=> movie.id === action.payload.id)
            if (index !== -1) {
                state.movies[index] = action.payload
              } 
        })
        .addCase(updateMovie.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteMovie.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(deleteMovie.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.movies = state.movies.filter((movie)=> movie._id !== action.payload.id )
        })
        .addCase(deleteMovie.rejected, (state, action)=> {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const { reset} = movieSlice.actions
export default movieSlice.reducer
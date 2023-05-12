import axios from 'axios'

const API_URL = '/api/movies/'

// create movie
const createMovie = async(movieData, token)=> {
    const config = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL + 'createMovie', movieData, config)
    return response.data

}

//get movies
const getMovies = async( token)=> {
    const config = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + 'getmovies',   config)
    return response.data

}

// update movie
const updateMovie = async(movieData, token)=> {
    const config = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.put(`${API_URL}${movieData.id}`, movieData, config)
    return response.data

}

// update movie
const deleteMovie = async(id, token)=> {
    const config = {
        headers : {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.delete(`${API_URL}${id}`,  config)
    return response.data

}

const movieService = {
    createMovie, getMovies, updateMovie, deleteMovie
}

export default movieService
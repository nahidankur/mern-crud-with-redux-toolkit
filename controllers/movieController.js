const { json } = require('express')
const Movie = require('../models/movieModel.js')
const User = require('../models/userModel.js')
const asyncHandler = require('express-async-handler')

// Create Movie Table
// Accrss : private

const createMovie = asyncHandler ( async (req, res)=> {
    const { name, year, budget, genre } = req.body

    if(!name || !year || !budget || !genre) {
        res.status(400)
        throw new Error('Please include all the fields')
    }

    // Create New Movie Table
    const movie = await Movie.create({
        name ,
        year ,
        budget ,
        genre ,
        user : req.user.id

    }) 
    if(movie){
        res.status(201).json(movie)
    }
 
} )

// Get Movie Table
// Accrss : private

const getMovie = asyncHandler(async(req, res)=> {
    const movies = await Movie.find({user : req.user.id})

    res.status(200).json(movies)
})

// Update Movie Table
// access Provate
const updateMovie = asyncHandler(async(req, res)=> {
    const movie = await Movie.findById(req.params.id)

    if(!movie) {
        res.status(404)
        throw new Error('Movie Not Found')
    }

   // check user
   if(!req.user) {
    res.status(404)
    throw new Error('User Not Found')

   }

    // check logged in user owns the movie table
    if(movie.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not Authorized!')
    }

    // Update movie
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(201).json(updatedMovie)
})


// Delete a movie
const deleteMovie = asyncHandler(async(req, res)=> {
    const movie = await Movie.findById(req.params.id)

    if(!movie) {
        res.status(404)
        throw new Error('Movie Not Found')
    }

    if(!req.user) {
        re.status(404)
        throw new Error('User not Found')
    }

    if(movie.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Unauthorized')
    }

    await movie.deleteOne()
    res.status(200).json({id: req.params.id})
})
module.exports = {
    createMovie, getMovie, updateMovie, deleteMovie
}
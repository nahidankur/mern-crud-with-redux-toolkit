const express= require('express')
const router = express.Router()
const { createMovie, getMovie, updateMovie, deleteMovie }  = require('../controllers/movieController.js')
const {protected }  = require('../middleware/authMiddleware.js')

router.post('/createmovie',protected, createMovie)
router.get('/getmovies', protected, getMovie)
router.put('/:id', protected, updateMovie)
router.delete('/:id', protected, deleteMovie)

module.exports = router
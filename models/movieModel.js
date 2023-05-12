const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'User'
    }, 
    name : {
        type : String,
        required : [true, 'Please Include a name']
    }, 
    year : {
        type : Number,
        required : [true, 'Please Include a year']
    }, 
    budget : {
        type : Number,
        required : [true, 'Please Include a budget']
    }, 
    genre : {
        type : String,
        required : [true, 'Please Include a genre']
    }, 

}, {
    timestamps: true
})

module.exports = mongoose.model('Movie', movieSchema)
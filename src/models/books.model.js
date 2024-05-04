const mongoose = require('mongoose')

const bookSquema = new mongoose.Schema(
    {
        title: String,
        author: String,
        genre: String,
        publication_date: String
    }
)

module.exports = mongoose.model('Book', bookSquema)
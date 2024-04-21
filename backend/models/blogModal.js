const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please enter a name']
    },
    description:{
        type: String,
        required: [true, 'Please enter a description']
    },
    source:{
        type: String,
        required: [true, 'Please enter a source']
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Blogs', blogSchema)
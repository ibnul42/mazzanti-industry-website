const mongoose = require('mongoose')

const heroSchema = mongoose.Schema({
    type:{
        type: String,
        required: [true, 'Please enter your type']
    },
    title:{
        type: String,
        required: [true, 'Please enter a name']
    },
    source:{
        type: String,
        required: [true, 'Please enter a source']
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Heros', heroSchema)
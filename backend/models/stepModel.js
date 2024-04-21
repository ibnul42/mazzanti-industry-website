const mongoose = require('mongoose')

const stepSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please enter a title']
    },
    color:{
        type: String,
        required: [true, 'Please enter a color']
    },
    name:{
        type: String,
        required: [true, 'Please enter a name']
    },
    source:{
        type: String,
        required: [true, 'Please enter a source']
    },
    desc:{
        type: String,
        required: [true, 'Please enter a desc']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Step', stepSchema)
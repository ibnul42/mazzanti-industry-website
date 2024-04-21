const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title']
    },
    description: {
        type: String,
        required: [true, 'Please enter a description']
    },
    source: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Service', serviceSchema)
const mongoose = require('mongoose')

const generalFAQSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title']
    },
    description: {
        type: String,
        required: [true, 'Please enter a description']
    },
    link: {
        type: Object
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('GeneralFAQ', generalFAQSchema)
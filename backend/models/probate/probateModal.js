const mongoose = require('mongoose')

const probateSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title']
    },
    desc: {
        type: String,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('probate', probateSchema)
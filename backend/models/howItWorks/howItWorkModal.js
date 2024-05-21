const mongoose = require('mongoose')

const howItWorkSchema = mongoose.Schema({
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

module.exports = mongoose.model('HowItWork', howItWorkSchema)
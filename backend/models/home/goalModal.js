const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title']
    },
    desc: {
        type: String,
        required: [true, 'Please enter a desc']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)
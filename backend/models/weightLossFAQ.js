const mongoose = require('mongoose')

const weightLossSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title']
    },
    description: {
        type: String,
        required: [true, 'Please enter a description']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('WeightLoss', weightLossSchema)
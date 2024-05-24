const mongoose = require('mongoose')

const offerSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    address: {
        type: String,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Offer', offerSchema)
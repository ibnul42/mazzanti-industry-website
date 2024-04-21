const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: [true, 'Please enter a name']
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
        required: [true, 'Please enter a email'],
    },
    phone:{
        type: String,
        required: [true, 'Please enter a phone'],
    },
    appointtime:{
        type: String,
    },
    message:{
        type: String,
    },    
    birthday:{
        type: Object,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Contact', contactSchema)
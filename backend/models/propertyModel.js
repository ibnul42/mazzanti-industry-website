const mongoose = require('mongoose')

const propertySchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please enter a name']
    },
    desc:{
        type: String,
        required: [true, 'Please enter your description']
    },
    source:{
        type: String,
        required: [true, 'Please enter a source']
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Propertys', propertySchema)
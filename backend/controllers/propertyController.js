const asyncHandler = require('express-async-handler')
const Property = require('../models/propertyModel')

const getAllProperty = asyncHandler(async (req, res) => {
    const items = await Property.find()
    res.status(200).json(items.reverse())
})


const createProperty = asyncHandler(async (req, res) => {
    const { title, source, desc } = req.body;

    // Check if all fields are provided
    if (!title || !source || !desc) {
        res.status(400); // Use 400 status code for bad request
        throw new Error('Please enter all fields');
    }

    // create a new item
    const item = await Property.create({
        title,
        desc,
        source
    })

    if (item) {
        res.status(201)
        res.json({
            message: 'Item created successfully'
        })
    } else {
        res.status(404)
        throw new Error('Invalid user data')
    }
});

const editProperty = asyncHandler(async (req, res) => {
    const { title, desc, source } = req.body
    const { id } = req.params

    if (id.length !== 24) {
        res.status(404)
        throw new Error('Item not found')
    }

    const itemExists = await Property.findById(id)

    if (!itemExists) {
        res.status(404).json({ message: 'Item not found' })
    }

    const updatedItem = await Property.findByIdAndUpdate(id, {
        title, desc, source
    })

    if (!updatedItem) {
        res.status(404).json({ message: 'Failed to update the item' })
    }

    res.status(200).json({ message: 'Item updated successfully!' })
})

const deleteProperty = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (id.length !== 24) {
        res.status(200).json({ message: 'Blog deleted successfully' })
    }

    const itemExist = await Property.findById(id)

    if (!itemExist) {
        res.status(200).json({ message: 'Item deleted successfully' })
    }

    try {
        await Property.findByIdAndDelete(id)
        res.status(200).json({ message: 'item deleted successfully' })
    } catch (error) {
        res.status(404).json({ msg: 'Error occured while deleting item' })
    }
})

module.exports = {
    getAllProperty,
    createProperty,
    editProperty,
    deleteProperty
}
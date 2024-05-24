const asyncHandler = require('express-async-handler')
const Foreclosure = require('../models/foreclosure/foreclosureModal')

const createForeclosure = asyncHandler(async (req, res) => {
    const { title, desc } = req.body

    // check if all fields are inputed
    if (!title) {
        res.status(404)
        throw new Error('Please enter title')
    }

    // create a new item
    const step = await Foreclosure.create({
        title,
        desc
    })

    if (step) {
        res.status(201)
        res.json({
            message: 'Item created successfully'
        })
    } else {
        res.status(404)
        throw new Error('Invalid user data')
    }
})

const getAllForeclosures = asyncHandler(async (req, res) => {
    const items = await Foreclosure.find()
    res.status(200).json(items)
})

const editForeclosure = asyncHandler(async (req, res) => {
    const { title, desc } = req.body
    const { id } = req.params

    if (id.length !== 24) {
        res.status(404)
        throw new Error('Item not found')
    }

    const foreclosureExists = await Foreclosure.findById(id)

    if (!foreclosureExists) {
        res.status(404).json({ message: 'Item not found' })
    }

    const updatedForeclosure = await Foreclosure.findByIdAndUpdate(id, {
        title, desc
    })

    if (!updatedForeclosure) {
        res.status(404).json({ message: 'Failed to update the item' })
    }

    res.status(200).json({ message: 'Item updated successfully!' })
})

const deleteForeclosure = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (id.length !== 24) {
        res.status(200).json({ message: 'Item deleted successfully' })
    }

    const foreclosureExist = await Foreclosure.findById(id)

    if (!foreclosureExist) {
        res.status(200).json({ message: 'Item deleted successfully' })
    }

    try {
        await Foreclosure.findByIdAndDelete(id)
        res.status(200).json({ message: 'Item deleted successfully' })
    } catch (error) {
        res.status(404).json({ msg: 'Error occured while deleting item' })
    }
})

module.exports = {
    getAllForeclosures,
    createForeclosure,
    editForeclosure,
    deleteForeclosure,
}
const asyncHandler = require('express-async-handler')
const Probate = require('../models/probate/probateModal')

const createProbate = asyncHandler(async (req, res) => {
    const { title, desc } = req.body

    // check if all fields are inputed
    if (!title) {
        res.status(404)
        throw new Error('Please enter title')
    }

    // create a new item
    const step = await Probate.create({
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

const getAllProbates = asyncHandler(async (req, res) => {
    const items = await Probate.find()
    res.status(200).json(items)
})

const editProbate = asyncHandler(async (req, res) => {
    const { title, desc } = req.body
    const { id } = req.params

    if (id.length !== 24) {
        res.status(404)
        throw new Error('Item not found')
    }

    const probateExists = await Probate.findById(id)

    if (!probateExists) {
        res.status(404).json({ message: 'Item not found' })
    }

    const updatedProbate = await Probate.findByIdAndUpdate(id, {
        title, desc
    })

    if (!updatedProbate) {
        res.status(404).json({ message: 'Failed to update the item' })
    }

    res.status(200).json({ message: 'Item updated successfully!' })
})

const deleteProbate = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (id.length !== 24) {
        res.status(200).json({ message: 'Item deleted successfully' })
    }

    const probateExist = await Probate.findById(id)

    if (!probateExist) {
        res.status(200).json({ message: 'Item deleted successfully' })
    }

    try {
        await Probate.findByIdAndDelete(id)
        res.status(200).json({ message: 'Item deleted successfully' })
    } catch (error) {
        res.status(404).json({ msg: 'Error occured while deleting item' })
    }
})

module.exports = {
    getAllProbates,
    createProbate,
    editProbate,
    deleteProbate
}
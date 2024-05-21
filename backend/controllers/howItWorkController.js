const asyncHandler = require('express-async-handler')
const HowItWork = require('../models/howItWorks/howItWorkModal')

const createWork = asyncHandler(async (req, res) => {
    const { title, desc } = req.body

    // check if all fields are inputed
    if (!title) {
        res.status(404)
        throw new Error('Please enter all fields')
    }

    // create a new item
    const step = await HowItWork.create({
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

const getAllWorks = asyncHandler(async (req, res) => {
    const items = await HowItWork.find()
    res.status(200).json(items)
})

const editWork = asyncHandler(async (req, res) => {
    const { title, desc } = req.body
    const { id } = req.params

    if (id.length !== 24) {
        res.status(404)
        throw new Error('Item not found')
    }

    const itemExists = await HowItWork.findById(id)

    if (!itemExists) {
        res.status(404).json({ message: 'Item not found' })
    }

    const updatedItem = await HowItWork.findByIdAndUpdate(id, {
        title, desc
    })

    if (!updatedItem) {
        res.status(404).json({ message: 'Failed to update the item' })
    }

    res.status(200).json({ message: 'Item updated successfully!' })
})

const deleteWork = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (id.length !== 24) {
        res.status(200).json({ message: 'Work deleted successfully' })
    }

    const workExist = await HowItWork.findById(id)

    if (!workExist) {
        res.status(200).json({ message: 'Work deleted successfully' })
    }

    try {
        await HowItWork.findByIdAndDelete(id)
        res.status(200).json({ message: 'Work deleted successfully' })
    } catch (error) {
        res.status(404).json({ msg: 'Error occured while deleting Work' })
    }
})

module.exports = {
    createWork,
    getAllWorks,
    editWork,
    deleteWork
}
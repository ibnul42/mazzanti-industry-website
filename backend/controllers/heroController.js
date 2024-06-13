const asyncHandler = require('express-async-handler')
const Hero = require('../models/heroModal')

const getAllHero = asyncHandler(async (req, res) => {
    const heros = await Hero.find()
    res.status(200).json(heros.reverse())
})

const getSingleHero = asyncHandler(async (req, res) => {
    const { type } = req.params;

    if (!type) {
        res.status(400);
        throw new Error('Item not found');
    }

    const item = await Hero.findOne({ type });

    if (!item) {
        res.status(400);
        throw new Error('Item not found');
    }

    res.status(200).json(item);
});


const createHero = asyncHandler(async (req, res) => {
    const { title, source, type } = req.body;

    // Check if all fields are provided
    if (!title || !source || !type) {
        res.status(400); // Use 400 status code for bad request
        throw new Error('Please enter all fields');
    }

    // Use findOneAndUpdate to update the document if it exists, or create it if it doesn't
    const item = await Hero.findOneAndUpdate(
        { type }, // Filter to find the document with the matching type
        { type, title, source }, // The data to update
        { new: true, upsert: true, setDefaultsOnInsert: true } // Options: return the new document, create if it doesn't exist, and apply defaults
    );

    if (item) {
        res.status(200).json({
            message: 'Item created successfully',
            item
        });
    } else {
        res.status(500);
        throw new Error('Failed to create or update item');
    }
});


const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (id.length !== 24) {
        res.status(200).json({ message: 'Blog deleted successfully' })
    }

    const blogExist = await Blog.findById(id)

    if (!blogExist) {
        res.status(200).json({ message: 'Blog deleted successfully' })
    }

    try {
        await Blog.findByIdAndDelete(id)
        res.status(200).json({ message: 'Blog deleted successfully' })
    } catch (error) {
        res.status(404).json({ msg: 'Error occured while deleting blog' })
    }
})

module.exports = {
    getAllHero,
    getSingleHero,
    createHero,
    deleteBlog
}
const asyncHandler = require('express-async-handler')
const Offer = require('../models/offerModel')

const createOffer = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, phoneNumber, address } = req.body

    // check if all fields are inputed
    if (!firstName) {
        res.status(404)
        throw new Error('Please enter first name')
    }
    if (!lastName) {
        res.status(404)
        throw new Error('Please enter last name')
    }
    if (!email) {
        res.status(404)
        throw new Error('Please enter email')
    }
    if (!phoneNumber) {
        res.status(404)
        throw new Error('Please enter phone number')
    }
    if (!address) {
        res.status(404)
        throw new Error('Please enter address')
    }

    // create a new item
    const offer = await Offer.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        address
    })

    if (offer) {
        res.status(201)
        res.json({
            message: 'Item created successfully'
        })
    } else {
        res.status(404)
        throw new Error('Invalid user data')
    }
})

const getAllOfferItems = asyncHandler(async (req, res) => {
    const items = await Offer.find()
    res.status(200).json(items)
})

const deleteOffer = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (id.length !== 24) {
        res.status(200).json({ message: 'Item deleted successfully' })
    }

    const offerExist = await Offer.findById(id)

    if (!offerExist) {
        res.status(200).json({ message: 'Item deleted successfully' })
    }

    try {
        await Offer.findByIdAndDelete(id)
        res.status(200).json({ message: 'Item deleted successfully' })
    } catch (error) {
        res.status(404).json({ msg: 'Error occured while deleting item' })
    }
})

module.exports = {
    createOffer,
    getAllOfferItems,
    deleteOffer,
}
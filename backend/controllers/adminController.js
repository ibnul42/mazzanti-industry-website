const asyncHandler = require('express-async-handler')
const Step = require('../models/stepModel')
const Contact = require('../models/contactModel')
const WeightLoss = require('../models/weightLossFAQ')
const GeneralFAQ = require('../models/GeneralFAQ')
const Service = require('../models/ServiceModal')

const getAllSteps = asyncHandler(async (req, res) => {
    const steps = await Step.find()
    res.status(200).json(steps)
})

const getSingleStep = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (id.length !== 24) {
        res.status(404).json({ message: 'Step not found' })
    }
    const step = await Step.findById(id)
    if (!step) {
        res.status(404).json({ message: 'Step not found' })
    }

    res.status(200).json(step)
})

const createStep = asyncHandler(async (req, res) => {
    const { title, color, name, source, desc } = req.body

    // check if all fields are inputed
    if (!title || !color || !name || !source || !desc) {
        res.status(404)
        throw new Error('Please enter all fields')
    }

    // create a new step
    const step = await Step.create({
        title,
        color,
        name,
        source,
        desc
    })

    if (step) {
        res.status(201)
        res.json({
            message: 'Step created successfully'
        })
    } else {
        res.status(404)
        throw new Error('Invalid user data')
    }
})

const updateStep = asyncHandler(async (req, res) => {
    const { name, desc } = req.body
    const { step } = req.params

    if (desc.length > 192) {
        res.status(404)
        throw new Error('Characters must be at most 192 characters')
    }

    const stepExists = await Step.findById(step)

    if (!stepExists) {
        res.status(404).json({ message: 'Step not found' })
    }

    const updatedStep = await Step.findByIdAndUpdate(step, {
        name,
        desc
    })

    if (!updatedStep) {
        res.status(404).json({ message: 'Failed to update the step' })
    }


    res.status(200).json({ message: 'Step updated successfully!' })
})

const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})

const createContact = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, phone, appointtime, message, birthday } = req.body

    // check if all fields are inputed
    if (!firstName) {
        res.status(404)
        throw new Error('Please enter first name')
    }

    if (!email) {
        res.status(404)
        throw new Error('Please enter email')
    }

    if (!phone) {
        res.status(404)
        throw new Error('Please enter phone')
    }

    // create a contact
    const contact = await Contact.create({
        firstName, lastName, email, phone, appointtime, message, birthday
    })

    if (contact) {
        res.status(201)
        res.json({
            message: 'Contact created successfully'
        })
    } else {
        res.status(404)
        throw new Error('Invalid user data')
    }
})

const getAllWeightLossFAQ = asyncHandler(async (req, res) => {
    const response = await WeightLoss.find()
    res.status(200).json(response)
})

const singleWeightLossFAQ = asyncHandler(async (req, res) => {
    const { id } = req.params
    if (id.length !== 24) {
        res.status(404).json({ message: 'Unable to find the FAQ' })
    }
    const response = await WeightLoss.findById(id)
    if (!response) {
        res.status(404).json({ message: 'Unable to find the FAQ' })
    }
    res.status(200).json(response)
})

const createWeightLossFAQ = asyncHandler(async (req, res) => {
    const { title, description } = req.body

    if (!title) {
        res.status(404).json({ msg: 'Please enter title' })
    }

    if (!description) {
        res.status(404).json({ msg: 'Please enter description' })
    }

    const response = await WeightLoss.create({ title, description })

    if (response) {
        res.status(200).json({ message: 'Weight loss faq created successfully' })
    }

    res.status(404).json({ msg: 'Error occured while create FAQ' })
})

const editWeightLossFAQ = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { title, description } = req.body

    if (id.length !== 24) {
        res.status(404).json({ message: 'Unable to find the FAQ' })
    }

    if (!title) {
        res.status(404).json({ msg: 'Please enter title' })
    }

    if (!description) {
        res.status(404).json({ msg: 'Please enter description' })
    }

    const faqExist = await WeightLoss.findById(id)

    if (!faqExist) {
        res.status(404).json({ message: 'Unable to find the FAQ' })
    }

    const response = await WeightLoss.findByIdAndUpdate(id, { title, description })

    if (response) {
        res.status(200).json({ message: 'Weight loss faq edited successfully' })
    }

    res.status(404).json({ msg: 'Error occured while editing FAQ' })
})

const deleteWeightLossFAQ = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (id.length !== 24) {
        res.status(200).json({ message: 'Weight loss faq deleted successfully' })
    }

    const faqExist = await WeightLoss.findById(id)

    if (!faqExist) {
        res.status(200).json({ message: 'Weight loss faq deleted successfully' })
    }

    try {
        await WeightLoss.findByIdAndDelete(id)
        res.status(200).json({ message: 'Weight loss faq deleted successfully' })
    } catch (error) {
        res.status(404).json({ msg: 'Error occured while editing FAQ' })
    }

})

const createGeneralFAQ = asyncHandler(async (req, res) => {
    const { title, description, link } = req.body

    if (!title) {
        res.status(404).json({ msg: 'Please enter title' })
    }

    if (!description) {
        res.status(404).json({ msg: 'Please enter description' })
    }

    const response = await GeneralFAQ.create({ title, description, link })

    if (response) {
        res.status(200).json({ message: 'General faq created successfully' })
    }

    res.status(404).json({ msg: 'Error occured while create FAQ' })
})

const getAllGeneralFAQ = asyncHandler(async (req, res) => {
    const response = await GeneralFAQ.find()
    res.status(200).json(response)
})

const singleGeneralFAQ = asyncHandler(async (req, res) => {
    const { id } = req.params
    if (id.length !== 24) {
        res.status(404).json({ message: 'Unable to find the FAQ' })
    }
    const response = await GeneralFAQ.findById(id)
    if (!response) {
        res.status(404).json({ message: 'Unable to find the FAQ' })
    }
    res.status(200).json(response)
})

const editGeneralFAQ = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { title, description, link } = req.body

    if (id.length !== 24) {
        res.status(404).json({ message: 'Unable to find the FAQ' })
    }

    if (!title) {
        res.status(404).json({ msg: 'Please enter title' })
    }

    if (!description) {
        res.status(404).json({ msg: 'Please enter description' })
    }

    const faqExist = await GeneralFAQ.findById(id)

    if (!faqExist) {
        res.status(404).json({ message: 'Unable to find the FAQ' })
    }

    const response = await GeneralFAQ.findByIdAndUpdate(id, { title, description, link })

    if (response) {
        res.status(200).json({ message: 'General FAQ edited successfully' })
    }

    res.status(404).json({ msg: 'Error occured while editing FAQ' })
})

const deleteGeneralFAQ = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (id.length !== 24) {
        res.status(200).json({ message: 'General faq deleted successfully' })
    }

    const faqExist = await GeneralFAQ.findById(id)

    if (!faqExist) {
        res.status(200).json({ message: 'General faq deleted successfully' })
    }

    try {
        await GeneralFAQ.findByIdAndDelete(id)
        res.status(200).json({ message: 'Weight loss faq deleted successfully' })
    } catch (error) {
        res.status(404).json({ msg: 'Error occured while deleting FAQ' })
    }

})

const createService = asyncHandler(async (req, res) => {
    const { title, description, source } = req.body

    if (!title) {
        res.status(404).json({ msg: 'Please enter title' })
    }

    if (!description) {
        res.status(404).json({ msg: 'Please enter description' })
    }

    const response = await Service.create({ title, description, source })

    if (response) {
        res.status(200).json({ message: 'service created successfully' })
    }

    res.status(404).json({ msg: 'Error occured while service' })
})

const getAllService = asyncHandler(async (req, res) => {
    const response = await Service.find()
    res.status(200).json(response)
})

const singleService = asyncHandler(async (req, res) => {
    const { id } = req.params
    if (id.length !== 24) {
        res.status(404).json({ message: 'Unable to find the service' })
    }
    const response = await Service.findById(id)
    if (!response) {
        res.status(404).json({ message: 'Unable to find the service' })
    }
    res.status(200).json(response)
})

const editService = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { title, description, source } = req.body

    if (id.length !== 24) {
        res.status(404).json({ message: 'Unable to find the service' })
    }

    if (!title) {
        res.status(404).json({ msg: 'Please enter title' })
    }

    if (!description) {
        res.status(404).json({ msg: 'Please enter description' })
    }

    const serviceExist = await Service.findById(id)

    if (!serviceExist) {
        res.status(404).json({ message: 'Unable to find the service' })
    }

    const response = await Service.findByIdAndUpdate(id, { title, description, source })

    if (response) {
        res.status(200).json({ message: 'Service edited successfully' })
    }

    res.status(404).json({ msg: 'Error occured while editing service' })
})

const deleteService = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (id.length !== 24) {
        res.status(200).json({ message: 'Service deleted successfully' })
    }

    const faqExist = await Service.findById(id)

    if (!faqExist) {
        res.status(200).json({ message: 'Service deleted successfully' })
    }

    try {
        await Service.findByIdAndDelete(id)
        res.status(200).json({ message: 'Service deleted successfully' })
    } catch (error) {
        res.status(404).json({ msg: 'Error occured while deleting service' })
    }

})



module.exports = {
    getAllSteps,
    createStep,
    updateStep,
    getAllContacts,
    createContact,
    getSingleStep,
    getAllWeightLossFAQ,
    singleWeightLossFAQ,
    createWeightLossFAQ,
    editWeightLossFAQ,
    deleteWeightLossFAQ,
    createGeneralFAQ,
    getAllGeneralFAQ,
    singleGeneralFAQ,
    editGeneralFAQ,
    deleteGeneralFAQ,
    createService,
    getAllService,
    singleService,
    editService,
    deleteService
}
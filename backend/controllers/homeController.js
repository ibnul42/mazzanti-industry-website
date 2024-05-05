const asyncHandler = require('express-async-handler')
const Goal = require('../models/home/goalModal')

const getAllGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

const createGoal = asyncHandler(async (req, res) => {
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
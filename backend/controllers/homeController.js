const asyncHandler = require('express-async-handler')
const Goal = require('../models/home/goalModal')

const createGoal = asyncHandler(async (req, res) => {
    const { title, desc } = req.body

    // check if all fields are inputed
    if (!title) {
        res.status(404)
        throw new Error('Please enter all fields')
    }

    // create a new goal
    const step = await Goal.create({
        title,
        desc
    })

    if (step) {
        res.status(201)
        res.json({
            message: 'Goal created successfully'
        })
    } else {
        res.status(404)
        throw new Error('Invalid user data')
    }
})

const getAllGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

const editGoal = asyncHandler(async (req, res) => {
    const { title, desc } = req.body
    const { id } = req.params

    if (id.length !== 24) {
        res.status(404)
        throw new Error('Goal not found')
    }

    const goalExists = await Goal.findById(id)

    if (!goalExists) {
        res.status(404).json({ message: 'Goal not found' })
    }

    const updatedgoal = await Goal.findByIdAndUpdate(id, {
        title, desc
    })

    if (!updatedgoal) {
        res.status(404).json({ message: 'Failed to update the goal' })
    }

    res.status(200).json({ message: 'goal updated successfully!' })
})

const deleteGoal = asyncHandler(async (req, res) => {
    const { id } = req.params

    if (id.length !== 24) {
        res.status(200).json({ message: 'Goal deleted successfully' })
    }

    const GoalExist = await Goal.findById(id)

    if (!GoalExist) {
        res.status(200).json({ message: 'Goal deleted successfully' })
    }

    try {
        await Goal.findByIdAndDelete(id)
        res.status(200).json({ message: 'Goal deleted successfully' })
    } catch (error) {
        res.status(404).json({ msg: 'Error occured while deleting Goal' })
    }
})

module.exports = {
    createGoal,
    getAllGoals,
    editGoal,
    deleteGoal
}
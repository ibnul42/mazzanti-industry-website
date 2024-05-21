const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const { createGoal, getAllGoals, editGoal, deleteGoal } = require('../controllers/homeController')
const { createWork, getAllWorks, editWork, deleteWork } = require('../controllers/howItWorkController')

// home routes
router.post('/home/create-goal', protect, createGoal)
router.get('/home/all-goals', getAllGoals)
router.put('/home/goal/:id', protect, editGoal)
router.delete('/home/goal/:id', protect, deleteGoal)

// how it works
router.post('/work/create-work', protect, createWork)
router.get('/work/all-works', getAllWorks)
router.put('/work/:id', protect, editWork)
router.delete('/work/:id', protect, deleteWork)



module.exports = router
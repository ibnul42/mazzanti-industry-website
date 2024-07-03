const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const { createGoal, getAllGoals, editGoal, deleteGoal } = require('../controllers/homeController')
const { createWork, getAllWorks, editWork, deleteWork } = require('../controllers/howItWorkController')
const { createProbate, getAllProbates, editProbate, deleteProbate } = require('../controllers/probateController')
const { createForeclosure, getAllForeclosures, editForeclosure, deleteForeclosure } = require('../controllers/foreclosureController')
const { createOffer, getAllOfferItems, deleteOffer } = require('../controllers/offerController')
const { getAllHero, createHero, getSingleHero } = require('../controllers/heroController')
const { getAllProperty, createProperty, editProperty, deleteProperty } = require('../controllers/propertyController')

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

// probates
router.post('/probate/create-probate', protect, createProbate)
router.get('/probate/all-probates', getAllProbates)
router.put('/probate/:id', protect, editProbate)
router.delete('/probate/:id', protect, deleteProbate)

// foreclosures
router.post('/foreclosure/create-foreclosure', protect, createForeclosure)
router.get('/foreclosure/all-foreclosures', getAllForeclosures)
router.put('/foreclosure/:id', protect, editForeclosure)
router.delete('/foreclosure/:id', protect, deleteForeclosure)

// offer contact
router.post('/offer/create-offer', createOffer)
router.get('/offer/all-offers', getAllOfferItems)
router.delete('/offer/:id', protect, deleteOffer)

// hero section
router.post('/hero/create-hero', protect, createHero)
router.get('/hero/all-heros', getAllHero)
router.get('/hero/single-hero/:type', getSingleHero)
// router.delete('/offer/:id', protect, deleteOffer)

// property section
router.get('/property/all-property', getAllProperty)
router.post('/property/create-property', protect, createProperty)
router.put('/property/edit-property/:id', editProperty)
router.delete('/property/:id', protect, deleteProperty)

module.exports = router
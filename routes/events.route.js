const express = require('express')
const router = express.Router()
const EventsController = require('../controllers/events.controller')

router.get('/events', EventsController.getAllEvents)
router.get('/events/:id', EventsController.getEventById)
router.delete('/events/:id', EventsController.deleteEventById)
router.put('/events/:id', EventsController.updateEventById)
router.post('/events', EventsController.createEvent)

module.exports = router
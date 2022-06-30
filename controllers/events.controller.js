const Event = require('../models/event.model')

const EventsController = {
    getAllEvents: async (req, res) => {
        try {
            const events = await Event.find()    
            res.send(events)
        } catch (error) {
            res.status(500).send({ message: error.message })
        } 
    },
    getEventById: async (req, res) => {
        try {
            const event = await Event.findById(req.params.id)
            res.send(event)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    deleteEventById: async (req, res) => {
        try {
            const event = await Event.findByIdAndDelete(req.params.id)
            res.send(event)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    updateEventById: async (req, res) => {
        try {
            const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.send(event)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    },
    createEvent: async (req, res) => {
        try {
            const event = await Event.create(req.body)
            event.save()

            res.send(event)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
}

module.exports = EventsController
const events = [
    {
      id: 1,
      name: 'Event 1',
      date: '2020-01-01',
      time: '12:00',
      description: "This is the description of event 1",
      author: "John Doe",
      image: "https://placehold.it/300x300",
    },
    {
      id: 2,
      name: 'Event 2',
      date: '2020-01-01',
      time: '12:00',
      description: "This is the description of event 2",
      author: "John Doe",
      image: "https://placehold.it/300x300",
    },
  ]

const EventsController = {
    getAllEvents: (req, res) => {
        res.send(events)
    },
    getEventById: (req, res) => {
        const {id} = req.params
        const event = events.find(event => event.id == id)
        if (!event) {
            res.status(404).send({message: `Event with id ${id} not found`})
        }
        res.send(event)
    },
    deleteEventById: (req, res) => {
        const {id} = req.params
        const event = events.find(event => event.id == id)
        if (!event) {
            res.status(404).send({message: `Event with id ${id} not found`})
        }
        events.splice(events.indexOf(event), 1)
        res.send(event)
    },
    updateEventById: (req, res) => {
        const {id} = req.params
        let event = events.find(event => event.id == id)
        if (!event) {
            res.status(404).send({message: `Event with id ${id} not found`})
        }
        events[events.indexOf(event)] = {
            ...event,
            ...req.body
        }
        res.send(event)
    },
    createEvent: (req, res) => {
        const event = {
            id: events.length + 1,
            ...req.body
        }
        events.push(event)
        res.send(event)
    }
}

module.exports = EventsController
const express = require('express')
const app = express()
const port = 8000

const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

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

app.get('/events', (req, res) => {
  res.send(events)
})
app.get('/events/:id', (req, res) => {
    const {id} = req.params
    const event = events.find(event => event.id == id)
    if (!event) {
      res.status(404).send({message: `Event with id ${id} not found`})
    }
    res.send(event)
})
app.delete('/events/:id', (req, res) => {
    const {id} = req.params
    const event = events.find(event => event.id == id)
    if (!event) {
      res.status(404).send({message: `Event with id ${id} not found`})
    }
    events.splice(events.indexOf(event), 1)
    res.send(event)
})
app.put('/events/:id', (req, res) => {
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
})
app.post('/events', (req, res) => {
  const event = {
    id: events.length + 1,
    ...req.body
  }
  events.push(event)
  res.send(event)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
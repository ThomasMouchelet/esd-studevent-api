const express = require('express')
const app = express()
const port = 8000

const morgan = require('morgan')

app.use(morgan('dev'))

app.get('/users', (req, res) => {
  res.send('Get all users')
})
app.get('/users/:id', (req, res) => {
    console.log("get one user : ", req.params.id)
    res.send('Get one user')
})
app.delete('/users/:id', (req, res) => {
    console.log("delete user : ", req.params.id)
    res.send('Delete one user')
})
app.put('/users/:id', (req, res) => {
    console.log("put user : ", req.params.id)
    res.send('Update one user')
})
app.post('/users', (req, res) => {
  res.send('Add new user')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
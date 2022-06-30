const express = require('express')
const app = express()
const port = 8000
const eventsRoutes = require('./routes/events.route')
const databaseConnection = require('./config/database-mongodb')

const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

databaseConnection()

app.use("/api", eventsRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
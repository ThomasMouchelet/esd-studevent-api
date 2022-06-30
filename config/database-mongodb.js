const mongoose = require('mongoose')
require('dotenv').config()

module.exports = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error)
    }
}
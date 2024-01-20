const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')

const users = require('./routes/users')

dotenv.config()
const app = express();

const config = {
    port: process.env.PORT
}

app.use(cors())
app.use(express.json())

app.use('/users', users)

app.get('*', (req, res) => {
    res.status(404).json({
        msg: "Path not found!"
    })
})

const start = async () => {
    const options = {
        autoIndex: true
    }
    try {
        console.log("Connecting to DB...")
        await mongoose.connect(
            process.env.DB_URI, options
        )
        app.listen(config.port, () => console.log(`Server is now listening on port: ${config.port}`))
    } catch (error){
        console.log(error)
        process.exit(1)
    }
}
start()

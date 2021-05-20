require("dotenv").config()
const express = require("express")
const mongoose = require("./db/connection")
const morgan = require("morgan")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.json({
        status:200,
        msg: 'You have hit the default route'
    })
})

app.listen(PORT, () => {
    console.log(`Listening in on port ${PORT}`)
})
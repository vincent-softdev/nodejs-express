// import express
const express = require(
    'express'
)

// create app -> express
const app = express()

// SETUP Port, follow env first
const PORT = process.env.PORT || 3000

// Middleware to parse JSON
app.use(express.json())

// / endpoint
app.get('/', (req, res) => {
    res.send('Hello World')
})

// listen to port
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

const app = require('./app')
// SETUP Port, follow env first
const PORT = process.env.PORT || 3000

// listen to port
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

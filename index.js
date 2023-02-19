const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
require("dotenv").config()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Server Running Successfully")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello My Second API App!')
})

app.listen(process.env.PORT, () => {
  console.log(`My second api app is listening on port ${process.env.PORT}`)
})
import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send({ message: "Ola Mundo" })
})

module.exports = app



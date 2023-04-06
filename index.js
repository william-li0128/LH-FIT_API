const express = require('express')
const bodyParser = require('body-parser')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()
const PORT = 8080

app.use(bodyParser.json())

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.post('/users', async (req, res) => {
  const { name, email } = req.body
  const newUser = await prisma.user.create({ data: { name, email } })
  res.json(newUser)
})

app.get('/exercises', async (req, res) => {
  const exercises = await prisma.exercise.findMany()
  res.json(exercises)
})

app.listen(8080, () => {
  console.log(`API server listening on port ${PORT}`)
})

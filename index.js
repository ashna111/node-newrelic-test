const newrelic = require('newrelic')
require('dotenv/config')

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  newrelic.setTransactionName('home')
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  newrelic.setTransactionName('test')
  res.send('Test Route!')
})

app.listen(process.env.PORT, () => {
  console.log('Started server...')
})

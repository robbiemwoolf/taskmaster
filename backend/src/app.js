if (process.env.USER) require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const errorHandler = require('./errors/errorHandler')
const notFoundHandler = require('./errors/notFoundHandler')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app
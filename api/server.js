const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

const potlucksRouter = require('./potlucks/router')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use(morgan('dev'))

server.use('/api/potlucks', potlucksRouter)

server.get('*',
  (_, res, next) => res.status(404)
    .send(`<h1>Please specify your path</h1>`)
)

/* eslint-disable */
server.use((err, req, res, next) => {
  res.status(err.status || 500)
    .json({
      message: err.message,
    })
})
/* eslint-enable */

module.exports = server

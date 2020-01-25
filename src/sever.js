import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

import routes from './routes'
const port = process.env.PORT || 3333

const server = express()
server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: true }))

server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs')

server.use(routes)

server.listen(port, () => {
  console.log('port 3333')
})

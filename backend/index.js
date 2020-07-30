const mongoose = require('mongoose')
const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('dotenv/config')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/public`))

const dboptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const connect = mongoose.connect(process.env.DB_URL, dboptions)

connect.then((db) => {
  console.log('db connected')
}, (err) => { console.log(err) })

const jobRouter = require('./routes/job')
const applicantRouter = require('./routes/applicant')

app.use('/job', jobRouter)
app.use('/applicant', applicantRouter)

const server = http.createServer(app)

server.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Server listening to port ${process.env.PORT}`)
})
/* mongod --dbpath=data --bind_ip 127.0.0.1 */

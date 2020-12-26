var express = require('express')
var bodyParser = require('body-parser')
var Job = require('../models/job')
var cors = require('./cors')

const jobRouter = express.Router()

jobRouter.use(bodyParser.json())

jobRouter.route('/')
  .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200) })
  .get(cors.cors, (req, res, next) => {
    Job.find()
      .then((jobs) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(jobs)
      })
      .catch(err => { console.log(err) })
  })
  .post(cors.corsWithOptions, (req, res, next) => {
    Job.create(req.body)
      .then((job) => {
        // console.log('Job Registered')
        res.statusCode = 200
        res.setHeader('Content-type', 'application/json')
        res.json(job)
      }, (err) => { console.log(err) })
      .catch(err => { console.log(err) })
  })

module.exports = jobRouter

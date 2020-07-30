var express = require('express')
var bodyParser = require('body-parser')
var Applicant = require('../models/applicant')
var cors = require('./cors')

const applicantRouter = express.Router()

applicantRouter.use(bodyParser.json())

applicantRouter.route('/')
  .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200) })
  .get(cors.cors, (req, res, next) => {
    Applicant.find()
      .then((applicant) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json(applicant)
      })
      .catch(err => { console.log(err) })
  })
  .post(cors.corsWithOptions, (req, res, next) => {
    Applicant.create(req.body)
      .then((applicant) => {
        console.log('Applicant Registered')
        res.statusCode = 200
        res.setHeader('Content-type', 'application/json')
        res.json(applicant)
      }, (err) => { console.log(err) })
      .catch(err => { console.log(err) })
  })

module.exports = applicantRouter

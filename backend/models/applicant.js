var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Applicant = new Schema({
  jobid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: false
  },
  technology: {
    type: Array,
    required: true
  },
  notice: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Applicant', Applicant)

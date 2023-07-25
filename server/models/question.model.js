// models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
  },
  header:{
    type: String,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  phishingHeader: {
    type: String,
    required: false
  },
  phishingText:{
    type: String,
    required: false
  },
  legitimateHeader:{
    type: String,
    required: false
  },
  legitimateText:{
    type: String,
    required: false
  },

  showMeText: {
    type: String,
    required: false
  },
  ShowMeText2:{
    type: String,
    required: false
  },
  mailFrom: {
    type: String,
    
  },
  mailCC: {
    type: String,
    
  },
  mailAcronym:{
    type: String,
  },
  mailBody:{
    type:String,
  },
  attachementName:{
    type:String,
  },
  attachementLink:{
    type:String,
  }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;

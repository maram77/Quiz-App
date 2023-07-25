const router = require('express').Router();
const questionController = require('../controller/question.controller')

require('dotenv').config()

router.get('/questions', questionController.getQuestions)
router.get('/question/:number', questionController.getQuestionByNumber)
router.post('/addQuestion', questionController.postQuestion)

module.exports=router




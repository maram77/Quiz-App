const express = require('express');
const Question = require("../models/question.model");
const asyncHandler = require('express-async-handler');


const getQuestions=asyncHandler(async (req, res) => {
    try {
      const data = await Question.find({})
      res.status(200).json(data)
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error fetching Question data' });
    }
  
  })


  const postQuestion=asyncHandler(async(req,res)=>{
    try{
      const { number,header, questionText, phishingHeader, phishingText, legitimateHeader,
        legitimateText,showMeText,showMeText2, mailFrom, mailCC,mailAcronym, mailBody, attachementName, attachementLink,
       } = req.body;
        const question = new Question({
        number: number,
        header:header,
        questionText:questionText,
        phishingHeader:phishingHeader,
        phishingText:phishingText,
        legitimateHeader:legitimateHeader,
        legitimateText:legitimateText,
        showMeText:showMeText,
        ShowMeText2:showMeText2,
        mailFrom:mailFrom,
        mailCC:mailCC,
        mailAcronym:mailAcronym,
        mailBody:mailBody,
        attachementName:attachementName,
        attachementLink:attachementLink,
       

      });
  
      const questionSave=await question.save()
      res.status(201).json({ message: 'Question enregistré avec succès.' })
  
    }catch{
       res.status(400).json({ error: err.message });
    }
  
  
  })


  const getQuestionByNumber = asyncHandler(async (req, res) => {
    const questionNumber = req.params.number;
    
    // Retrieve the question from the database based on the number
    const question = await Question.findOne({ number: questionNumber });
    
    if (question) {
      res.json(question);
    } else {
      res.status(404).json({ errorMessage: "Question not found" });
    }
  });



  module.exports= {getQuestions, postQuestion, getQuestionByNumber}
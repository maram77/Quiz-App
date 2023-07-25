const express = require('express');
const router = express.Router();
const User = require("../models/user.model");
const asyncHandler = require('express-async-handler');



const getUser=asyncHandler(async (req, res) => {
  try {
    const data = await User.find({})
    res.status(200).json(data)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching user data' });
  }

})

const postUser=asyncHandler(async(req,res)=>{
  try{
    const { username, email } = req.body;
    const user = new User({
      username: username,
      email: email,
      points: 0,
      quizAttempted: []
    });

    const userSave=await user.save()
    res.status(201).json({ message: 'User registered successfully.' })

  }catch{
     res.status(400).json({ error: err.message });
  }


})

const setScore = asyncHandler(async (req, res) => {
  try {
    const { username, points } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Update the score
    user.points = points;

    // Save the updated user
    await user.save();


    res.status(200).json({ message: 'Score updated successfully.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error updating score.' });
  }
});


//module.exports = router;
module.exports= {getUser, postUser, setScore}

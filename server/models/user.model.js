const mongoose = require('mongoose')
const quizAttemptedSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  quizResult: [],
});
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    } 
    
    //quizAttempted: [quizAttemptedSchema], 
    
  },
    {
      timestamps: true,
      versionKey: false, // Here You have to add.
    }
)
  const User = new mongoose.model('User', userSchema)

  module.exports=User
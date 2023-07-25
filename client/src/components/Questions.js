import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Question1 from "./question/Question1";
import Question2 from "./question/Question2";
import Question3 from "./question/Question3";
import Question4 from "./question/Question4";
import Question5 from "./question/Question5";
import Question6 from "./question/Question6";
import Question7 from "./question/Question7";
import Question8 from "./question/Question8";

function Questions({ questionList, username, fromHome }) {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    
  };

  if (!questionList || questionList.length === 0) {
    // Handle the case when no questions are available
    return <p>Pas de questions disponibles.</p>;
  }

  const currentQuestion = questionList[currentQuestionIndex];
  

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questionList.length - 1) {
      handleNextQuestion();
     
    } else {
      navigate('/result', { state: { score, username } });
      
    }
  };

 

  const renderQuestionComponent = () => {
    switch (currentQuestionIndex) {
      case 0:
        return (
          <Question1
            question={currentQuestion}
            moveToNextQuestion={moveToNextQuestion}
            score={score} // Pass the score as a prop
            setScore={setScore} // Pass the setScore function as a prop
            username={username}
            fromHome={fromHome}
          />
        );
      case 1:
        return (
          <Question2
            question={currentQuestion}
            moveToNextQuestion={moveToNextQuestion}
            score={score} // Pass the score as a prop
            setScore={setScore} // Pass the setScore function as a prop
            username={username} 
            fromHome={fromHome}
          />
        );
        case 2:
        return (
          <Question3
          question={currentQuestion}
          moveToNextQuestion={moveToNextQuestion}
            score={score} // Pass the score as a prop
            setScore={setScore} // Pass the setScore function as a prop
            username={username} 
            fromHome={fromHome}
           
          />
        );
        case 3:
          return (
            <Question4
            question={currentQuestion}
            moveToNextQuestion={moveToNextQuestion}
            score={score} // Pass the score as a prop
            setScore={setScore} // Pass the setScore function as a prop
            username={username} 
            fromHome={fromHome}
           
             
            />
          );
          case 4:
            return (
              <Question5
              question={currentQuestion}
              moveToNextQuestion={moveToNextQuestion}
              score={score} // Pass the score as a prop
            setScore={setScore} // Pass the setScore function as a prop
            username={username} 
            fromHome={fromHome}
             
               
              />
            );
            case 5:
            return (
              <Question6
              question={currentQuestion}
              moveToNextQuestion={moveToNextQuestion}
              score={score} // Pass the score as a prop
            setScore={setScore} // Pass the setScore function as a prop
            username={username} 
            fromHome={fromHome}
             
               
              />
            );
            case 6:
            return (
              <Question7
              question={currentQuestion}
              moveToNextQuestion={moveToNextQuestion}
              score={score} // Pass the score as a prop
            setScore={setScore} // Pass the setScore function as a prop
            username={username} 
            fromHome={fromHome}
             
             
               
              />
            );
            case 7:
            return (
              <Question8
              question={currentQuestion}
              moveToNextQuestion={moveToNextQuestion}
              score={score} // Pass the score as a prop
              setScore={setScore} // Pass the setScore function as a prop
               currentQuestionIndex={currentQuestionIndex}
               questionList={questionList}
               username={username} 
               fromHome={fromHome}
             
             
               
              />
            );
     
      default:
        return null;
    }
  };

  return <div className="Container2">{renderQuestionComponent()}</div>;
}

export default Questions;

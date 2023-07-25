import React, { useState, useRef } from "react";
import { Container, Toast, Card, Button } from 'react-bootstrap';
import LinkWrapper from "../LinkWrapper";
import MailSubject from "../MailSubject";
import ToastWrapper from "../ToastWrapper";
import "../../styles/Home.css";


function Question1({ question, moveToNextQuestion,score, setScore, username, fromHome }) {
 

  const [selectedOption, setSelectedOption] = useState(null);
  const [showpop, setShowpop] = useState(false);
  const [showText, setShowText] = useState("");
  const toastBodyRef = useRef(null);
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === "phishing") {
      setScore(score + 1); // Increment the score if the correct answer is selected
    }
  };
  
  const handleNextQuestion = () => {
    moveToNextQuestion();
    setSelectedOption(null);
    setShowpop(false);
    setShowText('');
  };
  const handleShowText = () => {
    setShowpop(true);
    setTimeout(() => {
      if (toastBodyRef.current) {
        toastBodyRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    
  };

  

 
  
  
  return (
    <Container fluid="true"  className="Container2 "   >
      <div className="py-2 px-md-5 Navbar ">
        <p className="mx-5  question-number" style={{ color: "#9c2c64", paddingTop: "2PX", marginLeft: "OPX" }}>
          <b>
            {question ?  question.number + `/8` : ''}
          </b>
        </p>
      </div>
      <Container fluid="true"  className="vh-50 w-100 Container d-flex flex-column justify-content-center align-items-center  ">
        <div className="text-center header-text my-5 mt-0">
          {selectedOption === "phishing" ? (
            <>
              <h1>{question ? question.phishingHeader : ''}</h1>
              <p>{question ? question.phishingText : ''}</p>
              <div className="">
                {showText ? (
                  <p>{showText}</p>
                ) : (
                  <button className="submit-btn" onClick={() => {handleShowText()}}>Montrez-moi</button>
                )}
              </div>
            </>
          ) : selectedOption === "legitimate" ? (
            <>
              <h1>{question ? question.legitimateHeader : ''}</h1>
              <p>{question ? question.legitimateText : ''}</p>
              <div className="">
                {showText ? (
                  <p>{showText}</p>
                ) : (
                  <button className="submit-btn" onClick={() => {handleShowText()}}>Montrez-moi</button>
                )}
              </div>
            </>
          ) : (
            <>
              <h1>{question ? question.header : ''}</h1>
              <p>{question ? question.questionText : ''}</p>
              <div className="">
                <button className="submit-btn" onClick={() => handleOptionClick("phishing")}>Hameçonnage</button>
                <button className="submit-btn" onClick={() => handleOptionClick("legitimate")}>Fiable</button>
              </div>
            </>
          )}
        </div>
      </Container>
      <Container fluid className="vh-100">
        <ToastWrapper>
          <Toast.Body>
            <Card.Title>
              <MailSubject
                props={question.mailFrom}
                cc={question.mailCC}
                acronym={question.mailAcronym}
                showImage={true}
                showImage2={true}
              />
            </Card.Title>
            <div > {/* Add the "overflow-auto" class here */}
              <div className='container w-lg-50 w-sm-100 w-100 mx-auto'>
                <Card className="text-center card-mdf w-lg-50 w-100 mx-auto">
                  <Card.Body>
                    <Card.Title>
                      <div>{question ? question.mailBody : ''}</div>
                    </Card.Title>
                    <div className="attachment my-5  rounded shadow">
                      <img src="../../img/doc.png" className="" alt="" />
                      <p>{question ? question.attachementName : ''}</p>
                    </div>
                    <div className='position-relative mx-auto w-100'>
                      <LinkWrapper
                        to={question?.attachementLink}
                        message={question?.attachementLink}
                      >Ouvrir</LinkWrapper>
                      <Toast show={showpop} className="position-absolute popup top-25 center shadow z-index-5">
                        <Toast.Body ref={toastBodyRef}>
                          <p>{question ? question.showMeText : ''}</p>
                          <div className="text-right"><Button className="text-right" onClick={handleNextQuestion}>Suivant</Button></div>
                        </Toast.Body>
                      </Toast>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Toast.Body>
        </ToastWrapper>
      </Container>
    </Container>
  );
}

export default Question1;

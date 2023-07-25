import React, { useState,useEffect } from "react";
import { Container, Toast, Card, Button } from 'react-bootstrap';
import LinkWrapper from "../LinkWrapper";
import MailSubject from "../MailSubject";
import ToastWrapper from "../ToastWrapper";
import "../../styles/Home.css";



function Question3({ question, moveToNextQuestion,score, setScore, username, fromHome }){
  const [selectedOption, setSelectedOption] = useState(null);
  const [showpop, setShowpop] = useState(false);
  const [showText, setShowText] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === "phishing") {
      setScore(score + 1); // Increment the score if the correct answer is selected
    }
  };

  const handleNextQuestion = () => {
    moveToNextQuestion();
    setSelectedOption(null);
    setShowText('');
  };
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

    return(
        <Container fluid="true" className="Container2 ">
            <div className="py-2 px-md-5 Navbar ">
            <p className="mx-5  question-number" style={{ color: "#9c2c64", paddingTop: "2PX", marginLeft: "OPX" }}>
                <b>
                {question ?  question.number + `/8` : ''}
                </b>
            </p>
            </div>
        <Container fluid="true"  className="vh-50 w-100 Container d-flex flex-column justify-content-center align-items-center">
          <div className="text-center header-text my-5 mt-0">
            {selectedOption === "phishing" ? (
              <>
                <h1>{question ? question.phishingHeader : ''}</h1>
                <p>{question ? question.phishingText : ''}</p>
                <div className="">
                  {showText ? (
                    <p>{showText}</p>
                  ) : (
                    <button className="submit-btn" onClick={() => setShowpop(true)} >Montrez-moi</button>
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
                    <button className="submit-btn" onClick={() => setShowpop(true)} >Montrez-moi</button>
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
        <Container bg="success">
          <ToastWrapper className="card-lg">
            <Toast.Body>
                
                <Card.Title className='position-relative'>
                <MailSubject
                props={question.mailFrom}
                cc={question.mailCC}
                acronym={question.mailAcronym}
              />
                </Card.Title>
                    <div  className="position-relative">
                        <>Salut, tu te souviens de <hr></hr>
                            <LinkWrapper  
                                to={question?.attachementLink}
                                message={question?.attachementLink}> CETTE PHOTO
                            </LinkWrapper>
                         </>
                        <Toast show={showpop} className="position-absolute top-25 shadow z-index-5">
                          <Toast.Body>
                            <p>{question ? question.showMeText : ''}</p>
                            <div className="text-right"><Button className="text-right" onClick={handleNextQuestion}  >Suivant</Button></div>
                            
                          </Toast.Body>
                        </Toast>
                    </div >

            </Toast.Body>
          </ToastWrapper>
        </Container>
      </Container>
    )
}
export default Question3;
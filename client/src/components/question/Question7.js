import React, { useState, useRef, useEffect } from "react";
import { Container, Button, Card, Toast} from 'react-bootstrap'; 
import MailSubject from "../MailSubject";
import ToastWrapper from "../ToastWrapper";
import LinkWrapper from "../LinkWrapper";
import "../../styles/Home.css";


function Question7({ question, moveToNextQuestion, score, setScore, username, fromHome }){
    const [selectedOption, setSelectedOption] = useState(null);
    const [showpop, setShowpop] = useState(false);
    const [showpop2, setShowpop2] = useState(false)
    const [showText, setShowText] = useState("");
    const toastBody2Ref = useRef(null);
  
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
  
    const handleShowText2 = () => {
      setShowpop(false);
      setShowpop2(true);
      setTimeout(() => {
        if (toastBody2Ref.current) {
          toastBody2Ref.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    };

    useEffect(() => {
      // Scroll to the top of the page when the component is mounted
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    
  

    return(
        <Container fluid="true" className="Container2">
            <div className="py-2 px-md-5 Navbar ">
                <p className="mx-5  question-number" style={{ color: "#9c2c64", paddingTop: "2PX", marginLeft: "OPX" }}>
                <b>
                    {question ? question.number + `/8` : ''}
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
                        <button className="submit-btn" onClick={() => setShowpop(true)}>Montrez-moi</button>
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
                        <button className="submit-btn" onClick={() => setShowpop(true)}>Montrez-moi</button>
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
        <Container className="vh-100" bg="success">
            <ToastWrapper>
                <Card.Body>
                    <Card.Title className='position-relative'>
                        <MailSubject
                          props={question.mailFrom}
                          cc={question.mailCC}
                          acronym={question.mailAcronym}
                          showImage={false}
                          showImage2={false} />
                        <Toast show={showpop} className="position-absolute top-25 shadow z-index-5 popup">
                          <Toast.Body>
                           <p>{question ? question.showMeText : ''}</p>
                            <div className="text-right"><Button className="text-right" onClick={handleShowText2} >Suivant</Button></div>
                            
                          </Toast.Body>
                        </Toast>
                    </Card.Title>
                    <div >
                        <img src="../../img/secure.png" alt="" className='secure' />
                        <h4>Il se peut que des personnes malveillantes soutenues par un gouvernement tentent de voler 
                            votre mot de passe
                        </h4>
                        <p>{question ? question.mailBody : ''}</p>
                        <div className='position-relative'>
                        <LinkWrapper  to={question?.attachementLink}
                              message={question?.attachementLink} >
                            MODIFIER LE MOT DE PASSE</LinkWrapper>
                        <Toast show={showpop2} className="position-absolute top-25 shadow z-index-5 popup">
                          <Toast.Body  ref={toastBody2Ref}>
                            <p>{question ? question.showMeText2 : ''}</p>
                            <div className="text-right"><Button className="text-right" onClick={handleNextQuestion} >Suivant</Button></div>
                            
                          </Toast.Body>
                        </Toast>
                        </div>
                    </div>
                </Card.Body>
            </ToastWrapper>
        </Container>
    </Container>
    )
}
export default Question7;
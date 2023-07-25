import React, { useState, useRef, useEffect } from "react";
import { Container, Toast, Card, Button } from 'react-bootstrap';
import LinkWrapper from "../LinkWrapper";
import MailSubject from "../MailSubject";
import ToastWrapper from "../ToastWrapper";
import "../../styles/Home.css";


function Question2({ question, moveToNextQuestion,score, setScore,username, fromHome }) {
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


  return (
    <Container fluid="true"  className="Container2 ">
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
      <Container fluid="true"  className="vh-100">
        <ToastWrapper className="card-lg">
          <Toast.Body>
            <Card.Title>
              <MailSubject
                props={question.mailFrom}
                cc={question.mailCC}
                acronym={question.mailAcronym}
                showImage={true}
                showImage2={true}
              />
              <Toast show={showpop} className="position-absolute top-25 shadow z-index-5">
                <Toast.Body>
                  <p>{question ? question.showMeText : ''}</p>
                  <div className="text-right"><Button className="text-right" onClick={handleShowText2} >Suivant</Button></div>
                </Toast.Body>
              </Toast>
            </Card.Title>
            <div className='container w-lg-50 w-sm-100 w-100 mx-auto'>
              <div className='w-100' >
                <div className="card-mdf w-100 container-fluid">
                  <Card.Body>
                    <Card.Title>
                      <p className='bg-primary py-3 m-0 text-white container-fluid'> SIMM pour Services Mécaniques</p>
                      <div className='flex-mdf d-md-flex justify-content-around m-0 align-items-center'>
                        <div className="d-md-flex align-items-center">
                          <div className='d-md-flex flex-column justify-content-end'>
                            <h4>Facture</h4>
                            <p>321464</p>
                          </div>
                          <p className='px-4'>Délai: 07/15/2024</p>
                        </div>
                        <strong>Montant dû: <span className=''>TND 8,015.50</span></strong>
                      </div>
                    </Card.Title>
                    <div>
                      <h4>Cher fournisseur:</h4>
                      <p> Le paiement de votre facture est attaché ci-joint. Veuillez consulter la confirmation de paiement dès que possible. </p>
                      <p>Cordialement,</p>
                      <h4>SIMM Services Mécaniques</h4>
                      <div className='position-relative'>
                        <LinkWrapper
                          to={question?.attachementLink}
                          message={question?.attachementLink}
                        >Ouvrir</LinkWrapper>
                      </div>
                      <Toast show={showpop2} className="position-absolute top-25 shadow z-index-5 popup">
                        <Toast.Body ref={toastBody2Ref}>
                          <p>{question ? question.showMeText2 : ''}</p>
                          <div className="text-right"><Button className="text-right" onClick={handleNextQuestion}  >Suivant</Button></div>
                        </Toast.Body>
                      </Toast>
                    </div>
                  </Card.Body>
                </div>

              </div>

            </div>

          </Toast.Body>
        </ToastWrapper>
      </Container>
    </Container>


  )
}
export default Question2;

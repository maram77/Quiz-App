import React, { useState, useRef, useEffect } from "react";
import { Container, Button, Card, Toast, Row, Col} from 'react-bootstrap'; 
import MailSubject from "../MailSubject";
import ToastWrapper from "../ToastWrapper";
import "../../styles/Home.css";


function Question5({ question, moveToNextQuestion, score, setScore, username, fromHome }) {
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
    <Container fluid="true"  className='Container2'>
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
      <Container className="" bg="success">
        <ToastWrapper>
          <Toast.Body>
            <Card.Title className='position-relative'>
              <MailSubject 
                props={question.mailFrom}
                cc={question.mailCC}
                acronym={question.mailAcronym}
                showImage={false}
                showImage2={false}
                 />
              <Toast show={showpop} className="position-absolute top-25 shadow z-index-5">
                <Toast.Body>
                    <p>{question ? question.showMeText : ''}</p>
                  <div className="text-right"><Button className="text-right" onClick={handleShowText2} >Suivant</Button></div>
                </Toast.Body>
              </Toast>
            </Card.Title>
            <div>
               
              
              <p> Bonjour, Veuillez trouver ci-joint le rapport d'activité financière de 2023, à lire attentivement. </p>
              <Row className='gx-5 attachment-div'>
                <Col className='attachment'>
                  <img className='icon2' src="../../img/pdf.png" alt="jhk" />
                  <div className='d-flex flex-column '>
                    <span>R.A.F.2023.pdf</span>
                    <span>758kb</span>
                  </div>
                  
                </Col>
                
              </Row>
              <div className='d-grid mx-auto col-md-4 col-12 position-relative'>
                <Toast show={showpop2} className="position-absolute top-25 shadow z-index-5 popup">
                  <Toast.Body ref={toastBody2Ref}>
                    <p>{question ? question.showMeText2 : ''}</p>
                    <div className="text-right"><Button className="text-right" onClick={handleNextQuestion}  >Next</Button></div>
                  </Toast.Body>
                </Toast>
              </div>
              <p>Cordialement,</p>
              <p>Mme Cherni Ahlem</p>
              <p>Ecole Taieb Mhairi </p>
            </div>
          </Toast.Body>
        </ToastWrapper>
      </Container>
    </Container>
  );
}

export default Question5;

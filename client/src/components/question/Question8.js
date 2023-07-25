import React, { useState, useRef, useEffect } from "react";
import { Container, Button, Card, Toast} from 'react-bootstrap'; 
import ToastWrapper from "../ToastWrapper";
import LinkWrapper from "../LinkWrapper";
import { useNavigate, useLocation } from 'react-router-dom';
import "../../styles/Home.css";



function Question8({ question, moveToNextQuestion, score, setScore , currentQuestionIndex, questionList, username, fromHome}){
    const location = useLocation();
    const name = location.state?.username || localStorage.getItem("username");
    const [selectedOption, setSelectedOption] = useState(null);
    const [showpop, setShowpop] = useState(false);
    const [showpop2, setShowpop2] = useState(false)
    const [showText, setShowText] = useState("");
    const toastBody2Ref = useRef(null);
    
   
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      if (option === "legitimate") {
        setScore(score + 1); // Increment the score if the correct answer is selected
      }
     
    };

    const navigate = useNavigate();
    const handleNextQuestion = () => {
      moveToNextQuestion();
      setSelectedOption(null);
      setShowText('');
      if (currentQuestionIndex === questionList.length - 1) {
        console.log("Final Score:", score);
        navigate("/result", { state: { score, username, fromHome } });
       
      }
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
            <Container fluid="true" className="vh-50 w-100 Container d-flex flex-column justify-content-center align-items-center">
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

                    <Toast.Body>
                    <div >
                        <div className='signin-access mx-auto'>
                            <Card className="card-mdf">
                                <Card.Body className='position-relative'>
                                    <div className="w-25">
                                        <img style={{width:"100px"}} src="../../img/google.png" fluid="true" alt="" />
                                    </div>
                                    <h2 className='mt-4'>Bonjour {name}, </h2>
                                    <div className='position-relative'>Tripit <strong>souhaite</strong>
                                    <Toast show={showpop} className="position-absolute top-25 shadow z-index-5 popup">
                                    <Toast.Body>
                                        <p>{question ? question.showMeText : ''}</p>
                                        <div className="text-right"><Button className="text-right" onClick={handleShowText2} >Suivant</Button></div>
                                        
                                    </Toast.Body>
                                    </Toast>
                                    </div>
                                    <p className='mt-2'> <img style={{width:"30px"}} src="../../img/gmail.png" alt="" className='outlook' /> Afficher vos messages et vos paramètres de messagerie </p>
                                    <Toast show={showpop2} className="position-absolute top-100 shadow z-index-5 popup">
                                    <Toast.Body  ref={toastBody2Ref}>
                                        <p>{question ? question.showMeText2 : ''}</p>
                                        <div className="text-right"><Button className="text-right" onClick={handleNextQuestion} >Suivant</Button></div>
                                        
                                    </Toast.Body>
                                    </Toast>
                                    <strong>Autoriser Triplt à effectuer ces actions?</strong>
                                    <div>
                                    <small>{question ? question.mailBody : ''}</small>
                                    </div>
                                    <LinkWrapper to={question?.attachementLink}
                                     message={question?.attachementLink} >Autoriser</LinkWrapper>
                                
                                    
                                </Card.Body>
                            </Card>
                        </div>
                        </div>
                    </Toast.Body>
                </ToastWrapper>
        </Container>
    </Container>
    )
}
export default Question8;
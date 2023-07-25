import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container} from 'react-bootstrap';
import axios from 'axios';
import {  Row, Col } from 'react-bootstrap'
import Header from './Header';
import Footer from './Footer';
import '../styles/Result.css';

function Result() {
  const location = useLocation();
  const score = location.state?.score || 0;
  const username = location.state?.username || localStorage.getItem("username");
  const fromHome = location.state?.fromHome;
  const navigate = useNavigate();


  

  useEffect(() => {
    // Function to update the user's score in the backend
    const updateScoreInBackend = async () => {
      try {
        const response = await axios.post('http://localhost:8080/setScore', {
          username,
          points: score,
        });
        console.log(response.data.message);  //The response from the backend
      } catch (error) {
        console.error(error);
      }
    };
    
    updateScoreInBackend();
      
    const redirectTimeout = setTimeout(() => {
      if (score < 5 && fromHome) {
        navigate('/quiz', { replace: true, state: { username, fromHome } });
      }
    }, 10000); // Adjust the timeout duration as needed (e.g., 5000ms = 5 seconds)
  
    return () => clearTimeout(redirectTimeout); 
  }, [score, navigate, username, fromHome]);

 

  

  return (
    <div>
      <Header></Header>
     
      <Container fluid="md" className="">
            <Row className="justify-content-center mt-5">
                  <Col xs={12} md={6}>
                  <h2 className="">Bonjour {username}! <br></br> Vous avez obtenu un score de {score}/8.</h2>
                  {score < 5 ? (
                    <>
                      <p>
                        Plus vous vous entraînerez, mieux vous saurez identifier les pièges et vous protéger des
                        tentatives d'hameçonnage.
                      </p>
                      <p>
                        Quelques mesures très simples à mettre en place peuvent également améliorer la protection de vos
                        comptes en ligne.
                      </p>
                      <p>
                        <b className="failed "> Vous serez redirigé vers le quiz à nouveau et vous ne pourrez pas passer à moins d'obtenir un score
                        d'au moins 5.</b>
                        
                      </p>
                    </>
                  ) : (

                    <>
                    <p>
                        Plus vous vous entraînerez, mieux vous saurez identifier les pièges et vous protéger des
                        tentatives d'hameçonnage.
                      </p>
                      <p>
                        Quelques mesures très simples à mettre en place peuvent également améliorer la protection de vos
                        comptes en ligne.
                      </p>
                    <p>
                      <b className="passed">Félicitations ! Continuez à rester vigilant face aux
                      tentatives d'hameçonnage.</b>
                    </p>
                    </>
                    
                    
                  )}
                </Col>
                <Col xs={12} md={6}  className="">
                    {(score < 5)?
                    <img className='mx-auto luck-img d-block container-fluid'   style={{ maxHeight: '450px' }} src='img/result-fail.gif' alt="hand holding hook" />
                    : <img className='mx-auto luck-img d-block container-fluid'  src='img/result-neutral.gif' alt="hand holding hook" />
                    }
                    
                </Col>
            </Row>
        </Container>
      <Footer></Footer>
    </div>
  );
}

export default Result;

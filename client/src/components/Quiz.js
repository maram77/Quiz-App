import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Questions from "./Questions";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/Home.css';

function Quiz() {
  const [questionList, setQuestionList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username;
  const { fromHome } = location.state || {}; 

  

  useEffect(() => {
    // Fetch the questionList from the backend 
    const fetchQuestionList = async () => {
      try {
        const response = await axios.get("http://localhost:8080/questions"); 
        setQuestionList(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestionList();
  }, []);

   // Redirect to the home page if the username is not present and user has not come from the home page
   useEffect(() => {
    
    if (!username && !location.state?.fromHome) {
      navigate('/');
    }
  }, [username, location.state, navigate]);
  return (
    <>
      <Header />
      <Questions questionList={questionList} username={username} fromHome={fromHome} />
      <Footer />
    </>
  );
}

export default Quiz;

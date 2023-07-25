import React, { useEffect, useState }  from 'react';
import '../styles/App.css';
import { Routes, Route} from 'react-router-dom'
import axios from "axios";

/* import components */
import Main from './Main';
import Quiz from './Quiz';
import Questions from './Questions';
import Result from './Result'





function App() {
  const username = localStorage.getItem('username');
  const [questionList, setQuestionList] = useState([]);
 


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

  return (
    
    <Routes>
    <Route path='/' element={<Main />}></Route>
    <Route path='/Quiz' element={<Quiz/>}></Route>
    <Route path='/Questions' element={<Questions questionList={questionList} username={username} />} />
    <Route path='/result' element={<Result/>}></Route>
    

   </Routes>
  );
} 


export default App;

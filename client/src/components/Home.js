import React from "react";
//import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import '../styles/Home.css';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

  };

  




function Home() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [usernameError, setUsernameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const register = () => {
    let isFormValid = true;
   
    // Validate the username field
    if (username.trim() === '') {
      setUsernameError('Entrer un nom d\'utilisateur!');
      isFormValid = false;
    } else {
      setUsernameError('');
    }

    // Validate the email field
    if (email.trim() === '') {
      setEmailError('Entrer un email!');
      isFormValid = false;
    } else if (!emailRegex.test(email)) {
    setEmailError('Email invalide!');
    isFormValid = false;
    } else {
    setEmailError('');
    }

    if (isFormValid) {
      //console.log('Submitted:', username, email);
      
      const user = {
        username: username,
        email: email

      };

      axios.post('http://localhost:8080/add', user)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem('username', username);
          handleClose();
         
          navigate('/quiz', { state: { username: username, fromHome: true } }); // Redirect to the Quiz component
        
         
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    
  }; 
  


  return (
    <div className="home-container home-background " >
      <div style={{  paddingLeft: "20px" }}>
            <div className="header-container">
               <h1 className="header">Compagne de sensibilisation contre l'hameçonnage </h1>
           </div>
            <h2>Pouvez-vous repérer quand vous êtes victime d’hameçonnage ?</h2>

            <p style={{ fontSize: "18px", lineHeight: "1.5", textAlign: "justify" }}>
            Identifier l’hameçonnage peut être plus difficile que vous ne le pensez.<br />
            L’hameçonnage est une tentative de vous inciter à donner vos informations<br></br> 
            personnelles en prétendant être quelqu’un que vous connaissez.<br />
            Pouvez-vous dire ce qui est faux?
            </p>

            <button className="submit-btn button-reset" onClick={handleOpen}><b>Répondez au quiz</b></button>
            
        <div>

        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography  component="span" id="modal-modal-title" variant="h6" >
                Inventez un nom et une adresse e-mail. 
                </Typography>
                <Typography component="span" id="modal-modal-description" sx={{ mt: 2 }}>
                <form onSubmit={handleSubmit}>
                    <React.Fragment>
                        <TextField
                        name="username"
                        label="Nom d'utilisateur"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        error={usernameError !== ''}
                        helperText={usernameError}
                      />
                    </React.Fragment>

                    <React.Fragment>
                        <TextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={emailError !== ''}
                        helperText={emailError}
                      />
                    </React.Fragment>
                   
                    
                      <Button type="submit"   sx={{ borderRadius: 0 }} onClick={register} className=" button-reset submit-btn" variant="contained" style={{ width:"150px"}}>
                      Commencez!
                      </Button>
                    
                    
                </form>
                </Typography>
            </Box>
            
        </Modal>
       

      </div>

     

      <div className="image-container" >
        <img src="./img/phishing.png" alt="Phishing"  />
      </div>
     



    </div>
  );
}

export default Home;



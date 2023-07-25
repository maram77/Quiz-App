import React from 'react'
import '../styles/MailSubject.css';



const MailSubject = ({props, acronym, cc, showImage, showImage2}) => {
  return (
    <>
    {showImage && <img className='container-fluid' src="img/outlook-layout.png" alt="" />}
    <div className='flex-div m-2'>
        <div className="circle text-white d-flex justify-content-center">
          <p className='mx-auto'>{acronym}</p>
        </div>
        <div className='fluid'>
            <small className='d-block '> De: {props} </small>
            {cc && <small className='d-block'>CC: {cc}</small>}
        </div>
        
    </div>
    {showImage2 && <img className='action-img mt-2' src="img/outlook-action.png" alt="" />}
   
    
    </>
  )
}

export default MailSubject


import React from 'react'

const MyFooter = () => {
    let FooterStyle = { 
        position: "relative",
        top: "70vh",
        width: "100%",
        border : "2px solid red"
    }//we can use the concept of the 
    return (
    <footer className='bg-dark text-light py' style = {FooterStyle}>
        <p className='text-center'>
            Copyrigth &copy; 2021. All rights reserved.
        </p>

      
    </footer>
  )
}

export default MyFooter

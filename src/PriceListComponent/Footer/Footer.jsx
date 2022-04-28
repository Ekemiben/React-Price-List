import React from 'react'
import FooterStyle from "./Footer.module.css"
const Footer = () => {
    return (
        <div className= {FooterStyle.footer}>
            <div className={FooterStyle.lastcontent}>

            <div className = 'colz'>
                
            <p>+2348107914902</p>
                        <div className={FooterStyle.colzicon}>
                        
                        <a href='https://web.facebook.com/?_rdc=1&_rdr'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                      
                        <a href='https://www.linkedin.com/in/ekemini-ben/'>
                            <i className='fa fa-linkedin'></i>
                        </a>
                       
                        <a href='https://twitter.com/EkeminiBen3'>
                            <i className='fa fa-twitter'></i>
                        </a>
                        
                        </div>

                    </div>
                    <div>
                        <a href='mailto:ekemiben.4@gmail.com'>
                            <i className=' fa-email'>ekemiben.4@gmail.com</i>
                        </a>
                    </div><br></br>


            <p>All Rights Reserved  &copy;2022</p>
           
           
          
       </div>
        </div>
    )
}

export default Footer

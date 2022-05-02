import React from 'react'
import { useState } from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import './Header.css'

const Header = () => {
    const [isMobil, setIsMobile] = useState(false)
    return (
        <React.Fragment>

        <div className='navbar'>
            
          
            
                 <div className='logo'>
                    <a href = "/">Ekemiben</a>
                </div> 
                <div  className={isMobil ? "navLinkMobile" : 'navlink'} 
                onClick={()=> setIsMobile(true)}
                >
                    {/* <a href="https://ekemiben.github.io/Ekemini-Ben/"  target='_blank'>About</a><br></br> */}
                    <a href = "#section1" className='contact'>Contact Us</a>
                    <a href = "https://ekemiben.github.io/Ekemini-Ben/"  target='_blank' className='contact'>About Us</a>
                    
                    
                </div>
                <button className='mobileMenu'
                onClick={() => setIsMobile(!isMobil)}
                >
                    {isMobil ? 
                    ( <i className= "fas fa-times"></i>
                    ):(
                        <i className= "fas fa-bars"></i>
                        )
                        }
                </button>
           
            
        </div>
        </React.Fragment>
    )
}

export default Header

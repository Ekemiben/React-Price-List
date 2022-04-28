import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='headercover'>
          
            <header className='row'>
                <div>
                    <a className='brand 'href = "/">Ekemiben</a>
                </div>
                <div className='contact'>
                    <a href="https://ekemiben.github.io/Ekemini-Ben/" className='about'>About</a><br></br>
                    <a href = "#buttom">Contact Us</a>
                </div>
            </header>
            
        </div>
    )
}

export default Header

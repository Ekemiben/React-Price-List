import React from 'react'
import SectionStyle from "./Section.module.css";
import phone from "../../../Assets/ipad-phone.png"
import Typical from 'react-typical'
import Fade from 'react-reveal/Zoom'

const Section = () => {
    return (
        <Fade cascade>
        <div className={SectionStyle.maincontainer}>
            <div className={SectionStyle.myIcon}></div>
            <div className={SectionStyle.message}>
            <p>Get Your Top-notch Website and IT Support From Our Pool of Software Engineers. </p>
            </div>
            {/* <div className={SectionStyle.messagetwo}>
            <p>Select from our bundle to save you cost and time</p>
            </div> */}



            <div className='profile-details-row'>
                        <span className={SectionStyle.messagetwo}>
                            {" "}
                            <h1>
                                {" "}
                                <Typical 
                                
                                steps={[
                                    "Our Customized Website Packages Just For You 🌐 ", 3000,
                                    "Select From Our Bundle to Save You Cost and Time 🚀 ", 3000,
                                    "Website is The Key 🤏" , 2000,
                                    "Contact Us Today For Your Business Website, E-Commerce Website, IT Support, And Other Customize Apps.  🖐️", 2500,
                                    " Your Problems Can Be Solved Programmatically 💻",
                                    2000
                                ]}
                                loop = {Infinity}
                                />
                            </h1>
                            
                        </span>
                    </div>
           
           
        </div>
        </Fade>
    )
}

export default Section

import React from "react";
import Section from "../Body/Section/Section";
import MainBackground from "./Cards.module.css";
// import Fade from 'react-reveal/Rotate'
import Fade from 'react-reveal/Spin'
import Animatecover from 'react-reveal/Zoom'
import Animatleft from 'react-reveal/Fade'


const Cards = () => {
    return (
       
        <div className={MainBackground.maincontainer}>
           
            <div className={MainBackground.maincover}>
                <Animatleft left cascade>
                <div className={MainBackground.columns}>
                    <h3 className={MainBackground.price}>
                        <p className={MainBackground.header}>Basic</p>
                        <p className={MainBackground.grey}>1 Page Informative Website</p>
                        <div className={MainBackground.sideicon}>
                        <p>5 Business Emails</p>
                        </div>
                       
                        <p>Domain and Hosting</p>
                        <p>SSL Security</p>
                        <p>1 Month Technical Support</p><br></br>
                        <p>₦70,000</p>
                        <p className={MainBackground.grey}>
                        <div className={MainBackground.button}> <a href="#" >Sign Up</a></div>
                        </p>
                    </h3>
                </div>
                </Animatleft>
                <Fade bottom cascade>
                <div className={MainBackground.columns}>
                    <h3 className={MainBackground.price}>
                        <p className={MainBackground.header} >
                            Pro
                        </p>
                        <p className={MainBackground.grey}>3 - 5 Pages Informative Website</p>
                        <p>10 Business Emails</p>
                        <p>Domain Name and Hosting</p>
                        <p>SSL Security</p>
                        <p>Free Content Management Training/2 Month Technical Support</p>
                        <br></br>
                        <p>₦140,000</p>
                        <p className={MainBackground.grey}>
                            {/* <a href="#" className={MainBackground.button}>Sign Up</a> */}
                            <div className={MainBackground.button}> <a href="#" >Sign Up</a></div>
                        </p>
                    </h3>
                </div>
                </Fade>

                <Animatleft right cascade>
                <div className={MainBackground.columns}>
                    <h3 className={MainBackground.price}>
                        <p className={MainBackground.header}>Premium</p>
                        <p className={MainBackground.grey}>10+ Pages Informative Website </p>
                        <p>Unlimited Emails</p>
                        <p>Domain Name and Hosting</p>
                        <p>SSL Security</p>
                        <p>Free Content Management Training/5 Months Technical Support</p>
                        <br></br>
                        <p><h3>From ₦430,000.00</h3></p>
                        <p className={MainBackground.grey}>
                        <div className={MainBackground.button}> <a href="#" >Sign Up</a></div>
                        </p>
                    </h3>
                </div>
                </Animatleft>
            </div>
            
          </div> 
         
    );
};

export default Cards;

import React from 'react';
import Stylling from "./FullPage.module.css";
import Bgimage from "../../Assets/image4.png";

import Card from "../Cards/Cards"

import Footer from "../Footer/Footer"
import Condition from '../Body/Section/Condition';

const FullPage = () => {
    return (
        <React.Fragment>
        <div className={Stylling.maincontainer}>
           
            <Card />
            <Condition />
            
            <Footer />
        </div>
        </React.Fragment>
    )
}

export default FullPage

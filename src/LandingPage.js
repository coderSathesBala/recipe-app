import React from 'react';
import background from "./landingPageImage.jpeg";
import { Link } from "react-router-dom";

const LandingPage = () => {

    return (
        <div style={{ 
            backgroundImage: `url(${background})`,
            height: `57rem`,
            color: `yellow`
            }}>
            <h1>ALL RECIPES</h1>
            <h2>A platform to assist you choose your favorite recipe!</h2>
            <h2>We're building a recipe community where people discover food, share recipes, and connect with creators.</h2>
            <h1><Link to="/display-categories">GET STARTED</Link></h1>
        </div>
    )
}

export default LandingPage;

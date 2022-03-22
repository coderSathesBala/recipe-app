import React from 'react';
import background from "./landingPageImage.jpeg";

const LandingPage = () => {

    const divStyle = {
            
      backgroundImage: `url("https://via.placeholder.com/500")`,
      };

    return (
        <div style={{ 
            backgroundImage: `url(${background})`,
            height: `57rem`,
            color: `yellow`
            }}>
            <h1>ALL RECIPES</h1>
            <h2>A platform to assist you choose your favorite recipe!</h2>
            <h2>We're building a recipe community where people discover food, share recipes, and connect with creators.</h2>
            <h1>GET STARTED</h1>
        </div>
    )
}

export default LandingPage;

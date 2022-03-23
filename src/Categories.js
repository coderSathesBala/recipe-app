import React from 'react';
import background from "./landingPageImage.jpeg";
import { Link } from "react-router-dom";
import {useEffect} from "react";

const Categories = () => {

    const fetchData = () => {
        return fetch("https://randomuser.me/api")
              .then((response) => response.json())
              .then((data) => console.log(data));}

              useEffect(() => {
                fetchData();
                }, []);
    return (
        <div>
            <h1>categories</h1>
        </div>
    )
}

export default Categories;

import React from "react";

import { Link } from "react-router-dom";

function Home(){
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "fit-content"}}>
            <img src="https://bjs.scene7.com/is/image/bjs/166466?$bjs-Zoom$" alt="vending machine" style={{width: "200px"}}/> 
            <Link to="/soda">Get soda</Link>
            <Link to="/chips">Get chips</Link>
            <Link to="/sardines">Get sardines</Link>
        </div>
    );
}

export default Home;
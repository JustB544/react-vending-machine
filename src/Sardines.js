import React from "react";

import { Link } from "react-router-dom";

function Sardines(){
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "fit-content"}}>
            <img src="https://www.thespruceeats.com/thmb/1lGGTfacibCrUU07TUfoP1AgnKw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALEAIMAGE-557a699afc8f44969da69a38acbd0a75.jpg" alt="sardines" style={{width: "100px"}}/>
            <Link to="/">Go back</Link>
        </div>
    );
}

export default Sardines;
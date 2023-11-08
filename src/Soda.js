import React from "react";

import { Link } from "react-router-dom";

function Soda(){
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "fit-content"}}>
            <img src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/208206/208206_p/208206" alt="soda" style={{width: "100px"}}/>
            <Link to="/">Go back</Link>
        </div>
    );
}

export default Soda;
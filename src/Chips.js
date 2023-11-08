import React from "react";

import { Link } from "react-router-dom";

function Chips(){
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "fit-content"}}>
            <img src="https://images.heb.com/is/image/HEBGrocery/001865742-1" alt="Chips" style={{width: "100px"}}/>
            <Link to="/">Go back</Link>
        </div>
    );
}

export default Chips;
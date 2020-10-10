import React from "react";

import Homepage from "./Homepage";
import Prerequisites from "./Prerequisites";
import EmergingTech from "./EmergingTech";

function Body(){
    return(
        <div className="container">
            <Homepage />
            {/* <Prerequisites />
            <EmergingTech /> */}
        </div>         
    )
}

export default Body;
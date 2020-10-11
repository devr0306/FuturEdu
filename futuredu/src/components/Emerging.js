import React from "react";

import Dropdown from "./Dropdown";

function Emerging(){
    return(
        <div className="container">
            <Dropdown
                topic="Machine Learning"
                id="ml"
                prerequisites="some prerequisites"
                description="Some description"
            />
            <Dropdown
                topic="Deep Learning"
                id="dl"
                prerequisites="some prerequisites"
                description="Some description"
            />
        </div>
    )
}

export default Emerging;
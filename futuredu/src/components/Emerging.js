import React from "react";

import Dropdown from "./Dropdown";

function Emerging(){
    return(
        <div>
            <Dropdown
                topic="Machine Learning"
                prerequisites="some prerequisites"
                description="Some description"
            />
            <Dropdown
                topic="Deep Learning"
                prerequisites="some prerequisites"
                description="Some description"
            />
        </div>
    )
}

export default Emerging;
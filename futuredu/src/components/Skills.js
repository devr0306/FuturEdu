import React from "react";

import Dropdown from "./Dropdown";


function Skills() {
    return (
        <div className="container">
            <Dropdown 
                topic="Stock Market"
                id="stocks"
                prerequisites = "some prerequisites"
                description = "some description"
            />
        </div>
    )
}

export default Skills;

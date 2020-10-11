import React from "react";

import Dropdown from "./Dropdown";

function Prerequisites() {
    return (
        <div className="container">
            <Dropdown 
                topic="Chemistry"
                id="chem"
                prerequisites = "some prerequisites"
                description = "some description"
            />
            <Dropdown 
                topic="Mathematics"
                id="math"
                prerequisites = "some prerequisites"
                description = "some description"
            />
            <Dropdown 
                topic="Physics"
                id="phy"
                prerequisites = "some prerequisites"
                description = "some description"
            />
            <Dropdown 
                topic="Computer Science"
                id="compsci"
                prerequisites = "some prerequisites"
                description = "some description"
            />
            <Dropdown 
                topic="Statistics"
                id="stat"
                prerequisites = "some prerequisites"
                description = "some description"
            />
        </div>
    )
}

export default Prerequisites;
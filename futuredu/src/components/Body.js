import React from "react";

import Card from "./Card";

function Body(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-3">
                    <Card 
                        topic="Physics"
                        id="phy"
                        description="Some Physics stuff"
                        prerequisites="Some prerequisites"
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <Card 
                        topic="Chemistry"
                        id="chem"
                        description="Some Chem stuff"
                        prerequisites="Some prerequisites"
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <Card 
                        topic="Maths"
                        id="maths"
                        description="Some Maths stuff"
                        prerequisites="Some prerequisites"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 mb-3">
                <Card 
                    topic="Biology"
                    id="bio"
                    description="Some Bio stuff"
                    prerequisites="Some prerequisites"
                    />
                </div>
                <div className="col-md-4 mb-3">
                <Card 
                    topic="Statistics"
                    id="stat"
                    description="Some Stat stuff"
                    prerequisites="Some prerequisites"
                    />
                </div>
                <div className="col-md-4 mb-3">
                <Card 
                    topic="Computer Science"
                    id="compSci"
                    description="Some CompSci stuff"
                    prerequisites="Some prerequisites"
                    />
                </div>
            </div>  
            <div className="row">
            <div className="col-md-4 mb-3">
                <Card 
                    topic="Stock Market"
                    id="stockMarket"
                    description="Some Stock Market stuff"
                    prerequisites="Some prerequisites"
                    />
                </div>
            </div>          
        </div>
    )
}

export default Body;
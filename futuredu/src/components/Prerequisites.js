import React from "react";

import Card from "./Card";

import PhyImg from "../assets/physics.jpg";
import ChemImg from "../assets/chemistry.jpg";
import MathImg from "../assets/math.jpg";
import BioImg from "../assets/biology.jpg";
import StatImg from "../assets/stat.jpg";
import CsImg from "../assets/cs.jpg"

function Prerequisites(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-3">
                    <Card 
                        topic="Physics"
                        id="phy"
                        image={PhyImg}
                        description="Some Physics stuff"
                        prerequisites="Some prerequisites"
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <Card 
                        topic="Chemistry"
                        id="chem"
                        image={ChemImg}
                        description="Some Chem stuff"
                        prerequisites="Some prerequisites"
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <Card 
                        topic="Maths"
                        id="maths"
                        image={MathImg}
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
                    image={BioImg}
                    description="Some Bio stuff"
                    prerequisites="Some prerequisites"
                    />
                </div>
                <div className="col-md-4 mb-3">
                <Card 
                    topic="Statistics"
                    id="stat"
                    image={StatImg}
                    description="Some Stat stuff"
                    prerequisites="Some prerequisites"
                    />
                </div>
                <div className="col-md-4 mb-3">
                <Card 
                    topic="Computer Science"
                    id="compSci"
                    image={CsImg}
                    description="Some CompSci stuff"
                    prerequisites="Some prerequisites"
                    />
                </div>
            </div> 
        </div>
    )
}

export default Prerequisites;
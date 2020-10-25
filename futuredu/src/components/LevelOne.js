import React from "react";

import Card from "./LevelOneCards";

import AIImage from "../assets/ai_one.jpg";
import MathImage from "../assets/math.jpg";
import RandomImage from "../assets/stat.jpg";

function LevelOne(){
    return(
        <div className="container">
            <div className="row pt-4">
                <div className="col">
                    <Card 
                        id="ai"
                        name="Artificial Intelligence"
                        image={AIImage}
                        description="Learn a lot about Artificial Intelligence, Deep Learning, Neural Networks and much more!!"
                        prerequisites="Statistics, Linear Algebra and Multivariate Calculus"
                    />
                </div>
                <div className="col">
                    <Card 
                        id="quantumcomp"
                        name="Quantum Computing"
                        image={MathImage}
                        description="Quantum Computing blah blah blah ... !!!!"
                    />
                </div>
                <div className="col">
                    <Card 
                        id="id"
                        name="Something Cool"
                        image={RandomImage}
                        description="Someting Random that looks cool ... !!!!"
                    />
                </div>
            </div>
        </div>
    )
}

export default LevelOne;
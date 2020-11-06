import React from "react";
import { useParams,Redirect } from "react-router-dom";

import Card from "./LevelTwoCards";

import LevelTwoData from "../datasets/LevelTwoData";


function LevelTwo() {

    let { lvltwo } = useParams();

    const CardComponents = LevelTwoData.filter(topic => topic.category === lvltwo).map(filterdTopic => {
        return(
            <div className="row mt-4 mb-3">
                <div className="col">
                    <Card 
                        id={filterdTopic.id}
                        name={filterdTopic.name}
                        description={filterdTopic.description}
                        prerequisites={filterdTopic.prerequisites}
                    />
                </div>
            </div>
        )
    })

    console.log(CardComponents)

    return (
        <div className="container">
            {Object.entries(CardComponents).length === 0 
                    ? <Redirect to="/error" />
                    : CardComponents
            }
        </div>
    )
}

export default LevelTwo;
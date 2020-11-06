import React from "react";
import { Redirect, useParams } from "react-router-dom";

import Card from "./LevelOneCards";

import CardData from "../datasets/LevelOneData"

const LevelOne = () => {

    let { lvlone } = useParams();

    const CardComponents = CardData.filter(topic => topic.category === lvlone).map(filteredTopic => {
        return(<Card 
            id={filteredTopic.id}
            name={filteredTopic.name}
            category={filteredTopic.category}
            description={filteredTopic.description}
            prerequisites={filteredTopic.prerequisites}
        />)
    })
    
    return(
        <div className="container">
            <div className="row pt-5">
                {Object.entries(CardComponents).length === 0 
                    ? <Redirect to="/error" />
                    : CardComponents
            }
            </div>
        </div>
    )
}

export default LevelOne;